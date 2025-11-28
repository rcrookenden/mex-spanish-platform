import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import chunks from "../data/chunks";
import tagColors from "../lib/tagColors";

export default function ChunksBrowser() {
  const router = useRouter();

  const [activeFilters, setActiveFilters] = useState({
    difficulty: [],
    location: [],
    social: [],
    generation: [],
    tone: [],
    other: [],
    category: [],
  });

  const [filtered, setFiltered] = useState(chunks);

  // -------------------------
  // NORMALIZE CATEGORY FOR FILTERING
  // -------------------------
  const normalizeCategory = (str) =>
    str
      .toLowerCase()
      .replace(/🛟|🧱|💵|🧩|⌛|❓|🗣️|📖|🩼|😮|🌀|🤬|❤️|🥊|🪅|🧠/g, "")
      .trim();

  // -------------------------
  // FILTER DEFINITIONS (DISPLAY ONLY)
  // -------------------------

  const DIFFICULTY = [
    "A1 (¡Vas empezando!)",
    "A2 (¡Vas bien!)",
    "B1 (¡Ya le agarras la onda!)",
    "B2 (¡Nivelazo!)",
    "C1 (¡Eres un chingón!)",
  ];

  const LOCATION = [
    "Costeño 🌴",
    "Norteño 🐮",
    "Chilango 🚇",
    "Sureño 🐆",
    "Yucateco 🛕",
    "Fronterizo 🚧",
    "Used EVERYWHERE 🇲🇽",
  ];

  const SOCIAL = [
    "Fresa 🍓",
    "Barrio 🧢",
    "Queer 🏳️‍🌈",
    "Chavitos 👟",
    "Abuela-approved 👵",
  ];

  const GENERATION = ["Boomers 👶", "Gen X 🎸", "Millennial 😎", "Gen Z 👾"];

  const TONE = [
    "Formal 💼",
    "Colloquial 🗯️",
    "Slang 🌶️",
    "MUY informal 💀",
    "Standard Spanish 😌",
    "Standard Mexican Spanish 🌵",
  ];

  const OTHER = [
    "Academic 🤓",
    "Offensive (light) ⚠️",
    "Offensive (strong) ⚠️",
    "Offensive (extreme) ⚠️",
    "Rare 🦄",
    "Dated 📼",
  ];

  const CATEGORY = [
    "Survival chunks 🛟",
    "Everyday chunks 🧱",
    "Transactional chunks 💵",
    "Linguistic glue 🧩",
    "Time phrases ⌛",
    "Useful questions ❓",
    "Sentence starters 🗣️",
    "Story flow 📖",
    "Muletillas 🩼",
    "Emotional reactions 😮",
    "Slang 🌀",
    "Vulgarities (eek!) 🤬",
    "Flirting ❤️ & Fighting 🥊",
    "Sayings & Idioms 🪅",
    "Advanced 🧠",
  ];

  const filterGroups = [
    { key: "difficulty", label: "Difficulty", items: DIFFICULTY },
    { key: "location", label: "Location", items: LOCATION },
    { key: "social", label: "Social vibe", items: SOCIAL },
    { key: "generation", label: "Generation", items: GENERATION },
    { key: "tone", label: "Tone", items: TONE },
    { key: "other", label: "Other tags", items: OTHER },
    { key: "category", label: "Chunk Category", items: CATEGORY },
  ];

  // -------------------------
  // TOGGLE FILTER
  // -------------------------

  const toggleFilter = (group, value) => {
    setActiveFilters((prev) => {
      const already = prev[group].includes(value);
      return {
        ...prev,
        [group]: already
          ? prev[group].filter((v) => v !== value)
          : [...prev[group], value],
      };
    });
  };

  // -------------------------
  // FILTER LOGIC
  // -------------------------

  useEffect(() => {
    const applyFilters = () => {
      let result = chunks;

      Object.keys(activeFilters).forEach((group) => {
        const values = activeFilters[group];
        if (values.length === 0) return;

        result = result.filter((chunk) =>
          values.every((v) => {
            // CATEGORY → emoji removed + lowercase
            if (group === "category") {
              const cleanFilter = normalizeCategory(v);
              const cleanChunkCat = normalizeCategory(chunk.category || "");
              return cleanChunkCat === cleanFilter; // EXACT MATCH after cleaning
            }

            // ALL OTHER TAGS → EXACT MATCH, preserve case + emoji
            return chunk.tags.some((t) => t.label === v);
          })
        );
      });

      setFiltered(result);
    };

    applyFilters();
  }, [activeFilters]);

  // -------------------------
  // UI
  // -------------------------

  const chunkCard = (chunk) => (
    <div
      key={chunk.slug}
      onClick={() => router.push(`/chunk/${chunk.slug}`)}
      className="bg-white border-4 border-[#ce1126] border-b-green-600 border-r-green-600 rounded-2xl p-5 shadow-xl cursor-pointer hover:scale-105 transition-transform"
    >
      <h3 className="text-3xl font-extrabold text-green-700 mb-2 font-baloo">
        {chunk.title}
      </h3>

      <p
        className="text-gray-700 text-lg line-clamp-3 mb-3"
        dangerouslySetInnerHTML={{ __html: chunk.meaning }}
      />

      <div className="flex flex-wrap gap-2 mt-3">
        {chunk.tags.slice(0, 4).map((tag, i) => (
          <span
            key={i}
            className={`${tagColors[tag.label] || "bg-gray-200 text-black"} px-3 py-1 rounded-full text-sm font-semibold`}
          >
            {tag.label}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-gray-800 px-5 py-10 bg-[url('/talavera.svg')] bg-cover">
      <Head>
        <title>Mexican Spanish Chunks Browser 🌶️ | Mex Spanish Dict</title>
      </Head>

      <h1 className="text-6xl text-center font-extrabold text-green-700 mb-10 font-baloo">
        🌵 Browse All Chunks
      </h1>

      {/* FILTER GROUPS */}
      <div className="space-y-10 mb-16">
        {filterGroups.map(({ key, label, items }) => (
          <div key={key}>
            <h2 className="text-3xl font-bold text-green-700 mb-3 font-baloo">
              {label}
            </h2>

            <div className="flex gap-3 overflow-x-auto pb-3">
              {items.map((item) => {
                const active = activeFilters[key].includes(item);
                return (
                  <button
                    key={item}
                    onClick={() => toggleFilter(key, item)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full font-semibold text-sm shadow-md border-2
                      ${
                        active
                          ? "bg-green-600 text-white border-green-700"
                          : "bg-white border-gray-300 text-gray-700 hover:border-green-400"
                      }
                    `}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* RESULTS */}
      <h2 className="text-3xl font-bold mb-4 text-green-700 font-baloo">
        Results ({filtered.length})
      </h2>

      {filtered.length === 0 ? (
        <p className="text-xl text-gray-600 italic mt-10 text-center">
          No chunks match those filters 😢
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(chunkCard)}
        </div>
      )}
    </div>
  );
}
