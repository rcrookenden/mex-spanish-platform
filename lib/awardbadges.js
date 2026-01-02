import confetti from "canvas-confetti";

export async function fetchUnlockedBadges(supabase, uid) {
  const { data, error } = await supabase
    .from("user_achievements")
    .select(`
      achievement_id,
      unlocked_at,
      achievements:achievement_id (
        id, code, name, category, icon, points
      )
    `)
    .eq("user_id", uid)
    .order("unlocked_at", { ascending: false });

  if (error) throw error;

  return (data || []).map((row) => ({
    id: row.achievements.id,
    code: row.achievements.code,
    name: row.achievements.name,
    category: row.achievements.category,
    icon: row.achievements.icon,
    points: row.achievements.points,
    unlocked_at: row.unlocked_at,
  }));
}

export async function awardBadgesAndGetNewOnes(supabase, uid) {
  const before = await fetchUnlockedBadges(supabase, uid);

  const { error } = await supabase.rpc("check_user_achievements", {
    p_user_id: uid,
  });
  if (error) throw error;

  const after = await fetchUnlockedBadges(supabase, uid);

  const beforeIds = new Set(before.map((b) => b.id));
  const newlyUnlocked = after.filter((b) => !beforeIds.has(b.id));

  if (newlyUnlocked.length) {
    confetti({ particleCount: 140, spread: 80, origin: { y: 0.6 } });
  }

  return { newlyUnlocked, unlocked: after };
}
