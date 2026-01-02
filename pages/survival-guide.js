// pages/survival-guide.js
/* eslint-disable react/no-unescaped-entities */

import React, { useEffect, useMemo, useRef, useState } from "react";
import Head from "next/head";
import confetti from "canvas-confetti";

const STORAGE_KEY = "mexiverse_survival_guide_progress_v8";

/* ===================== COURSE DATA ===================== */
const COURSE = {
  title: "The Mexican Spanish Survival Guide",
  sections: [
    {
      id: "s1",
      title: "Intro",
      emoji: "🥑",
      lessons: [
        {
          id: "intro-1",
          title: "Intro (because every great journey starts somewhere!)",
          blocks: [
            { type: "video", kind: "vimeo", src: "1055718881" },
            { type: "pdf", src: "/pdfs/intro.pdf", downloadLabel: "Download Intro PDF" },
          ],
        },
      ],
    },

    {
      id: "s2",
      title: "Everyday Phrases",
      emoji: "🌶️",
      lessons: [
        {
          id: "ep-1",
          title: "Greetings + Bonus PDF",
          blocks: [
            { type: "video", kind: "vimeo", src: "1056985265" },
            {
              type: "text",
              content:
                `I've included the "Beginner's Chunks Sheet" as a bonus (you can download it below).\n\n` +
                `It was originally part of a separate product, but I decided to include it here too since it's packed with useful info.\n\n` +
                `Just a heads up - I've left it pretty much as is, so you might notice a couple of chunks repeated in the main "Everyday Phrases" PDF.`,
            },
            { type: "download", href: "/downloads/beginners-chunks.pdf", label: "beginners-chunks.pdf" },
          ],
        },
        {
          id: "ep-2",
          title: "Continuing the conversation…",
          blocks: [
            { type: "video", kind: "vimeo", src: "1056559691" },
            {
              type: "text",
              content: [
                "Just a quick clarification (I don't think it was clear enough in the video - sorry!).",
                "",
                "You'd use **¿Qué cuentas?** with someone you **ALREADY KNOW**, it's a bit like saying **What's new?**",
              ].join("\n"),
            },
          ],
        },
        {
          id: "ep-3",
          title: "Saying goodbye + Everyday Phrases PDF",
          blocks: [
            { type: "video", kind: "vimeo", src: "1056597130" },
            { type: "text", content: "Make sure to download the **Everyday Phrases PDF** below 👇" },
            { type: "download", href: "/downloads/everyday-phrases.pdf", label: "Everyday Phrases.pdf" },
          ],
        },
      ],
    },

    {
      id: "s3",
      title: "Conversations",
      emoji: "🗣️",
      lessons: [
        {
          id: "conv-1",
          title: "Transporte Público (public transport)",
          blocks: [
            {
              type: "text",
              content: [
                "**ALL** the conversation sections consist of downloadable PDFs and audio files.",
                "",
                "The audio is embedded in the PDF (remember to download a decent PDF reader), **BUT** I've also compiled them into a single file for ease of use.",
                "",
                "",
                "**PDF CONTENTS:**",
                "Part 1: Conversations **IN SPANISH** with embedded audio.",
                "",
                "Part 2: A glossary of the words/phrases **IN BOLD**. I've tried to select either useful phrases **OR** tricky language you might struggle with!",
                "",
                "Part 3: A gap-fill exercise (or two, depending on the section!).",
                "",
                "Part 4: Answers and **ENGLISH TRANSLATIONS** of the conversations.",
                "",
                "",
                "**STORY:**",
                "I do recommend reading the story **AFTER** going through the conversations and glossary, as we’ve tried to use words and phrases from the corresponding section ;)",
              ].join("\n"),
            },
            { type: "download", href: "/downloads/Buying a Bus Ticket - Conversations.pdf", label: "Buying a Bus Ticket – Conversations.pdf" },
            { type: "download", href: "/downloads/Buying a Pesero Ticket - Conversations.pdf", label: "Buying a Pesero Ticket – Conversations.pdf" },
            { type: "download", href: "/downloads/Taking a Taxi - Conversations.pdf", label: "Taking a Taxi – Conversations.pdf" },
            { type: "download", href: "/downloads/Don Eusebio - Capítulo 1.pdf", label: "Don Eusebio – Capítulo 1.pdf" },
            { type: "download", href: "/downloads/Buying a Bus Ticket - Full Audio.mp3", label: "Audiofile: Buying a Bus Ticket – Full Audio.mp3" },
            { type: "download", href: "/downloads/Taking a Taxi - Full Audio.mp3", label: "Audiofile: Taking a Taxi – Full Audio.mp3" },
          ],
        },

        {
          id: "conv-2",
          title: "Puesto de Comida (food stall)",
          blocks: [
            {
              type: "text",
              content: [
                "**ALL** the conversation sections consist of downloadable PDFs and audio files.",
                "",
                "The audio is embedded in the PDF (remember to download a decent PDF reader), **BUT** I've also compiled them into a single file for ease of use.",
                "",
                "",
                "**PDF CONTENTS:**",
                "Part 1: Conversations **IN SPANISH** with embedded audio.",
                "",
                "Part 2: A glossary of the words/phrases **IN BOLD**. I've tried to select either useful phrases **OR** tricky language you might struggle with!",
                "",
                "Part 3: A gap-fill exercise (or two, depending on the section!).",
                "",
                "Part 4: Answers and **ENGLISH TRANSLATIONS** of the conversations.",
                "",
                "",
                "**STORY:**",
                "I do recommend reading the story **AFTER** going through the conversations and glossary, as we’ve tried to use words and phrases from the corresponding section ;)",
              ].join("\n"),
            },
            { type: "download", href: "/downloads/At a Street Food Stall - Conversations.pdf", label: "At a Street Food Stall – Conversations.pdf" },
            { type: "download", href: "/downloads/BONUS - Talking Tortas With David Solórzano.pdf", label: "BONUS – Talking Tortas With David Solórzano.pdf" },
            { type: "download", href: "/downloads/Don Eusebio - Capítulo 2.pdf", label: "Don Eusebio – Capítulo 2.pdf" },
            { type: "download", href: "/downloads/Street Food Stall - Full Audio.mp3", label: "Audiofile: Street Food Stall – Full Audio.mp3" },
          ],
        },

        {
          id: "conv-3",
          title: "Bar (you know, a bar!)",
          blocks: [
            {
              type: "text",
              content: [
                "**ALL** the conversation sections consist of downloadable PDFs and audio files.",
                "",
                "The audio is embedded in the PDF (remember to download a decent PDF reader), **BUT** I've also compiled them into a single file for ease of use.",
                "",
                "",
                "**PDF CONTENTS:**",
                "Part 1: Conversations **IN SPANISH** with embedded audio.",
                "",
                "Part 2: A glossary of the words/phrases **IN BOLD**. I've tried to select either useful phrases **OR** tricky language you might struggle with!",
                "",
                "Part 3: A gap-fill exercise (or two, depending on the section!).",
                "",
                "Part 4: Answers and **ENGLISH TRANSLATIONS** of the conversations.",
                "",
                "",
                "**STORY:**",
                "I do recommend reading the story **AFTER** going through the conversations and glossary, as we’ve tried to use words and phrases from the corresponding section ;)",
              ].join("\n"),
            },
            { type: "download", href: "/downloads/At a Bar - Conversations.pdf", label: "At a Bar – Conversations.pdf" },
            { type: "download", href: "/downloads/At a Bar - Full Audio.mp3", label: "Audiofile: At a Bar – Full Audio.mp3" },
          ],
        },

        {
          id: "conv-4",
          title: "Tianguis (outdoor street market)",
          blocks: [
            {
              type: "text",
              content: [
                "**ALL** the conversation sections consist of downloadable PDFs and audio files.",
                "",
                "The audio is embedded in the PDF (remember to download a decent PDF reader), **BUT** I've also compiled them into a single file for ease of use.",
                "",
                "",
                "**PDF CONTENTS:**",
                "Part 1: Conversations **IN SPANISH** with embedded audio.",
                "",
                "Part 2: A glossary of the words/phrases **IN BOLD**. I've tried to select either useful phrases **OR** tricky language you might struggle with!",
                "",
                "Part 3: A gap-fill exercise (or two, depending on the section!).",
                "",
                "Part 4: Answers and **ENGLISH TRANSLATIONS** of the conversations.",
                "",
                "",
                "**STORY:**",
                "I do recommend reading the story **AFTER** going through the conversations and glossary, as we’ve tried to use words and phrases from the corresponding section ;)",
              ].join("\n"),
            },
            { type: "download", href: "/downloads/Buying Food at a Tianguis - Conversations.pdf", label: "Buying Food at a Tianguis - Conversations.pdf" },
            { type: "download", href: "/downloads/Buying Clothes at a Tianguis - Conversations.pdf", label: "Buying Clothes at a Tianguis - Conversations.pdf" },
            { type: "download", href: "/downloads/BONUS - Ice Cream Stand.pdf", label: "BONUS - Ice Cream Stand.pdf" },
            { type: "download", href: "/downloads/BONUS - Common Tianguis Phrases.pdf", label: "BONUS - Common Tianguis Phrases.pdf" },
            { type: "download", href: "/downloads/Don Eusebio - Capítulo 3.pdf", label: "Don Eusebio - Capítulo 3.pdf" },
            { type: "download", href: "/downloads/Tianguis- Full Audio.mp3", label: "Audiofile: Tianguis- Full Audio.mp3" },
          ],
        },

        {
          id: "conv-5",
          title: "Farmacia (pharmacy)",
          blocks: [
            {
              type: "text",
              content: [
                "**ALL** the conversation sections consist of downloadable PDFs and audio files.",
                "",
                "The audio is embedded in the PDF (remember to download a decent PDF reader), **BUT** I've also compiled them into a single file for ease of use.",
                "",
                "",
                "**PDF CONTENTS:**",
                "Part 1: Conversations **IN SPANISH** with embedded audio.",
                "",
                "Part 2: A glossary of the words/phrases **IN BOLD**. I've tried to select either useful phrases **OR** tricky language you might struggle with!",
                "",
                "Part 3: A gap-fill exercise (or two, depending on the section!).",
                "",
                "Part 4: Answers and **ENGLISH TRANSLATIONS** of the conversations.",
                "",
                "",
                "**STORY:**",
                "I do recommend reading the story **AFTER** going through the conversations and glossary, as we’ve tried to use words and phrases from the corresponding section ;)",
              ].join("\n"),
            },
            { type: "download", href: "/downloads/At a Pharmacy - Conversations.pdf", label: "At a Pharmacy - Conversations.pdf" },
            { type: "download", href: "/downloads/At a Pharmacy - Full Audio.mp3", label: "Audiofile: At a Pharmacy - Full Audio.mp3" },
            { type: "download", href: "/downloads/Don Eusebio - Capítulo 4.pdf", label: "Don Eusebio - Capítulo 4.pdf" },
          ],
        },

        {
          id: "conv-6",
          title: "BONUS: Restaurante (restaurant)",
          blocks: [
            {
              type: "text",
              content: [
                "ALL the conversation sections consist of downloadable PDFs and audio files.",
                "",
                "The audio is embedded in the PDF (remember to download a decent PDF reader), BUT I've also compiled them into a single file for ease of use.",
                "",
                "",
                "PDF CONTENTS:",
                "Part 1: Conversations IN SPANISH with embedded audio.",
                "",
                "Part 2: A glossary of the words/phrases IN BOLD. I've tried to select either useful phrases OR tricky language you might struggle with!",
                "",
                "Part 3: A gap-fill exercise (or two, depending on the section!).",
                "",
                "Part 4: Answers and ENGLISH TRANSLATIONS of the conversations.",
              ].join("\n"),
            },
            { type: "download", href: "/downloads/At a Restaurant - Conversations.pdf", label: "At a Restaurant - Conversations.pdf" },
            { type: "download", href: "/downloads/BONUS - Restaurant Phrases.pdf", label: "BONUS - Restaurant Phrases.pdf" },
            { type: "download", href: "/downloads/At a restaurant - Full Audio.mp3", label: "Audiofile: At a restaurant - Full Audio.mp3" },
          ],
        },

        {
          id: "conv-7",
          title: "BONUS: Tiendita (small store)",
          blocks: [
            {
              type: "text",
              content: [
                "ALL the conversation sections consist of downloadable PDFs and audio files.",
                "",
                "The audio is embedded in the PDF (remember to download a decent PDF reader), BUT I've also compiled them into a single file for ease of use.",
                "",
                "",
                "PDF CONTENTS:",
                "Part 1: Conversations IN SPANISH with embedded audio.",
                "",
                "Part 2: A glossary of the words/phrases IN BOLD. I've tried to select either useful phrases OR tricky language you might struggle with!",
                "",
                "Part 3: A gap-fill exercise (or two, depending on the section!).",
                "",
                "Part 4: Answers and ENGLISH TRANSLATIONS of the conversations.",
              ].join("\n"),
            },
            { type: "download", href: "/downloads/Asking for a Product in a Store - Conversations.pdf", label: "Asking for a Product in a Store - Conversations.pdf" },
            { type: "download", href: "/downloads/Asking for Prices in a Store - Conversations.pdf", label: "Asking for Prices in a Store - Conversations.pdf" },
            { type: "download", href: "/downloads/At the Checkout - Conversations.pdf", label: "At the Checkout - Conversations.pdf" },
            { type: "download", href: "/downloads/BONUS - Buying Beer.pdf", label: "BONUS - Buying Beer.pdf" },
            { type: "download", href: "/downloads/Store Conversations - Full Audio.mp3", label: "Audiofile: Store Conversations - Full Audio.mp3" },
          ],
        },
      ],
    },

    {
      id: "s4",
      title: "Cultural Nuances",
      emoji: "🤠",
      lessons: [
        {
          id: "cn-1",
          title: "The MIGHTY diminutive 💪",
          blocks: [
            { type: "video", kind: "vimeo", src: "1057093584", hash: "65850b9799" },
            { type: "download", href: "/downloads/The MIGHTY Diminutive.pdf", label: "The MIGHTY Diminutive.pdf" },
          ],
        },
        {
          id: "cn-2",
          title: "WHEN to use 'usted' + Cultural Nuances PDF",
          blocks: [
            { type: "video", kind: "vimeo", src: "1056957298" },
            { type: "download", href: "/downloads/Cultural Nuances.pdf", label: "Cultural Nuances.pdf" },
          ],
        },
        {
          id: "cn-3",
          title: "All things 'ahorita'",
          blocks: [{ type: "video", kind: "vimeo", src: "1056961188" }],
        },
      ],
    },

    {
      id: "s5",
      title: "Slang, Glorious Slang",
      emoji: "💀",
      lessons: [
        {
          id: "slang-1",
          title: "Basic Mexican Slang ;)",
          blocks: [
            { type: "video", kind: "vimeo", src: "1056633440" },
            {
              type: "text",
              content:
                `Make sure to download the next chapter of **Don Eusebio**... ` +
                `I dunno about you, but I wanna find out what happened to that box!`,
            },
            { type: "download", href: "/downloads/Mexican Slang 101.pdf", label: "Mexican Slang 101.pdf" },
            { type: "download", href: "/downloads/Don Eusebio - Capítulo 5.pdf", label: "Don Eusebio - Capítulo 5.pdf" },
          ],
        },
      ],
    },

    {
      id: "s6",
      title: "Essential Mexican Chunks",
      emoji: "🌵",
      lessons: [
        { id: "chunks-1", title: "Essential Chunks", blocks: [{ type: "video", kind: "vimeo", src: "1056607499" }] },
        {
          id: "chunks-2",
          title: "¿Questions? & ¡Exclamations!",
          blocks: [
            { type: "video", kind: "vimeo", src: "1056624863" },
            { type: "download", href: "/downloads/Essential Mexican Chunks.pdf", label: "Essential Mexican Chunks.pdf" },
          ],
        },
      ],
    },

    {
      id: "s7",
      title: "Mexican proverbs",
      emoji: "👵🏽",
      lessons: [
        {
          id: "prov-1",
          title: "Erika's Fave Refranes",
          blocks: [
            { type: "video", kind: "vimeo", src: "1057109265" },
            {
              type: "text",
              content:
                `Make sure to check out the final chapter of **Don Eusebio**... ` +
                `are things getting tense or what?`,
            },
            { type: "download", href: "/downloads/10 Refranes.pdf", label: "10 Refranes.pdf" },
            { type: "download", href: "/downloads/Don Eusebio - Capítulo 6.pdf", label: "Don Eusebio - Capítulo 6.pdf" },
          ],
        },
      ],
    },

    {
      id: "s8",
      title: "Don Eusebio",
      emoji: "📖",
      lessons: [
        {
          id: "eusebio-1",
          title: "Don Eusebio",
          blocks: [
            { type: "text", content: "Download the full story and translation below 👇" },
            { type: "download", href: "/downloads/Don Eusebio.pdf", label: "Don Eusebio.pdf" },
          ],
        },
      ],
    },

    // ✅ Bonus unlocks only when everything else is completed
    {
      id: "s9",
      title: "Bonus Section",
      emoji: "🎁",
      isBonus: true,
      lessons: [
        {
          id: "bonus-1",
          title: "All things ONDA",
          blocks: [
            { type: "download", href: "/downloads/BONUS - All Things Onda.pdf", label: "BONUS - All Things Onda.pdf" },
          ],
        },
        {
          id: "bonus-2",
          title: "Erika's Fave Modismos",
          blocks: [{ type: "video", kind: "vimeo", src: "1077674102", hash: "6c34ba8dbe" }],
        },
      ],
    },
  ],
};
/* ======================================================= */

