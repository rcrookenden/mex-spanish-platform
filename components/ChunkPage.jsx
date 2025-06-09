import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import confetti from "canvas-confetti";
import toast from "react-hot-toast";
import chunks from "../data/chunks";
import ForumSection from "../components/ForumSection";

export default function ChunkPage({ chunkData }) {
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [shakeLucky, setShakeLucky] = useState(false);
  const [showPronunciation, setShowPronunciation] = useState(false);

  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();

  const handleLuckyClick = () => {
    const allSlugs = chunks.map((chunk) => `/chunk/${chunk.slug}`);
    const random = allSlugs[Math.floor(Math.random() * allSlugs.length)];
    confetti({ particleCount: 100, spread: 70 });
    router.push(random);
  };

  const handleSaveFlashcard = async () => {
    if (!session || !session.user?.id) {
      toast.error("Please log in to save flashcards.");
      return;
    }

    setSaving(true);

    const insertData = {
      user_id: session.user.id,
      slug: chunkData.slug,
      type: "chunk",
      front_text: chunkData.meaning,
      back_text: chunkData.title,
      example: chunkData.examples?.[0]?.spanish || null,
      example_english: chunkData.examples?.[0]?.english || null,
      audio_url: chunkData.audioUrls?.[0] || null,
      image_url: null,
      ease: 2.5,
      interval: 1,
      repetitions: 0,
      next_review: new Date().toISOString().slice(0, 10),
    };

    const { error } = await supabase.from("flashcards").insert(insertData);

    if (error) {
      if (error.code === "23505") {
        toast.error("⚠️ You’ve already saved this flashcard!");
      } else {
        console.error("❌ Save failed:", error);
        toast.error("❌ Could not save flashcard: " + error.message);
      }
      setSaving(false);
      return;
    }

    confetti({ particleCount: 100, spread: 70 });
    toast.success("✅ Flashcard saved!");
    setSaved(true);
    setSaving(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => setShakeLucky(true), 15000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-gray-800 p-4 sm:p-8 font-baloo">
      <Head>
        <title>{chunkData.title} (chunk) 🔊 | Learn Real Mexican Spanish 💀</title>
        <meta
          name="description"
          content={`Master the chunk "${chunkData.title}" in Mexican Spanish — meaning, usage, and examples.`}
        />
      </Head>

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6">
          {/* Title & Audio */}
          <div className="text-left">
            <div className="pb-2">
              <div className="flex flex-wrap justify-center sm:justify-start items-end gap-2 w-full">
                <h1 className="text-4xl sm:text-6xl font-extrabold text-green-700 text-center sm:text-left w-full sm:w-auto">
                  {chunkData.title}
                </h1>
                <div className="flex items-center gap-2 justify-center sm:justify-start w-full sm:w-auto">
                  <span className="text-[1.8rem] text-gray-500 font-medium">(chunk)</span>
                  <button
                    onClick={() => chunkData.audioUrls?.[0] && new Audio(chunkData.audioUrls[0]).play()}
                    className="text-4xl ml-3 hover:scale-125 transition-transform cursor-pointer hover:animate-pulse"
                  >
                    🔊
                  </button>
                </div>
              </div>
            </div>

            <div className="border-b-4 border-red-600 mt-1 mb-5"></div>
            <div className="flex gap-3 flex-wrap pl-1 mb-0">
              {chunkData.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`${tag.color} px-3 py-1 rounded-full text-md font-semibold`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>

          {/* Meaning */}
          <section className="bg-gray-100 p-6 rounded-xl">
            <h2 className="text-3xl font-bold text-green-700 mb-3">Meaning:</h2>
            <p className="text-xl font-semibold whitespace-pre-line">{chunkData.meaning}</p>
          </section>

          {/* Explanation */}
          <section className="bg-gray-100 p-6 rounded-xl">
            <h2 className="text-3xl font-bold text-green-700 mb-3">Explanation:</h2>
            <p
              className="text-lg whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: chunkData.explanation }}
            />
          </section>

          {/* Buttons */}
          <div className="flex flex-col gap-4 mt-4 text-center lg:text-left">
            <button
              onClick={handleSaveFlashcard}
              disabled={saving || saved}
              className={`bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-full text-2xl shadow-md cursor-pointer ${
                saved ? "bg-green-600 hover:bg-green-700" : ""
              }`}
            >
              {saved ? "✅ Saved to Deck" : saving ? "Saving..." : "⭐ Save to Flashcards"}
            </button>
            <button
              onClick={handleLuckyClick}
              className={`bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded-full text-lg shadow-md cursor-pointer ${
                shakeLucky ? "animate-shake" : ""
              }`}
            >
              🎲 Are you feeling lucky?
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-6">
          {/* Pronunciation */}
          <div>
            <button
              onClick={() => setShowPronunciation(!showPronunciation)}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-4 rounded-full font-bold text-xl cursor-pointer"
            >
              Pronunciation {showPronunciation ? "−" : "+"}
            </button>
            {showPronunciation && (
              <div className="mt-2 p-5 bg-gray-100 rounded-xl flex flex-col gap-6 items-center">
                {["Mexico City", "Yucatán", "Monterrey"].map((region, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <button className="text-5xl cursor-pointer hover:animate-pulse">🔊</button>
                    <span className="text-lg font-semibold text-gray-700">{region}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Examples */}
          <section className="bg-gray-100 p-6 rounded-xl">
            <h2 className="text-3xl font-bold text-green-700 mb-4">Examples:</h2>
            <ul className="space-y-6 text-lg font-semibold">
              {chunkData.examples.map((ex, i) => (
                <li key={i} className="relative pl-6">
                  <span className="absolute left-0">-</span>
                  <div className="ml-2 whitespace-pre-wrap">
                    <div className="flex items-center gap-2">
                      <span>{ex.spanish}</span>
                      <button
                        onClick={() => {
                          if (chunkData.audioUrls && chunkData.audioUrls[i]) {
                            new Audio(chunkData.audioUrls[i]).play();
                          }
                        }}
                        className={`text-2xl cursor-pointer hover:animate-pulse ${
                          chunkData.audioUrls && chunkData.audioUrls[i]
                            ? "hover:scale-125 transition-transform"
                            : "opacity-30 cursor-not-allowed"
                        }`}
                      >
                        🔊
                      </button>
                    </div>
                    <span className="block mt-1 text-gray-600 italic font-normal whitespace-pre-wrap">
                      {ex.english}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Video */}
          <div className="bg-white border-4 border-blue-700 p-4 sm:p-6 rounded-3xl shadow-xl relative overflow-hidden">
            <h2 className="text-3xl font-extrabold text-blue-800 mb-4 text-center border-b-4 border-yellow-400 pb-2">🎥 Quick Class</h2>
            <div className="relative pt-[56.25%] rounded-xl overflow-hidden ring-4 ring-yellow-400">
              {chunkData.video ? (
                <iframe className="absolute top-0 left-0 w-full h-full" src={chunkData.video} title={`Video example for ${chunkData.title}`} allowFullScreen />
              ) : (
                <div className="absolute top-0 left-0 w-full h-full bg-gray-100 flex items-center justify-center text-xl font-semibold text-gray-700 p-6 text-center">
                  Sorry, there's no video for this chunk (yet!) 😓
                </div>
              )}
            </div>
          </div>
        </div>

        {/* FULL-WIDTH FORUM */}
        <div className="md:col-span-2">
          <ForumSection wordSlug={chunkData.slug.toLowerCase()} />
        </div>
      </div>
    </div>
  );
}
