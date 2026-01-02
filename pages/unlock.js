/* eslint-disable react/no-unescaped-entities */
import { useSession } from "next-auth/react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useState, useEffect } from "react";

export default function UnlockPage() {
  const { data: session } = useSession();
  const supabase = useSupabaseClient();

  const [loading, setLoading] = useState(true);
  const [isMember, setIsMember] = useState(false);

  useEffect(() => {
    const checkMembership = async () => {
      if (!session?.user?.email) {
        setLoading(false);
        setIsMember(false);
        return;
      }

      const { data, error } = await supabase
        .from("profiles")
        .select("is_member")
        .eq("email", session.user.email)
        .single();

      if (error) console.log("🐞 membership error:", error);
      setIsMember(data?.is_member === true);
      setLoading(false);
    };

    checkMembership();
  }, [session, supabase]);

  if (loading) {
    return <p style={{ padding: 40 }}>Checking membership...</p>;
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-20 flex flex-col items-center">
      {isMember ? (
        <>
          <h1 className="text-4xl font-extrabold text-green-700 mb-4 text-center">
            🎉 You’re already a member!
          </h1>
          <p className="text-center mb-8 text-lg text-gray-700 max-w-xl">
            You’ve unlocked The MexiVerse. Head back to your chunks, missions
            and flashcards and keep going. 💀🌶
          </p>
          <a
            href="/chunks-browser"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl text-lg font-bold shadow-md"
          >
            Go to Chunk Browser
          </a>
        </>
      ) : (
        <>
          <h1 className="text-4xl font-extrabold text-green-700 mb-4 text-center">
            Unlock The MexiVerse 🌶💀
          </h1>
          <p className="text-center mb-10 text-lg text-gray-700 max-w-xl">
            Full access requires membership. Join now to get native audio,
            flashcards, slang, missions, XP, streaks, & everything inside.
          </p>

          <div className="max-w-sm w-full space-y-4 text-center mb-10">
            <a
              href="/pay"
              className="block w-full bg-green-600 text-white py-4 rounded-xl text-xl font-bold shadow-md hover:bg-green-700"
            >
              Become a Member — Unlock Everything 🔥
            </a>

            <p className="text-sm text-gray-500 italic">
              Founding price — limited time only.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
