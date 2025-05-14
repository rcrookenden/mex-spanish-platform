"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;

  if (session) {
    return (
      <div className="flex items-center gap-3">
        <img
          src={session.user.image}
          alt="Avatar"
          className="w-8 h-8 rounded-full"
        />
        <span>{session.user.name}</span>
        <button onClick={() => signOut()} className="text-red-500 underline">
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn("google", { callbackUrl: "/" })}
      className="text-blue-600 underline"
    >
      Sign In with Google
    </button>
  );
}