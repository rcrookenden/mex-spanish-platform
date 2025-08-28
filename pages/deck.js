import { useEffect, useState, useRef } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Head from "next/head";
import confetti from "canvas-confetti";
import toast from "react-hot-toast";
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
  const [weeklyXP, setWeeklyXP] = useState(0);
  const [leagueInfo, setLeagueInfo] = useState(null);

  const audioRef = useRef(null);
  const clickSound = useRef(null);

  // Fetch league info
  useEffect(() => {
    if (!session?.user?.id) return;

    const fetchLeagueInfo = async () => {
      try {
        // Get user's league info
        const { data: profile } = await supabase
          .from("profiles")
          .select("current_league_id, weekly_xp")
          .eq("id", session.user.id)
          .single();

        if (profile?.current_league_id) {
          // Get league details
          const { data: league } = await supabase
            .from("weekly_leagues")
            .select("league_name, league_tier")
            .eq("id", profile.current_league_id)
            .single();

          // Get user's position
          const { data: participants } = await supabase
            .from("league_participants")
            .select("user_id, weekly_xp")
            .eq("league_id", profile.current_league_id)
            .order("weekly_xp", { ascending: false });

          const position = participants?.findIndex(p => p.user_id === session.user.id) + 1;

          setLeagueInfo({
            name: league?.league_name,
            tier: league?.league_tier,
            position: position || 0,
            totalParticipants: participants?.length || 0
          });

          setWeeklyXP(profile.weekly_xp || 0);
        }
      } catch (error) {
        console.error("Error fetching league info:", error);
      }
    };

    fetchLeagueInfo();
  }, [session, supabase]);

  useEffect(() => {
    if (!session) return;

    const today = new Date().toISOString().slice(0, 10);
    let stored = JSON.parse(localStorage.getItem("reviewTracker")) || {};

    // If a new user logs in, reset tracker
    if (stored.user_id !== session.user.id) {
      stored = { date: today, count: 0, xp: 0, user_id: session.user.id };
      localStorage.setItem("reviewTracker", JSON.stringify(stored));
    }

    // If new day, reset counts
    if (stored.date !== today) {
      stored.date = today;
      stored.count = 0;
      stored.xp = 0;
      stored.user_id = session.user.id;
      localStorage.setItem("reviewTracker", JSON.stringify(stored));
    }

    setReviewCount(stored.count || 0);
    setXp(stored.xp || 0);

    const fetchDueCards = async () => {
      const { data, error } = await supabase
        .from("flashcards")
        .select("*")
        .eq("user_id", session.user.id)
        .lte("next_review", new Date().toISOString())
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
    let stored = JSON.parse(localStorage.getItem("reviewTracker")) || { date: today, count: 0, xp: 0, user_id: session.user.id };

    if (stored.date !== today) {
      stored.date = today;
      stored.count = 0;
      stored.xp = 0;
      stored.user_id = session.user.id;
    }

    if (stored.count >= 100) {
      alert("🚫 You've hit your 100-card review limit for today. Come back mañana 🌞");
      return;
    }

    setProcessing(true);

    if (clickSound.current) {
      clickSound.current.currentTime = 0;
      clickSound.current.play();
    }

    let { ease, interval, repetitions } = dueCards[currentIndex];
    
    // IMPROVED ALGORITHM
    if (quality === 0) {  // ¡Híjole! (Hard)
      ease = Math.max(1.3, ease - 0.2);  // Bigger ease penalty
      interval = 1;  // See again tomorrow
      repetitions = 0;  // Reset
    } else if (quality === 2) {  // Ahí va... (Good)
      ease = Math.max(1.3, Math.min(2.5, ease));  // Ease stays same
      repetitions += 1;
      
      // Better interval progression for Good
      if (repetitions === 1) interval = 1;      // 1 day
      else if (repetitions === 2) interval = 3;  // 3 days
      else if (repetitions === 3) interval = 7;  // 1 week
      else if (repetitions === 4) interval = 21; // 3 weeks
      else if (repetitions === 5) interval = 35; // 5 weeks
      else interval = Math.round(interval * ease);
      
    } else if (quality === 3) {  // ¡Fácil! (Easy)
      ease = Math.min(3.0, ease + 0.15);  // Bigger ease bonus
      repetitions += 1;
      
      // Better interval progression for Easy
      if (repetitions === 1) interval = 1;      // 1 day
      else if (repetitions === 2) interval = 4;  // 4 days
      else if (repetitions === 3) interval = 13; // ~2 weeks
      else if (repetitions === 4) interval = 40; // ~6 weeks
      else if (repetitions === 5) interval = 90; // ~3 months
      else interval = Math.round(interval * ease);
    }

    const nextReview = new Date(Date.now() + interval * 86400000).toISOString();

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
    stored.user_id = session.user.id;
    localStorage.setItem("reviewTracker", JSON.stringify(stored));

    setReviewCount(stored.count);
    setXp(stored.xp);

    // NEW: Update weekly XP for leagues
    try {
      await supabase.rpc('add_xp_activity', {
        p_user_id: session.user.id,
        p_activity_type: 'flashcard_review',
        p_xp_earned: gainedXP,
        p_metadata: { 
          quality: quality,
          card_id: dueCards[currentIndex].id,
          card_type: dueCards[currentIndex].type
        }
      });
      
      // Update local weekly XP display
      setWeeklyXP(prev => prev + gainedXP);
    } catch (error) {
      console.error("Error updating league XP:", error);
    }

    // Celebrate every 50 XP milestone
    const previousMilestone = Math.floor((stored.xp - gainedXP) / 50);
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
      
      // Update XP in Supabase profile AND handle streaks (only at milestones)
      const updateProfileXPAndStreak = async () => {
        const today = new Date().toISOString().slice(0, 10);
        
        const { data: profile } = await supabase
          .from("profiles")
          .select("xp, streak_count, last_activity_date")
          .eq("id", session.user.id)
          .single();
          
        const currentProfileXP = profile?.xp || 0;
        let newStreakCount = profile?.streak_count || 0;
        const lastActivity = profile?.last_activity_date;
        
        // Calculate streak
        if (lastActivity) {
          const lastDate = new Date(lastActivity);
          const todayDate = new Date(today);
          const diffTime = todayDate.getTime() - lastDate.getTime();
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          
          if (diffDays === 1) {
            // Consecutive day - increment streak
            newStreakCount += 1;
          } else if (diffDays > 1) {
            // Missed day(s) - reset streak
            newStreakCount = 1;
          }
          // diffDays === 0 means same day - keep current streak
        } else {
          // First time - start streak
          newStreakCount = 1;
        }
        
        // Calculate XP multiplier based on streak
        const streakMultiplier = newStreakCount >= 7 ? 1.5 : 1.0;
        const xpToAdd = Math.floor(50 * streakMultiplier);
        
        // Update profile with XP, streak, and last activity
        await supabase
          .from("profiles")
          .update({ 
            xp: currentProfileXP + xpToAdd,
            streak_count: newStreakCount,
            last_activity_date: today
          })
          .eq("id", session.user.id);
        
        // Show streak celebration if applicable
        if (newStreakCount >= 7 && streakMultiplier > 1) {
          setTimeout(() => {
            confetti({
              particleCount: 300,
              spread: 160,
              origin: { y: 0.2 },
              emojis: ["🔥", "⚡", "🌟"]
            });
            
            toast.success(`🔥 ${newStreakCount}-Day Streak! Bonus XP! (+${xpToAdd} instead of +50)`, {
              duration: 5000,
              style: {
                fontSize: '1.3rem',
                fontWeight: 'bold',
                background: 'linear-gradient(45deg, #ff6b35, #f7931e)',
                color: 'white'
              }
            });
          }, 1500);
        }
        
        // Show streak milestone celebrations
        if ([7, 14, 30, 50, 100].includes(newStreakCount)) {
          setTimeout(() => {
            confetti({
              particleCount: 400,
              spread: 180,
              origin: { y: 0.1 },
              emojis: ["🏆", "👑", "💎"]
            });
            
            const streakMessages = {
              7: "¡Una semana completa! 🏆",
              14: "¡Dos semanas! ¡Imparable! 🔥",
              30: "¡UN MES! ¡Eres una leyenda! 👑",
              50: "¡50 DÍAS! ¡INCREÍBLE! 💎",
              100: "¡100 DÍAS! ¡ERES EL MERO MERO! 🌟"
            };
            
            toast.success(streakMessages[newStreakCount] || `¡${newStreakCount} días seguidos! 🚀`, {
              duration: 6000,
              style: {
                fontSize: '1.4rem',
                fontWeight: 'bold',
                background: 'linear-gradient(45deg, #8b5cf6, #06b6d4)',
                color: 'white'
              }
            });
          }, 2500);
        }
      };
      
      updateProfileXPAndStreak();
    }

    if (currentIndex + 1 < dueCards.length) {
      setCurrentIndex(currentIndex + 1);
      setFlipped(false);
    } else {
      confetti();
      setDueCards([]);
      setCurrentIndex(0);
      setFlipped(false);
    }

    setProcessing(false);
  };

  if (!session || loading)
    return (
      <div className="min-h-screen flex justify-center items-center text-2xl" style={{ fontFamily: "Comic Sans MS, cursive, sans-serif" }}>
        {loading ? "Loading..." : "Log in to review your flashcards."}
      </div>
    );

  if (!dueCards.length || currentIndex >= dueCards.length)
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

      {/* NEW: League info banner */}
      {leagueInfo && (
        <div className="max-w-md mx-auto mb-4 bg-white rounded-lg shadow-md p-3 border-2 border-yellow-500">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold">{leagueInfo.name}</span>
              <span className="text-sm text-gray-600">#{leagueInfo.position}/{leagueInfo.totalParticipants}</span>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-green-600">{weeklyXP} XP</p>
              <p className="text-xs text-gray-600">This Week</p>
            </div>
          </div>
        </div>
      )}

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
            style={{ width: `${Math.min(100, (xp % 50) / 50 * 100)}%` }}
          ></div>
          <div className="absolute inset-0 flex justify-center items-center text-sm font-bold text-gray-800">
            XP: {xp % 50} / 50 {xp >= 50 && `(Total: ${xp})`}
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