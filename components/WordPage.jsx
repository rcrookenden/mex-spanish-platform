import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import confetti from "canvas-confetti";
import toast from "react-hot-toast";

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
    const words = ["/word/chela", "/word/chido"];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    router.push(randomWord);
  };

  const handleSaveFlashcard = async () => {
    if (!session || !session.user || !session.user.id) {
      toast.error("Please log in to save flashcards.");
      return;
    }

    setSaving(true);

    const meanings = wordData.meaning
      .split(/\n?\d+\.\s+/)
      .filter(Boolean)
      .map(str => str.trim());

    const examples = wordData.examples || [];
    const audioUrls = wordData.audioUrls || [];

    try {
      for (let i = 0; i < meanings.length; i++) {
        const insertData = {
          user_id: session.user.id,
          slug: wordData.slug || wordData.title.toLowerCase(),
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
        if (error) throw error;
      }

      confetti({ particleCount: 100, spread: 70 });
      toast.success("All flashcards saved!");
      setSaved(true);
    } catch (error) {
      toast.error("Could not save all flashcards.");
      console.error("Error saving flashcards:", error);
    }

    setSaving(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShakeLucky(true);
    }, 15000);
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

      <div className="max-w-6xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-2xl flex flex-col lg:flex-row gap-10">
        {/* LEFT SIDE */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="text-center lg:text-left">
            <div className="flex flex-wrap items-end gap-2 justify-center lg:justify-start mb-6 border-b-4 border-red-600 pb-4">
              <h1 className="text-5xl sm:text-6xl font-extrabold text-green-700">{wordData.title}</h1>
              <span className="text-3xl text-gray-500 font-medium">({wordData.partOfSpeech})</span>
              <button className="ml-4 text-4xl transition-transform transform hover:scale-125 cursor-pointer hover:animate-pulse">🔊</button>
            </div>
            <div className="flex justify-center lg:justify-start gap-3 flex-wrap mt-4">
              {wordData.tags.map((tag, index) => (
                <span key={index} className={`tag ${tag.color} px-3 py-1 rounded-full text-md font-semibold`}>
                  {tag.label}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl">
            <h2 className="text-3xl font-bold text-green-700 mb-3">Meanings / Uses:</h2>
            <p className="text-xl font-semibold whitespace-pre-line">{wordData.meaning}</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl">
            <h2 className="text-3xl font-bold text-green-700 mb-4">Examples:</h2>
            <ul className="space-y-6 text-lg font-semibold">
              {wordData.examples.map((ex, i) => (
                <li key={i} className="relative pl-6">
                  <span className="absolute left-0">-</span>
                  <div>
                    <span className="block ml-2 leading-snug whitespace-pre-wrap">{ex.spanish}</span>
                    <span className="block ml-2 mt-1 text-gray-600 italic font-normal leading-snug whitespace-pre-wrap">{ex.english}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl">
            <h2 className="text-3xl font-bold text-green-700 mb-3">Similar words:</h2>
            <p className="text-lg font-semibold">{wordData.similarWords.join(" // ")}</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl">
            <h2 className="text-3xl font-bold text-green-700 mb-4">Useful Chunks:</h2>
            <ul className="list-disc list-outside space-y-3 text-lg font-semibold pl-6">
              {wordData.usefulChunks.map((chunk, i) => (
                <li key={i}>{chunk.chunk} = {chunk.translation}</li>
              ))}
            </ul>
          </div>

          <div className="text-center lg:text-left mt-4 flex flex-col gap-4">
            <button
              onClick={handleSaveFlashcard}
              disabled={saving || saved}
              className={`bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-full text-2xl shadow-md ${saved ? "bg-green-600 hover:bg-green-700" : ""}`}
            >
              {saved ? "✅ Saved to Deck" : saving ? "Saving..." : "⭐ Save to Flashcards"}
            </button>

            <button
              onClick={handleLuckyClick}
              className={`bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded-full text-lg shadow-md ${shakeLucky ? "animate-shake" : ""}`}
              style={shakeLucky ? { animation: "shake 0.5s infinite" } : {}}
            >
              🎲 Are you feeling lucky?
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 flex flex-col gap-6">
          <div>
            <button onClick={() => setShowNote(!showNote)} className="w-full flex justify-between items-center bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-full font-bold text-xl cursor-pointer">
              Rupert’s Note <span>{showNote ? "−" : "+"}</span>
            </button>
            {showNote && (
              <div className="mt-2 p-5 bg-gray-100 rounded-xl text-lg font-semibold whitespace-pre-line">{wordData.notes}</div>
            )}
          </div>

          <div>
            <button onClick={() => setShowPronunciation(!showPronunciation)} className="w-full flex justify-between items-center bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-4 rounded-full font-bold text-xl cursor-pointer">
              Pronunciation <span>{showPronunciation ? "−" : "+"}</span>
            </button>
            {showPronunciation && (
              <div className="mt-2 p-5 bg-gray-100 rounded-xl flex flex-col gap-6 items-center">
                {['Mexico City', 'Yucatán', 'Monterrey'].map((region, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <button className="text-5xl cursor-pointer hover:animate-pulse">🔊</button>
                    <span className="text-lg font-semibold text-gray-700">{region}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <button onClick={() => setShowContext(!showContext)} className="w-full flex justify-between items-center bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-full font-bold text-xl cursor-pointer">
              In the Wild <span>{showContext ? "−" : "+"}</span>
            </button>
            {showContext && (
              <div className="mt-2 p-5 bg-gray-100 rounded-xl text-lg font-semibold flex flex-col gap-4">
                <div className="flex justify-center">
                  <button className="text-4xl cursor-pointer hover:animate-pulse">🔊</button>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  {wordData.conversation.map((line, i) => (
                    <div key={i}>
                      <span>{`— ${line.spanish}`}</span>
                      <p className="text-gray-600 italic font-normal">{`— ${line.english}`}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="bg-white border-4 border-blue-700 p-4 sm:p-6 rounded-3xl shadow-xl relative overflow-hidden">
            <h2 className="text-3xl font-extrabold text-blue-800 mb-4 text-center border-b-4 border-yellow-400 pb-2">🎥 Quick Class</h2>
            <div className="relative pt-[56.25%] rounded-xl overflow-hidden ring-4 ring-yellow-400">
              {wordData.video ? (
                <iframe className="absolute top-0 left-0 w-full h-full" src={wordData.video} title={`Video example for ${wordData.title}`} allowFullScreen />
              ) : (
                <div className="absolute top-0 left-0 w-full h-full bg-gray-100 flex items-center justify-center text-xl font-semibold text-gray-700 p-6 text-center">
                  Sorry, there's no video for this word (yet!) 😓
                </div>
              )}
            </div>
          </div>

          <div>
            <button onClick={() => setShowQuiz(!showQuiz)} className="w-full flex justify-between items-center bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-4 rounded-full text-xl font-bold cursor-pointer">
              Quiz <span>{showQuiz ? "−" : "+"}</span>
            </button>
            {showQuiz && (
              <div className="mt-2 p-5 bg-gray-100 rounded-xl flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <p className="text-lg font-bold">{wordData.quiz.q1.question}</p>
                  <div className="flex flex-col gap-3">
                    <button onClick={() => { setAnswer1("correct"); setLocked1(true); confetti({ particleCount: 100, spread: 70 }); }} disabled={locked1} className={`cursor-pointer px-4 py-3 rounded-lg text-lg font-semibold ${locked1 ? "bg-green-400" : "bg-white hover:bg-blue-100"}`}>{wordData.quiz.q1.correct}</button>
                    <button onClick={() => { setAnswer1("wrong"); setLocked1(true); }} disabled={locked1} className={`cursor-pointer px-4 py-3 rounded-lg text-lg font-semibold ${locked1 ? "bg-red-400" : "bg-white hover:bg-blue-100"}`}>{wordData.quiz.q1.wrong}</button>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-lg font-bold">{wordData.quiz.q2.question}</p>
                  <div className="flex flex-col gap-3">
                    <button onClick={() => { setAnswer2("wrong"); setLocked2(true); }} disabled={locked2} className={`cursor-pointer px-4 py-3 rounded-lg text-lg font-semibold ${locked2 ? "bg-red-400" : "bg-white hover:bg-blue-100"}`}>{wordData.quiz.q2.wrong}</button>
                    <button onClick={() => { setAnswer2("correct"); setLocked2(true); confetti({ particleCount: 100, spread: 70 }); }} disabled={locked2} className={`cursor-pointer px-4 py-3 rounded-lg text-lg font-semibold ${locked2 ? "bg-green-400" : "bg-white hover:bg-blue-100"}`}>{wordData.quiz.q2.correct}</button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-10 flex justify-center">
            <img src={wordData.cartoonImage} alt="Cartoon" className="w-80 h-auto sm:w-96" />
          </div>

          <div className="mt-10 p-6 bg-white rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">💬 Community Discussion</h2>
            <p className="text-gray-600">Forum coming soon — you'll be able to share your own examples, ask questions, or just mess around 😎</p>
          </div>
        </div>
      </div>
    </div>
  );
}
