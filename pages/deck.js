import { useEffect, useState, useRef } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Head from "next/head";
import confetti from "canvas-confetti";
import words from "../data/words";

export default function DeckPage() {
  const session = useSession();
  const supabase = useSupabaseClient();

  const [dueCards, setDueCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [xp, setXp] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);

  const audioRef = useRef(null);
  const clickSound = useRef(null);

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    const stored = JSON.parse(localStorage.getItem("reviewTracker")) || {};

    if (stored.date !== today) {
      stored.date = today;
      stored.count = 0;
      stored.xp = 0;
      localStorage.setItem("reviewTracker", JSON.stringify(stored));
    }

    setReviewCount(stored.count || 0);
    setXp(stored.xp || 0);

    if (!session) return;

    const fetchDueCards = async () => {
      const { data, error } = await supabase
        .from("flashcards")
        .select("*")
        .eq("user_id", session.user.id)
        .lte("next_review", today)
        .order("next_review", { ascending: true });

      if (error) {
        console.error("Error loading flashcards:", error.message);
      } else {
        setDueCards(data);
      }
      setLoading(false);
    };

    fetchDueCards();
  }, [session, supabase]);

  const handlePlayAudio = (url) => {
    if (!url) return;
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    audioRef.current = new Audio(url);
    audioRef.current.play();
  };

  const handleReview = async (quality) => {
    if (processing) return;

    const today = new Date().toISOString().slice(0, 10);
    const stored = JSON.parse(localStorage.getItem("reviewTracker")) || { date: today, count: 0, xp: 0 };

    if (stored.date !== today) {
      stored.date = today;
      stored.count = 0;
      stored.xp = 0;
    }

    if (stored.count >= 100) {
      alert("🚫 You’ve hit your 100-card review limit for today. Come back mañana 🌞");
      return;
    }

    setProcessing(true);

    if (clickSound.current) {
      clickSound.current.currentTime = 0;
      clickSound.current.play();
    }

    let { ease, interval, repetitions } = dueCards[currentIndex];

    ease = Math.max(1.3, ease - 0.1 + 0.1 * quality);
    repetitions = quality < 1 ? 0 : repetitions + 1;
    interval = repetitions <= 1 ? 1 : repetitions === 2 ? 6 : Math.round(interval * ease);

    const nextReview = new Date(Date.now() + interval * 86400000).toISOString().slice(0, 10);

    const { error } = await supabase
      .from("flashcards")
      .update({ ease, interval, repetitions, next_review: nextReview })
      .eq("id", dueCards[currentIndex].id);

    if (error) {
      alert("Error updating flashcard.");
    }

    const gainedXP = quality === 3 ? 5 : quality === 2 ? 3 : 1;
    stored.count += 1;
    stored.xp += gainedXP;
    localStorage.setItem("reviewTracker", JSON.stringify(stored));
    setReviewCount(stored.count);
    setXp(stored.xp);

    if (stored.xp >= 50 && stored.xp - gainedXP < 50) {
      confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.3 },
        emojis: ['🌮', '🌮', '🌮']
      });
    }

    if (currentIndex + 1 < dueCards.length) {
      setCurrentIndex(currentIndex + 1);
      setFlipped(false);
    } else {
      confetti();
      setDueCards([]);
    }

    setProcessing(false);
  };

  if (!session || loading)
    return (
      <div className="min-h-screen flex justify-center items-center text-2xl" style={{ fontFamily: "Comic Sans MS, cursive, sans-serif" }}>
        {loading ? "Loading..." : "Log in to review your flashcards."}
      </div>
    );

  if (dueCards.length === 0)
    return (
      <div className="min-h-screen flex justify-center items-center text-3xl" style={{ fontFamily: "Comic Sans MS, cursive, sans-serif" }}>
🎉 You&apos;re done for today!
      </div>
    );

  const card = dueCards[currentIndex];

  return (
    <div
      className="min-h-screen bg-[#f7f7f7] px-8 pt-10 pb-20 text-gray-800 text-xl bg-[url('/talavera.svg')] bg-cover bg-center"
      style={{ fontFamily: "Comic Sans MS, cursive, sans-serif" }}
    >
      <Head>
        <title>Flashcard Review | Mex Spanish Dict 💀</title>
        <link href="https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap" rel="stylesheet" />
      </Head>

      <audio ref={clickSound} src="/sounds/click.mp3" preload="auto" />

      <header className="text-center my-6">
        <div className="relative inline-block px-10 py-6 bg-white border-4 border-[#ce1126] border-b-green-600 border-r-green-600 rounded-3xl shadow-xl">
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-yellow-400 rounded-full shadow-md" />
          <h1 className="text-6xl xl:text-8xl text-green-700" style={{ fontFamily: "'Tilt Warp', sans-serif" }}>🌵 Flashcard Review</h1>
        </div>
      </header>

      <div className="w-full max-w-md mx-auto mt-6 mb-10">
        <div className="relative h-6 bg-white border-4 border-[#ce1126] rounded-full overflow-hidden shadow-md">
          <div
            className="h-full bg-gradient-to-r from-yellow-400 via-green-500 to-green-700 transition-all duration-300"
            style={{ width: `${Math.min(100, (xp / 50) * 100)}%` }}
          ></div>
          <div className="absolute inset-0 flex justify-center items-center text-sm font-bold text-gray-800">
            XP: {xp} / 50
          </div>
        </div>
      </div>

      <div className="card-container max-w-3xl mx-auto mb-6">
        <div className="relative w-full h-96">
          <div
            className={`card-inner cursor-pointer rounded-3xl shadow-2xl border-4 border-[#ce1126] bg-white hover:scale-105 hover:shadow-[0_0_30px_rgba(206,17,38,0.8)] ${flipped ? "flipped" : ""}`}
            onClick={() => setFlipped(!flipped)}
          >
            <div className="card-face text-3xl font-bold flex items-center justify-center">
              {card.front_text}
            </div>
            <div className="card-face card-back text-4xl font-bold text-green-700 flex flex-col justify-center items-center px-6 text-center">
              <div className="flex items-center gap-4 mb-6">
                <span>{card.back_text}</span>
                {card.audio_url && (
                  <button onClick={(e) => { e.stopPropagation(); handlePlayAudio(card.audio_url); }} className="text-5xl hover:scale-125 transition-transform cursor-pointer">
                    🔊
                  </button>
                )}
              </div>
              {card.example && (
                <div className="text-2xl font-semibold text-center px-4">
                  <div>{card.example}</div>
                  {card.example_english && (
                    <div className="text-xl text-gray-600 italic font-normal mt-2">{card.example_english}</div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-6 flex-wrap">
        {[
          { label: "¡Fácil!", value: 3, color: "bg-green-600" },
          { label: "Ahí va...", value: 2, color: "bg-yellow-400" },
          { label: "¡Híjole!", value: 0, color: "bg-red-600" }
        ].map(({ label, value, color }) => (
          <button
            key={label}
            onClick={() => handleReview(value)}
            disabled={processing}
            className={`w-28 sm:w-40 text-center text-sm sm:text-xl px-2 sm:px-6 py-2 sm:py-5 rounded-2xl font-extrabold ${color} hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-pointer text-white`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
