/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Head from "next/head";
import words from "../data/words";
import confetti from "canvas-confetti";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";


export default function Home() {
  const supabase = useSupabaseClient();
  const { data: session, status } = useSession();


  const slugs = words.map((w) => w.slug.toLowerCase());
  const [shake, setShake] = useState(false);
  const [profile, setProfile] = useState(null);
  const [dailyXP, setDailyXP] = useState(0);

  /* shaky "lucky" button */
  useEffect(() => {
    const t = setTimeout(() => setShake(true), 10_000);
    return () => clearTimeout(t);
  }, []);

/* fetch daily XP from localStorage */
useEffect(() => {
  if (!session?.user?.email) {
    setDailyXP(0);
    return;
  }

  const updateDailyXP = () => {
    const today = new Date().toISOString().slice(0, 10);
    let stored = JSON.parse(localStorage.getItem("reviewTracker")) || {
      date: today,
      count: 0,
      xp: 0,
      user_email: session.user.email,
    };

    if (stored.user_email !== session.user.email) {
      stored = { date: today, count: 0, xp: 0, user_email: session.user.email };
      localStorage.setItem("reviewTracker", JSON.stringify(stored));
    }

    if (stored.date !== today) {
      stored = { date: today, count: 0, xp: 0, user_email: session.user.email };
      localStorage.setItem("reviewTracker", JSON.stringify(stored));
    }

    setDailyXP(stored.xp || 0);
  };

  updateDailyXP();
  const interval = setInterval(updateDailyXP, 1000);

  return () => clearInterval(interval);
}, [session?.user?.email]);


  /* fetch username + avatar + xp */
  useEffect(() => {
    const fetchProfile = async () => {
      if (!session?.user) return;
const { data } = await supabase
  .from("profiles")
  .select("username, avatar_url, xp")
  .eq("email", session.user.email)
  .single();
      if (data) setProfile(data);
    };
    fetchProfile();
    
    // Subscribe to realtime XP updates
const subscription = supabase
  .channel("profile-xp-updates")
  .on(
    "postgres_changes",
    {
      event: "UPDATE",
      schema: "public",
      table: "profiles",
      filter: `email=eq.${session?.user?.email}`,
    },
    (payload) => {
      setProfile((prev) => ({ ...prev, xp: payload.new.xp }));
    }
  )
  .subscribe();


    return () => {
      subscription.unsubscribe();
    };
  }, [session, supabase]);

  const handleSignIn = () => signIn("google", { callbackUrl: "/" });
const handleSignOut = () => signOut();


  // Calculate level and progress
  const level = profile?.xp ? Math.floor(profile.xp / 500) : 0;
  const progressToNextLevel = profile?.xp ? ((profile.xp % 500) / 500) * 100 : 0;
  const levelEmojis = ["🌱", "🌵", "🌮", "🔥", "⭐", "👑"];
  const currentEmoji = levelEmojis[Math.min(level, levelEmojis.length - 1)];

  // Daily progress calculation
  const dailyProgress = (dailyXP % 50) / 50 * 100;
  const milestonesEarned = Math.floor(dailyXP / 50);

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-gray-800 p-6">
      <Head>
        <title>The MexiVerse 💀</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap"
          rel="stylesheet"
        />
        <style>{`
          .aztec { font-family: 'Tilt Warp', cursive; }
          @keyframes shake {
            0%,100% { transform: translateX(0); }
            20%,60% { transform: translateX(-5px); }
            40%,80% { transform: translateX(5px); }
          }
          .animate-shake { animation: shake 0.5s ease-in-out infinite; }
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 5px rgba(34, 197, 94, 0.5); }
            50% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.8); }
          }
          .pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        `}</style>
      </Head>

      {/* HEADER */}
      <header className="relative flex flex-col items-center text-center my-10">
        {/* LOGIN / LOGOUT BOX */}
        <div className="relative w-full flex justify-center 2xl:justify-end 2xl:absolute 2xl:top-0 2xl:right-0 pt-2 pb-6 2xl:pt-0 2xl:pb-0 z-30 pointer-events-none">
          <div className="relative bg-white rounded-xl shadow-xl border-4 border-[#ce1126] border-b-green-600 border-r-green-600 px-6 py-4 transform 2xl:-rotate-[1.5deg] w-full max-w-sm pointer-events-auto">
            <div
              className="absolute left-1/2 -translate-x-1/2 w-24 h-2 bg-yellow-400 rounded-full shadow-md"
              style={{ top: "-7.5px" }}
            />

            <div className="flex flex-col items-center gap-4 relative z-10">
              {status === "loading" ? (
  <p className="text-lg text-gray-500">Checking login…</p>
) : session?.user ? (
                <>
                  <img
                    src={
                      profile?.avatar_url || "/images/default-avatar-male.png"
                    }
                    alt="Avatar"
                    className="
                      relative top-1
                      w-20 h-20 rounded-full object-cover shadow-md
                      ring-4 ring-green-600 ring-offset-6 ring-offset-white
                      transition-transform duration-200 hover:scale-105
                    "
                  />

                  <span className="font-semibold text-lg truncate max-w-[150px]">
                    {profile?.username ||
                      session.user.email.split("@")[0]}
                  </span>

                  {/* Clean XP Display - No Streak Info */}
                  {profile?.xp !== undefined && (
                    <div className="w-full space-y-3">
                      {/* Long-term Level Progress */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-bold text-gray-700">
                            Level {level} {currentEmoji}
                          </span>
                          <span className="text-sm font-bold text-green-700">
                            {profile.xp} XP
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-green-500 to-green-700 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${progressToNextLevel}%` }}
                          />
                        </div>
                        <p className="text-xs text-gray-600 mt-1 text-center">
                          {500 - (profile.xp % 500)} XP to level {level + 1}
                        </p>
                      </div>

                      {/* Daily Milestone Progress */}
                      <div className="border-t pt-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-bold text-orange-700 flex items-center gap-1">
                            🌮 Today's Goal
                          </span>
                          <span className="text-sm font-bold text-orange-700">
                            {dailyXP % 50}/50 XP
                          </span>
                        </div>
                        <div className={`w-full bg-orange-100 rounded-full h-3 border-2 border-orange-200 ${dailyProgress >= 90 ? 'pulse-glow' : ''}`}>
                          <div 
                            className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 h-full rounded-full transition-all duration-500 relative overflow-hidden"
                            style={{ width: `${dailyProgress}%` }}
                          >
                            {dailyProgress >= 90 && (
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
                            )}
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-1">
                          <p className="text-xs text-gray-600">
                            {50 - (dailyXP % 50)} XP to milestone!
                          </p>
                          {milestonesEarned > 0 && (
                            <p className="text-xs text-green-600 font-bold">
                              {milestonesEarned} milestone{milestonesEarned > 1 ? 's' : ''} earned! 🎉
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={handleSignOut}
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition text-sm cursor-pointer w-full 2xl:w-auto"
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleSignIn}
                    className="bg-[#ce1126] text-white text-sm font-bold px-5 py-2 rounded-md hover:bg-red-800 transition cursor-pointer shadow w-full 2xl:w-auto"
                  >
                    Log in
                  </button>
                  <button
                    onClick={handleSignIn}
                    className="bg-green-700 text-white text-sm font-bold px-5 py-2 rounded-md hover:bg-green-800 transition cursor-pointer shadow w-full 2xl:w-auto"
                  >
                    Get started
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        <h1 className="aztec text-5xl xl:text-7xl text-green-700 mt-10 md:mt-14">
          The MexiVerse 💀
        </h1>
      </header>

      {/* SEARCH BAR */}
      <div className="flex justify-center mb-8">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const q = e.target.elements.query.value.trim().toLowerCase();
            window.location.href = slugs.includes(q)
              ? `/word/${encodeURIComponent(q)}`
              : "/not-found";
          }}
          className="flex w-full max-w-xl"
        >
          <input
            name="query"
            type="text"
            placeholder="Heard a mexicanism? Whack it in here..."
            className="flex-grow p-4 rounded-l-full border border-gray-300 focus:outline-none text-lg"
          />
          <button
            type="submit"
            className="
              bg-green-700 hover:bg-green-800 text-white font-bold px-6
              rounded-r-full text-lg cursor-pointer
            "
          >
            Search
          </button>
        </form>
      </div>

      {/* QUICK NAVIGATION BUTTONS */}
<div className="flex justify-center gap-4 mb-12 mt-2">
<Link
  href="/chunks-browser"
  className="bg-green-700 hover:bg-green-800 text-white font-bold px-6 py-3 rounded-full shadow cursor-pointer transition text-lg"
>
  ⚡ Chunk Browser
</Link>

<Link
  href="/community"
  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-full shadow cursor-pointer transition text-lg"
>
  🏆 Community
</Link>

</div>


      {/* FEELING LUCKY */}
      <div className="flex flex-col items-center mb-12">
        <button
          onClick={() => {
            const slug =
              words[Math.floor(Math.random() * words.length)].slug;
            confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
            setTimeout(() => {
              window.location.href = `/word/${encodeURIComponent(slug)}`;
            }, 300);
          }}
          className={`cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full text-xl shadow-md transition ${
            shake ? "animate-shake" : ""
          }`}
        >
          🎲 Are you feeling lucky?
        </button>
      </div>

      {/* FEATURED WORDS */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          🔥 Featured Words
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {["chela", "chido", "mande", "güey"].map((slug) => (
 <Link
  key={slug}
  href={`/word/${encodeURIComponent(slug)}`}
  className="bg-green-50 p-8 rounded-2xl shadow-2xl text-center hover:scale-105 hover:shadow-[0_0_15px_rgba(34,197,94,0.6)] transition-transform duration-300 flex flex-col justify-between items-center h-[420px] overflow-hidden"
>
  <div className="h-[300px] w-full flex items-center justify-center mb-4">
    <img
      src={`/images/${
        slug === "chela"
          ? "caguama"
          : slug === "güey"
          ? "wey"
          : slug
      }.png`}
      alt={`${slug} cartoon`}
      className="max-h-full max-w-full object-contain"
    />
  </div>
  <span className="text-5xl font-extrabold text-green-700">
    {slug}
  </span>
</Link>

          ))}
        </div>
      </section>

      {/* FEATURED CHUNKS */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          ⚡ Featured Chunks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { slug: "se-me-hace-tarde", text: "Se me hace tarde" },
            { slug: "por-eso", text: "Por eso" },
            { slug: "que-tengas-buen-dia", text: "Que tengas buen día" },
            { slug: "ya-me-voy", text: "Ya me voy" },
          ].map(({ slug, text }) => (
<Link
  key={slug}
  href={`/chunk/${slug}`}
  className="bg-green-50 p-8 rounded-2xl shadow-2xl text-center hover:scale-105 hover:shadow-[0_0_15px_rgba(34,197,94,0.6)] transition-transform duration-300 flex items-center justify-center h-[420px] overflow-hidden"
>
  <span className="text-3xl font-extrabold text-green-700">
    {text}
  </span>
</Link>

          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-sm text-gray-600 pb-6">
        Made with ❤️ in CDMX
      </footer>
    </div>
  );
}