function loadProgress() {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveProgress(p) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch {}
}

function flattenCourse(course, { includeBonus = true } = {}) {
  return course.sections
    .filter((s) => includeBonus || !s.isBonus)
    .flatMap((s) => s.lessons.map((l) => ({ section: s, lesson: l })));
}

/* ===================== BLOCKS ===================== */

function VideoBlock({ kind, src, title, hash }) {
  const url =
    kind === "vimeo"
      ? `https://player.vimeo.com/video/${src}${hash ? `?h=${hash}` : ""}`
      : `https://www.youtube-nocookie.com/embed/${src}`;

  return (
    <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black/5 ring-1 ring-black/10 shadow-sm">
      <iframe
        className="h-full w-full"
        src={url}
        title={title || "Lesson video"}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

function TextBlock({ content }) {
  const html = (content || "")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br/>");

  return (
    <div className="rounded-2xl bg-white p-6 ring-1 ring-black/10 shadow-sm">
      <div
        className="text-[15.5px] leading-7 text-gray-800"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

function PdfEmbed({ src }) {
  return (
    <div className="rounded-2xl overflow-hidden bg-white ring-1 ring-black/10 shadow-sm">
      <iframe title="PDF" src={src} className="h-[70vh] w-full" />
    </div>
  );
}

function DownloadButton({ href, label }) {
  const filename = (href || "").split("/").pop() || "download.pdf";

  return (
    <div className="overflow-hidden rounded-2xl bg-[#f3f4f6] ring-1 ring-black/10 shadow-sm">
      <div className="bg-[#f7f7f8] px-6 py-4">
        <div className="text-2xl font-extrabold text-slate-800">Download</div>
      </div>

      <a
        href={href}
        download={filename}
        className="cursor-pointer flex items-center gap-3 px-6 py-5 hover:bg-black/[0.03]"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          className="shrink-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.5 12.5l7.1-7.1a3.5 3.5 0 115 5L11 20a6 6 0 11-8.5-8.5l9.2-9.2"
            stroke="#CE1126"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span className="text-[22px] font-extrabold text-[#CE1126]">{label}</span>
      </a>
    </div>
  );
}

/* ===================== PAGE ===================== */

export default function SurvivalGuidePage() {
  const flatAll = useMemo(() => flattenCourse(COURSE, { includeBonus: true }), []);
  const nonBonusFlat = useMemo(() => flattenCourse(COURSE, { includeBonus: false }), []);

  const [progress, setProgress] = useState({});
  useEffect(() => setProgress(loadProgress()), []);

  const bonusUnlocked = nonBonusFlat.every((x) => progress[x.lesson.id]);

  // Confetti on transition false -> true (canvas-confetti)
  const prevUnlockedRef = useRef(false);
  useEffect(() => {
    const prev = prevUnlockedRef.current;

    if (!prev && bonusUnlocked) {
      confetti({
        particleCount: 160,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#CE1126", "#006847", "#FCD116"],
      });
    }

    prevUnlockedRef.current = bonusUnlocked;
  }, [bonusUnlocked]);

  const visibleFlat = useMemo(
    () => flatAll.filter((x) => !x.section.isBonus || bonusUnlocked),
    [flatAll, bonusUnlocked]
  );

  const [activeLessonId, setActiveLessonId] = useState(visibleFlat[0]?.lesson.id);

  useEffect(() => {
    const stillVisible = visibleFlat.some((x) => x.lesson.id === activeLessonId);
    if (!stillVisible && visibleFlat[0]) setActiveLessonId(visibleFlat[0].lesson.id);
  }, [visibleFlat, activeLessonId]);

  const activeIndex = visibleFlat.findIndex((l) => l.lesson.id === activeLessonId);
  const active = visibleFlat[activeIndex];
  const prev = activeIndex > 0 ? visibleFlat[activeIndex - 1] : null;
  const next = activeIndex < visibleFlat.length - 1 ? visibleFlat[activeIndex + 1] : null;

  // Progress shown is NON-BONUS only
  const totalLessons = nonBonusFlat.length;
  const completedLessons = nonBonusFlat.reduce((acc, x) => acc + (progress[x.lesson.id] ? 1 : 0), 0);
  const pct = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  function completeAndContinue() {
    if (!active) return;

    const updated = { ...progress, [active.lesson.id]: true };
    setProgress(updated);
    saveProgress(updated);

    const nowUnlocked = nonBonusFlat.every((x) => updated[x.lesson.id]);
    const nextVisible = flatAll.filter((x) => !x.section.isBonus || nowUnlocked);

    const idx = nextVisible.findIndex((x) => x.lesson.id === active.lesson.id);
    const nextLesson = idx >= 0 && idx < nextVisible.length - 1 ? nextVisible[idx + 1] : null;

    if (nextLesson) setActiveLessonId(nextLesson.lesson.id);
  }

  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <Head>
        <title>{COURSE.title}</title>
        <link href="https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap" rel="stylesheet" />
        className="aztec font-normal text-green-700 text-xl md:text-2xl hover:scale-105 transition-transform"
      </Head>

      <div className="mx-auto max-w-7xl px-4 pt-10 pb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="aztec text-4xl md:text-5xl text-green-700">{COURSE.title}</h1>

        <div className="flex gap-3">
          <button
            onClick={() => prev && setActiveLessonId(prev.lesson.id)}
            disabled={!prev}
            className="cursor-pointer disabled:cursor-not-allowed rounded-xl border px-4 py-2 text-sm font-bold disabled:opacity-40 hover:bg-black/[0.03]"
          >
            ← Previous lesson
          </button>

          <button
            onClick={completeAndContinue}
            className="cursor-pointer rounded-xl bg-[#ce1126] px-5 py-2 text-sm font-extrabold text-white hover:bg-red-800"
          >
            Complete and Continue →
          </button>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-6 px-4 pb-12 md:grid-cols-[380px_1fr]">
        {/* Sidebar */}
        <aside className="rounded-2xl bg-white ring-1 ring-black/10 shadow-xl overflow-hidden">
          <div className="p-4 border-b border-black/10 bg-white">
            <div className="rounded-2xl bg-green-50 p-4 ring-1 ring-green-100">
              <div className="flex justify-between text-sm font-bold">
                <span>Progress</span>
                <span>
                  {completedLessons}/{totalLessons}
                </span>
              </div>

              <div className="mt-2 h-2 bg-green-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-700 transition-all" style={{ width: `${pct}%` }} />
              </div>

              <div className="mt-2 text-xs text-black/60">{pct}% complete</div>

              {bonusUnlocked && (
                <div className="mt-3 rounded-xl bg-yellow-50 p-3 ring-1 ring-yellow-200 text-sm font-extrabold">
                  🎉 Bonus section unlocked!
                </div>
              )}
            </div>
          </div>

          <div className="px-4 pb-4 overflow-y-auto" style={{ maxHeight: "calc(100vh - 260px)" }}>
            {COURSE.sections.map((section) => {
              const isLocked = section.isBonus && !bonusUnlocked;

              return (
                <div key={section.id} className="mt-4">
                  {/* Section header (with tooltip for locked bonus) */}
                  <div className="relative group">
                    <div
                      className={`flex items-center justify-between rounded-xl px-3 py-2 ring-1 ring-black/10 ${
                        isLocked ? "bg-gray-50" : "bg-gray-50"
                      }`}
                      title={isLocked ? "Complete course to unlock" : ""}
                    >
                      <div className="font-extrabold text-[15px] flex items-center gap-2">
                        <span className="text-[16px]">{section.emoji}</span>
                        <span>{section.title}</span>
                      </div>

                      {isLocked && <span className="text-sm font-extrabold text-black/60">🔒</span>}
                    </div>

                    {/* Hover tooltip (only when locked) */}
                    {isLocked && (
                      <div className="pointer-events-none absolute left-2 top-full mt-2 hidden group-hover:block z-50">
                        <div className="rounded-lg bg-black px-3 py-2 text-xs font-extrabold text-white shadow-lg">
                          Complete course to unlock
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Lessons */}
                  <div className="mt-2 space-y-1">
                    {section.lessons.map((lesson) => (
                      <button
                        key={lesson.id}
                        disabled={isLocked}
                        onClick={() => {
                          if (!isLocked) setActiveLessonId(lesson.id);
                        }}
                        title={isLocked ? "Complete course to unlock" : ""}
                        className={`w-full rounded-xl px-3 py-2 text-left font-bold
                          ${
                            isLocked
                              ? "opacity-40 cursor-not-allowed"
                              : "cursor-pointer hover:bg-black/[0.04]"
                          }
                          ${
                            !isLocked && lesson.id === activeLessonId
                              ? "bg-yellow-50 ring-1 ring-yellow-200"
                              : ""
                          }
                        `}
                        style={{ fontSize: "14.5px" }}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <span className="min-w-0 leading-[1.25rem]">{lesson.title}</span>
                          <span className="shrink-0">{progress[lesson.id] ? "✅" : ""}</span>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="mt-4 h-px bg-black/10" />
                </div>
              );
            })}
          </div>
        </aside>

        {/* Main */}
        <main className="rounded-2xl bg-white p-6 ring-1 ring-black/10 shadow-xl">
          {!active ? (
            <div className="text-black/60">No lesson selected.</div>
          ) : (
            <>
              <h2 className="mb-6 text-3xl font-extrabold">{active.lesson.title}</h2>

              <div className="space-y-6">
                {active.lesson.blocks.map((b, i) => {
                  if (b.type === "video")
                    return (
                      <VideoBlock
                        key={i}
                        kind={b.kind}
                        src={b.src}
                        hash={b.hash}
                        title={active.lesson.title}
                      />
                    );

                  if (b.type === "text") return <TextBlock key={i} content={b.content} />;

                  if (b.type === "pdf")
                    return (
                      <div key={i} className="space-y-3">
                        <PdfEmbed src={b.src} />
                        <DownloadButton href={b.src} label={b.downloadLabel} />
                      </div>
                    );

                  if (b.type === "download")
                    return <DownloadButton key={i} href={b.href} label={b.label} />;

                  return null;
                })}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
