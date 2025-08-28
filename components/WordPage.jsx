import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import confetti from "canvas-confetti";
import toast from "react-hot-toast";
import ForumSection from "../components/ForumSection";
import words from "../data/words";

export default function WordPage({ wordData }) {
  const [showNote, setShowNote] = useState(false);
  const [showPronunciation, setShowPronunciation] = useState(false);
  const [showContext, setShowContext] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [shakeLucky, setShakeLucky] = useState(false);
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [locked1, setLocked1] = useState(false);
  const [locked2, setLocked2] = useState(false);

  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [checkingExistence, setCheckingExistence] = useState(false);
  const [showXPAnimation, setShowXPAnimation] = useState(false);

  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();

  const parseMeanings = (meaningText) => {
    if (!meaningText) return [];
    
    // First try to split by numbered format (1. meaning 2. meaning)
    let meanings = meaningText
      .split(/\d+\.\s+/)
      .filter(m => m.trim().length > 0)
      .map(m => m.trim());
    
    // If that didn't work well, try newlines
    if (meanings.length <= 1) {
      meanings = meaningText
        .split('\n')
        .filter(m => m.trim().length > 0)
        .map(m => m.trim());
    }
    
    // If still no good split, just use the whole text
    if (meanings.length === 0) {
      meanings = [meaningText.trim()];
    }
    
    return meanings;
  };

  const checkFlashcardExists = async () => {
    if (!session?.user?.id || !wordData?.slug) return;

    setCheckingExistence(true);
    try {
      const { data, error } = await supabase
        .from("flashcards")
        .select("id")
        .eq("user_id", session.user.id)
        .eq("slug", wordData.slug)
        .eq("type", "word");

      if (!error && data && data.length > 0) {
        setSaved(true);
      } else {
        setSaved(false);
      }
    } catch (err) {
      console.error("Error checking flashcard:", err);
      setSaved(false);
    } finally {
      setCheckingExistence(false);
    }
  };

  const handleLuckyClick = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)].slug;
    confetti({ particleCount: 100, spread: 70 });
    router.push(`/word/${randomWord}`);
  };

  const handleQuizAnswer = async (questionNumber, isCorrect) => {
    if (questionNumber === 1) {
      setAnswer1(isCorrect ? "correct" : "wrong");
      setLocked1(true);
    } else {
      setAnswer2(isCorrect ? "correct" : "wrong");
      setLocked2(true);
    }

    if (isCorrect) {
      confetti({ particleCount: 100, spread: 70 });
      
      // Award XP for correct quiz answer
      if (session?.user?.id) {
        try {
          await supabase.rpc('add_xp_activity', {
            p_user_id: session.user.id,
            p_activity_type: 'quiz_correct',
            p_xp_earned: 2,
            p_metadata: { 
              word: wordData.slug,
              question: questionNumber
            }
          });

          // Update daily tracker
          const today = new Date().toISOString().slice(0, 10);
          let stored = JSON.parse(localStorage.getItem("reviewTracker")) || { 
            date: today, count: 0, xp: 0, user_id: session.user.id 
          };
          
          if (stored.date === today && stored.user_id === session.user.id) {
            stored.xp += 2;
            localStorage.setItem("reviewTracker", JSON.stringify(stored));
          }

          toast.success("+2 XP! Quiz answer correct! 🎯", {
            duration: 2000,
            style: {
              fontSize: '1rem',
              fontWeight: 'bold'
            }
          });
        } catch (error) {
          console.error("Error awarding quiz XP:", error);
        }
      }
    }
  };

  const handleSaveFlashcard = async () => {
    if (!session?.user?.id) {
      toast.error("Please log in to save flashcards.");
      return;
    }
    
    // If already saved, show a message instead of saving again
    if (saved) {
      toast("Already saved to your deck! ✅", { 
        icon: "ℹ️",
        duration: 3000 
      });
      return;
    }
    
    setSaving(true);

    try {
      // First, delete ALL existing flashcards for this word
      await supabase
        .from("flashcards")
        .delete()
        .eq("user_id", session.user.id)
        .eq("slug", wordData.slug)
        .eq("type", "word");

      // Parse meanings
      const meanings = parseMeanings(wordData.meaning);
      const examples = wordData.examples || [];
      const audioUrls = wordData.audioUrls || [];

      console.log(`Creating ${meanings.length} flashcards for word: ${wordData.slug}`);

      // Create new flashcards
      const flashcards = meanings.map((meaning, index) => ({
        user_id: session.user.id,
        slug: wordData.slug,
        type: "word",
        front_text: meaning,
        back_text: wordData.title,
        example: examples[index]?.spanish || null,
        example_english: examples[index]?.english || null,
        image_url: wordData.cartoonImage || null,
        audio_url: audioUrls[index] || audioUrls[0] || null,
        ease: 2.5,
        interval: 1,
        repetitions: 0,
        next_review: new Date().toISOString(),
      }));

      // Log what we're about to insert
      console.log("Attempting to insert flashcards:", JSON.stringify(flashcards, null, 2));

      // Insert the new flashcards
      const { data, error } = await supabase
        .from("flashcards")
        .insert(flashcards)
        .select();

      if (error) {
        console.error("Error saving flashcards:", error);
        console.error("Error details:", {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code
        });
        toast.error("❌ Could not save flashcards. Please try again.");
      } else {
        // NEW: Update league XP
        const gainedXP = 5;
        
        try {
          await supabase.rpc('add_xp_activity', {
            p_user_id: session.user.id,
            p_activity_type: 'word_saved',
            p_xp_earned: gainedXP,
            p_metadata: { 
              word: wordData.slug,
              flashcards_created: flashcards.length
            }
          });
        } catch (error) {
          console.error("Error updating league XP:", error);
        }

        // Update daily progress bar system
        const today = new Date().toISOString().slice(0, 10);
        let stored = JSON.parse(localStorage.getItem("reviewTracker")) || { 
          date: today, 
          count: 0, 
          xp: 0, 
          user_id: session.user.id 
        };

        // If a new user logs in, reset tracker
        if (stored.user_id !== session.user.id) {
          stored = { date: today, count: 0, xp: 0, user_id: session.user.id };
        }

        // If new day, reset counts
        if (stored.date !== today) {
          stored.date = today;
          stored.count = 0;
          stored.xp = 0;
          stored.user_id = session.user.id;
        }

        const previousXP = stored.xp;
        stored.xp += gainedXP;
        localStorage.setItem("reviewTracker", JSON.stringify(stored));

        // Check for milestone celebration (same logic as DeckPage)
        const previousMilestone = Math.floor(previousXP / 50);
        const currentMilestone = Math.floor(stored.xp / 50);
        
        if (currentMilestone > previousMilestone) {
          confetti({
            particleCount: 200,
            spread: 120,
            origin: { y: 0.3 },
            emojis: ["🌮", "🌮", "🌮"]
          });
          
          // Show different messages for different milestones
          const milestoneMessages = [
            "¡Órale! 50 XP! 🎉",
            "¡Qué chido! 100 XP! 🔥", 
            "¡No manches! 150 XP! 🚀",
            "¡Eres una máquina! 200 XP! 💪",
            "¡Eres el mero mero! 250 XP! 👑"
          ];
          
          const message = milestoneMessages[currentMilestone - 1] || `¡Increíble! ${currentMilestone * 50} XP! 🌟`;
          
          // Show toast notification
          toast.success(message, {
            duration: 4000,
            style: {
              fontSize: '1.2rem',
              fontWeight: 'bold'
            }
          });
          
          // Update XP in Supabase profile (only at milestones)
          const updateProfileXP = async () => {
            const { data: profile } = await supabase
              .from("profiles")
              .select("xp")
              .eq("id", session.user.id)
              .single();
              
            const currentProfileXP = profile?.xp || 0;
            const xpToAdd = 50; // Add 50 XP for each milestone
            
            await supabase
              .from("profiles")
              .update({ xp: currentProfileXP + xpToAdd })
              .eq("id", session.user.id);
          };
          
          updateProfileXP();
        } else {
          // Regular confetti for non-milestone saves
          confetti({ 
            particleCount: 100, 
            spread: 70,
            origin: { y: 0.6 }
          });
        }

        // Success!
        setShowXPAnimation(true);
        setTimeout(() => setShowXPAnimation(false), 2000);
        
        toast.success(`✅ ${flashcards.length} flashcard${flashcards.length > 1 ? 's' : ''} saved! 🎉 +5 XP`);
        setSaved(true);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      toast.error("❌ Something went wrong. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  // Check if flashcards exist when component mounts or user/word changes
  useEffect(() => {
    if (session?.user?.id && wordData?.slug) {
      checkFlashcardExists();
    } else {
      setSaved(false);
    }
  }, [session?.user?.id, wordData?.slug]);

  // Reset state when word changes
  useEffect(() => {
    setSaved(false);
    setAnswer1("");
    setAnswer2("");
    setLocked1(false);
    setLocked2(false);
    setShowNote(false);
    setShowPronunciation(false);
    setShowContext(false);
    setShowQuiz(false);
  }, [wordData.slug]);

  useEffect(() => {
    const timer = setTimeout(() => setShakeLucky(true), 15000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-gray-800 p-4 sm:p-8 relative">
      <Head>
        <title>{wordData.title} | Master Mexican Spanish 💀🌵</title>
        <meta
          name="description"
          content={`Learn "${wordData.title}" like a real Mexican! Meaning, pronunciation, examples, and more.`}
        />
      </Head>

      {showXPAnimation && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 text-4xl font-extrabold text-green-600 animate-bounce z-50">
          +5 XP
        </div>
      )}

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6">
          <div className="text-center lg:text-left">
            <div className="flex flex-wrap items-end gap-2 justify-center lg:justify-start mb-6 border-b-4 border-red-600 pb-4">
              <h1 className="text-5xl sm:text-6xl font-extrabold text-green-700">
                {wordData.title}
              </h1>
              <span className="text-3xl text-gray-500 font-medium">
                ({wordData.partOfSpeech})
              </span>
              <button className="ml-4 text-4xl hover:animate-pulse cursor-pointer">🔊</button>
            </div>
            <div className="flex justify-center lg:justify-start gap-3 flex-wrap mt-4">
              {wordData.tags.map((t, i) => (
                <span key={i} className={`tag ${t.color} px-3 py-1 rounded-full font-semibold`}>
                  {t.label}
                </span>
              ))}
            </div>
          </div>

          <section className="bg-gray-100 p-6 rounded-xl">
            <h2 className="text-3xl font-bold text-green-700 mb-3">Meanings / Uses:</h2>
            <p className="text-xl font-semibold whitespace-pre-line">
              {wordData.meaning}
            </p>
          </section>

          <section className="bg-gray-100 p-6 rounded-xl">
            <h2 className="text-3xl font-bold text-green-700 mb-4">Examples:</h2>
            <ul className="space-y-6 text-lg font-semibold">
              {wordData.examples.map((ex, i) => (
                <li key={i} className="relative pl-6">
                  <span className="absolute left-0">−</span>
                  <div>
                    <span className="block ml-2">{ex.spanish}</span>
                    <span className="block ml-2 mt-1 italic text-gray-600">
                      {ex.english}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-gray-100 p-6 rounded-xl">
            <h2 className="text-3xl font-bold text-green-700 mb-3">Similar words:</h2>
            <p className="text-lg font-semibold">{wordData.similarWords.join(" // ")}</p>
          </section>

          <section className="bg-gray-100 p-6 rounded-xl">
            <h2 className="text-3xl font-bold text-green-700 mb-4">Useful Chunks:</h2>
            <ul className="list-disc pl-6 space-y-3 text-lg font-semibold">
              {wordData.usefulChunks.map((c, i) => (
                <li key={i}>
                  {c.chunk} = {c.translation}
                </li>
              ))}
            </ul>
          </section>

          <div className="flex flex-col gap-4 mt-4 text-center lg:text-left">
            <button
              onClick={handleSaveFlashcard}
              disabled={saving || checkingExistence}
              className={`font-bold px-8 py-4 rounded-full text-2xl shadow-md cursor-pointer transition-all duration-300 ${
                saved 
                  ? "bg-green-600 hover:bg-green-700 text-white" 
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              } ${(checkingExistence || saving) ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {checkingExistence
                ? "Checking..."
                : saved
                ? "✅ Saved to Deck"
                : saving
                ? "Saving..."
                : "⭐ Save to Flashcards"}
            </button>

            <button
              onClick={handleLuckyClick}
              className={`bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded-full text-lg shadow-md cursor-pointer transition-colors ${
                shakeLucky ? "animate-shake" : ""
              }`}
            >
              🎲 Are you feeling lucky?
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-6">
          {/* Note */}
          <div>
            <button
              onClick={() => setShowNote(!showNote)}
              className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-full font-bold text-xl cursor-pointer transition-colors"
            >
              Rupert's Note {showNote ? "−" : "+"}
            </button>
            {showNote && (
              <div className="mt-2 bg-gray-100 p-5 rounded-xl whitespace-pre-line text-lg font-semibold">
                {wordData.notes}
              </div>
            )}
          </div>

          {/* Pronunciation */}
          <div>
            <button
              onClick={() => setShowPronunciation(!showPronunciation)}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-4 rounded-full font-bold text-xl cursor-pointer transition-colors"
            >
              Pronunciation {showPronunciation ? "−" : "+"}
            </button>
            {showPronunciation && (
              <div className="mt-2 bg-gray-100 p-5 rounded-xl flex flex-col gap-6 items-center">
                {["Mexico City", "Yucatán", "Monterrey"].map((region, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <button className="text-5xl hover:animate-pulse cursor-pointer">🔊</button>
                    <span className="text-lg font-semibold">{region}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* In the Wild */}
          <div>
            <button
              onClick={() => setShowContext(!showContext)}
              className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-full font-bold text-xl cursor-pointer transition-colors"
            >
              In the Wild {showContext ? "−" : "+"}
            </button>
            {showContext && (
              <div className="mt-2 bg-gray-100 p-5 rounded-xl">
                {wordData.conversation.map((line, i) => (
                  <div key={i} className="mb-2">
                    <span>— {line.spanish}</span>
                    <p className="italic text-gray-600">— {line.english}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick Class Video */}
          <div className="relative overflow-hidden bg-white border-4 border-blue-700 p-4 sm:p-6 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-extrabold text-blue-800 mb-4 border-b-4 border-yellow-400 pb-2 text-center">🎥 Quick Class</h2>
            <div className="relative pt-[56.25%] rounded-xl ring-4 ring-yellow-400 overflow-hidden">
              {wordData.video ? (
                <iframe
                  src={wordData.video}
                  title={`Video example for ${wordData.title}`}
                  className="absolute inset-0 w-full h-full rounded-xl"
                  allowFullScreen
                />
              ) : (
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-xl text-gray-700 p-6">
                  Sorry, there's no video for this word (yet!) 😓
                </div>
              )}
            </div>
          </div>

          {/* Quiz */}
          <div>
            <button
              onClick={() => setShowQuiz(!showQuiz)}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-4 rounded-full font-bold text-xl transition-colors"
            >
              Quiz {showQuiz ? "−" : "+"}
            </button>
            {showQuiz && (
              <div className="mt-2 bg-gray-100 p-5 rounded-xl space-y-8">
                <div>
                  <p className="text-lg font-bold">{wordData.quiz.q1.question}</p>
                  <div className="mt-2 flex flex-col gap-3">
                    <button
                      onClick={() => handleQuizAnswer(1, true)}
                      disabled={locked1}
                      className={`rounded-lg px-4 py-3 text-lg font-semibold transition-colors ${
                        locked1 && answer1 === "correct" ? "bg-green-400" : locked1 ? "bg-gray-300" : "bg-white hover:bg-blue-100"
                      }`}
                    >
                      {wordData.quiz.q1.correct}
                    </button>
                    <button
                      onClick={() => handleQuizAnswer(1, false)}
                      disabled={locked1}
                      className={`rounded-lg px-4 py-3 text-lg font-semibold transition-colors ${
                        locked1 && answer1 === "wrong" ? "bg-red-400" : locked1 ? "bg-gray-300" : "bg-white hover:bg-blue-100"
                      }`}
                    >
                      {wordData.quiz.q1.wrong}
                    </button>
                  </div>
                </div>

                <div>
                  <p className="text-lg font-bold">{wordData.quiz.q2.question}</p>
                  <div className="mt-2 flex flex-col gap-3">
                    <button
                      onClick={() => handleQuizAnswer(2, false)}
                      disabled={locked2}
                      className={`rounded-lg px-4 py-3 text-lg font-semibold transition-colors ${
                        locked2 && answer2 === "wrong" ? "bg-red-400" : locked2 ? "bg-gray-300" : "bg-white hover:bg-blue-100"
                      }`}
                    >
                      {wordData.quiz.q2.wrong}
                    </button>
                    <button
                      onClick={() => handleQuizAnswer(2, true)}
                      disabled={locked2}
                      className={`rounded-lg px-4 py-3 text-lg font-semibold transition-colors ${
                        locked2 && answer2 === "correct" ? "bg-green-400" : locked2 ? "bg-gray-300" : "bg-white hover:bg-blue-100"
                      }`}
                    >
                      {wordData.quiz.q2.correct}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Cartoon Image */}
          <div className="mt-10 flex justify-center">
            <img src={wordData.cartoonImage} alt="Cartoon" className="w-80 sm:w-96 h-auto" />
          </div>
        </div>

        {/* Forum Section */}
        <div className="md:col-span-2">
          <ForumSection wordSlug={wordData.slug.toLowerCase()} />
        </div>
      </div>
    </div>
  );
}