// pages/api/saveFlashcard.js

import { getServerSession } from "next-auth";
import { authOptions } from "../../app/api/auth/[...nextauth]/route";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // 1️⃣ Get NextAuth session
  const session = await getServerSession(req, res, authOptions);
  if (!session || !session.user?.email) {
    console.error("❌ Not authenticated");
    return res.status(401).json({ error: "Not authenticated" });
  }

  const userEmail = session.user.email;
  console.log("➡️ Authenticated user:", userEmail);

  // 2️⃣ Create Supabase client (server-side)
  const supabase = createServerSupabaseClient({ req, res });

  // 3️⃣ Find or create profile
  let { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("id")
    .eq("email", userEmail)
    .single();

  if (profileError) {
    console.warn("⚠️ Profile lookup error:", profileError);
  }

  if (profileError && profileError.code === "PGRST116") {
    console.log("➡️ Profile not found — creating new profile...");

    const { data: newProfile, error: createError } = await supabase
      .from("profiles")
      .insert({ email: userEmail })
      .select()
      .single();

    if (createError) {
      console.error("❌ Profile creation error:", createError);
      return res.status(500).json({ error: "Could not create profile" });
    }

    profile = newProfile;
  }

  if (!profile) {
    console.error("❌ Profile lookup failed completely");
    return res.status(500).json({ error: "Profile lookup failed" });
  }

  const userId = profile.id;
  console.log("➡️ Using profile ID:", userId);

  // 4️⃣ Extract flashcard payload
  const { flashcard } = req.body;

  if (!flashcard) {
    console.error("❌ Missing flashcard data");
    return res.status(400).json({ error: "Missing flashcard data" });
  }

  // Ensure correct review date format (DATE column requires YYYY-MM-DD)
  flashcard.next_review = new Date().toISOString().slice(0, 10);

  // Server ALWAYS controls user_id
  flashcard.user_id = userId;

  console.log("➡️ Flashcard payload before upsert:", flashcard);

  // 5️⃣ Insert flashcard into Supabase
  const { data, error } = await supabase
    .from("flashcards")
    .upsert(flashcard)
    .select();

  if (error) {
    console.error("❌ FLASHCARD UPSERT ERROR ---------------------");
    console.error("Message:", error.message);
    console.error("Details:", error.details);
    console.error("Hint:", error.hint);
    console.error("Code:", error.code);
    console.error("Full error:", error);
    console.error("--------------------------------------------------");

    return res.status(500).json({
      error: "Flashcard save failed",
      supabase: error,
    });
  }

  console.log("✅ Flashcard saved:", data);

  return res.status(200).json({ success: true, card: data });
}
