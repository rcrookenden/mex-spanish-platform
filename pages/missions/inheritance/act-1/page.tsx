// File: app/acts/page.tsx
"use client";
import Link from "next/link";

export default function ActsIndex() {
  const acts = [
    { id: 1, title: "Scene 1 — The Cold Shoulder", path: "/acts/act1" },
    { id: 2, title: "Scene 2 — The Ghost Booking + SuperChunk (¿Cómo que…?)", path: "/acts/act2" },
    { id: 3, title: "Scene 3 — It WAS There…", path: "/acts/act3" },
    { id: 4, title: "Scene 4 — It WAS There… + SuperChunk (Se me hace que…)", path: "/acts/act4" },
  ];

  return (
    <main className="min-h-screen bg-[#0a1417] text-slate-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-black text-emerald-300 mb-8">🔑 The Inheritance Mystery</h1>
      <div className="space-y-4 w-full max-w-xl">
        {acts.map((act) => (
          <Link
            key={act.id}
            href={act.path}
            className="block rounded-2xl px-6 py-4 bg-emerald-300 text-slate-900 font-extrabold text-lg hover:bg-emerald-200 transition shadow"
          >
            {act.title}
          </Link>
        ))}
      </div>
    </main>
  );
}
