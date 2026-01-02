/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Head from "next/head";
import { useSession } from "next-auth/react";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/router";
import ChallengesSection from "../components/ChallengesSection";
import ForumSection from "../components/ForumSection";

export default function CommunityPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Plain Supabase client (no auth helpers)
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const [profile, setProfile] = useState(null);
  const [leagueData, setLeagueData] = useState(null);
  const [leagueParticipants, setLeagueParticipants] = useState([]);
  const [sessionXP, setSessionXP] = useState(0);
  const [weeklyXP, setWeeklyXP] = useState(0);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("league");
  const [daysUntilReset, setDaysUntilReset] = useState(0);
  const [unreadCount, setUnreadCount] = useState(0);
  const [activeBoost, setActiveBoost] = useState(null);
  const [achievements, setAchievements] = useState([]);
  const [rewards, setRewards] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [leagueHistory, setLeagueHistory] = useState([]);

  // UNLOCKS
  const [survivalGuideUnlocked, setSurvivalGuideUnlocked] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("mxv_survivalGuideUnlocked");
      setSurvivalGuideUnlocked(stored === "true");
    } catch (e) {
      // ignore
    }
  }, []);

  const handleSurvivalGuideClick = () => {
    // first click unlocks; second click navigates
    if (!survivalGuideUnlocked) {
      setSurvivalGuideUnlocked(true);
      try {
        localStorage.setItem("mxv_survivalGuideUnlocked", "true");
      } catch (e) {
        // ignore
      }
      return;
    }
    router.push("/survival-guide");
  };

  const handleFounderBadgeClick = () => {
    // placeholder route until badge section exists
    router.push("/profile");
  };

  // Calculate days until Sunday reset
  useEffect(() => {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const daysLeft = dayOfWeek === 0 ? 7 : 7 - dayOfWeek;
    setDaysUntilReset(daysLeft);
  }, []);

  // Fetch daily XP from localStorage
  useEffect(() => {
    if (!session?.user?.id) {
      setSessionXP(0);
      return;
    }

    const updateSessionXP = () => {
      const today = new Date().toISOString().slice(0, 10);
      let stored = JSON.parse(localStorage.getItem("reviewTracker") || "{}");

      if (!stored.date || stored.user_id !== session.user.id || stored.date !== today) {
        stored = { date: today, count: 0, xp: 0, user_id: session.user.id };
        localStorage.setItem("reviewTracker", JSON.stringify(stored));
      }

      setSessionXP(stored.xp || 0);
    };

    updateSessionXP();
    const interval = setInterval(updateSessionXP, 2000);
    return () => clearInterval(interval);
  }, [session?.user?.id]);

  // Fetch all data
  useEffect(() => {
    const fetchData = async () => {
      if (!session?.user) {
        setLoading(false);
        return;
      }

      try {
        // Get profile
        const { data: profileData } = await supabase
          .from("profiles")
          .select("*")
          .eq("email", session.user.email)
          .single();

        if (profileData) {
          setProfile(profileData);

          // Get active XP boost
          const { data: boostMultiplier } = await supabase.rpc("get_user_xp_multiplier", {
            p_user_id: session.user.id,
          });

          if (boostMultiplier > 1) {
            setActiveBoost(boostMultiplier);
          }

          // Get notifications
          const { data: notifData } = await supabase
            .from("notifications")
            .select("*")
            .eq("user_id", session.user.id)
            .order("created_at", { ascending: false })
            .limit(20);

          setNotifications(notifData || []);
          setUnreadCount(notifData?.filter((n) => !n.read).length || 0);

          // Get achievements
          const { data: achievementsData } = await supabase
            .from("user_achievements")
            .select(
              `
              *,
              achievements (*)
            `
            )
            .eq("user_id", session.user.id)
            .order("unlocked_at", { ascending: false });

          setAchievements(achievementsData || []);

          // Get rewards
          const { data: rewardsData } = await supabase
            .from("user_rewards")
            .select(
              `
              *,
              reward_types:reward_type_id (*)
            `
            )
            .eq("user_id", session.user.id)
            .order("earned_at", { ascending: false });

          setRewards(rewardsData || []);

          // Get league history
          const { data: historyData } = await supabase
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

          setLeagueHistory(historyData || []);

          // Get current league
          if (profileData.current_league_id) {
            const { data: league } = await supabase
              .from("weekly_leagues")
              .select("*")
              .eq("id", profileData.current_league_id)
              .single();

            setLeagueData(league);

            // Get league participants
            const { data: participants } = await supabase
              .from("league_participants")
              .select(
                `
                *,
                profiles!inner(username, avatar_url, xp, streak_count)
              `
              )
              .eq("league_id", profileData.current_league_id)
              .order("weekly_xp", { ascending: false });

            setLeagueParticipants(participants || []);

            const userParticipant = participants?.find((p) => p.user_id === session.user.id);
            setWeeklyXP(userParticipant?.weekly_xp || 0);
          }
        }
      } catch (err) {
        console.error("Data fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [session, supabase]);

  // Helper functions
  const getLeagueEmoji = (tier) => {
    const emojis = {
      1: "🌮",
      2: "🌵",
      3: "🔥",
      4: "⚡",
      5: "👑",
      6: "💎",
    };
    return emojis[tier] || "🌮";
  };

  const getPromotionZone = (position, totalParticipants, leagueTier) => {
    if (position <= 10 && leagueTier < 6)
      return { zone: "promotion", color: "text-green-600", label: "↑ Promotion Zone" };
    if (position > totalParticipants - 5 && leagueTier > 1)
      return { zone: "demotion", color: "text-red-600", label: "↓ Demotion Zone" };
    return { zone: "safe", color: "text-gray-600", label: "Safe Zone" };
  };

  const userPosition =
    leagueParticipants.findIndex((p) => p.user_id === session?.user?.id) + 1;
  const promotionInfo =
    userPosition && leagueData
      ? getPromotionZone(userPosition, leagueParticipants.length, leagueData.league_tier)
      : null;

  const markAsRead = async (notificationId) => {
    await supabase.from("notifications").update({ read: true }).eq("id", notificationId);

    setNotifications((prev) =>
      prev.map((n) => (n.id === notificationId ? { ...n, read: true } : n))
    );
    setUnreadCount((prev) => Math.max(0, prev - 1));
  };

  // Renamed to avoid ESLint thinking it's a React Hook
  const handleReward = async (rewardId, rewardType) => {
    try {
      if (rewardType === "instant_xp") {
        await supabase.rpc("apply_instant_xp_reward", { p_reward_id: rewardId });
      } else if (rewardType === "xp_boost") {
        await supabase.rpc("activate_xp_boost", { p_reward_id: rewardId });
      }
      window.location.reload();
    } catch (error) {
      console.error("Error using reward:", error);
    }
  };

  // Unified loading guard (auth loading OR community data loading)
  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4 animate-bounce">🌮</div>
          <p className="text-gray-600">Loading community...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <title>Community | Mex Spanish Dict 💀</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* HEADER FOR NON-USERS */}
      {!session?.user && (
        <div className="bg-white shadow-sm p-6 mb-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-2 text-green-700">🌮 Join the Community!</h1>
            <p className="text-gray-600 mb-4">Compete in weekly leagues and learn with thousands</p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-colors text-lg">
              Sign In to Start
            </button>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto p-4">
        {/* USER HEADER CARD */}
        {session?.user && profile && (
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={profile.avatar_url || "/images/default-avatar-male.png"}
                  alt="Avatar"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h1 className="text-2xl font-bold">{profile.username}</h1>
                  <p className="text-gray-600">
                    Level {Math.floor((profile.xp || 0) / 500)} • {profile.xp} XP
                    {activeBoost && (
                      <span className="ml-2 text-sm bg-green-100 text-green-700 px-2 py-1 rounded-full">
                        {activeBoost}x Active
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold">{profile.streak_count || 0}🔥</p>
                  <p className="text-xs text-gray-600">Streak</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{weeklyXP}</p>
                  <p className="text-xs text-gray-600">This Week</p>
                </div>
              </div>
            </div>

            {/* BADGES ROW */}
            <div className="mt-5 pt-5 border-t">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-gray-800">Badges</h3>
                <button
                  onClick={() => router.push("/profile")}
                  className="text-sm font-semibold text-green-700 hover:text-green-800 transition-colors"
                >
                  View all →
                </button>
              </div>

              {achievements.length > 0 ? (
                <div className="flex items-center gap-3 overflow-x-auto pb-2 pr-1">
                  {achievements.slice(0, 6).map((ach) => (
                    <div
                      key={ach.id}
                      title={ach.achievements?.name || "Badge"}
                      className="flex-shrink-0 w-12 h-12 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center cursor-pointer hover:scale-[1.06] hover:shadow-sm transition-all"
                      onClick={() => router.push("/profile")}
                    >
                      <span className="text-2xl">{ach.achievements?.icon || "🏅"}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-600">
                  No badges yet. Win leagues, help in the forum, and keep learning to unlock them.
                </p>
              )}
            </div>
          </div>
        )}

        {/* TAB NAVIGATION */}
        {session?.user && (
          <div className="bg-white rounded-xl shadow-md mb-6">
            <div className="flex border-b">
              <button
                onClick={() => setActiveTab("league")}
                className={`flex-1 py-4 px-6 font-semibold transition-colors relative ${
                  activeTab === "league"
                    ? "text-green-600 border-b-2 border-green-600"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                🏆 League
              </button>
              <button
                onClick={() => setActiveTab("stats")}
                className={`flex-1 py-4 px-6 font-semibold transition-colors relative ${
                  activeTab === "stats"
                    ? "text-green-600 border-b-2 border-green-600"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                📊 Stats
                {(achievements.length > 0 || rewards.filter((r) => !r.used_at).length > 0) && (
                  <span className="absolute top-3 right-3 w-2 h-2 bg-yellow-400 rounded-full"></span>
                )}
              </button>
              <button
                onClick={() => setActiveTab("notifications")}
                className={`flex-1 py-4 px-6 font-semibold transition-colors relative ${
                  activeTab === "notifications"
                    ? "text-green-600 border-b-2 border-green-600"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                🔔 Alerts
                {unreadCount > 0 && (
                  <span className="absolute top-3 right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </button>
            </div>

            {/* TAB CONTENT */}
            <div className="p-6">
              {/* LEAGUE TAB */}
              {activeTab === "league" && (
                <div>
                  {leagueData && leagueParticipants.length > 0 ? (
                    <>
                      {/* League Header */}
                      <div className="text-center mb-6">
                        <h2 className="text-3xl font-bold mb-2">
                          {getLeagueEmoji(leagueData.league_tier)} {leagueData.league_name}
                        </h2>
                        <p className="text-gray-600">
                          Ends in {daysUntilReset} day{daysUntilReset !== 1 ? "s" : ""}
                        </p>
                      </div>

                      {/* Your Position */}
                      <div
                        className={`text-center p-6 rounded-xl mb-6 ${
                          promotionInfo?.zone === "promotion"
                            ? "bg-green-50 border-2 border-green-300"
                            : promotionInfo?.zone === "demotion"
                            ? "bg-red-50 border-2 border-red-300"
                            : "bg-gray-50 border-2 border-gray-200"
                        }`}
                      >
                        <p className="text-6xl font-bold mb-2">#{userPosition}</p>
                        <p className={`font-semibold text-lg ${promotionInfo?.color}`}>
                          {promotionInfo?.label}
                        </p>
                      </div>

                      {/* League Standings */}
                      <div className="space-y-2">
                        {leagueParticipants.map((participant, index) => {
                          const position = index + 1;
                          const isUser = participant.user_id === session?.user?.id;
                          const zone = getPromotionZone(
                            position,
                            leagueParticipants.length,
                            leagueData.league_tier
                          );

                          return (
                            <div
                              key={participant.id}
                              className={`flex items-center gap-3 p-3 rounded-lg ${
                                isUser
                                  ? "bg-yellow-100 ring-2 ring-yellow-400"
                                  : zone.zone === "promotion"
                                  ? "bg-green-50"
                                  : zone.zone === "demotion"
                                  ? "bg-red-50"
                                  : "bg-gray-50"
                              }`}
                            >
                              <div className="text-xl font-bold w-12">
                                {position === 1
                                  ? "🥇"
                                  : position === 2
                                  ? "🥈"
                                  : position === 3
                                  ? "🥉"
                                  : `#${position}`}
                              </div>
                              <img
                                src={
                                  participant.profiles?.avatar_url ||
                                  "/images/default-avatar-male.png"
                                }
                                alt="Avatar"
                                className="w-10 h-10 rounded-full"
                              />
                              <div className="flex-1">
                                <p className="font-semibold">
                                  {participant.profiles?.username}
                                  {isUser && " (You)"}
                                </p>
                                <p className="text-sm text-gray-600">
                                  Level {Math.floor((participant.profiles?.xp || 0) / 500)}
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="font-bold text-lg">{participant.weekly_xp} XP</p>
                                {participant.profiles?.streak_count > 0 && (
                                  <p className="text-sm text-gray-600">
                                    {participant.profiles.streak_count}🔥
                                  </p>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Zone Legend */}
                      <div className="mt-6 pt-6 border-t flex justify-around text-sm">
                        {leagueData.league_tier < 6 && (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-green-200 rounded"></div>
                            <span>Top 10 get promoted</span>
                          </div>
                        )}
                        {leagueData.league_tier > 1 && (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-red-200 rounded"></div>
                            <span>Bottom 5 get demoted</span>
                          </div>
                        )}
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-12">
                      <h3 className="text-2xl font-bold mb-3">🌮 Ready to compete?</h3>
                      <p className="text-gray-600 mb-6">
                        Start learning to join this week&apos;s league!
                      </p>
                      <button
                        onClick={() => (window.location.href = "/deck")}
                        className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-full font-bold text-lg"
                      >
                        Start Learning
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* STATS TAB */}
              {activeTab === "stats" && (
                <div className="space-y-6">
                  {/* Progress Section */}
                  <div>
                    <h3 className="font-bold text-lg mb-4">Progress</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Level {Math.floor((profile?.xp || 0) / 500)}</span>
                          <span>Level {Math.floor((profile?.xp || 0) / 500) + 1}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className="bg-green-600 h-3 rounded-full transition-all"
                            style={{ width: `${((profile?.xp || 0) % 500) / 5}%` }}
                          />
                        </div>
                        <p className="text-xs text-gray-600 mt-1">
                          {(profile?.xp || 0) % 500}/500 XP to next level
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 rounded-lg p-4 text-center">
                          <p className="text-3xl font-bold">{profile?.total_leagues_won || 0}</p>
                          <p className="text-sm text-gray-600">Leagues Won</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 text-center">
                          <p className="text-3xl font-bold">{profile?.achievement_points || 0}</p>
                          <p className="text-sm text-gray-600">Achievement Points</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Achievements Section */}
                  <div>
                    <h3 className="font-bold text-lg mb-4">
                      Achievements ({achievements.length})
                    </h3>
                    {achievements.length > 0 ? (
                      <div className="grid grid-cols-2 gap-3">
                        {achievements.map((ach) => (
                          <div
                            key={ach.id}
                            className="bg-yellow-50 rounded-lg p-3 flex items-center gap-3"
                          >
                            <span className="text-2xl">{ach.achievements.icon}</span>
                            <div className="flex-1">
                              <p className="font-semibold text-sm">{ach.achievements.name}</p>
                              <p className="text-xs text-gray-600">
                                +{ach.achievements.points} points
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-600">No achievements yet. Keep learning!</p>
                    )}
                  </div>

                  {/* Rewards Section */}
                  <div>
                    <h3 className="font-bold text-lg mb-4">Rewards</h3>
                    {rewards.filter((r) => !r.used_at).length > 0 ? (
                      <div className="space-y-2">
                        {rewards
                          .filter((r) => !r.used_at)
                          .map((reward) => (
                            <button
                              key={reward.id}
                              onClick={() => handleReward(reward.id, reward.reward_types.type)}
                              className="w-full p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-[1.02]"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <span className="text-2xl">{reward.reward_types.icon}</span>
                                  <div className="text-left">
                                    <p className="font-semibold">{reward.reward_types.name}</p>
                                    <p className="text-sm opacity-90">
                                      {reward.reward_types.description}
                                    </p>
                                  </div>
                                </div>
                                <span className="text-sm">Use →</span>
                              </div>
                            </button>
                          ))}
                      </div>
                    ) : (
                      <p className="text-gray-600">No active rewards. Win leagues to earn rewards!</p>
                    )}
                  </div>

                  {/* League History */}
                  {leagueHistory.length > 0 && (
                    <div>
                      <h3 className="font-bold text-lg mb-4">League History</h3>
                      <div className="space-y-2">
                        {leagueHistory.map((history) => (
                          <div
                            key={history.id}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                          >
                            <div>
                              <p className="font-semibold">
                                {getLeagueEmoji(history.weekly_leagues.league_tier)}{" "}
                                {history.weekly_leagues.league_name}
                              </p>
                              <p className="text-sm text-gray-600">
                                Position #{history.final_position} • {history.final_xp} XP
                              </p>
                            </div>
                            <span
                              className={`text-sm font-semibold ${
                                history.result === "won"
                                  ? "text-yellow-600"
                                  : history.result === "promoted"
                                  ? "text-green-600"
                                  : history.result === "demoted"
                                  ? "text-red-600"
                                  : "text-gray-600"
                              }`}
                            >
                              {history.result === "won"
                                ? "🏆 Won"
                                : history.result === "promoted"
                                ? "↑ Promoted"
                                : history.result === "demoted"
                                ? "↓ Demoted"
                                : "Maintained"}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* NOTIFICATIONS TAB */}
              {activeTab === "notifications" && (
                <div>
                  {notifications.length > 0 ? (
                    <div className="space-y-3">
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`p-4 rounded-lg cursor-pointer transition-all ${
                            notification.read
                              ? "bg-gray-50"
                              : "bg-blue-50 border-l-4 border-blue-500"
                          }`}
                          onClick={() => !notification.read && markAsRead(notification.id)}
                        >
                          <h4 className="font-semibold">{notification.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                          <p className="text-xs text-gray-400 mt-2">
                            {new Date(notification.created_at).toLocaleDateString()}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-gray-600 py-8">No notifications yet</p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* QUICK ACTIONS */}
        {session?.user && (
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              onClick={() => (window.location.href = "/deck")}
              className="bg-blue-500 hover:bg-blue-600 text-white p-6 rounded-xl text-center transition-colors"
            >
              <div className="text-3xl mb-2">📚</div>
              <div className="font-semibold">Review Cards</div>
            </button>
            <button
              onClick={() => (window.location.href = "/challenges")}
              className="bg-purple-500 hover:bg-purple-600 text-white p-6 rounded-xl text-center transition-colors"
            >
              <div className="text-3xl mb-2">💪</div>
              <div className="font-semibold">Challenges</div>
            </button>
          </div>
        )}

        {/* ================= QUESTS / MISSIONS ================= */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700 text-center mb-6">🎴 Story Missions</h2>

          <div className="flex justify-center gap-6">
            {/* CARD 1 – clickable */}
            <a
              href="/quests"
              className="block w-[200px] aspect-[3/5] border-4 border-black rounded-md bg-[#6CC6FF] overflow-hidden cursor-pointer animate-questPulse hover:scale-[1.05] transition"
            >
              <div className="h-[70%] flex items-center justify-center text-6xl">🌮</div>
              <div className="h-[30%] bg-white border-t-4 border-black flex items-center justify-center">
                <span
                  className="font-[IM_Fell_English_SC] text-[16px] uppercase text-center tracking-wider"
                  style={{ transform: "scaleY(1.15)" }}
                >
                  THE INHERITANCE
                  <br />
                  MYSTERY
                </span>
              </div>
              <span className="absolute top-1 left-1 text-sm bg-white border px-1">01</span>
            </a>

            {/* CARD 2 – locked */}
            <div className="relative w-[200px] aspect-[3/5] border-4 border-black rounded-md bg-[#F9E24C] overflow-hidden opacity-40">
              <div className="h-[70%] flex items-center justify-center text-6xl">📺</div>
              <div className="h-[30%] bg-white border-t-4 border-black flex items-center justify-center">
                <span
                  className="font-[IM_Fell_English_SC] text-[16px] uppercase text-center tracking-wider"
                  style={{ transform: "scaleY(1.15)" }}
                >
                  THE TELENOVELA
                  <br />
                  BUILDING
                </span>
              </div>
              <span className="absolute top-1 left-1 text-sm bg-white border px-1">02</span>
              <div className="absolute inset-0 flex items-center justify-center text-5xl text-black/80">
                🔒
              </div>
            </div>

            {/* CARD 3 – locked */}
            <div className="relative w-[200px] aspect-[3/5] border-4 border-black rounded-md bg-[#FFB3DD] overflow-hidden opacity-40">
              <div className="h-[70%] flex items-center justify-center text-6xl">🎨</div>
              <div className="h-[30%] bg-white border-t-4 border-black flex items-center justify-center">
                <span
                  className="font-[IM_Fell_English_SC] text-[16px] uppercase text-center tracking-wider"
                  style={{ transform: "scaleY(1.15)" }}
                >
                  THE ART HEIST
                  <br />
                  SETUP
                </span>
              </div>
              <span className="absolute top-1 left-1 text-sm bg-white border px-1">03</span>
              <div className="absolute inset-0 flex items-center justify-center text-5xl text-black/80">
                🔒
              </div>
            </div>
          </div>

          <p className="text-center text-gray-600 text-sm mt-4">
            Complete missions to unlock more adventures…
          </p>

          {/* ================= UNLOCKS ================= */}
          <div className="mt-6 pt-6 border-t">
            <h3 className="text-xl font-bold text-center text-gray-800 mb-4">🔓 Unlocks</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Survival Guide Unlock */}
              <button
                onClick={handleSurvivalGuideClick}
                title={survivalGuideUnlocked ? "Click to open Survival Guide" : "Click to unlock"}
                className={`w-full text-left rounded-xl border-2 p-4 transition-all cursor-pointer hover:shadow-md hover:scale-[1.01] ${
                  survivalGuideUnlocked ? "bg-green-50 border-green-300" : "bg-gray-50 border-gray-200"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl mt-[2px]">📘</div>
                    <div>
                      <p className="font-bold text-base">Mexican Spanish Survival Guide</p>
                      <p className="text-sm text-gray-600 mt-1">
                        {survivalGuideUnlocked ? "Unlocked — click to open" : "Click to unlock"}
                      </p>
                    </div>
                  </div>

                  <div className="text-xl">{survivalGuideUnlocked ? "✅" : "🔒"}</div>
                </div>
              </button>

              {/* Founder Badge */}
              <button
                onClick={handleFounderBadgeClick}
                title="Go to your profile (badge section coming soon)"
                className="w-full text-left rounded-xl border-2 p-4 transition-all cursor-pointer hover:shadow-md hover:scale-[1.01] bg-yellow-50 border-yellow-300"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl mt-[2px]">🏅</div>
                    <div>
                      <p className="font-bold text-base">MexiVerse Founder Badge</p>
                      <p className="text-sm text-gray-600 mt-1">
                        View on your profile (badge UI coming soon)
                      </p>
                    </div>
                  </div>

                  <div className="text-xl">→</div>
                </div>
              </button>
            </div>

            <p className="text-center text-xs text-gray-500 mt-4">
              Unlocks are saved locally for now (localStorage).
            </p>
          </div>
        </div>

        {/* FORUM SECTION */}
        <ForumSection wordSlug={null} isMainForum={true} />
      </div>
    </div>
  );
}
