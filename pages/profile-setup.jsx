import { useEffect, useState } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

const AVATAR_CHOICES = [
  "/images/avatar-1.png",
  "/images/avatar-2.png",
  "/images/avatar-3.png",
  "/images/avatar-4.png",
  "/images/avatar-5.png",
  "/images/avatar-6.png",
];

export default function ProfileSetupPage() {
  const supabase = useSupabaseClient();
  const session = useSession();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState(AVATAR_CHOICES[0]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkProfile = async () => {
      if (!session?.user) return;

      const { data } = await supabase
        .from("profiles")
        .select("id")
        .eq("email", session.user.email)
        .single();

      if (data) {
        router.push("/community");
      } else {
        setLoading(false);
      }
    };

    checkProfile();
  }, [session, supabase, router]);

  const handleProfileSetup = async () => {
    if (!username) {
      alert("Please choose a username!");
      return;
    }

    const { error } = await supabase.from("profiles").insert({
      id: session.user.id,
      username,
      avatar_url: selectedAvatar,
    });

    if (error) {
      alert("Profile creation failed: " + error.message);
    } else {
      alert("Profile setup complete! 🎉");
      router.push("/community");
    }
  };

  if (loading) return <p className="text-center mt-8">Loading...</p>;

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md mt-10">
      <h2 className="text-3xl font-extrabold text-center text-green-700 mb-4">
        🌟 Set up your profile
      </h2>
      <p className="text-gray-600 text-center mb-6">Choose a username and an avatar.</p>

      <input
        type="text"
        placeholder="Choose a username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="block w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
      />

      <div className="mb-4 text-center">
        <p className="text-gray-600 mb-2">Choose an avatar:</p>
        <div className="grid grid-cols-3 gap-4 justify-items-center">
          {AVATAR_CHOICES.map((avatar) => (
            <div
              key={avatar}
              className={`p-1 rounded-full ${
                selectedAvatar === avatar ? "ring-4 ring-green-500" : ""
              }`}
              onClick={() => setSelectedAvatar(avatar)}
            >
              <img
                src={avatar}
                alt="Avatar"
                className="w-20 h-20 rounded-full cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleProfileSetup}
        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded font-bold transition-colors duration-200 cursor-pointer"
      >
        Save Profile
      </button>
    </div>
  );
}
