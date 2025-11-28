/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

export default function PayPage() {
  const [loading, setLoading] = useState(false);

  const checkout = async (priceId) => {
    setLoading(true);
    const res = await fetch("/api/create-checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ priceId })
    });
    const { url } = await res.json();
    window.location.href = url;
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-20 flex flex-col items-center">

      {/* HERO */}
      <h1 className="text-5xl font-extrabold text-green-700 text-center mb-4 leading-tight">
        The Mexican Spanish World 🌶💀  
      </h1>
      <p className="text-lg text-gray-700 text-center max-w-2xl mb-10">
        Learn the Spanish that Mexicans actually speak —  
        slang, rhythm, tone, jokes, street-chunks,
        real phrases from taquerías, Ubers, cantinas & life.
      </p>

      {/* CAN YOU RELATE? */}
      <div className="max-w-xl mb-14">
        <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">Can you relate?</h2>
        <ul className="space-y-3 text-gray-700 text-lg">
          <li>👉 Duolingo is fine… but native Mexicans speak too fast, too real.</li>
          <li>👉 Sometimes you think “WTF did they just say?” in social situations.</li>
          <li>👉 You hear phrases at the taco stand you’ve *never* seen in a textbook.</li>
          <li>👉 You love Mexico — or Mexicans — and want to actually sound like one.</li>
          <li>👉 Slang confuses the hell out of you & you want clarity, not chaos.</li>
          <li>👉 You don’t want to sound like a gringo forever. (Real talk.)</li>
        </ul>
      </div>

      {/* FOUNDER STORY — TRIMMED + STRONGER */}
      <div className="max-w-xl text-center mb-20 text-gray-700 leading-relaxed text-lg">
        <p className="mb-4">
          10 years ago, I was exactly where you are.
          Comfortable in Spanish — but totally unprepared for Mexican Spanish.
        </p>
        <p className="mb-4">
          I’d studied, I’d practiced, but Mexico hit different.
          Suddenly it wasn’t textbook dialogues — it was:
        </p>
        <p className="font-semibold mb-4">
          “¿Qué te voy a dar, güero?”  
          “¡Ándale pues!”  
          “De a litro, joven.”  
        </p>
        <p>
          No one online was teaching that.  
          So we built it ourselves — then levelled it up into a full platform.
        </p>
      </div>

      {/* BENEFITS (updated for platform) */}
      <ul className="text-lg text-left space-y-3 mb-12 w-full max-w-lg">
        <li>🌮 1,000+ street-real Mexican chunks (and counting)</li>
        <li>🎧 Native audio (Chilango · Regio · Yucateco)</li>
        <li>🧠 Flashcards + spaced repetition + streaks + XP</li>
        <li>🏆 Weekly challenges, leagues, missions, story worlds</li>
        <li>💬 Vulgarities, flirting, jokes, nuance — the fun part</li>
        <li>💀 Textbook Spanish is banned here.</li>
      </ul>

      {/* PRICING BUTTONS */}
      <div className="w-full max-w-sm space-y-4 text-center mb-14">
        <button
          onClick={() => checkout("price_1SYWKiELKbLXZoEh3G60ztqv")}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl text-xl font-bold shadow-md"
          disabled={loading}
        >
          $12/month — Join Now 🔥
        </button>

        <button
          onClick={() => checkout("price_1SYWLuELKbLXZoEhE7DL0jAm")}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-4 rounded-xl text-xl font-bold shadow-md"
          disabled={loading}
        >
          $99/year — Best Value ⚡ (save 31%)
        </button>

        <p className="text-sm text-gray-500 italic mt-2">
          Founding price — goes up soon.
        </p>
        <p className="text-xs text-gray-400 mt-2">
          Cancel anytime. Instant access.
        </p>
      </div>

      {/* FAQ (selected strongest Qs from old page) */}
      <div className="mt-10 w-full max-w-xl space-y-6 text-gray-700">
        <h2 className="text-2xl font-bold text-green-700">FAQs 🤔</h2>

        <div>
          <h3 className="font-semibold">What level do I need?</h3>
          <p>A2/B1+ ideal. Not for absolute beginners.</p>
        </div>
        <div>
          <h3 className="font-semibold">Do I get everything?</h3>
          <p>Yes — full access to chunks, audio, flashcards, missions, slang, EVERYTHING.</p>
        </div>
        <div>
          <h3 className="font-semibold">How long do I have access?</h3>
          <p>As long as you're subscribed. New content added weekly.</p>
        </div>
      </div>
    </div>
  );
}
