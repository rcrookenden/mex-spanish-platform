import { useEffect, useState, useRef } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useSession } from "next-auth/react";   // ✅ NEW
import Head from "next/head";
import confetti from "canvas-confetti";
import toast from "react-hot-toast";
import words from "../data/words";

// 🔤 English formatting helper — lowercase first letter UNLESS sentence ends in punctuation
function formatEnglish(text) {
  if (!text) return "";
  const trimmed = text.trim();

  const endsPunct = /[.!?…]$/.test(trimmed) || /\.\.\.$/.test(trimmed); // ← NEW: handles ...
  const hasSpaces = trimmed.includes(" ");

  // RULE 1 — full sentence (including ellipsis) → capitalize
  if (hasSpaces && endsPunct) {
    return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
  }

  // RULE 2 — otherwise treat as meaning fragment
  return trimmed.charAt(0).toLowerCase() + trimmed.slice(1);
}




export default function DeckPage() {
  const { data: session } = useSession();
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
    if (!session?.user?.email) return;

    const fetchLeagueInfo = async () => {
      try {
        // Get user's league info
        const { data: profile } = await supabase
          .from("profiles")
          .select("current_league_id, weekly_xp")
          .eq("email", session.user.email)
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

          const position = participants?.findIndex(p => p.user_id === session.user.email) + 1;

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
    if (stored.user_id !== session.user.email) {
      stored = { date: today, count: 0, xp: 0, user_id: session.user.email };
      localStorage.setItem("reviewTracker", JSON.stringify(stored));
    }

    // If new day, reset counts
    if (stored.date !== today) {
      stored.date = today;
      stored.count = 0;
      stored.xp = 0;
      stored.user_id = session.user.email;
      localStorage.setItem("reviewTracker", JSON.stringify(stored));
    }

    setReviewCount(stored.count || 0);
    setXp(stored.xp || 0);

const fetchDueCards = async () => {
  // 1. Get the UUID for the logged-in user
  const { data: profile, error: pErr } = await supabase
    .from("profiles")
    .select("id")
    .eq("email", session.user.email)
    .single();

  if (pErr || !profile) {
    console.error("Error loading user UUID:", pErr);
    setLoading(false);
    return;
  }

  const userUUID = profile.id;

  // 2. Load flashcards using UUID
  const { data, error } = await supabase
    .from("flashcards")
    .select("*")
    .eq("user_id", userUUID)
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
    let stored = JSON.parse(localStorage.getItem("reviewTracker")) || { date: today, count: 0, xp: 0, user_id: session.user.email };

    if (stored.date !== today) {
      stored.date = today;
      stored.count = 0;
      stored.xp = 0;
      stored.user_id = session.user.email;
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
    stored.user_id = session.user.email;
    localStorage.setItem("reviewTracker", JSON.stringify(stored));

    setReviewCount(stored.count);
    setXp(stored.xp);

    // NEW: Update weekly XP for leagues
    try {
      await supabase.rpc('add_xp_activity', {
        p_user_id: session.user.email,
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
          .eq("email", session.user.email)
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
          .eq("id", session.user.email);
        
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
console.log("FLASHCARD OBJECT:", JSON.stringify(card, null, 2));

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
<div className="card-face text-3xl font-bold flex flex-col justify-center items-center px-6 text-center">

  {/* 1️⃣ Extract ALL 👉 meanings, strip HTML, join with / */}
  <div className="mb-6 text-4xl font-bold text-gray-800">
    {(() => {
      if (!card.front_text) return "";

          // ⭐ SPECIAL OVERRIDE — "ya-me-dio"
    // Force the correct English meaning on the FRONT
    if (card.slug === "ya-me-dio") {
      return "I’m… / I feel… (but with Mexican spice!)";
    }

// 1️⃣ FIRST — try to extract GENERAL MEANINGS, not example translations
{
  const html = card.front_text;

// NEW 👉 extractor — get the meaning from <em> instead of <strong>
const generalMeaning = html.match(/👉.*?<em>(.*?)<\/em>/g);

if (generalMeaning && generalMeaning.length > 0) {
  return generalMeaning
    .map(m => m.replace(/👉.*?<em>(.*?)<\/em>/, "$1").trim()) // Pull only italics text
    .join(" / ");
}


  if (generalMeaning && generalMeaning.length > 0) {
    return generalMeaning
      .map(m => m.replace(/👉|<[^>]*>/g, "").trim())
      .join(" / "); // → the proper flashcard front meaning
  }

  // If no general meaning exists, fallback to the example "Strong = em"
  const fallback = html.match(/<strong>.*?<\/strong>\s*=\s*<em>(.*?)<\/em>/i);
  if (fallback) return fallback[1].trim();
}


// 2️⃣ THEN strip HTML (AFTER extraction attempt)
const clean = card.front_text.replace(/<[^>]*>/g, "");


// 2. Extract meaning lines (handles 👉 or numbered 1. 2. 3.)
const meanings = clean
  .split("\n")
  .map(line => line.trim())
  .filter(line => line.startsWith("👉") || /^\d+\./.test(line)) // detect 👉 or 1. / 2.
  .map(line =>
    line
      .replace("👉", "")        // remove arrow if present
      .replace(/^\d+\.\s*/, "") // remove numbering → "1. " → ""
      .trim()
  );


      // If nothing found, fallback
      if (meanings.length === 0) return clean;

// 3. Join all meanings with " / "
const combined = meanings.join(" / ");

// RULE 1: starts with ¿ or ¡ → preserve
if (combined.trim().startsWith("¿") || combined.trim().startsWith("¡")) {
  return combined;
}

const trimmed = combined.trim();

// RULE 2: ends with ! or ? → preserve
if (trimmed.endsWith("!") || trimmed.endsWith("?")) {
  return combined;
}

// RULE 3: otherwise lowercase everything
// 3. CUSTOM RULE → Prevent lowercasing IF sentence starts with I / I'm / I'll / I'd / I've
if (/^I\b/.test(combined.trim())) {
  return combined.trim();
}

// 🔥 NEW RULE — if meaning starts with a question/exclamation word, capitalize
if (/^(what|why|how|who|where|when|which|what’s|what is|why is|how do)/i.test(combined.trim())) {
  return combined.trim().charAt(0).toUpperCase() + combined.trim().slice(1);
}

return formatEnglish(combined);


    })()}
  </div>

  {/* 2️⃣ Cloze deleted example (same style as BACK example) */}
  {card.example && (
    <div className="text-2xl font-semibold text-green-700 text-center px-4">
{(() => {

  const example = card.example;
  let chunk = (card.back_text || "").toLowerCase().trim();

// ======================================================
// ✅ UNIVERSAL CLOZE FOR QUESTION CHUNKS USING back_text
// If back_text is a question (starts with ¿ and ends with ?),
// blank that exact question wherever it appears in the example.
// Keeps any lead-in like "Tú" by only blanking from the question word onwards.
// ======================================================
if (card.type !== "word" && example && (card.back_text || "").trim().startsWith("¿")) {
  const q = (card.back_text || "").trim();

  // Escape regex special chars
  const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  // Remove outer ¿ ? for matching inside the example question
  const inner = q.replace(/^¿\s*/, "").replace(/\?\s*$/, "");

  // Special handling: if it starts with "Tú qué ..." (or any lead-in word + qué/cómo/etc),
  // keep the lead-in word(s) and blank the rest.
  // Example: "Tú qué te crees" => keep "Tú " then blank "qué te crees"
  const leadInMatch = inner.match(/^(\p{L}+\s+)(qué|cómo|cuál|quién|dónde|cuándo|por\s+qué|para\s+qué|con\s+qué|a\s+qué|de\s+qué)\b/iu);

  if (leadInMatch) {
    const leadIn = leadInMatch[1]; // "Tú "
    const rest = inner.slice(leadIn.length); // "qué te crees"
    const re = new RegExp(`¿\\s*${esc(leadIn)}${esc(rest)}\\s*\\?`, "giu");

    if (re.test(example)) {
      return example.replace(re, `¿${leadIn}_____?`);
    }
  } else {
    // Default: blank whole question chunk
    const re = new RegExp(`¿\\s*${esc(inner)}\\s*\\?`, "giu");
    if (re.test(example)) {
      return example.replace(re, "¿_____?");
    }
  }
}




  // ======================================================
// 🔥 CLOZE FOR SINGLE WORD FLASHCARDS (güey, neta, chela…)
// ======================================================
if (card.type === "word" && card.example) {
  let word = (card.back_text || "").toLowerCase().trim();
  if (!word) return example;

  // remove HTML
  word = word.replace(/<[^>]*>/g, "");

  // split into variants → ["güey","wey"]
  const variants = word.split(/[\/,|]/).map(v => v.trim()).filter(Boolean);

  let result = example;

  variants.forEach(v => {
    const safe = v.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`\\b${safe}[a-záéíóúñü]*\\b`, "gi");
    result = result.replace(regex, "_____");
  });

  return result;
}

// ⭐ SPECIAL CASE — Se me antojó (also catches present: se me antoja)
if (card.slug === "se-me-antojo") {
  return example.replace(/se me antoj[aáéíóúüñ]+/gi, "_____");
}

   // ⭐ SPECIAL CASE FOR "irle-a"
      if (card.slug === "irle-a") {
        return "_____, pero todavía lo queremos.";
      }

      // ⭐ SPECIAL OVERRIDE — "ya-me-dio" FRONT EXAMPLE
if (card.slug === "ya-me-dio") {
  return "Ya _____ frío.";
}

      // ⭐ SPECIAL CASE — Al fin y al cabo → hide ONLY "al cabo"
if (card.slug === "al-fin-y-al-cabo") {
  return example.replace(/al cabo/gi, "_____");
}

// ⭐ SPECIAL CASE — ¿Cómo que…?
if (card.slug === "como-que") {
  return card.example
    .replace(/¿Cómo que/gi, "¿_____ que"); // ← leaves que visible like native speech
}

// ⭐ SPECIAL CASE — "¿Cómo que no?"
if (card.slug === "como-que-no") {
  return card.example.replace(/¿Cómo que no\?/gi, "¿_____ no?");
}

      // SPECIAL CASE — "Deja tú" (sentence starter)
// Front example should read → "_____ que llueva, ¡ya se fue la luz en toda la colonia!"
if (card.slug === "deja-tu") {
  return example.replace(/Deja tú/gi, "_____");
}

      // ⭐ SPECIAL CASE — Me cae bien/mal (all tenses + pronouns)
if (card.slug === "me-cae-bien") {
  return example.replace(
    /\b(me|te|le|nos|les)\s+ca(?:e|en|ía|yó|yeron|erá|ería|erían|ían)\s+(bien|mal)/gi,
    "_____"
  );
}

// ⭐ SPECIAL CASE — "Siento que"
// Front should appear as: S____ que ya no me quiere.
if (card.slug === "siento-que") {
  return example.replace(/Siento que/gi, "S____ que");
}


// ⭐ SPECIAL CASE — "Ahorita que" → A____ que
if (card.slug === "ahorita-que") {
  return example.replace(/\bAhorita que\b/gi, "A____ que");
}

// ⭐ SPECIAL CASE — "apenas" always stays the same form → hide whole word
if (card.slug === "apenas") {
  return example.replace(/\bapenas\b/gi, "_____");
}

// ⭐ SPECIAL CASE — "mejor" → blank entire word only
if (card.slug === "mejor") {
  return example.replace(/\bmejor\b/gi, "_____");
}

// ⭐ SPECIAL CASE — Y qué crees?
// Front should show: ¿_____? Me dieron el trabajo.
if (card.slug === "y-que-crees") {
  return example.replace(/¿?Y qué crees\??/gi, "¿_____?");
}

// ⭐ SPECIAL CASE — ¿Qué crees?
if (card.slug === "que-crees") {
  return example.replace(/¿?Qué crees\??/gi, "¿_____?");
}

// ⭐ SPECIAL CASE — ¿Qué se te ofrece?
if (card.slug === "que-se-te-ofrece") {
  return example.replace(/¿?Qué se te ofrece\??/gi, "¿_____?");
}

// ⭐ SPECIAL CASE — ¿Cómo le hago para…?
// Front should show: "¿_____ sacar mi pasaporte?" etc.
if (card.slug === "como-le-hago-para") {
  return example.replace(/¿?Cómo\s+(?:chingados\s+)?le\s+hag[oa]\s+para\s*/gi, "¿_____ ");
}

// ⭐ FULL CLOZE — wipes entire verb, no ó left behind
if (card.slug === "se-me-olvido") {
  return example.replace(
    /\bse\s+(me|te|le|nos|les)\s+olvid[^\s]*/gi,
    "_____"
  );
}


// ⭐ SPECIAL CASE — Ahí nos vemos → front example should blank only "ahí nos"
if (card.slug === "ahi-nos-vemos") {
  return example.replace(/ahí nos/gi, "_____");
}

// ⭐ SPECIAL CASE — "De haber sabido" (keep "De", hide only "haber sabido")
if (card.slug === "de-haber-sabido") {
  return example.replace(/De\s+haber\s+sabido/gi, "De _____");
}

// ⭐ SPECIAL CASE — Tener ganas de (blank only "ganas de")
if (card.slug === "tener-ganas-de") {
  return example.replace(/\bganas de\b/gi, "_____");
}


// ⭐ SPECIAL CASE — Pon tú que
// Front should show: "_____ tú que ganas la lotería, ¿qué harías?"
if (card.slug === "pon-tu-que") {
  return example.replace(/Pon tú que/gi, "_____ tú que");
}

// ⭐ SPECIAL CASE — "La pasé bien" → blank "la paso / la pasé / la pasaba..."
if (card.slug === "la-pase-bien") {
  return example.replace(/\bla pas[oaéíóú]+\b/gi, "_____");
}


      // ⭐ SPECIAL CASE — hide "tardes ya" in greeting card
if (card.slug === "buenos-dias-tardes-ya") {
  return example.replace(/¡tardes ya!/gi, "_____");
}


// ⭐ SPECIAL CASE — hide "¿Ya tan tarde?" in example
if (card.slug === "ya-tan-tarde") {
  return example.replace(/¿Ya tan tarde\??/gi, "_____");
}

         // ⭐ SPECIAL CASE FOR "no-tengo-con-que"
   if (card.slug === "no-tengo-con-que") {
     return example.replace(/no tengo con qué/gi, "_____");
   }

   // ⭐ UNIVERSAL RULE FOR "Andar + adjective"
if (card.slug === "andar-adjective") {
  return example.replace(/\bando\b|\bandas\b|\banda\b|\bandan\b|\bandamos\b|\banduve\b|\bandaba\b/gi, "_____");
}

// ⭐ Ándale pues / Órale pues cloze rule
if (card.slug === "andale-pues") {
  return example
    .replace(/¡?Ándale pues,?/gi, "_____")
    .replace(/¡?Órale pues,?/gi, "_____");
}

  if (!chunk) return example;

  // 1️⃣ SPECIAL CASE: “ponerle + nombre”, “echarle + ganas”, etc.
  if (chunk.includes("+")) {
    const verbPart = chunk.split("+")[0].trim(); // "ponerle"
    const escaped = verbPart.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`\\b${escaped}\\b`, "gi");
    return example.replace(regex, "_____");
  }

  // 2️⃣ VERB + PHRASE chunks (“tener que ver”, etc.)
  const words = chunk.split(" ").filter(Boolean);

  if (words.length >= 3) {
    const keyword = words.slice(-2).join(" "); // "que ver"
    const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    // match ANY verb + keyword
    const regex = new RegExp(
      `\\b[\\p{L}áéíóúñüÁÉÍÓÚÑÜ]+\\s+${escapedKeyword}\\b`,
      "giu"
    );

    return example.replace(regex, "_____");
  }

  // 3️⃣ FALLBACK for simple chunks
// Extract the verb from the chunk
const parts = chunk.split(" ");
const verb = parts[parts.length - 1]; // "nota"

// Remove last letter to get verb stem: "not"
const stem = verb.slice(0, -1);

// Build regex matching ANY conjugation: nota, notan, notó, notaba, notaron...
const conjRegex = new RegExp(
  `\\b${parts.slice(0, -1).join("\\s+")}\\s+${stem}[a-záéíóúñü]+\\b`,
  "gi"
);

// Replace match with blank
return example.replace(conjRegex, "_____");

})()}


    </div>
  )}

</div>


            <div className="card-face card-back text-4xl font-bold text-green-700 flex flex-col justify-center items-center px-6 text-center">
              <div className="flex items-center gap-4 mb-6">

<span className="text-4xl font-bold text-green-700">
  {(() => {
    const txt = card.back_text || "";
    const slug = card.slug;

    // 🔥 HARD OVERRIDE just for this chunk
    if (slug === "andale-pues") {
      return "ándale pues / órale pues"; // exactly how you want it
    }

    // Keep original if it's a question/exclamation
    if (txt.trim().startsWith("¿") || txt.trim().startsWith("¡")) {
      return txt;
    }

    // Normal behaviour for everything else
    return formatEnglish(txt);
  })()}
</span>




{/* 🔊 Works for WORDS + CHUNKS + AUTO-FALLBACK */}
{(() => {
  // Priority:
  // 1) Supabase audio_url
  // 2) First audioUrls[] entry (chunks)
  // 3) Fallback auto path → /audio/chunks/slug.mp3

  const audio =
    card.audio_url ||
    (card.audioUrls?.length > 0 ? card.audioUrls[0] : `/audio/chunks/${card.slug}.mp3`);

  return audio ? (
    <button
      onClick={(e) => {
        e.stopPropagation();
        handlePlayAudio(audio);
      }}
      className="text-5xl hover:scale-125 transition-transform cursor-pointer"
    >
      🔊
    </button>
  ) : null;
})()}


              </div>
              {card.example && (
                <div className="text-2xl font-semibold text-center px-4">
                  <div>{card.example}</div>
{card.example_english && (
  <div className="text-xl text-gray-600 italic font-normal mt-2">
    {formatEnglish(card.example_english)}
  </div>
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