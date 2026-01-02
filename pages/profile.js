/* eslint-disable react/no-unescaped-entities */
import { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import { useSession, signIn } from "next-auth/react";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/router";

import { fetchUnlockedBadges } from "../lib/awardbadges";

const FORUM_REPLIES_TABLE = "forum_replies"; // 👈 change if your table name differs

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Plain Supabase client (no auth helpers)
  const supabase = useMemo(
    () =>
      createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      ),
    []
  );

  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);

  // ✅ DB-unlocked badges (normalized)
  const [unlockedBadges, setUnlockedBadges] = useState([]);

  const [leagueHistory, setLeagueHistory] = useState([]);
  const [activeBoost, setActiveBoost] = useState(null);

  // forum replies count (for progress display)
  const [forumRepliesCount, setForumRepliesCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      // Auth loading guard
      if (status === "loading") return;

      // Not signed in
      if (!session?.user?.email) {
        setLoading(false);
        setProfile(null);
        setUnlockedBadges([]);
        setLeagueHistory([]);
        setActiveBoost(null);
        setForumRepliesCount(0);
        return;
      }

      setLoading(true);

      try {
        // Profile
        const { data: profileData, error: profileErr } = await supabase
          .from("profiles")
          .select("*")
          .eq("email", session.user.email)
          .single();

        if (profileErr) console.error("Profile fetch error:", profileErr);
        setProfile(profileData || null);

        // Active XP boost (optional RPC you already use)
        try {
          const { data: boostMultiplier } = await supabase.rpc(
            "get_user_xp_multiplier",
            {
              p_user_id: session.user.id,
            }
          );
          if (boostMultiplier > 1) setActiveBoost(boostMultiplier);
          else setActiveBoost(null);
        } catch (e) {
          // if RPC doesn't exist / errors, just ignore
          setActiveBoost(null);
        }

        // ✅ DB badges (truth source)
        try {
          const unlocked = await fetchUnlockedBadges(supabase, session.user.id);
          setUnlockedBadges(unlocked || []);
        } catch (e) {
          console.error("fetchUnlockedBadges error:", e);
          setUnlockedBadges([]);
        }

        // League history (basic)
        const { data: historyData, error: histErr } = await supabase
          .from("league_history")
          .select(
            `
            *,
            weekly_leagues (league_name, league_tier)
          `
          )
          .eq("user_id", session.user.id)
          .order("created_at", { ascending: false })
          .limit(10);

        if (histErr) console.error("League history fetch error:", histErr);
        setLeagueHistory(historyData || []);

        // Forum replies count (for progress bars)
        try {
          const { count, error: replyErr } = await supabase
            .from(FORUM_REPLIES_TABLE)
            .select("*", { count: "exact", head: true })
            .eq("user_id", session.user.id);

          if (replyErr) {
            console.error("Forum replies count error:", replyErr);
            setForumRepliesCount(0);
          } else {
            setForumRepliesCount(count || 0);
          }
        } catch (e) {
          console.error("Forum replies count exception:", e);
          setForumRepliesCount(0);
        }
      } catch (err) {
        console.error("Profile page fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [session?.user?.email, session?.user?.id, status, supabase]);

  const level = Math.floor((profile?.xp || 0) / 500);
  const xpIntoLevel = (profile?.xp || 0) % 500;
  const leaguesWon = profile?.total_leagues_won || 0;
  const streak = profile?.streak_count || 0;

  // Best finish
  const bestFinish = leagueHistory.length
    ? Math.min(...leagueHistory.map((h) => h.final_position || 9999))
    : null;

  const getLeagueEmoji = (tier) => {
    const emojis = { 1: "🌮", 2: "🌵", 3: "🔥", 4: "⚡", 5: "👑", 6: "💎" };
    return emojis[tier] || "🌮";
  };

  // ✅ Unlocked achievement codes helper (most reliable)
  const unlockedCodes = useMemo(() => {
    const set = new Set();
    (unlockedBadges || []).forEach((b) => {
      if (b?.code) set.add(String(b.code).trim().toLowerCase());
    });
    return set;
  }, [unlockedBadges]);

  const hasAchievementCode = (code) =>
    unlockedCodes.has(String(code).trim().toLowerCase());

  // Badge definitions (PNG + unlock rules)
  const badgeDefs = useMemo(() => {
    const replies10 = 10;
    const replies30 = 30;

    // IMPORTANT: unlock comes from DB codes
    const buenPedoUnlocked =
      hasAchievementCode("buen-pedo") || hasAchievementCode("buen_pedo");

    const senseiUnlocked =
      hasAchievementCode("mexican-spanish-sensei") ||
      hasAchievementCode("mexican_spanish_sensei");

    const founderUnlocked =
      hasAchievementCode("founder-2026") ||
      hasAchievementCode("founder_2026") ||
      hasAchievementCode("2026-founder") ||
      hasAchievementCode("2026_founder");

    const bugSlayerUnlocked =
      hasAchievementCode("bug-slayer") || hasAchievementCode("bug_slayer");

    // Allow either DB badge OR leaguesWon > 0
    const leagueWinnerUnlocked =
      hasAchievementCode("league-winner") ||
      hasAchievementCode("league_winner") ||
      leaguesWon > 0;

    return [
      {
        key: "founder-2026",
        name: "2026 Founder",
        icon: "/badges/founder-2026.png",
        unlockText: "be a founding member",
        unlocked: founderUnlocked,
      },
      {
        key: "league-winner",
        name: "League Winner",
        icon: "/badges/league-winner.png",
        unlockText: "win a league",
        unlocked: leagueWinnerUnlocked,
      },
      {
        key: "bug-slayer",
        name: "Bug Slayer",
        icon: "/badges/bug-slayer.png",
        unlockText: "help to report a bug",
        unlocked: bugSlayerUnlocked,
      },
      {
        key: "buen-pedo",
        name: "Buen Pedo",
        icon: "/badges/buen-pedo.png",
        unlockText: "10 forum replies",
        unlocked: buenPedoUnlocked,
        progress: {
          current: forumRepliesCount,
          target: replies10,
          label: "replies",
        },
      },
      {
        key: "mexican-spanish-sensei",
        name: "Mexican Spanish Sensei",
        icon: "/badges/mexican-spanish-sensei.png",
        unlockText: "30 forum replies",
        unlocked: senseiUnlocked,
        progress: {
          current: forumRepliesCount,
          target: replies30,
          label: "replies",
        },
      },
    ];
  }, [forumRepliesCount, leaguesWon, hasAchievementCode]);

  const unlockedCount = badgeDefs.filter((b) => b.unlocked).length;

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4 animate-bounce">🌮</div>
          <p className="text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  // Not logged in
  if (!session?.user) {
    return (
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <Head>
          <title>Profile | MexiVerse</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <div className="max-w-3xl mx-auto p-6">
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <h1 className="text-3xl font-bold text-green-700 mb-2">
              Your Profile
            </h1>
            <p className="text-gray-600 mb-6">
              Sign in to see your badges, stats, and league history.
            </p>
            <button
              onClick={() => signIn()}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-colors text-lg"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Logged in but no profile row found
  if (!profile) {
    return (
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <Head>
          <title>Profile | MexiVerse</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <div className="max-w-3xl mx-auto p-6">
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <h1 className="text-2xl font-bold mb-2">Profile not found</h1>
            <p className="text-gray-600 mb-6">
              We couldn’t find your profile record. (This is usually just a
              missing row in
              <code className="mx-1">profiles</code>.)
            </p>
            <button
              onClick={() => router.push("/community")}
              className="bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-full font-semibold transition-colors"
            >
              Back to Community
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <title>Profile | MexiVerse</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="max-w-4xl mx-auto p-4">
        {/* HEADER */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img
                src={profile.avatar_url || "/images/default-avatar-male.png"}
                alt="Avatar"
                className="w-20 h-20 rounded-full"
              />
              <div>
                <h1 className="text-3xl font-bold">{profile.username}</h1>
                <p className="text-gray-600">
                  Level {level} • {profile.xp || 0} XP
                  {activeBoost && (
                    <span className="ml-2 text-sm bg-green-100 text-green-700 px-2 py-1 rounded-full">
                      {activeBoost}x Active
                    </span>
                  )}
                </p>

                {profile.bio && (
                  <p className="text-sm text-gray-700 mt-2 max-w-xl">
                    {profile.bio}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="text-center">
                <p className="text-3xl font-bold">{streak}🔥</p>
                <p className="text-xs text-gray-600">Streak</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">{leaguesWon}</p>
                <p className="text-xs text-gray-600">Leagues Won</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">
                  {profile.achievement_points || 0}
                </p>
                <p className="text-xs text-gray-600">Achievement Pts</p>
              </div>
            </div>
          </div>

          {/* BADGES */}
          <div className="mt-6 pt-6 border-t">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Badges</h2>

              <div className="text-sm text-gray-500 flex items-center gap-3">
                <span>
                  Unlocked:{" "}
                  <span className="font-semibold text-gray-800">
                    {unlockedCount}
                  </span>
                  /{badgeDefs.length}
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">
                  Forum replies:{" "}
                  <span className="font-semibold text-gray-800">
                    {forumRepliesCount}
                  </span>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {badgeDefs.map((b) => {
                const hasProgress = !!b.progress;
                const cur = hasProgress ? b.progress.current : 0;
                const target = hasProgress ? b.progress.target : 1;
                const pct = hasProgress
                  ? Math.max(
                      0,
                      Math.min(
                        100,
                        (Math.min(cur, target) / target) * 100
                      )
                    )
                  : 0;

                return (
                  <div
                    key={b.key}
                    className={`rounded-xl border-2 p-4 transition-all ${
                      b.unlocked
                        ? "bg-green-50 border-green-200"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-14 h-14 rounded-xl bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 ${
                            b.unlocked ? "" : "opacity-60"
                          }`}
                        >
                          <img
                            src={b.icon}
                            alt={b.name}
                            className={`w-10 h-10 object-contain ${
                              b.unlocked ? "" : "grayscale"
                            }`}
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />
                        </div>

                        <div>
                          <p className="font-bold text-base flex items-center gap-2">
                            {b.name}
                            {b.unlocked ? (
                              <span className="text-xs bg-green-200 text-green-900 px-2 py-1 rounded-full font-semibold">
                                Unlocked
                              </span>
                            ) : (
                              <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full font-semibold">
                                Locked
                              </span>
                            )}
                          </p>

                          <p className="text-sm text-gray-700 mt-1">
                            <span className="font-semibold">
                              How to unlock:
                            </span>{" "}
                            {b.unlockText}
                            {hasProgress && (
                              <span className="ml-2 text-xs bg-white border border-gray-200 px-2 py-1 rounded-full font-semibold">
                                {Math.min(cur, target)}/{target}
                              </span>
                            )}
                          </p>
                        </div>
                      </div>

                      <div className="text-xl">{b.unlocked ? "✅" : "🔒"}</div>
                    </div>

                    {hasProgress && (
                      <div className="mt-3">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-green-600 h-2 rounded-full transition-all"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                          {Math.min(cur, target)}/{target} {b.progress.label}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* LEVEL PROGRESS */}
          <div className="mt-6 pt-6 border-t">
            <h2 className="text-xl font-bold mb-3">Progress</h2>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <div className="flex justify-between text-sm mb-2">
                <span>Level {level}</span>
                <span>Level {level + 1}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-green-600 h-3 rounded-full transition-all"
                  style={{ width: `${xpIntoLevel / 5}%` }}
                />
              </div>
              <p className="text-xs text-gray-600 mt-2">
                {xpIntoLevel}/500 XP to next level
              </p>
            </div>
          </div>
        </div>

        {/* LEAGUE HISTORY */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">League Record</h2>
            {bestFinish !== null && bestFinish !== 9999 && (
              <span className="text-sm bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-semibold">
                Best finish: #{bestFinish}
              </span>
            )}
          </div>

          {leagueHistory.length > 0 ? (
            <div className="space-y-2">
              {leagueHistory.map((h) => (
                <div
                  key={h.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <div>
                    <p className="font-semibold">
                      {getLeagueEmoji(h.weekly_leagues?.league_tier)}{" "}
                      {h.weekly_leagues?.league_name || "League"}
                    </p>
                    <p className="text-sm text-gray-600">
                      Position #{h.final_position} • {h.final_xp} XP
                    </p>
                  </div>
                  <span
                    className={`text-sm font-semibold ${
                      h.result === "won"
                        ? "text-yellow-700"
                        : h.result === "promoted"
                        ? "text-green-700"
                        : h.result === "demoted"
                        ? "text-red-700"
                        : "text-gray-700"
                    }`}
                  >
                    {h.result === "won"
                      ? "🏆 Won"
                      : h.result === "promoted"
                      ? "↑ Promoted"
                      : h.result === "demoted"
                      ? "↓ Demoted"
                      : "Maintained"}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">
              No league history yet. Start reviewing to get placed into a league.
            </p>
          )}

          <div className="mt-6 flex gap-3">
            <button
              onClick={() => router.push("/community")}
              className="bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-full font-semibold transition-colors"
            >
              Back to Community
            </button>
            <button
              onClick={() => router.push("/deck")}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
            >
              Review Cards
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
