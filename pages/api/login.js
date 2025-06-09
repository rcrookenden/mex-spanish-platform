import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";

export default async function handler(req, res) {
  const supabase = createServerSupabaseClient({ req, res });

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:3000/profile-setup"
    }
  });

  if (error) {
    console.error("Error during sign in:", error);
    return res.status(400).json({ error: error.message });
  }

  // 🚨 Supabase gives us the URL to redirect the user to:
  const { url } = data;

  if (url) {
    // Do a real redirect to the Google OAuth URL
    res.redirect(url);
  } else {
    res.status(500).json({ error: "No redirect URL returned by Supabase." });
  }
}
