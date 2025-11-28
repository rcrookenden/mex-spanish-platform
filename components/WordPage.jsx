import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import confetti from "canvas-confetti";
import toast from "react-hot-toast";
import ForumSection from "../components/ForumSection";
import words from "../data/words";
import tagColors from "../lib/tagColors";

export default function WordPage({ wordData }) {
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

  // NEW → extract EVERYTHING after 👉 including HTML, THEN clean it
  const arrow = meaningText.match(/👉\s*(.*?)(<br|$)/i);

  if (arrow) {
    let extracted = arrow[1]
      .replace(/<[^>]+>/g, "") // remove <strong>, <br>, etc
      .trim();

    return [extracted]; // ALWAYS one flashcard
  }

  // fallback if no 👉 emoji exists
  let meanings = meaningText
    .replace(/<[^>]+>/g, "") // clean HTML
    .split("\n")
    .filter((m) => m.trim())
    .map((m) => m.trim());

  return meanings.length ? meanings : [meaningText.trim()];
};


  const checkFlashcardExists = async () => {
    if (!session?.user?.id || !wordData?.slug) return;

    setCheckingExistence(true);
    try {
      const { data } = await supabase
        .from("flashcards")
        .select("id")
        .eq("user_id", session.user.id)
        .eq("slug", wordData.slug)
        .eq("type", "word");

      setSaved(data && data.length > 0);
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

    if (!isCorrect) return;

    confetti({ particleCount: 100, spread: 70 });

    if (session?.user?.id) {
      try {
        await supabase.rpc("add_xp_activity", {
          p_user_id: session.user.id,
          p_activity_type: "quiz_correct",
          p_xp_earned: 2,
          p_metadata: {
            word: wordData.slug,
            question: questionNumber,
          },
        });

        const today = new Date().toISOString().slice(0, 10);
        let stored = JSON.parse(localStorage.getItem("reviewTracker")) || {
          date: today,
          count: 0,
          xp: 0,
          user_id: session.user.id,
        };

        if (stored.date === today && stored.user_id === session.user.id) {
          stored.xp += 2;
          localStorage.setItem("reviewTracker", JSON.stringify(stored));
        }

        toast.success("+2 XP! Quiz answer correct! 🎯");
      } catch (error) {
        console.error("Error awarding XP:", error);
      }
    }
  };

  const handleSaveFlashcard = async () => {
    if (!session?.user?.id) {
      toast.error("Please log in to save flashcards.");
      return;
    }

    if (saved) {
      toast("Already saved to your deck! ✅", {
        icon: "ℹ️",
        duration: 3000,
      });
      return;
    }

    setSaving(true);

    try {
      await supabase
        .from("flashcards")
        .delete()
        .eq("user_id", session.user.id)
        .eq("slug", wordData.slug)
        .eq("type", "word");

      const meanings = parseMeanings(wordData.meaning);
      const examples = wordData.examples || [];
      const audioUrls = wordData.audioUrls || [];

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

      const { error } = await supabase
        .from("flashcards")
        .insert(flashcards)
        .select();

      if (error) {
        console.error("Error saving flashcards:", error);
        toast.error("❌ Could not save flashcards.");
      } else {
        const gainedXP = 5;

        try {
          await supabase.rpc("add_xp_activity", {
            p_user_id: session.user.id,
            p_activity_type: "word_saved",
            p_xp_earned: gainedXP,
            p_metadata: {
              word: wordData.slug,
              flashcards_created: flashcards.length,
            },
          });
        } catch (e) {
          console.error("Error updating XP:", e);
        }

        const today = new Date().toISOString().slice(0, 10);
        let stored = JSON.parse(localStorage.getItem("reviewTracker")) || {
          date: today,
          count: 0,
          xp: 0,
          user_id: session.user.id,
        };

        if (stored.user_id !== session.user.id) {
          stored = {
            date: today,
            count: 0,
            xp: 0,
            user_id: session.user.id,
          };
        }

        if (stored.date !== today) {
          stored.date = today;
          stored.count = 0;
          stored.xp = 0;
          stored.user_id = session.user.id;
        }

        const previousXP = stored.xp;
        stored.xp += gainedXP;
        localStorage.setItem("reviewTracker", JSON.stringify(stored));

        const previousMilestone = Math.floor(previousXP / 50);
        const currentMilestone = Math.floor(stored.xp / 50);

        if (currentMilestone > previousMilestone) {
          confetti({
            particleCount: 200,
            spread: 120,
            origin: { y: 0.3 },
            emojis: ["🌮", "🌮", "🌮"],
          });

          toast.success(`🎉 ${currentMilestone * 50} XP milestone!`);
        } else {
          confetti({ particleCount: 100, spread: 70 });
        }

        setShowXPAnimation(true);
        setTimeout(() => setShowXPAnimation(false), 2000);

        toast.success(
          `✅ ${flashcards.length} flashcard${
            flashcards.length > 1 ? "s" : ""
          } saved! +5 XP`
        );
        setSaved(true);
        window.dispatchEvent(new CustomEvent("challengesUpdated"));
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      toast.error("❌ Something went wrong.");
    } finally {
      setSaving(false);
    }
  };

  // Reset on change
  useEffect(() => {
    if (session?.user?.id && wordData?.slug) {
      checkFlashcardExists();
    } else {
      setSaved(false);
    }
  }, [session?.user?.id, wordData?.slug]);

  useEffect(() => {
    setSaved(false);
    setAnswer1("");
    setAnswer2("");
    setLocked1(false);
    setLocked2(false);
    setShowPronunciation(false);
    setShowContext(false);
    setShowQuiz(false);
  }, [wordData.slug]);

  useEffect(() => {
    const timer = setTimeout(() => setShakeLucky(true), 15000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-gray-800 p-4 sm:p-8 relative font-baloo">
      <Head>
        <title>{wordData.title} | Learn Real Mexican Spanish 🌵</title>
        <meta
          name="description"
          content={`Meaning, tone, examples, audio, and chunks for "${wordData.title}".`}
        />
      </Head>

      {showXPAnimation && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 text-4xl font-extrabold text-green-600 animate-bounce z-50">
          +5 XP
        </div>
      )}

      {/* Outer card */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-6 sm:p-10">
        
        {/* HEADER: Title + Tags + Red Line */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center sm:justify-start items-end gap-2 w-full">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-green-700">
              {wordData.title}
            </h1>
            <span className="text-[1.8rem] text-gray-500 font-medium">
              ({wordData.partOfSpeech})
            </span>

            <button
  className="cursor-pointer text-4xl ml-3 hover:scale-125 transition"
              onClick={() =>
                wordData.audioUrls?.[0] &&
                new Audio(wordData.audioUrls[0]).play()
              }
            >
              🔊
            </button>
          </div>

          <div className="border-b-4 border-red-600 mt-2 mb-5 w-full" />

<div className="flex gap-3 flex-wrap pl-1">
  {wordData.tags?.map((tag, i) => (
    <span
      key={i}
      className={`${tagColors[tag] || "bg-gray-300 text-black"} px-3 py-1 rounded-full text-md font-semibold`}
    >
      {tag}
    </span>
  ))}
</div>
        </div>

        {/* GRID: Left + Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6">
            
{/* Meanings / Uses */}
<section className="bg-gray-100 p-6 rounded-xl">
  <h2 className="text-3xl font-bold text-green-700 mb-3">
    Meanings / Uses:
  </h2>

  <div
    className="text-lg leading-relaxed"
    dangerouslySetInnerHTML={{
      __html: (wordData.meaning || "").replace(/\n/g, "<br>")
    }}
  />
</section>


            {/* Examples */}
<section className="bg-gray-100 p-6 rounded-xl">
  <h2 className="text-3xl font-bold text-green-700 mb-4">Examples:</h2>

  <ul className="space-y-4 text-lg font-semibold list-none pl-0">
    {wordData.examples.map((ex, i) => (
      <li key={i} className="pl-0">
        <div className="whitespace-pre-wrap">
          <span>{ex.spanish}</span>
          <span className="block text-gray-600 italic font-normal whitespace-pre-wrap">
            {ex.english}
          </span>
        </div>
      </li>
    ))}
  </ul>
</section>



            {/* Similar Words */}
<section className="bg-gray-100 p-6 rounded-xl">
  <h2 className="text-3xl font-bold text-green-700 mb-3">🔁 Similar words:</h2>

  {wordData.similarWords && wordData.similarWords.length > 0 ? (
    <div className="flex flex-wrap gap-2">
      {wordData.similarWords.map((w, i) => (
        <span
          key={i}
          className="bg-white px-4 py-2 rounded-full text-sm border border-gray-300 hover:border-green-500 cursor-pointer transition-colors"
        >
          {w}
        </span>
      ))}
    </div>
  ) : (
    <p className="text-lg">Similar words coming soon!</p>
  )}
</section>


            {/* SAVE + LUCKY */}
            <div className="flex flex-col gap-4 mt-4 text-center lg:text-left">
              <button
                onClick={handleSaveFlashcard}
                disabled={saving || checkingExistence}
                className={`cursor-pointer font-bold px-8 py-4 rounded-full text-2xl shadow-md transition ${
                  saved
                    ? "bg-green-600 hover:bg-green-700 text-white"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                } ${saving || checkingExistence ? "opacity-50" : ""}`}
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
                className={`cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded-full text-lg shadow-md transition ${
                  shakeLucky ? "animate-shake" : ""
                }`}
              >
                🎲 Are you feeling lucky?
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6">
            
            {/* TONE SECTION (NEW) */}
            <section className="bg-gray-100 p-6 rounded-xl">
              <h2 className="text-3xl font-bold text-green-700 mb-3">⚠️ Tone</h2>
              <p
                className="text-lg whitespace-pre-line"
                dangerouslySetInnerHTML={{
                  __html: (wordData.tone || "").replace(/\n/g, "<br>"),
                }}
              />
            </section>

            {/* USEFUL CHUNKS (BELOW TONE) */}
<section className="bg-gray-100 p-6 rounded-xl">
  <h2 className="text-3xl font-bold text-green-700 mb-4">Useful Chunks:</h2>

  <ul className="space-y-2 text-lg list-none p-0">
    {wordData.usefulChunks.map((c, i) => (
      <li key={i}>
        <span className="font-semibold">{c.chunk}</span>
        <span className="text-gray-600 italic"> — {c.translation}</span>
      </li>
    ))}
  </ul>
</section>

            {/* PRONUNCIATION */}
            <div>
<button
  onClick={() => setShowPronunciation(!showPronunciation)}
  className="cursor-pointer w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-4 rounded-full font-bold text-xl"
>

                Pronunciation {showPronunciation ? "−" : "+"}
              </button>

              {showPronunciation && (
                <div className="mt-2 bg-gray-100 p-5 rounded-xl flex flex-col items-center gap-6">
                  {["Mexico City", "Yucatán", "Monterrey"].map((region, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <button className="text-5xl hover:animate-pulse cursor-pointer">
                        🔊
                      </button>
                      <span className="text-lg font-semibold">{region}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* IN THE WILD */}
            <div>
              <button
                onClick={() => setShowContext(!showContext)}
                className="cursor-pointer w-full bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-full font-bold text-xl"
              >
                In the Wild {showContext ? "−" : "+"}
              </button>

              {showContext && (
                <div className="mt-2 bg-gray-100 p-5 rounded-xl">

              {(!wordData.conversation || wordData.conversation.length === 0) && (
              <p className="text-lg font-bold text-gray-700 text-center py-4">
              👀 We’re still hunting for this one in the wild.
        </p>
      )}
                  {wordData.conversation.map((line, i) => (
                    <div key={i} className="mb-4">
                      <div
  className="text-lg"
  dangerouslySetInnerHTML={{
    __html: `— ${line.spanish.replace(/\n/g,"<br>")}`,
  }}
/>
<div
  className="italic text-gray-600"
  dangerouslySetInnerHTML={{
    __html: `— ${line.english.replace(/\n/g,"<br>")}`,
  }}
/>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* QUIZ */}
            <div>
              <button
                onClick={() => setShowQuiz(!showQuiz)}
                className="cursor-pointer w-full bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-4 rounded-full font-bold text-xl"
              >
                Quiz {showQuiz ? "−" : "+"}
              </button>

              {showQuiz && (
                <div className="mt-2 bg-gray-100 p-5 rounded-xl space-y-8">

                  {/* Q1 */}
                  <div>
                    <p
  className="text-lg"
  dangerouslySetInnerHTML={{ __html: wordData.quiz.q1.question }}
/>
                    <div className="mt-2 flex flex-col gap-3">
                      <button
                        onClick={() => handleQuizAnswer(1, true)}
                        disabled={locked1}
                        className={`cursor-pointer rounded-lg px-4 py-3 text-lg font-semibold transition-colors ${
                          locked1 && answer1 === "correct"
                            ? "bg-green-400"
                            : locked1
                              ? "bg-gray-300"
                              : "bg-white hover:bg-blue-100"
                        }`}
                      >
                        {wordData.quiz.q1.correct}
                      </button>

                      <button
                        onClick={() => handleQuizAnswer(1, false)}
                        disabled={locked1}
                        className={`cursor-pointer rounded-lg px-4 py-3 text-lg font-semibold transition-colors ${
                          locked1 && answer1 === "wrong"
                            ? "bg-red-400"
                            : locked1
                              ? "bg-gray-300"
                              : "bg-white hover:bg-blue-100"
                        }`}
                      >
                        {wordData.quiz.q1.wrong}
                      </button>
                    </div>
                  </div>

                  {/* Q2 */}
                  <div>
                    <p
  className="text-lg"
  dangerouslySetInnerHTML={{ __html: wordData.quiz.q2.question }}
/>
                    <div className="mt-2 flex flex-col gap-3">
                      <button
                        onClick={() => handleQuizAnswer(2, false)}
                        disabled={locked2}
                        className={`cursor-pointer rounded-lg px-4 py-3 text-lg font-semibold transition-colors ${
                          locked2 && answer2 === "wrong"
                            ? "bg-red-400"
                            : locked2
                              ? "bg-gray-300"
                              : "bg-white hover:bg-blue-100"
                        }`}
                      >
                        {wordData.quiz.q2.wrong}
                      </button>

                      <button
                        onClick={() => handleQuizAnswer(2, true)}
                        disabled={locked2}
                        className={`cursor-pointer rounded-lg px-4 py-3 text-lg font-semibold transition-colors ${
                          locked2 && answer2 === "correct"
                            ? "bg-green-400"
                            : locked2
                              ? "bg-gray-300"
                              : "bg-white hover:bg-blue-100"
                        }`}
                      >
                        {wordData.quiz.q2.correct}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* FORUM SECTION */}
        <div className="mt-10">
          <ForumSection wordSlug={wordData.slug.toLowerCase()} />
        </div>
      </div>
    </div>
  );
}
