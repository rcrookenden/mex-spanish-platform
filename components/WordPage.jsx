import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import confetti from "canvas-confetti";
import toast from "react-hot-toast";
import ForumSection from "../components/ForumSection";
import words from "../data/words";

export default function WordPage({ wordData }) {
  const [showNote, setShowNote] = useState(false);
  const [showPronunciation, setShowPronunciation] = useState(false);
  const [showContext, setShowContext] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [shakeLucky, setShakeLucky] = useState(false);

  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [locked1, setLocked1] = useState(false);
  const [locked2, setLocked2] = useState(false);

  const session = useSession();
  const supabase = useSupabaseClient();
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const router = useRouter();

  const handleLuckyClick = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)].slug;
    confetti({ particleCount: 100, spread: 70 });
    router.push(`/word/${randomWord}`);
  };

  const handleSaveFlashcard = async () => {
    if (!session?.user?.id) {
      toast.error("Please log in to save flashcards.");
      return;
    }
    setSaving(true);

    const meanings = wordData.meaning
      .split(/\n?\d+\.\s+/)
      .filter(Boolean)
      .map((str) => str.trim());
    const examples = wordData.examples || [];
    const audioUrls = wordData.audioUrls || [];

    try {
      for (let i = 0; i < meanings.length; i++) {
        const insertData = {
          user_id: session.user.id,
          slug: wordData.slug,
          type: "word",
          front_text: meanings[i],
          back_text: wordData.title,
          example: examples[i]?.spanish || null,
          example_english: examples[i]?.english || null,
          image_url: wordData.cartoonImage || null,
          audio_url: audioUrls[i] || null,
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
      }
      confetti({ particleCount: 100, spread: 70 });
      toast.success("✅ All flashcards saved!");
      setSaved(true);
    } catch (error) {
      toast.error("Could not save all flashcards.");
      console.error(error);
    }
    setSaving(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => setShakeLucky(true), 15000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-gray-800 p-4 sm:p-8">
      <Head>
        <title>{wordData.title} | Master Mexican Spanish 💀🌵</title>
        <meta
          name="description"
          content={`Learn "${wordData.title}" like a real Mexican! Meaning, pronunciation, examples, and more.`}
        />
      </Head>

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6">
          <div className="text-center lg:text-left">
            <div className="flex flex-wrap items-end gap-2 justify-center lg:justify-start mb-6 border-b-4 border-red-600 pb-4">
              <h1 className="text-5xl sm:text-6xl font-extrabold text-green-700">
                {wordData.title}
              </h1>
              <span className="text-3xl text-gray-500 font-medium">
                ({wordData.partOfSpeech})
              </span>
              <button className="ml-4 text-4xl hover:animate-pulse cursor-pointer">🔊</button>
            </div>
            <div className="flex justify-center lg:justify-start gap-3 flex-wrap mt-4">
              {wordData.tags.map((tag, i) => (
                <span
                  key={i}
                  className={`tag ${tag.color} px-3 py-1 rounded-full text-md font-semibold`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>

          <section className="bg-gray-100 p-6 rounded-xl">
            <h2 className="text-3xl font-bold text-green-700 mb-3">Meanings / Uses:</h2>
            <p className="text-xl font-semibold whitespace-pre-line">
              {wordData.meaning}
            </p>
          </section>

          <section className="bg-gray-100 p-6 rounded-xl">
            <h2 className="text-3xl font-bold text-green-700 mb-4">Examples:</h2>
            <ul className="space-y-6 text-lg font-semibold">
              {wordData.examples.map((ex, i) => (
                <li key={i} className="relative pl-6">
                  <span className="absolute left-0">-</span>
                  <div>
                    <span className="block ml-2 whitespace-pre-wrap">
                      {ex.spanish}
                    </span>
                    <span className="block ml-2 mt-1 italic text-gray-600 whitespace-pre-wrap">
                      {ex.english}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-gray-100 p-6 rounded-xl">
            <h2 className="text-3xl font-bold text-green-700 mb-3">Similar words:</h2>
            <p className="text-lg font-semibold">{wordData.similarWords.join(" // ")}</p>
          </section>

          <section className="bg-gray-100 p-6 rounded-xl">
            <h2 className="text-3xl font-bold text-green-700 mb-4">Useful Chunks:</h2>
            <ul className="list-disc list-outside pl-6 space-y-3 text-lg font-semibold">
              {wordData.usefulChunks.map((chunk, i) => (
                <li key={i}>
                  {chunk.chunk} = {chunk.translation}
                </li>
              ))}
            </ul>
          </section>

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
          {/* Note */}
          <div>
            <button
              onClick={() => setShowNote(!showNote)}
              className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-full font-bold text-xl cursor-pointer"
            >
              Rupert’s Note {showNote ? "−" : "+"}
            </button>
            {showNote && (
              <div className="mt-2 bg-gray-100 p-5 rounded-xl text-lg font-semibold whitespace-pre-line">
                {wordData.notes}
              </div>
            )}
          </div>

          {/* Pronunciation */}
          <div>
            <button
              onClick={() => setShowPronunciation(!showPronunciation)}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-4 rounded-full font-bold text-xl cursor-pointer"
            >
              Pronunciation {showPronunciation ? "−" : "+"}
            </button>
            {showPronunciation && (
              <div className="mt-2 bg-gray-100 p-5 rounded-xl flex flex-col gap-6 items-center">
                {["Mexico City", "Yucatán", "Monterrey"].map((region, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <button className="text-5xl hover:animate-pulse cursor-pointer">🔊</button>
                    <span className="text-lg font-semibold">{region}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* In the Wild */}
          <div>
            <button
              onClick={() => setShowContext(!showContext)}
              className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-full font-bold text-xl cursor-pointer"
            >
              In the Wild {showContext ? "−" : "+"}
            </button>
            {showContext && (
              <div className="mt-2 bg-gray-100 p-5 rounded-xl">
                {wordData.conversation.map((line, i) => (
                  <div key={i} className="mb-2">
                    <span>— {line.spanish}</span>
                    <p className="italic text-gray-600">— {line.english}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick Class */}
          <div className="relative overflow-hidden bg-white border-4 border-blue-700 p-4 sm:p-6 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-extrabold text-blue-800 mb-4 border-b-4 border-yellow-400 pb-2 text-center">
              🎥 Quick Class
            </h2>
            <div className="relative pt-[56.25%] rounded-xl overflow-hidden ring-4 ring-yellow-400">
              {wordData.video ? (
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={wordData.video}
                  title={`Video example for ${wordData.title}`}
                  allowFullScreen
                />
              ) : (
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-xl text-gray-700 p-6 text-center">
                  Sorry, there's no video for this word (yet!) 😓
                </div>
              )}
            </div>
          </div>

          {/* Quiz */}
          <div>
            <button
              onClick={() => setShowQuiz(!showQuiz)}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-4 rounded-full font-bold text-xl cursor-pointer"
            >
              Quiz {showQuiz ? "−" : "+"}
            </button>
            {showQuiz && (
              <div className="mt-2 bg-gray-100 p-5 rounded-xl flex flex-col gap-8">
                {/* Q1 */}
                <div>
                  <p className="text-lg font-bold">{wordData.quiz.q1.question}</p>
                  <div className="flex flex-col gap-3 mt-2">
                    <button
                      onClick={() => {
                        setAnswer1("correct");
                        setLocked1(true);
                        confetti({ particleCount: 100, spread: 70 });
                      }}
                      disabled={locked1}
                      className={`rounded-lg px-4 py-3 text-lg font-semibold cursor-pointer ${
                        locked1 ? "bg-green-400" : "bg-white hover:bg-blue-100"
                      }`}
                    >
                      {wordData.quiz.q1.correct}
                    </button>
                    <button
                      onClick={() => {
                        setAnswer1("wrong");
                        setLocked1(true);
                      }}
                      disabled={locked1}
                      className={`rounded-lg px-4 py-3 text-lg font-semibold cursor-pointer ${
                        locked1 ? "bg-red-400" : "bg-white hover:bg-blue-100"
                      }`}
                    >
                      {wordData.quiz.q1.wrong}
                    </button>
                  </div>
                </div>
                {/* Q2 */}
                <div>
                  <p className="text-lg font-bold">{wordData.quiz.q2.question}</p>
                  <div className="flex flex-col gap-3 mt-2">
                    <button
                      onClick={() => {
                        setAnswer2("wrong");
                        setLocked2(true);
                      }}
                      disabled={locked2}
                      className={`rounded-lg px-4 py-3 text-lg font-semibold cursor-pointer ${
                        locked2 ? "bg-red-400" : "bg-white hover:bg-blue-100"
                      }`}
                    >
                      {wordData.quiz.q2.wrong}
                    </button>
                    <button
                      onClick={() => {
                        setAnswer2("correct");
                        setLocked2(true);
                        confetti({ particleCount: 100, spread: 70 });
                      }}
                      disabled={locked2}
                      className={`rounded-lg px-4 py-3 text-lg font-semibold cursor-pointer ${
                        locked2 ? "bg-green-400" : "bg-white hover:bg-blue-100"
                      }`}
                    >
                      {wordData.quiz.q2.correct}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-10 flex justify-center">
            <img
              src={wordData.cartoonImage}
              alt="Cartoon"
              className="w-80 sm:w-96 h-auto"
            />
          </div>
        </div>

        {/* FULL-WIDTH FORUM */}
        <div className="md:col-span-2">
          <ForumSection wordSlug={wordData.slug.toLowerCase()} />
        </div>
      </div>
    </div>
  );
}
