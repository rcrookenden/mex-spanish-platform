import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import confetti from "canvas-confetti";
import toast from "react-hot-toast";
import chunks from "../data/chunks";
import ForumSection from "../components/ForumSection";
import tagColors from "../lib/tagColors";

export default function ChunkPage({ chunkData }) {
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [checkingExistence, setCheckingExistence] = useState(false);
  const [showXPAnimation, setShowXPAnimation] = useState(false);
  const [shakeLucky, setShakeLucky] = useState(false);
  const [showPronunciation, setShowPronunciation] = useState(false);
  const [showExamples, setShowExamples] = useState(false);
  const [showMakeSentence, setShowMakeSentence] = useState(false);
  const [availableWords, setAvailableWords] = useState([]);
  const [selectedWords, setSelectedWords] = useState([]);
  const [draggedWord, setDraggedWord] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dropIndex, setDropIndex] = useState(null);

    // 🌟🌟🌟 INSERT THIS POPUP FUNCTION HERE 🌟🌟🌟
  const showChallengePopup = (title, xp) => {
    const el = document.createElement("div");
    el.className = `
      fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-white border-4 border-green-600 rounded-2xl shadow-2xl
      px-8 py-6 text-center z-[9999]
      animate-scale-up
    `;
    el.innerHTML = `
      <div class="text-5xl mb-4">🎉</div>
      <div class="text-2xl font-bold text-green-700 mb-2">Challenge Completed!</div>
      <div class="text-xl font-semibold">${title}</div>
      <div class="text-lg text-green-600 mt-2">+${xp} XP</div>
    `;
    document.body.appendChild(el);

    setTimeout(() => {
      el.style.opacity = "0";
      el.style.transform = "translate(-50%, -50%) scale(0.6)";
    }, 1400);

    setTimeout(() => el.remove(), 2000);
  };
  // 🌟🌟🌟 END POPUP FUNCTION 🌟🌟🌟

  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();

  // Simulate loading state
  useEffect(() => {
    if (chunkData) {
      setLoading(false);
    }
  }, [chunkData]);

  const checkFlashcardExists = async () => {
    if (!session?.user?.id || !chunkData?.slug) return;

    setCheckingExistence(true);
    try {
      const { data, error } = await supabase
        .from("flashcards")
        .select("id")
        .eq("user_id", session.user.id)
        .eq("slug", chunkData.slug)
        .eq("type", "chunk");

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
    const allSlugs = chunks.map((chunk) => `/chunk/${chunk.slug}`);
    const random = allSlugs[Math.floor(Math.random() * allSlugs.length)];
    confetti({ particleCount: 100, spread: 70 });
    router.push(random);
  };

  const initializeSentenceGame = () => {
    // Use the first example sentence if available
    if (chunkData.examples && chunkData.examples.length > 0) {
      const sentence = chunkData.examples[0].spanish;
      const words = sentence.split(' ').map((word, index) => ({
        id: `word-${index}`,
        text: word,
        originalIndex: index
      }));
      
      // Shuffle the words
      const shuffled = [...words].sort(() => Math.random() - 0.5);
      setAvailableWords(shuffled);
      setSelectedWords([]);
      setIsCorrect(null);
    }
  };

  const handleDragStart = (e, word) => {
    setDraggedWord(word);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

const handleDropToSelected = (e, targetIndex = null) => {
  e.preventDefault();
  if (!draggedWord) return;

  const isAvailable = availableWords.some(w => w.id === draggedWord.id);
  const isSelected = selectedWords.some(w => w.id === draggedWord.id);

  // INSERT into specific position
  if (targetIndex !== null) {
    const updated = [...selectedWords];

    if (isSelected) {
      const currentIndex = selectedWords.findIndex(w => w.id === draggedWord.id);
      updated.splice(currentIndex, 1);
    } else if (isAvailable) {
      setAvailableWords(prev => prev.filter(w => w.id !== draggedWord.id));
    }

    updated.splice(targetIndex, 0, draggedWord);
    setSelectedWords(updated);
    setDraggedWord(null);
    return;
  }

  // DEFAULT: append at end
  if (isAvailable) {
    setSelectedWords([...selectedWords, draggedWord]);
    setAvailableWords(availableWords.filter(w => w.id !== draggedWord.id));
  }

  setDraggedWord(null);
};


  const handleReorderInSelected = (e, targetIndex) => {
  e.preventDefault();

  if (!draggedWord) return;

  const currentIndex = selectedWords.findIndex(
    (w) => w.id === draggedWord.id
  );

  // Only reorder if word is already inside selectedWords
  if (currentIndex !== -1) {
    const updated = [...selectedWords];

    // Remove from old position
    updated.splice(currentIndex, 1);

    // Insert at new position
    updated.splice(targetIndex, 0, draggedWord);

    setSelectedWords(updated);
  }

  setDraggedWord(null);
};

  const handleDropToAvailable = (e) => {
    e.preventDefault();
    if (draggedWord && selectedWords.some(w => w.id === draggedWord.id)) {
      setAvailableWords([...availableWords, draggedWord]);
      setSelectedWords(selectedWords.filter(w => w.id !== draggedWord.id));
    }
    setDraggedWord(null);
  };

  const checkSentence = () => {
    const isCorrectOrder = selectedWords.every((word, index) => {
      return word.originalIndex === index;
    });
    
    const totalWords = selectedWords.length + availableWords.length;

if (isCorrectOrder && selectedWords.length === totalWords) {

      setIsCorrect(true);
      confetti({ particleCount: 100, spread: 70 });
      toast.success("¡Perfecto! 🎉");
    } else {
      setIsCorrect(false);
      toast.error("Try again!");
    }
  };

  const resetGame = () => {
    initializeSentenceGame();
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
      // First, delete any existing flashcards for this chunk
      await supabase
        .from("flashcards")
        .delete()
        .eq("user_id", session.user.id)
        .eq("slug", chunkData.slug)
        .eq("type", "chunk");

      const examples = chunkData.examples || [];
      const audioUrls = chunkData.audioUrls || [];

      console.log(`Creating flashcard for chunk: ${chunkData.slug}`);

      // Create new flashcard
      const flashcard = {
        user_id: session.user.id,
        slug: chunkData.slug,
        type: "chunk",
        front_text: chunkData.meaning,
        back_text: chunkData.title,
        example: examples[0]?.spanish || null,
        example_english: examples[0]?.english || null,
        image_url: null,
        audio_url: audioUrls[0] || null,
        ease: 2.5,
        interval: 1,
        repetitions: 0,
        next_review: new Date().toISOString(),
      };

      // Log what we're about to insert
      console.log("Attempting to insert flashcard:", JSON.stringify(flashcard, null, 2));

      // Insert the new flashcard
      const { data, error } = await supabase
        .from("flashcards")
        .insert([flashcard])
        .select();

      if (error) {
        console.error("Error saving flashcard:", error);
        console.error("Error details:", {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code
        });
        toast.error("❌ Could not save flashcard. Please try again.");
      } else {

// 1️⃣ Check status BEFORE updating progress
let wasCompleted = false;
try {
  const { data: beforeRows, error: beforeError } = await supabase
    .from("user_challenges")
    .select(`
      id,
      is_completed,
      challenges!inner (
        challenge_type
      )
    `)
    .eq("user_id", session.user.id)
    .eq("challenges.challenge_type", "save_chunks");

  if (beforeError) {
    console.error("❌ Error checking challenge BEFORE update:", beforeError);
  } else if (beforeRows && beforeRows.length > 0) {
    wasCompleted = beforeRows.some((row) => row.is_completed);
  }
} catch (err) {
  console.error("❌ Exception in BEFORE challenge check:", err);
}

// 2️⃣ UPDATE SAVE-CHUNKS CHALLENGE
const { data: progressData, error: progressError } = await supabase.rpc(
  "update_challenge_progress",
  {
    p_user_id: session.user.id,
    p_challenge_type: "save_chunks",
    p_progress_data: { chunks_saved: 1 }
  }
);

if (progressError) {
  console.error("❌ RPC save_chunks error:", JSON.stringify(progressError, null, 2));
} else {
  window.dispatchEvent(new CustomEvent("challengesUpdated"));
}

// 3️⃣ Check status AFTER updating progress — only fire popup if it changed from false → true
try {
  const { data: afterRows, error: afterError } = await supabase
    .from("user_challenges")
    .select(`
      is_completed,
      completed_at,
      challenges!inner (
        title,
        xp_reward,
        challenge_type
      )
    `)
    .eq("user_id", session.user.id)
    .eq("challenges.challenge_type", "save_chunks");

  console.log(
    "🧪 AFTER update, challenge rows:",
    JSON.stringify(afterRows, null, 2),
    afterError
  );

  if (!afterError && afterRows && afterRows.length > 0) {
    const completedRow = afterRows.find((row) => row.is_completed);

    // 👉 Only show popup if:
    // - it was NOT completed before
    // - and now there's a completed row
    if (!wasCompleted && completedRow && completedRow.challenges) {
      showChallengePopup(
        completedRow.challenges.title,
        completedRow.challenges.xp_reward
      );
    }
  }
} catch (err) {
  console.error("❌ Challenge popup AFTER check error:", err);
}





        // NEW: Update league XP
        const gainedXP = 5;
        
        try {
          await supabase.rpc('add_xp_activity', {
            p_user_id: session.user.id,
            p_activity_type: 'chunk_saved',
            p_xp_earned: gainedXP,
            p_metadata: { 
              chunk: chunkData.slug,
              type: 'chunk'
            }
          });
        } catch (error) {
          console.error("Error updating league XP:", error);
        }

        // Route XP through daily progress bar system
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
        
        toast.success("✅ Flashcard saved! 🎉 +5 XP");
        setSaved(true);
        window.dispatchEvent(new CustomEvent("challengesUpdated"));
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      toast.error("❌ Something went wrong. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  // Check if flashcard exists when component mounts or user/chunk changes
  useEffect(() => {
    if (session?.user?.id && chunkData?.slug) {
      checkFlashcardExists();
    } else {
      setSaved(false);
    }
  }, [session?.user?.id, chunkData?.slug]);

  // Reset state when chunk changes
  useEffect(() => {
    setSaved(false);
    setShowPronunciation(false);
    setShowExamples(false);
    setShowMakeSentence(false);
  }, [chunkData.slug]);

  useEffect(() => {
    const timer = setTimeout(() => setShakeLucky(true), 15000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showMakeSentence && chunkData.examples && chunkData.examples.length > 0) {
      initializeSentenceGame();
    }
  }, [showMakeSentence, chunkData.examples]);

    useEffect(() => {
    if (showMakeSentence && chunkData.examples && chunkData.examples.length > 0) {
      initializeSentenceGame();
    }
  }, [showMakeSentence, chunkData.examples]);


  // -------------------------
  // STEP 1 — SPLIT TAGS HERE
  // -------------------------
  const generationLabels = ["Boomers 👶", "Gen X 🎸", "Millennial 😎", "Gen Z 👾"];

  const generationTags = chunkData.tags.filter(t =>
    generationLabels.includes(t.label)
  );

  const otherTags = chunkData.tags.filter(t =>
    !generationLabels.includes(t.label)
  );
  // -------------------------

  // Loading skeleton
  if (loading) {
    return (
      <div className="min-h-screen bg-[#f7f7f7] text-gray-800 p-4 sm:p-8 font-baloo">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-6 sm:p-10">
          {/* Header skeleton */}
          <div className="mb-8">
            <div className="h-16 bg-gray-200 rounded-lg animate-pulse mb-4 w-3/4"></div>
            <div className="border-b-4 border-gray-200 mt-1 mb-5"></div>
            <div className="flex gap-3">
              <div className="h-8 w-32 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="h-8 w-40 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="h-8 w-36 bg-gray-200 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Content skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="bg-gray-100 p-6 rounded-xl">
                <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-3"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
                </div>
              </div>
              <div className="bg-gray-100 p-6 rounded-xl">
                <div className="h-8 w-56 bg-gray-200 rounded animate-pulse mb-3"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-100 p-6 rounded-xl">
                <div className="h-8 w-32 bg-gray-200 rounded animate-pulse mb-3"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="bg-gray-100 p-6 rounded-xl">
                <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-3"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-gray-800 p-4 sm:p-8 font-baloo">
      <Head>
        <title>{chunkData.title} (chunk) 🔊 | Learn Real Mexican Spanish 💀</title>
        <meta
          name="description"
          content={`Master the chunk "${chunkData.title}" in Mexican Spanish — meaning, usage, and examples.`}
        />
      </Head>

      {showXPAnimation && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 text-4xl font-extrabold text-green-600 animate-bounce z-50">
          +5 XP
        </div>
      )}

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-6 sm:p-10">
        
        {/* FULL WIDTH HEADER */}
        <div className="mb-8">
          <div className="pb-2">
            <div className="flex flex-wrap justify-center sm:justify-start items-end gap-2 w-full">
              <h1 className="text-4xl sm:text-6xl font-extrabold text-green-700 text-center sm:text-left w-full sm:w-auto">
                {chunkData.title}
              </h1>
              <div className="flex items-center gap-2 justify-center sm:justify-start w-full sm:w-auto">
                <span className="text-[1.8rem] text-gray-500 font-medium">
  ({chunkData.category || "chunk"})
</span>
                <button
                  onClick={() => chunkData.audioUrls?.[0] && new Audio(chunkData.audioUrls[0]).play()}
                  className="text-4xl ml-3 hover:scale-125 transition-transform cursor-pointer hover:animate-pulse"
                >
                  🔊
                </button>
              </div>
            </div>
          </div>

          <div className="border-b-4 border-red-600 mt-1 mb-5"></div>
{/* FIRST LINE — all NON-generation tags */}
<div className="flex gap-4 flex-wrap pl-1 mb-3">
  {otherTags.map((tag, index) => {
    const colorClass = tagColors[tag.label] || "bg-gray-300 text-black";
    return (
      <span
        key={index}
        className={`${colorClass} px-3 py-1 rounded-full text-md font-semibold`}
      >
        {tag.label}
      </span>
    );
  })}
</div>

{/* SECOND LINE — GENERATION TAGS ONLY */}
{generationTags.length > 0 && (
  <div className="flex gap-4 flex-wrap pl-1 mt-5">
    {generationTags.map((tag, index) => {
      const colorClass = tagColors[tag.label] || "bg-gray-300 text-black";
      return (
        <span
          key={`gen-${index}`}
          className={`${colorClass} px-3 py-1 rounded-full text-md font-semibold`}
        >
          {tag.label}
        </span>
      );
    })}
  </div>
)}

        </div>

        {/* TWO COLUMN CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* LEFT COLUMN - order-1 on mobile */}
          <div className="flex flex-col gap-6 order-1">
            
{/* What it means */}
<section className="bg-gray-100 p-6 rounded-xl">
  <h2 className="text-3xl font-bold text-green-700 mb-3">🧠 What it means</h2>
  <p
    className="text-lg whitespace-pre-line"
    dangerouslySetInnerHTML={{ __html: chunkData.meaning }}
  />
</section>


            {/* When to whip it out */}
            <section className="bg-gray-100 p-6 rounded-xl">
              <h2 className="text-3xl font-bold text-green-700 mb-3">🌪️ When to whip it out</h2>
<div className="space-y-6 text-lg">
{chunkData.explanation
  .split("</p>")
  .filter(block => block.trim() !== "")
  .map((block, index) => {
    const html = block + "</p>";

    // ✔ LOGIC GOES HERE — OUTSIDE JSX
const strongCount = (html.match(/<strong>/g) || []).length;
const emCount = (html.match(/<em>/g) || []).length;

// Detect dialogue lines (start with em dash)
const containsDialogue = html.includes("—");

// Only treat as an audio example if it's NOT a conversation
const isExample = !containsDialogue && strongCount === 1 && emCount === 1;


    return (
      <div key={index} className="mb-4">
        {isExample ? (
          <>
            <div className="flex items-center gap-2">
              <span
                dangerouslySetInnerHTML={{
                  __html: html.match(/<strong>[\s\S]*?<\/strong>/)?.[0] || "",
                }}
              />
              <button
                onClick={() => {
                  if (chunkData.audioUrls?.[index]) {
                    new Audio(chunkData.audioUrls[index]).play();
                  }
                }}
                className="text-xl hover:scale-110 transition-transform cursor-pointer relative top-[2px]"
              >
                🔊
              </button>
            </div>

            <div
              className="text-gray-600 italic mt-1"
              dangerouslySetInnerHTML={{
                __html: html.match(/<em>[\s\S]*?<\/em>/)?.[0] || "",
              }}
            />
          </>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: html }} />
        )}
      </div>
    );
  })}

</div>

            </section>

            {/* Buttons - order-3 on mobile */}
            <div className="flex flex-col gap-4 mt-4 text-center lg:text-left order-3 md:order-none">
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

          {/* RIGHT COLUMN - order-2 on mobile */}
          <div className="flex flex-col gap-6 order-2">
            
            {/* Tone */}
<section className="bg-gray-100 p-6 rounded-xl">
  <h2 className="text-3xl font-bold text-green-700 mb-3">⚠️ Tone</h2>
  <p
    className="text-lg whitespace-pre-line"
    dangerouslySetInnerHTML={{
      __html: (chunkData.tone || "").replace(/\n/g, "<br>")
    }}
  />
</section>


            {/* Similar chunks - with improved formatting */}
            <section className="bg-gray-100 p-6 rounded-xl">
              <h2 className="text-3xl font-bold text-green-700 mb-4">🔁 Similar chunks</h2>
              {chunkData.similarChunks ? (
                <div className="flex flex-wrap gap-2">
                  {chunkData.similarChunks.split('\n').map((chunk, index) => {
                    const cleanChunk = chunk.replace('• ', '').trim();
                    return cleanChunk ? (
<span
  key={index}
  className="bg-white px-4 py-2 rounded-full text-sm border border-gray-300 hover:border-green-500 cursor-pointer transition-colors"
  dangerouslySetInnerHTML={{ __html: cleanChunk }}
/>

                    ) : null;
                  })}
                </div>
              ) : (
                <p className="text-lg">Similar chunks coming soon!</p>
              )}
            </section>

            {/* Pronunciation */}
            <div>
              <button
                onClick={() => setShowPronunciation(!showPronunciation)}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-4 rounded-full font-bold text-xl cursor-pointer"
              >
                Pronunciation {showPronunciation ? "−" : "+"}
              </button>
              {showPronunciation && (
                <div className="mt-2 p-5 bg-gray-100 rounded-xl flex flex-col gap-6 items-center">
                  {["Mexico City", "Yucatán", "Monterrey"].map((region, i) => (
                    <div key={i} className="flex flex-col items-center gap-2">
                      <button className="text-5xl cursor-pointer hover:animate-pulse">🔊</button>
                      <span className="text-lg font-semibold text-gray-700">{region}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Extra Examples */}
          <button
  onClick={() => setShowExamples(!showExamples)}
  className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-full font-bold text-xl cursor-pointer transition-colors"
>
  Extra Examples {showExamples ? "−" : "+"}
</button>
{showExamples && (
  <div className="mt-2 p-6 bg-gray-100 rounded-xl">
    <ul className="space-y-4 text-lg font-semibold list-none pl-0">
      {chunkData.examples.map((ex, i) => (
        <li key={i} className="pl-0">
          <div className="ml-2 whitespace-pre-wrap">
            <span>{ex.spanish}</span>
            <span className="block text-gray-600 italic font-normal whitespace-pre-wrap">
              {ex.english}
            </span>
          </div>
        </li>
      ))}
    </ul>
  </div>
)}


            {/* Make a Sentence */}
            <div>
              <button
                onClick={() => {
                  setShowMakeSentence(!showMakeSentence);
                  if (!showMakeSentence) {
                    initializeSentenceGame();
                  }
                }}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-4 rounded-full font-bold text-xl transition-colors cursor-pointer"
              >
                Make a Sentence {showMakeSentence ? "−" : "+"}
              </button>
              {showMakeSentence && chunkData.examples && chunkData.examples.length > 0 && (
                <div className="mt-2 p-5 bg-gray-100 rounded-xl">
                  <p className="text-center mb-4 text-gray-700">Drag the words to form the correct sentence:</p>
                  
                  {/* Available words */}
                  <div className="mb-4 p-4 bg-white rounded-lg min-h-[60px] border-2 border-dashed border-gray-300"
                       onDragOver={handleDragOver}
                       onDrop={handleDropToAvailable}>
                    <div className="flex flex-wrap gap-2">
                      {availableWords.map((word) => (
                        <div
                          key={word.id}
                          draggable
                          onDragStart={(e) => handleDragStart(e, word)}
                          className="px-3 py-2 bg-blue-500 text-white rounded-lg cursor-move hover:bg-blue-600 transition-colors"
                        >
                          {word.text}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Drop zone for sentence */}
                  <div className={`p-4 rounded-lg min-h-[60px] border-2 ${
                    isCorrect === true ? 'bg-green-100 border-green-500' : 
                    isCorrect === false ? 'bg-red-100 border-red-500' : 
                    'bg-gray-50 border-gray-400'
                  }`}
                       onDragOver={handleDragOver}
                       onDrop={handleDropToSelected}>
                    <div className="flex flex-wrap gap-2">
{selectedWords.map((word, index) => (
  <div key={word.id} className="flex items-center">

    {/* Drop zone BEFORE this word */}
    <div
      onDragOver={handleDragOver}
      onDrop={(e) => handleDropToSelected(e, index)}
      className="w-4 h-10"
    />

    {/* The actual draggable word */}
    <div
      draggable
      onDragStart={(e) => handleDragStart(e, word)}
      className="px-3 py-2 bg-green-600 text-white rounded-lg cursor-move hover:bg-green-700 transition-colors"
    >
      {word.text}
    </div>
  </div>
))}

{/* If no words yet */}
{selectedWords.length === 0 && (
  <p className="text-gray-400 italic">Drop words here...</p>
)}

{/* Drop zone AFTER the last word */}
<div
  onDragOver={handleDragOver}
  onDrop={(e) => handleDropToSelected(e, selectedWords.length)}
  className="w-4 h-10"
/>

                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={checkSentence}
                      className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full font-semibold transition-colors"
                      style={{ cursor: 'pointer' }}
                    >
                      Check Answer
                    </button>
                    <button
                      onClick={resetGame}
                      className="flex-1 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-full font-semibold transition-colors"
                      style={{ cursor: 'pointer' }}
                    >
                      Reset
                    </button>
                  </div>

                  {/* Show correct sentence after success */}
                  {isCorrect === true && (
                    <div className="mt-4 p-3 bg-green-100 rounded-lg text-center">
                      <p className="text-green-800 font-semibold">
                        ✅ {chunkData.examples[0].spanish}
                      </p>
                      <p className="text-green-700 text-sm mt-1 italic">
                        {chunkData.examples[0].english}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* FULL-WIDTH FORUM */}
        <div className="mt-10">
          <ForumSection wordSlug={chunkData.slug.toLowerCase()} />
        </div>
      </div>
    </div>
  );
}