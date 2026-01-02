// components/NavBar.jsx
import Link from "next/link";
import { useRouter } from "next/router";
import confetti from "canvas-confetti";
import words from "../data/words";
import chunks from "../data/chunks";
import { useSession } from "next-auth/react";

export default function NavBar() {
  const router = useRouter();
  const { data: session } = useSession();

  const handleRandom = (type) => {
    const list = type === "word" ? words : chunks;
    const randomSlug = list[Math.floor(Math.random() * list.length)].slug;
    confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
    router.push(`/${type}/${randomSlug}`);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-white via-[#fef6ea] to-white shadow-md border-b border-green-200 py-3 px-4 flex justify-between items-center text-sm md:text-base backdrop-blur-md">
      <Link
        href="/"
        className="font-bold text-green-700 aztec text-xl md:text-2xl hover:scale-105 transition-transform"
      >
        🌵 The MexiVerse 💀
      </Link>

      <div className="flex gap-2 md:gap-4 items-center">

        <Link
          href="/chunks-browser"
          className="cursor-pointer px-3 py-1 md:px-4 md:py-2 rounded-full 
                     border border-green-500 text-green-700 bg-white 
                     hover:bg-green-100 hover:shadow-md transition"
        >
          ⚡ Chunks
        </Link>

        <Link
          href="/community"
          className="cursor-pointer px-3 py-1 md:px-4 md:py-2 rounded-full
                     border border-green-500 text-green-700 bg-white
                     hover:bg-green-100 hover:shadow-md transition"
        >
          🏆 Community
        </Link>

        <button
          onClick={() => handleRandom("word")}
          className="cursor-pointer px-3 py-1 md:px-4 md:py-2 rounded-full 
                     border border-green-500 text-green-700 bg-white 
                     hover:bg-green-100 hover:shadow-md transition"
        >
          🎲 Word
        </button>

        <button
          onClick={() => handleRandom("chunk")}
          className="cursor-pointer px-3 py-1 md:px-4 md:py-2 rounded-full 
                     border border-green-500 text-green-700 bg-white 
                     hover:bg-green-100 hover:shadow-md transition"
        >
          🎲 Chunk
        </button>

        {session?.user && (
          <Link
            href="/deck"
            className="cursor-pointer px-3 py-1 md:px-4 md:py-2 rounded-full 
                       border border-yellow-500 text-yellow-800 bg-yellow-100 
                       hover:bg-yellow-200 hover:shadow-md transition"
          >
            🌟 Saved
          </Link>
        )}
      </div>
    </nav>
  );
}
