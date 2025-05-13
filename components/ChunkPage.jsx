import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export default function ChunkPage({ chunkData }) {
  const [showPronunciation, setShowPronunciation] = useState(false);
  const [userSentence, setUserSentence] = useState("");
  const [feedback, setFeedback] = useState("");
  const [shakeLucky, setShakeLucky] = useState(false);
  const router = useRouter();

  const handleLuckyClick = () => {
    const slugs = ["/chunk/no-manches", "/chunk/que-onda", "/chunk/ya-valio"];
    const random = slugs[Math.floor(Math.random() * slugs.length)];
    router.push(random);
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

      <div className="max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-2xl flex flex-col gap-10">
        <div className="text-left">
          <div className="pb-2">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-1">
              <div className="flex flex-wrap justify-center sm:justify-start items-end gap-2 w-full">
                <h1 className="text-4xl sm:text-6xl font-extrabold text-green-700 text-center sm:text-left w-full sm:w-auto">
                  {chunkData.title}
                </h1>
                <div className="flex items-center gap-2 justify-center sm:justify-start w-full sm:w-auto">
                  <span className="text-[1.8rem] text-gray-500 font-medium">(chunk)</span>
                  <button className="text-3xl hover:scale-125 transition-transform">🔊</button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b-4 border-red-600 mt-1 mb-5.5"></div>
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

        <div className="bg-gray-100 p-6 rounded-xl">
          <h2 className="text-3xl font-bold text-green-700 mb-3">Meaning:</h2>
          <p className="text-xl font-semibold whitespace-pre-line">{chunkData.meaning}</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl">
          <h2 className="text-3xl font-bold text-green-700 mb-3">Explanation:</h2>
          <p
            className="text-lg whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: chunkData.explanation }}
          />
        </div>

        <div className="bg-gray-100 p-6 rounded-xl">
          <h2 className="text-3xl font-bold text-green-700 mb-4">Examples:</h2>
          <ul className="space-y-6 text-lg font-semibold">
            {chunkData.examples.map((ex, i) => (
              <li key={i} className="relative pl-6">
                <span className="absolute left-0">-</span>
                <div>
                  <span className="block ml-2 leading-snug whitespace-pre-wrap">{ex.spanish}</span>
                  <span className="block ml-2 mt-1 text-gray-600 italic font-normal whitespace-pre-wrap">{ex.english}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl">
          <h2 className="text-3xl font-bold text-green-700 mb-3">Similar chunks:</h2>
          <p className="text-lg font-semibold">{chunkData.similarWords.join(" // ")}</p>
        </div>

        <div>
          <button
            onClick={() => setShowPronunciation(!showPronunciation)}
            className="w-full flex justify-between items-center bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-4 rounded-full font-bold text-xl"
          >
            Pronunciation <span>{showPronunciation ? "−" : "+"}</span>
          </button>
          {showPronunciation && (
            <div className="mt-2 p-5 bg-gray-100 rounded-xl flex flex-col gap-6 items-center">
              {["Mexico City", "Yucatán", "Monterrey"].map((region, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <button className="text-5xl">🔊</button>
                  <span className="text-lg font-semibold text-gray-700">{region}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white border-4 border-blue-700 p-4 sm:p-6 rounded-3xl shadow-xl relative overflow-hidden">
          <h2 className="text-3xl font-extrabold text-blue-800 mb-4 text-center border-b-4 border-yellow-400 pb-2">
            🎥 Quick Class
          </h2>
          <div className="relative pt-[56.25%] rounded-xl overflow-hidden ring-4 ring-yellow-400">
            {chunkData.video ? (
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={chunkData.video}
                title={`Video for ${chunkData.title}`}
                allowFullScreen
              />
            ) : (
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-4 text-center">
                <span className="text-xl sm:text-2xl font-semibold text-gray-700">
                  Sorry, there's no video for this chunk (yet!) 😓
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl">
          <h2 className="text-2xl font-bold text-green-700 mb-3">✍️ Write Your Own Sentence:</h2>
          <textarea
            value={userSentence}
            onChange={(e) => setUserSentence(e.target.value)}
            placeholder={`Use "${chunkData.title}" in a sentence...`}
            className="w-full p-4 rounded-lg border border-gray-300 text-lg"
            rows={3}
          />
          <button
            onClick={() => setFeedback("✅ Looks good! (AI feedback coming soon!)")}
            className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded-full text-lg shadow-md"
          >
            Check My Sentence
          </button>
          {feedback && <p className="mt-4 text-green-700 font-semibold">{feedback}</p>}
        </div>

        <div className="text-center flex flex-col gap-4 mt-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full text-2xl shadow-md">
            ⭐ Save to Word List
          </button>
          <button
            onClick={handleLuckyClick}
            className={`bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded-full text-lg shadow-md ${shakeLucky ? "animate-shake" : ""}`}
            style={shakeLucky ? { animation: "shake 0.5s infinite" } : {}}
          >
            🎲 Are you feeling lucky?
          </button>
        </div>

        <div className="mt-10 p-6 bg-white rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">💬 Community Discussion</h2>
          <p className="text-gray-600">
            Forum coming soon — you'll be able to share your own examples, ask questions, or just mess around 😎
          </p>
        </div>
      </div>
    </div>
  );
}
