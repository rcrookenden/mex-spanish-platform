// app/missions/inheritance/act-1/scene5/page.tsx
"use client";
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

/* ───────────────── Types ───────────────── */
export type Option = {
  id: string;
  text: string;
  correct: boolean;
  xp: number;
  feedback: string;
  retry?: boolean;
  translation?: string;    // kept for compatibility; rendered under FEEDBACK (not under buttons)
  feedbackTr?: string;     // kept for data compatibility but NOT rendered
};

export type ChoicePrompt = { kind: "choice"; prompt: string; options: Option[] };
export type InfoCard = { kind: "card"; title: string; body: string };
export type Narrative = { kind: "narrative"; text: string };
export type ChoiceWithLead = {
  kind: "choiceLead";
  lead: string;            // typewritten narrative that plays first
  prompt: string;          // then the question appears
  options: Option[];
};

/* Dialogue */
export type DialogueTurn = { speaker: "Receptionist" | "You" | "Narration" | string; text: string };

/* One-step block that contains intro (typewriter) + dialogue (VN) + question */
export type DialogueWithChoice = {
  kind: "dialogueWithChoice";
  intro: string;            // typewriter line at the top of the step
  dialogue: DialogueTurn[]; // VN-style dialogue (click to advance)
  prompt: string;           // question prompt
  options: Option[];        // answer options
};

/* Super Chunk step (banner + MCQ + optional translation + confetti) */
export type SuperChunkBlock = {
  kind: "superChunk";
  chunk: string;                 // e.g., "¿Cómo que…?"
  prompt1: string;               // may contain inline HTML for color spans
  options1: Option[];
  // Optional second task (translation)
  prompt2?: string;              // may contain inline HTML for color spans
  answer2?: string;
  xpExact?: number;              // e.g., 20
  xpFuzzy?: number;              // e.g., 5
  xpWrong?: number;              // e.g., -3
};

export type Block =
  | Narrative
  | ChoicePrompt
  | InfoCard
  | ChoiceWithLead
  | DialogueWithChoice
  | SuperChunkBlock;

export type Scene = { id: string; title: string; blocks: Block[] };
export type Mission = {
  id: string;
  title: string; // appears under main title
  preload?: (InfoCard | Narrative)[];
  scenes: Scene[];
};

/* ─────────────── Content (Scene 5 self-contained) ─────────────── */
export const Act1_Scene5: Mission = {
  id: "act-1-hotel-scene5",
  title: "🎭 SCENE 5 – Check-In Complete",
  preload: [
    {
      kind: "narrative",
      text: "The receptionist prints the key card and slides it over. 20 XP 🎉",
    },
  ],
  scenes: [
    {
      id: "scene-5",
      title: "🎭 SCENE 5 – Check-In Complete",
      blocks: [
        /* CHANGE: render “Aquí tienes…” as a speech line (dialogueWithChoice), not typewriter */
        {
          kind: "dialogueWithChoice",
          intro: "",
          dialogue: [{ speaker: "Receptionist", text: "Aquí tienes…" }],
          prompt: "What do you reply?",
          options: [
            {
              id: "s5-o1",
              text: "Muchísimas gracias.",
              correct: true,
              xp: 10,
              feedback: "That’s right, keep it nice and simple!",
            },
            {
              id: "s5-o2",
              text: "¡Qué buena onda, gracias!",
              correct: true,
              xp: 5,
              feedback: "Nice phrasing, but a tad informal for a hotel.",
            },
            {
              id: "s5-o3",
              text: "¿Puedo ver el final de tu novela con tú?",
              correct: false,
              xp: -3,
              feedback:
                "Grammar slip alert! It’s <strong>contigo</strong>, not <strong>con tú</strong>. The receptionist looks at you like you just proposed marriage. Try again.",
              retry: true,
            },
          ],
        },

        /* Receptionist says “No hay de qué.”, then the meaning question appears right below */
        {
          kind: "dialogueWithChoice",
          intro: "",
          dialogue: [{ speaker: "Receptionist", text: "No hay de qué." }],
          prompt: "What does this actually mean?",
          options: [
            {
              id: "s5-mean-o1",
              text: "You’re welcome.",
              correct: true,
              xp: 10,
              feedback: "¡Le diste al clavo, wey!",
            },
            {
              id: "s5-mean-o2",
              text: "Now get lost and let me finish my novela!",
              correct: false,
              xp: -3,
              feedback: "Nope, that’s what she was THINKING! Try again.",
              retry: true,
            },
            {
              id: "s5-mean-o3",
              text: "There’s no what.",
              correct: false,
              xp: -3,
              feedback: "Too literal. Try again.",
              retry: true,
            },
          ],
        },
      ],
    },
  ],
};

/* ─────────────── Runner (noir skin) ─────────────── */
export default function Page() {
  return (
    <div className="relative">
      <MissionRunner mission={Act1_Scene5} />

      {/* Sticky NEXT ACT button (doesn't interfere with your runner) */}
      <div className="fixed right-4 bottom-4 z-[1100]">
        <Link
          href="/missions/inheritance/act-2/scene1"
          className="px-5 py-3 rounded-2xl font-extrabold text-slate-900 bg-emerald-300 hover:bg-emerald-200 shadow-[0_10px_30px_-10px_rgba(110,231,183,0.6)]"
        >
          NEXT ACT →
        </Link>
      </div>
    </div>
  );
}

export function MissionRunner({ mission }: { mission: Mission }) {
  const preload = Array.isArray(mission.preload) ? mission.preload : [];
  const router = useRouter();

  // Flatten ALL scenes in order
  const sequence: Block[] = React.useMemo(() => {
    const allSceneBlocks = mission.scenes.flatMap((s) => s.blocks || []);
    return [...preload, ...allSceneBlocks];
  }, [mission, preload]);

  // Map step -> scene index (for hero image/title)
  const sceneIndexByStep = React.useMemo(() => {
    const out: number[] = [];
    let offset = preload.length;
    for (let s = 0; s < mission.scenes.length; s++) {
      const len = mission.scenes[s].blocks.length;
      for (let i = 0; i < len; i++) out[offset + i] = s;
      offset += len;
    }
    return out;
  }, [mission.scenes, preload.length]);

  const [step, setStep] = React.useState(0);
  const [xp, setXp] = React.useState(0);

  const totalSteps = Math.max(sequence.length, 1);
  const progress = Math.round(((step + 1) / totalSteps) * 100);
  const current = sequence[step];
  const currentSceneIdx = sceneIndexByStep[step] ?? 0;
  const currentSceneTitle = mission.scenes[currentSceneIdx]?.title ?? mission.title;

  const next = React.useCallback(() => {
    setStep((s) => Math.min(s + 1, totalSteps - 1));
  }, [totalSteps]);

  const back = React.useCallback(() => {
    setStep((s) => Math.max(s - 1, 0));
  }, []);

  const isFinalStep = step >= totalSteps - 1;
  const nextLabel = isFinalStep ? "NEXT ACT →" : "Continue";
  const goNext = React.useCallback(() => {
    if (isFinalStep) router.push("/missions/inheritance/act-2/scene1");
    else next();
  }, [isFinalStep, next, router]);

  // Global audio + SFX + XP toasts
  const audio = useGlobalTypewriterAudio();      // typewriter-intro.mp3 (Narrative + Dialogue intro)
  const sfx = useAnswerSfxFiles();               // correct/incorrect + bright-pop + super-chunk
  const blip = useDialogueBlip();                // per-character blip
  const { XpOverlay, fireXp } = useXpToasts();
  const confetti = useConfetti();
  const ConfettiOverlay = confetti.Overlay;

  const awardXP = React.useCallback((delta: number) => {
    setXp((x) => x + delta);
  }, []);

  // Scene-driven hero image (unchanged)
  const heroImage =
    currentSceneIdx >= 4
      ? "/images/booking.png"
      : currentSceneIdx >= 3
      ? "/images/booking.png"
      : currentSceneIdx >= 1
      ? "/images/recepcion.png"
      : "/images/hotel-san-lazaro.png";

  // Award preload 20 XP with confetti + super-chunk SFX + green floating XP bubble (center)
  const handlePreloadFinish = React.useCallback(() => {
    // Only do this for the very first narrative preload (step === 0)
    if (step === 0) {
      const amt = 20;
      awardXP(amt);
      // Center of the viewport
      const x = Math.round(window.innerWidth / 2);
      const y = Math.round(window.innerHeight * 0.25); // near the top center
      confetti.burst({ count: 160, spread: 70, y: 0.18 });
      sfx.superChunk();            // same sound we use when confetti appears in super chunk
      fireXp(amt, x, y);          // green floating +20 XP bubble
    }
  }, [step, awardXP, confetti, sfx, fireXp]);

  return (
    <div
      className="relative min-h-screen bg-[#0a1417] text-slate-100 overflow-x-hidden"
      style={{ fontFamily: "'Tilt Warp', system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial, sans-serif" }}
    >
      {/* Overlays */}
      <XpOverlay />
      <ConfettiOverlay />

      {/* Backgrounds */}
      <div className="absolute inset-0 -z-10 bg-[url('/talavera.svg')] bg-center bg-cover opacity-[0.12]" />
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(1200px 600px at 50% 15%, rgba(0,0,0,0.45), transparent 60%), linear-gradient(180deg, rgba(0,25,30,0.35), rgba(0,0,0,0.1))",
        }}
      />

      {/* Top glow bar */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-amber-300 to-rose-500/90 blur-[1px]" />

      {/* HERO */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 pt-10 pb-6 text-center">
        <div className="inline-block relative">
          <div className="absolute -inset-1 rounded-3xl bg-emerald-500/20 blur-xl" />
          <div className="relative px-6 sm:px-10 py-5 sm:py-6 bg-[#0d1b1e]/80 backdrop-blur-md border-2 border-emerald-600/60 rounded-3xl shadow-[0_10px_40px_-20px_rgba(16,185,129,0.5)]">
            <h1 className="text-3xl sm:text-5xl text-emerald-200 drop-shadow">🔑 The Inheritance Mystery</h1>
            <p className="mt-2 text-2xl sm:text-3xl text-amber-200/90">{currentSceneTitle}</p>
          </div>
        </div>

        {/* Scene-driven image */}
        <div className="mt-6 flex justify-center">
          <img
            src={heroImage}
            alt={
              currentSceneIdx >= 3
                ? "Booking confirmation"
                : currentSceneIdx >= 1
                ? "Recepción del hotel"
                : "Hotel San Lázaro"
            }
            className="rounded-2xl shadow-lg max-h-72 object-cover"
            draggable={false}
          />
        </div>
      </div>

      {/* HUD */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="rounded-2xl bg-[#0d1b1e]/70 backdrop-blur border border-emerald-700/40 p-4 sm:p-5 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.7)]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="text-sm sm:text-base font-extrabold text-emerald-200">
              Step {step + 1}/{totalSteps}
            </div>
            <div className="text-sm sm:text-base font-extrabold text-amber-200">XP: {xp}</div>
          </div>
          <div className="mt-3 relative h-3 rounded-full bg-slate-800/70 overflow-hidden border border-slate-700">
            <div
              className="h-full bg-gradient-to-r from-emerald-400 via-amber-300 to-rose-400 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* CONTENT CARD */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-6">
        <div className="rounded-3xl bg-[#0b1518]/80 backdrop-blur-xl border border-slate-800/80 shadow-[0_25px_60px_-25px_rgba(0,0,0,0.8)] p-6 sm:p-8">
          {/* Narrative (preload with XP award on finish) */}
          {current?.kind === "narrative" && (
            <NarrativeBlock
              text={(current as Narrative).text}
              onNext={() => { audio.stopAll(); goNext(); }}
              onBack={back}
              audio={audio}
              nextLabel={nextLabel}
              onFinished={handlePreloadFinish}   // ← award + confetti + sfx + XP bubble
            />
          )}

          {/* Chunk match card (not used in this scene) */}
          {current?.kind === "card" && (
            <MatchCard
              title={(current as InfoCard).title}
              body={(current as InfoCard).body}
              onNext={() => { audio.stopAll(); goNext(); }}
              onBack={back}
              sfx={useAnswerSfxFiles()}
              nextLabel={nextLabel}
            />
          )}

          {/* Choice with lead (not used after change, but kept for parity) */}
          {current?.kind === "choiceLead" && (
            <ChoiceWithLeadBlock
              block={current as ChoiceWithLead}
              onAward={(d) => awardXP(d)}
              fireXp={(amt, x, y) => fireXp(amt, x, y)}
              sfx={sfx}
              audio={audio}
              onNext={goNext}
              onBack={back}
              nextLabel={nextLabel}
            />
          )}

          {/* DialogueWithChoice — includes both “Aquí tienes…” and “No hay de qué.” blocks */}
          {current?.kind === "dialogueWithChoice" && (
            <DialogueWithChoiceBlock
              block={current as DialogueWithChoice}
              onAward={(d) => awardXP(d)}
              fireXp={(amt, x, y) => fireXp(amt, x, y)}
              sfx={sfx}
              blip={blip}
              audio={audio}
              onNext={goNext}
              onBack={back}
              nextLabel={nextLabel}
              autoRevealQuestion   // ← show question immediately after line finishes typing
            />
          )}

          {/* Super Chunk (not used here) */}
          {current?.kind === "superChunk" && (
            <SuperChunkBlockView
              block={current as SuperChunkBlock}
              sfx={sfx}
              confetti={confetti}
              onAward={(d) => awardXP(d)}
              onNext={goNext}
              onBack={back}
              nextLabel={nextLabel}
            />
          )}

          {/* Fallback plain choice */}
          {current?.kind === "choice" && (
            <ChoiceBlock
              block={current as ChoicePrompt}
              onAward={(d) => awardXP(d)}
              fireXp={(amt, x, y) => fireXp(amt, x, y)}
              sfx={sfx}
              onNext={goNext}
              onBack={back}
              nextLabel={nextLabel}
            />
          )}
        </div>
      </div>
    </div>
  );
}

/* ─────────────── Shared Nav Row ─────────────── */
function NavRow({
  showBack = true,
  showNext = true,
  nextLabel = "Continue",
  onBack,
  onNext,
  disabledNext = false,
}: {
  showBack?: boolean;
  showNext?: boolean;
  nextLabel?: string;
  onBack?: () => void;
  onNext?: () => void;
  disabledNext?: boolean;
}) {
  return (
    <div className="mt-4 flex items-center justify-between gap-3">
      {showBack ? (
        <button
          className="min-w-32 text-center text-base px-4 py-2 rounded-xl font-extrabold text-slate-100 bg-slate-800/70 hover:bg-slate-700/70 border border-slate-600/60 shadow transition cursor-default hover:cursor-pointer"
          onClick={onBack}
        >
          ← Go back
        </button>
      ) : <div />}

      {showNext && (
        <button
          className={`min-w-36 text-center text-lg px-6 py-3 rounded-2xl font-extrabold text-slate-900 transition
            ${disabledNext ? "bg-slate-600/60 cursor-not-allowed" : "bg-emerald-300 hover:bg-emerald-200 cursor-pointer"} shadow-[0_10px_30px_-10px_rgba(110,231,183,0.6)]`}
          onClick={() => !disabledNext && onNext?.()}
          disabled={disabledNext}
        >
          {nextLabel}
        </button>
      )}
    </div>
  );
}

/* ─────────────── Narrative Block ─────────────── */
function NarrativeBlock({
  text,
  onNext,
  onBack,
  audio,
  nextLabel = "Continue",
  onFinished,
}: {
  text: string;
  onNext: () => void;
  onBack: () => void;
  audio: ReturnType<typeof useGlobalTypewriterAudio>;
  nextLabel?: string;
  onFinished?: () => void;    // ← called once the line fully types out
}) {
  const finishedRef = React.useRef(false);
  const handleDone = React.useCallback(() => {
    audio.stopAll();
    if (!finishedRef.current) {
      finishedRef.current = true;
      onFinished?.();       // award preload XP + confetti + sfx + XP bubble
    }
  }, [audio, onFinished]);

  return (
    <div className="space-y-6">
      <TypeLine text={text} onDone={handleDone} audio={audio} />
      <NavRow onNext={onNext} onBack={onBack} nextLabel={nextLabel} />
    </div>
  );
}

/* ─────────────── Choice with Lead-in ─────────────── */
function ChoiceWithLeadBlock({
  block,
  onAward,
  fireXp,
  sfx,
  audio,
  onNext,
  onBack,
  nextLabel = "Continue",
}: {
  block: ChoiceWithLead;
  onAward: (delta: number) => void;
  fireXp: (amount: number, x: number, y: number) => void;
  sfx: ReturnType<typeof useAnswerSfxFiles>;
  audio: ReturnType<typeof useGlobalTypewriterAudio>;
  onNext?: () => void;
  onBack?: () => void;
  nextLabel?: string;
}) {
  const [leadDone, setLeadDone] = React.useState(false);
  const [picked, setPicked] = React.useState<string | null>(null);
  const [clicked, setClicked] = React.useState<Set<string>>(new Set());
  const option = block.options.find((o) => o.id === picked);

  const handleLeadDone = React.useCallback(() => setLeadDone(true), []);

  function handlePick(e: React.MouseEvent<HTMLButtonElement>, o: Option) {
    if (clicked.has(o.id)) return;
    setClicked((prev) => new Set(prev).add(o.id));
    setPicked(o.id);
    onAward(o.xp);
    fireXp(o.xp, e.clientX, e.clientY);
    if (o.correct) sfx.correct(); else sfx.wrong();
  }

  return (
    <div className="space-y-5">
      <TypeLine text={block.lead} onDone={handleLeadDone} audio={audio} />

      {leadDone && (
        <>
          <p className="font-semibold text-emerald-200">{block.prompt}</p>

          <div className="grid gap-3">
            {block.options.map((o) => {
              const isPicked = picked === o.id;
              const used = clicked.has(o.id);
              return (
                <button
                  key={o.id}
                  disabled={used}
                  aria-disabled={used}
                  className={`relative w-full text-left rounded-2xl p-4 transition border
                    ${isPicked ? "ring-2 ring-amber-300/70" : ""}
                    bg-slate-900/40 ${used ? "opacity-60 cursor-not-allowed" : "hover:bg-slate-900/60 cursor-pointer"}
                    border-rose-500/70`}
                  onClick={(e) => handlePick(e, o)}
                >
                  <span className="block text-slate-100">{o.text}</span>
                </button>
              );
            })}
          </div>

          {picked && option && (
            <>
              <div
                className={`mt-5 rounded-2xl px-6 py-5 leading-relaxed shadow-lg border-2
                  ${option.correct
                    ? "bg-emerald-100 text-emerald-900 border-emerald-400"
                    : "bg-rose-100 text-rose-900 border-rose-400"}`}
                style={{ fontSize: "1.05rem", fontWeight: 600 }}
              >
                <span dangerouslySetInnerHTML={{ __html: option.feedback }} />
                {option.translation && (
                  <em className="mt-1 block italic text-[0.975rem] leading-snug text-emerald-900/80">
                    Translation: {option.translation}
                  </em>
                )}
              </div>

              <NavRow
                onBack={onBack}
                showNext={!!option.correct && !!onNext}
                onNext={onNext}
                nextLabel={nextLabel}
              />
            </>
          )}

          {!picked && <NavRow onBack={onBack} showNext={false} />}
        </>
      )}
    </div>
  );
}

/* ─────────────── DialogueWithChoice Block ─────────────── */
function DialogueWithChoiceBlock({
  block,
  onAward,
  fireXp,
  sfx,
  blip,
  audio,
  onNext,
  onBack,
  nextLabel = "Continue",
  autoRevealQuestion = false,
}: {
  block: DialogueWithChoice;
  onAward: (delta: number) => void;
  fireXp: (amount: number, x: number, y: number) => void;
  sfx: ReturnType<typeof useAnswerSfxFiles>;
  blip: ReturnType<typeof useDialogueBlip>;
  audio: ReturnType<typeof useGlobalTypewriterAudio>;
  onNext?: () => void;
  onBack?: () => void;
  nextLabel?: string;
  autoRevealQuestion?: boolean;
}) {
  const [introDone, setIntroDone] = React.useState(false);
  const [delayReady, setDelayReady] = React.useState(false);
  const [idx, setIdx] = React.useState(0);
  const [charIdx, setCharIdx] = React.useState(0);
  const [showQuestion, setShowQuestion] = React.useState(false);
  const questionRef = React.useRef<HTMLDivElement | null>(null);

  const line = block.dialogue[idx];
  const fullText = line?.text ?? "";
  const doneTyping = charIdx >= fullText.length;
  const atLastLine = idx >= block.dialogue.length - 1;

  const INTRO_PAUSE_MS = 1500;
  const handleIntroDone = React.useCallback(() => {
    audio.stopAll();
    setIntroDone(true);
    const t = setTimeout(() => setDelayReady(true), INTRO_PAUSE_MS);
    return () => clearTimeout(t);
  }, [audio]);

  React.useEffect(() => {
    if (!block.intro || block.intro.trim() === "") {
      setIntroDone(true);
      const t = setTimeout(() => setDelayReady(true), 400);
      return () => clearTimeout(t);
    }
  }, [block.intro]);

  React.useEffect(() => { setCharIdx(0); }, [idx, fullText]);

  React.useEffect(() => {
    if (!introDone || !delayReady) return;
    if (!line) return;
    if (charIdx >= fullText.length) return;
    const step = 12;
    const t = setTimeout(() => {
      setCharIdx((c) => {
        const next = c + 1;
        const ch = fullText.charAt(next - 1);
        if (ch && !/\s/.test(ch)) blip.play(line.speaker);
        return next;
      });
    }, step);
    return () => clearTimeout(t);
  }, [charIdx, fullText, line, introDone, delayReady, blip]);

  // Play bright-pop when a char line (Receptionist/You) appears (same as Scene 4)
  React.useEffect(() => {
    if (!delayReady || !line) return;
    if (line.speaker === "Receptionist" || line.speaker === "You") {
      sfx.pop();
    }
  }, [idx, delayReady, line, sfx]);

  function handleBoxClick() {
    if (!introDone || !delayReady) return;
    if (!doneTyping) { setCharIdx(fullText.length); return; }
    if (!atLastLine) { setIdx((i) => i + 1); return; }
    if (!autoRevealQuestion) revealQuestion();
  }

  const revealQuestion = React.useCallback(() => {
    if (!introDone || !delayReady) return;
    if (!(atLastLine && doneTyping)) return;
    setShowQuestion(true);
    setTimeout(() => questionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
  }, [introDone, delayReady, atLastLine, doneTyping]);

  // Auto-reveal the question right under the line once it finishes typing
  React.useEffect(() => {
    if (autoRevealQuestion && delayReady && atLastLine && doneTyping && !showQuestion) {
      revealQuestion();
    }
  }, [autoRevealQuestion, delayReady, atLastLine, doneTyping, showQuestion, revealQuestion]);

  const noQuestion = !block.prompt || block.prompt.trim() === "" || !block.options || block.options.length === 0;

  return (
    <div className="space-y-6">
      {block.intro && block.intro.trim() !== "" && (
        <TypeLine text={block.intro} onDone={handleIntroDone} audio={audio} />
      )}
      {!delayReady && introDone && (
        <div className="text-sm text-emerald-200/70 italic select-none">…</div>
      )}

      <div className={`relative transition-opacity ${delayReady ? "opacity-100" : "opacity-70"}`}>
        <div
          className={`rounded-3xl border-2 border-emerald-600/30 bg-[#0d1b1e]/80 backdrop-blur px-5 sm:px-7 py-5 sm:py-6 shadow-[0_10px_40px_-20px_rgba(16,185,129,0.45)] ${delayReady ? "cursor-pointer" : "cursor-not-allowed"}`}
          onClick={handleBoxClick}
          role="button"
          aria-label="Advance dialogue"
          title={delayReady ? "Click to continue" : undefined}
        >
          <div className="mb-3">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-black tracking-wide
              bg-emerald-300 text-emerald-950 shadow">{line?.speaker ?? "…"}</span>
          </div>

          <div className="min-h-[64px] text-[1.075rem] leading-relaxed text-slate-100">
            {delayReady ? fullText.slice(0, charIdx) : "…"}
            {delayReady && !doneTyping && <span className="ml-0.5 text-emerald-300/90 animate-pulse">▍</span>}
          </div>

          <div className="mt-3 text-[11px] text-emerald-200/70 select-none hover:cursor-pointer">
            {!delayReady
              ? "Please wait…"
              : (doneTyping ? (atLastLine ? (autoRevealQuestion ? " " : `Click ${nextLabel} below.`) : "Click to continue →") : "Click to skip typing")}
          </div>
        </div>
      </div>

      {/* When there is NO question, the Continue button goes straight to next block */}
      {!showQuestion && (
        <NavRow
          onBack={onBack}
          showNext={!autoRevealQuestion || noQuestion}
          onNext={noQuestion ? onNext : revealQuestion}
          disabledNext={!delayReady || !(atLastLine && doneTyping)}
          nextLabel={nextLabel}
        />
      )}

      {showQuestion && (
        <div ref={questionRef}>
          <InlineChoice
            prompt={block.prompt}
            options={block.options}
            sfx={sfx}
            onAward={onAward}
            fireXp={(amt, x, y) => fireXp(amt, x, y)}
            onBack={onBack}
            onNext={onNext}
            nextLabel={nextLabel}
          />
        </div>
      )}
    </div>
  );
}

/* ─────────────── InlineChoice ─────────────── */
function InlineChoice({
  prompt,
  options,
  sfx,
  onAward,
  fireXp,
  onBack,
  onNext,
  nextLabel = "Continue",
}: {
  prompt: string;
  options: Option[];
  sfx: ReturnType<typeof useAnswerSfxFiles>;
  onAward: (delta: number) => void;
  fireXp: (amount: number, x: number, y: number) => void;
  onBack?: () => void;
  onNext?: () => void;
  nextLabel?: string;
}) {
  const [picked, setPicked] = React.useState<string | null>(null);
  const [clicked, setClicked] = React.useState<Set<string>>(new Set());
  const option = options.find((o) => o.id === picked);

  function handlePick(e: React.MouseEvent<HTMLButtonElement>, o: Option) {
    if (clicked.has(o.id)) return;
    setClicked((prev) => new Set(prev).add(o.id));
    setPicked(o.id);
    onAward(o.xp);
    fireXp(o.xp, e.clientX, e.clientY);
    if (o.correct) sfx.correct(); else sfx.wrong();
  }

  const anyCorrectPicked = !!option?.correct;

  return (
    <div className="mt-6 space-y-5">
      <p className="font-semibold text-emerald-200">{prompt}</p>

      <div className="grid gap-3">
        {options.map((o) => {
          const isPicked = picked === o.id;
          const used = clicked.has(o.id);
          return (
            <button
              key={o.id}
              disabled={used}
              aria-disabled={used}
              className={`relative w-full text-left rounded-2xl p-4 transition border
                ${isPicked ? "ring-2 ring-amber-300/70" : ""}
                bg-slate-900/40 ${used ? "opacity-60 cursor-not-allowed" : "hover:bg-slate-900/60 cursor-pointer"}
                border-rose-500/70`}
              onClick={(e) => handlePick(e, o)}
            >
              <span className="block text-slate-100">{o.text}</span>
            </button>
          );
        })}
      </div>

      {picked && option && (
        <div
          className={`mt-4 rounded-2xl px-5 py-4 leading-snug border-2
            ${option.correct ? "bg-emerald-100 text-emerald-900 border-emerald-400" : "bg-rose-100 text-rose-900 border-rose-400"}`}
          style={{ fontSize: "1.05rem", fontWeight: 600 }}
        >
          <span dangerouslySetInnerHTML={{ __html: option.feedback }} />
          {option.translation && (
            <em className="mt-1 block italic text-[0.975rem] leading-snug text-emerald-900/80">
              Translation: {option.translation}
            </em>
          )}
        </div>
      )}

      <NavRow
        onBack={onBack}
        showNext={!!onNext && anyCorrectPicked}
        onNext={onNext}
        nextLabel={nextLabel}
      />
    </div>
  );
}


/* ─────────────── SUPER CHUNK VIEW (not used here) ─────────────── */
function SuperChunkBlockView({
  block,
  sfx,
  confetti,
  onAward,
  onNext,
  onBack,
  nextLabel = "Continue",
}: {
  block: SuperChunkBlock;
  sfx: ReturnType<typeof useAnswerSfxFiles>;
  confetti: ReturnType<typeof useConfetti>;
  onAward: (d: number) => void;
  onNext: () => void;
  onBack: () => void;
  nextLabel?: string;
}) {
  const [mcqPicked, setMcqPicked] = React.useState<string | null>(null);
  const [mcqDone, setMcqDone] = React.useState(false);
  const [input, setInput] = React.useState("");
  const [result2, setResult2] = React.useState<null | { xp: number; msg: string; ok: boolean }>(null);
  const [showUnlock, setShowUnlock] = React.useState(true);

  React.useEffect(() => {
    confetti.burst({ count: 160, spread: 70, y: 0.18 });
    sfx.superChunk();
    const t = setTimeout(() => setShowUnlock(false), 1800);
    return () => clearTimeout(t);
  }, [confetti, sfx]);

  const hasTranslation = !!block.prompt2 && !!block.answer2;

  function handleMcq(o: Option) {
    if (mcqDone) return;
    setMcqPicked(o.id);
    onAward(o.xp);
    if (o.correct) {
      sfx.correct();
      confetti.burst({ count: 120, spread: 60, y: 0.3 });
      sfx.superChunk();
      setMcqDone(true);
      if (!hasTranslation) {
        setResult2({ xp: 0, ok: true, msg: "¡Listo!" });
      }
    } else {
      sfx.wrong();
    }
  }

  function gradeTranslation() { /* not used in this scene */ }

  const pickedOpt = block.options1.find(o => o.id === mcqPicked);

  return (
    <div className="relative space-y-6">
      {showUnlock && (
        <div className="pointer-events-none fixed inset-0 z-[950] flex items-start justify-center">
          <div className="mt-20 px-4 py-2 rounded-full font-extrabold text-emerald-950 bg-emerald-300/95 shadow-lg">
            You just unlocked a SUPER CHUNK!
          </div>
        </div>
      )}

      <div className="relative overflow-hidden rounded-3xl border-2 border-amber-400/60 bg-gradient-to-r from-amber-300/20 via-rose-300/20 to-emerald-300/20 p-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_40%)] pointer-events-none" />
        <div className="text-2xl sm:text-3xl font-black text-amber-300">SUPER CHUNK ALERT 🚨</div>
        <div className="mt-2 text-emerald-200/90 text-2xl font-extrabold">{block.chunk}</div>
      </div>

      <div className="rounded-2xl border border-emerald-700/40 bg-[#0f1f23]/70 p-5 shadow-[inset_0_0_0_1px_rgba(16,185,129,0.2)]">
        <div className="font-semibold text-emerald-200 mb-3" dangerouslySetInnerHTML={{ __html: block.prompt1 }} />
        <div className="grid gap-3">
          {block.options1.map((o) => {
            const picked = mcqPicked === o.id;
            const used = mcqDone || mcqPicked === o.id;
            return (
              <button
                key={o.id}
                disabled={mcqDone && !picked}
                onClick={() => handleMcq(o)}
                className={`text-left rounded-2xl p-4 transition border
                  ${picked ? "ring-2 ring-amber-300/70" : ""}
                  ${used ? "opacity-90" : "hover:bg-slate-900/60 cursor-pointer"}
                  bg-slate-900/40 border-rose-500/70`}
              >
                <span className="block text-slate-100">{o.text}</span>
              </button>
            );
          })}
        </div>

        {mcqPicked && pickedOpt && (
          <div
            className={`mt-4 rounded-2xl px-5 py-4 font-semibold leading-snug border-2
              ${pickedOpt.correct ? "bg-emerald-100 text-emerald-900 border-emerald-400" : "bg-rose-100 text-rose-900 border-rose-400"}`}
          >
            <span dangerouslySetInnerHTML={{ __html: pickedOpt.feedback }} />
            {pickedOpt.translation && (
              <em className="mt-1 block italic text-[0.975rem] leading-snug text-emerald-900/80">
                Translation: {pickedOpt.translation}
              </em>
            )}
          </div>
        )}
      </div>

      <NavRow onBack={onBack} onNext={onNext} disabledNext={!mcqDone} nextLabel={nextLabel} />
    </div>
  );
}

/* ─────────────── Matching Card (Spanish ↔ English) — not used in this scene, kept for parity ─────────────── */
type Pair = { id: number; es: string; en: string };
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function MatchCard({
  title,
  body,
  onNext,
  onBack,
  sfx,
  nextLabel = "Continue",
}: {
  title: string;
  body: string;
  onNext: () => void;
  onBack: () => void;
  sfx: ReturnType<typeof useAnswerSfxFiles>;
  nextLabel?: string;
}) {
  const pairs: Pair[] = React.useMemo(() => {
    return body
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean)
      .map((l, idx) => {
        const [es, en] = l.split("→").map((s) => (s ? s.trim() : ""));
        return { id: idx, es, en };
      });
  }, [body]);

  const [left] = React.useState<Pair[]>(pairs);
  const [right] = React.useState<Pair[]>(() => shuffle(pairs));
  const [matchedIds, setMatchedIds] = React.useState<Set<number>>(new Set());
  const [pickEs, setPickEs] = React.useState<number | null>(null);
  const [pickEn, setPickEn] = React.useState<number | null>(null);
  const [wrongPair, setWrongPair] = React.useState<[number, number] | null>(null);

  const allDone = matchedIds.size === pairs.length;

  React.useEffect(() => {
    if (pickEs == null || pickEn == null) return;
    const ok = pickEs === pickEn;
    if (ok) {
      setMatchedIds((prev) => new Set(prev).add(pickEs));
      sfx.correct();
      setPickEs(null);
      setPickEn(null);
    } else {
      setWrongPair([pickEs, pickEn]);
      sfx.wrong();
      const t = setTimeout(() => {
        setWrongPair(null);
        setPickEs(null);
        setPickEn(null);
      }, 450);
      return () => clearTimeout(t);
    }
  }, [pickEs, pickEn, sfx]);

  function btnBase(active: boolean, matched: boolean, wrong: boolean) {
    if (matched)
      return "opacity-100 bg-emerald-500/15 border-emerald-500/60 text-emerald-200";
    if (wrong)
      return "bg-rose-600/20 border-rose-500/70 text-rose-200 animate-pulse";
    if (active)
      return "bg-amber-300/20 border-amber-300/70 text-amber-200";
    return "bg-slate-900/40 hover:bg-slate-900/60 border-slate-700/70";
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-emerald-700/50 bg-[#0f1f23]/70 p-4 shadow-[inset_0_0_0_1px_rgba(16,185,129,0.2)]">
        <div className="font-bold text-emerald-200 mb-4">{title}</div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Spanish */}
          <div className="space-y-2">
            <div className="text-sm text-slate-300/80 mb-1">Español</div>
            {left.map((p) => {
              const matched = matchedIds.has(p.id);
              const active = pickEs === p.id;
              const wrong = wrongPair?.[0] === p.id;
              return (
                <button
                  key={`es-${p.id}`}
                  disabled={matched}
                  onClick={() => setPickEs((s) => (s === p.id ? null : p.id))}
                  className={`w-full text-left rounded-2xl p-3 border transition ${btnBase(active, matched, !!wrong)} ${matched ? "cursor-default opacity-60" : "cursor-pointer"}`}
                >
                  <span className="font-extrabold text-slate-100">{p.es}</span>
                </button>
              );
            })}
          </div>

          {/* English */}
          <div className="space-y-2">
            <div className="text-sm text-slate-300/80 mb-1">English</div>
            {right.map((p) => {
              const matched = matchedIds.has(p.id);
              const active = pickEn === p.id;
              const wrong = wrongPair?.[1] === p.id;
              return (
                <button
                  key={`en-${p.id}`}
                  disabled={matched}
                  onClick={() => setPickEn((s) => (s === p.id ? null : p.id))}
                  className={`w-full text-left rounded-2xl p-3 border transition ${btnBase(active, matched, !!wrong)} ${matched ? "cursor-default opacity-60" : "cursor-pointer"}`}
                >
                  <span className="text-slate-100">{p.en}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <NavRow onBack={onBack} onNext={onNext} disabledNext={!allDone} nextLabel={nextLabel} />
    </div>
  );
}

/* ─────────────── Audio system (gesture-safe immediate play) ─────────────── */
const TYPEWRITER_URL = "/sounds/typewriter-intro.mp3";
const CORRECT_URL = "/sounds/correct-answer.wav";
const INCORRECT_URL = "/sounds/incorrect-answer.wav";
const DIALOGUE_BLIP_URL = "/sounds/dialogue-blip.wav";
// Match Scene 4 exactly:
const BRIGHT_POP_URL = "/sounds/bright-pop.wav";
const SUPER_CHUNK_URL = "/sounds/super-chunk-1.wav";

let ACtx: AudioContext | null = null;
let MasterGain: GainNode | null = null;

let BufferTypewriter: AudioBuffer | null = null;
let CurrentTypewriterSrc: AudioBufferSourceNode | null = null;
let HtmlAudioTypewriter: HTMLAudioElement | null = null;

let BufferCorrect: AudioBuffer | null = null;
let BufferWrong: AudioBuffer | null = null;
let HtmlAudioCorrect: HTMLAudioElement | null = null;
let HtmlAudioWrong: HTMLAudioElement | null = null;

let BufferBlip: AudioBuffer | null = null;
let HtmlAudioBlip: HTMLAudioElement | null = null;

// New buffers/elements
let BufferPop: AudioBuffer | null = null;
let BufferSuper: AudioBuffer | null = null;
let HtmlAudioPop: HTMLAudioElement | null = null;
let HtmlAudioSuper: HTMLAudioElement | null = null;

function ensureCtx(): AudioContext {
  if (!ACtx) {
    // @ts-ignore
    ACtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    MasterGain = ACtx.createGain();
    MasterGain.gain.value = 0.85; // ↓ turned down a notch
    MasterGain.connect(ACtx.destination);
  }
  return ACtx;
}

function ensureHtmlAudioElements() {
  if (!HtmlAudioTypewriter) { HtmlAudioTypewriter = new Audio(TYPEWRITER_URL); HtmlAudioTypewriter.preload = "auto"; HtmlAudioTypewriter.volume = 0.7; }
  if (!HtmlAudioCorrect)    { HtmlAudioCorrect    = new Audio(CORRECT_URL);    HtmlAudioCorrect.preload    = "auto"; HtmlAudioCorrect.volume    = 0.9; }
  if (!HtmlAudioWrong)      { HtmlAudioWrong      = new Audio(INCORRECT_URL);  HtmlAudioWrong.preload      = "auto"; HtmlAudioWrong.volume      = 0.85; }
  if (!HtmlAudioBlip)       { HtmlAudioBlip       = new Audio(DIALOGUE_BLIP_URL); HtmlAudioBlip.preload   = "auto"; HtmlAudioBlip.volume       = 0.75; }
  if (!HtmlAudioPop)        { HtmlAudioPop        = new Audio(BRIGHT_POP_URL); HtmlAudioPop.preload        = "auto"; HtmlAudioPop.volume        = 0.85; }
  if (!HtmlAudioSuper)      { HtmlAudioSuper      = new Audio(SUPER_CHUNK_URL); HtmlAudioSuper.preload      = "auto"; HtmlAudioSuper.volume      = 0.9; }
}

/** Decode helpers */
let typewriterDecodingPromise: Promise<void> | null = null;
function startTypewriterDecode() {
  if (typewriterDecodingPromise) return typewriterDecodingPromise;
  typewriterDecodingPromise = (async () => {
    try {
      const ctx = ensureCtx();
      if (ctx.state === "suspended") { try { await ctx.resume(); } catch {} }
      const res = await fetch(TYPEWRITER_URL, { cache: "force-cache" });
      if (!res.ok) throw new Error(`fetch ${res.status}`);
      const arr = await res.arrayBuffer();
      const buf = await new Promise<AudioBuffer>((resolve, reject) => {
        try { // @ts-ignore
          ctx.decodeAudioData(arr.slice(0), resolve, reject);
        } catch {
          ctx.decodeAudioData(arr).then(resolve).catch(reject);
        }
      });
      BufferTypewriter = buf;
    } catch {}
  })();
  return typewriterDecodingPromise;
}

let sfxDecodingPromise: Promise<void> | null = null;
function startSfxDecode() {
  if (sfxDecodingPromise) return sfxDecodingPromise;
  sfxDecodingPromise = (async () => {
    try {
      const ctx = ensureCtx();
      if (ctx.state === "suspended") { try { await ctx.resume(); } catch {} }
      const load = async (url: string) => {
        const res = await fetch(url, { cache: "force-cache" });
        if (!res.ok) throw new Error(String(res.status));
        const arr = await res.arrayBuffer();
        return new Promise<AudioBuffer>((resolve, reject) => {
          try { // @ts-ignore
            ctx.decodeAudioData(arr.slice(0), resolve, reject);
          } catch {
            ctx.decodeAudioData(arr).then(resolve).catch(reject);
          }
        });
      };
      if (!BufferCorrect) BufferCorrect = await load(CORRECT_URL);
      if (!BufferWrong)   BufferWrong   = await load(INCORRECT_URL);
      if (!BufferBlip)    BufferBlip    = await load(DIALOGUE_BLIP_URL);
      if (!BufferPop)     BufferPop     = await load(BRIGHT_POP_URL);
      if (!BufferSuper)   BufferSuper   = await load(SUPER_CHUNK_URL);
    } catch {}
  })();
  return sfxDecodingPromise;
}

function addUniversalUnlockOnce(onGesture: () => void) {
  let fired = false;
  const kick = () => {
    if (fired) return;
    fired = true;
    try { ensureCtx().resume(); } catch {}
    ensureHtmlAudioElements();
    startTypewriterDecode();
    startSfxDecode();
    onGesture();
    window.removeEventListener("pointerdown", kick);
    window.removeEventListener("keydown", kick);
  };
  window.addEventListener("pointerdown", kick, { once: true });
  window.addEventListener("keydown", kick, { once: true });
}

export function useGlobalTypewriterAudio() {
  React.useEffect(() => {
    const resume = async () => {
      ensureHtmlAudioElements();
      if (ACtx?.state === "suspended") {
        try { await ACtx.resume(); } catch {}
      }
    };
    window.addEventListener("pointerdown", resume);
    window.addEventListener("keydown", resume);
    return () => {
      window.removeEventListener("pointerdown", resume);
      window.removeEventListener("keydown", resume);
    };
  }, []);

  const playImmediately = React.useCallback(() => {
    ensureHtmlAudioElements();
    if (ACtx && MasterGain && BufferTypewriter) {
      if (CurrentTypewriterSrc) { try { CurrentTypewriterSrc.stop(0); } catch {} CurrentTypewriterSrc = null; }
      const src = ACtx.createBufferSource();
      src.buffer = BufferTypewriter;
      src.connect(MasterGain);
      src.onended = () => { if (CurrentTypewriterSrc === src) CurrentTypewriterSrc = null; };
      try { src.start(0); CurrentTypewriterSrc = src; } catch {}
      return;
    }
    try {
      if (HtmlAudioTypewriter) { HtmlAudioTypewriter.pause(); HtmlAudioTypewriter.currentTime = 0; HtmlAudioTypewriter.play().catch(() => {}); }
      else {
        const el = new Audio(TYPEWRITER_URL);
        el.volume = 0.7;
        el.play().catch(() => {});
        HtmlAudioTypewriter = el;
      }
    } catch {}
  }, []);

  const stopAll = React.useCallback(() => {
    if (CurrentTypewriterSrc) { try { CurrentTypewriterSrc.stop(0); } catch {} CurrentTypewriterSrc = null; }
    if (HtmlAudioTypewriter) { try { HtmlAudioTypewriter.pause(); HtmlAudioTypewriter.currentTime = 0; } catch {} }
  }, []);

  const onFirstGesture = React.useCallback((cb: () => void) => {
    addUniversalUnlockOnce(() => {
      cb();
    });
  }, []);

  return React.useMemo(() => ({ onFirstGesture, playImmediately, stopAll }), [
    onFirstGesture,
    playImmediately,
    stopAll,
  ]);
}

/* ─────────────── Answer SFX (correct / wrong / bright-pop / super-chunk) ─────────────── */
function useAnswerSfxFiles() {
  React.useEffect(() => {
    ensureHtmlAudioElements();
    const resume = () => {
      ensureCtx();
      startSfxDecode();
    };
    window.addEventListener("pointerdown", resume, { once: true });
    window.addEventListener("keydown", resume, { once: true });
    return () => {
      window.removeEventListener("pointerdown", resume);
      window.removeEventListener("keydown", resume);
    };
  }, []);

  const playViaWebAudio = React.useCallback((buf: AudioBuffer | null, rate = 1) => {
    if (!buf || !ACtx || !MasterGain) return false;
    try {
      const src = ACtx.createBufferSource();
      src.buffer = buf;
      src.playbackRate.value = rate;
      src.connect(MasterGain);
      src.start(0);
      return true;
    } catch {
      return false;
    }
  }, []);

  const playViaHtmlAudio = React.useCallback((el: HTMLAudioElement | null, url: string) => {
    try {
      if (el) {
        el.pause();
        el.currentTime = 0;
        el.play().catch(() => {});
      } else {
        const a = new Audio(url);
        a.play().catch(() => {});
        if (url === CORRECT_URL) HtmlAudioCorrect = a;
        else if (url === INCORRECT_URL) HtmlAudioWrong = a;
        else if (url === DIALOGUE_BLIP_URL) HtmlAudioBlip = a as any;
        else if (url === BRIGHT_POP_URL) HtmlAudioPop = a;
        else if (url === SUPER_CHUNK_URL) HtmlAudioSuper = a;
      }
    } catch {}
  }, []);

  const correct = React.useCallback(() => {
    ensureHtmlAudioElements();
    if (!playViaWebAudio(BufferCorrect)) playViaHtmlAudio(HtmlAudioCorrect, CORRECT_URL);
  }, [playViaWebAudio, playViaHtmlAudio]);

  const wrong = React.useCallback(() => {
    ensureHtmlAudioElements();
    if (!playViaWebAudio(BufferWrong)) playViaHtmlAudio(HtmlAudioWrong, INCORRECT_URL);
  }, [playViaWebAudio, playViaHtmlAudio]);

  const pop = React.useCallback(() => {
    ensureHtmlAudioElements();
    if (!playViaWebAudio(BufferPop)) playViaHtmlAudio(HtmlAudioPop, BRIGHT_POP_URL);
  }, [playViaWebAudio, playViaHtmlAudio]);

  const superChunk = React.useCallback(() => {
    ensureHtmlAudioElements();
    const ok = playViaWebAudio(BufferSuper, 0.98 + Math.random() * 0.05);
    if (!ok) playViaHtmlAudio(HtmlAudioSuper, SUPER_CHUNK_URL);
  }, [playViaWebAudio, playViaHtmlAudio]);

  return React.useMemo(() => ({ correct, wrong, pop, superChunk }), [correct, wrong, pop, superChunk]);
}

/* ─────────────── Dialogue blip SFX (per character, throttled) ─────────────── */
function useDialogueBlip() {
  const lastRef = React.useRef<number>(0);
  const MIN_GAP_MS = 28;

  const play = React.useCallback((speaker?: string) => {
    const now = performance.now();
    if (now - lastRef.current < MIN_GAP_MS) return;
    lastRef.current = now;

    const base = speaker === "Receptionist" ? 1.06 : speaker === "You" ? 0.96 : 1.0;
    const jitter = 0.96 + Math.random() * 0.08;
    const rate = base * jitter;

    if (ACtx && MasterGain && BufferBlip) {
      try {
        const src = ACtx.createBufferSource();
        src.buffer = BufferBlip;
        src.playbackRate.value = rate;
        src.connect(MasterGain);
        src.start(0);
        return;
      } catch {}
    }

    try {
      if (HtmlAudioBlip) {
        HtmlAudioBlip.pause();
        HtmlAudioBlip.currentTime = 0;
        HtmlAudioBlip.play().catch(() => {});
      } else {
        const a = new Audio(DIALOGUE_BLIP_URL);
        a.volume = 0.75;
        a.play().catch(() => {});
        HtmlAudioBlip = a;
      }
    } catch {}
  }, []);

  React.useEffect(() => {
    const resume = () => {
      ensureCtx();
      ensureHtmlAudioElements();
      startSfxDecode();
    };
    window.addEventListener("pointerdown", resume, { once: true });
    window.addEventListener("keydown", resume, { once: true });
    return () => {
      window.removeEventListener("pointerdown", resume);
      window.removeEventListener("keydown", resume);
    };
  }, []);

  return React.useMemo(() => ({ play }), [play]);
}

/* ─────────────── Lightweight Confetti (no deps) ─────────────── */
function useConfetti() {
  type Particle = { x: number; y: number; vx: number; vy: number; r: number; a: number; hue: number; shape: 0 | 1; };
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const particlesRef = React.useRef<Particle[]>([]);
  const rafRef = React.useRef<number | null>(null);

  const resize = React.useCallback(() => {
    const c = canvasRef.current;
    if (!c) return;
    const dpr = Math.min(2, (window.devicePixelRatio || 1));
    c.width = Math.floor(c.clientWidth * dpr);
    c.height = Math.floor(c.clientHeight * dpr);
    const ctx = c.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);
  }, []);

  React.useEffect(() => {
    const on = () => resize();
    window.addEventListener("resize", on);
    resize();
    return () => window.removeEventListener("resize", on);
  }, [resize]);

  const animate = React.useCallback(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;

    const w = c.clientWidth;
    const h = c.clientHeight;

    ctx.clearRect(0, 0, w, h);

    particlesRef.current.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.12;
      p.vx *= 0.996;
      p.vy *= 0.996;
      p.a *= 0.995;

      ctx.save();
      ctx.globalAlpha = Math.max(0, p.a);
      ctx.translate(p.x, p.y);
      ctx.rotate((p.x + p.y) * 0.02);
      ctx.fillStyle = `hsl(${p.hue}, 90%, 60%)`;
      if (p.shape === 0) { ctx.beginPath(); ctx.arc(0, 0, p.r, 0, Math.PI * 2); ctx.fill(); }
      else { ctx.fillRect(-p.r, -p.r, p.r * 2, p.r * 2); }
      ctx.restore();
    });

    particlesRef.current = particlesRef.current.filter((p) => p.a > 0 && p.y < h + 50);
    rafRef.current = requestAnimationFrame(animate);
  }, []);

  React.useEffect(() => {
    if (rafRef.current == null) rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); rafRef.current = null; };
  }, [animate]);

  const burst = React.useCallback((opts?: { count?: number; spread?: number; y?: number }) => {
    const count = opts?.count ?? 120;
    const spread = (opts?.spread ?? 60) * (Math.PI / 180);
    const yNorm = opts?.y ?? 0.2;

    const c = canvasRef.current;
    if (!c) return;
    const w = c.clientWidth;
    const h = c.clientHeight;
    const cx = w / 2;
    const cy = h * yNorm;

    for (let i = 0; i < count; i++) {
      const angle = -Math.PI / 2 + (Math.random() - 0.5) * spread;
      const speed = 6 + Math.random() * 6;
      const hue = 40 + Math.random() * 280;
      particlesRef.current.push({
        x: cx + (Math.random() - 0.5) * 40,
        y: cy + (Math.random() - 0.5) * 10,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        r: 2 + Math.random() * 3.5,
        a: 1,
        hue,
        shape: Math.random() < 0.5 ? 0 : 1,
      });
    }
  }, []);

  const Overlay = React.useCallback(() => (
    <div className="pointer-events-none fixed inset-0 z-[900]">
      <canvas ref={canvasRef} className="w-full h-full" style={{ display: "block" }} />
    </div>
  ), []);

  return React.useMemo(() => ({ burst, Overlay }), [burst, Overlay]);
}

/* ─────────────── XP toasts ─────────────── */
function useXpToasts() {
  type Toast = { id: number; x: number; y: number; amount: number };
  const [items, setItems] = React.useState<Toast[]>([]);
  const idRef = React.useRef(1);

  const fireXp = React.useCallback((amount: number, x: number, y: number) => {
    const id = idRef.current++;
    setItems((arr) => [...arr, { id, x, y, amount }]);
  }, []);

  const remove = React.useCallback((id: number) => {
    setItems((arr) => arr.filter((t) => t.id !== id));
  }, []);

  const Overlay: React.FC = React.useCallback(() => {
    return (
      <div className="pointer-events-none fixed inset-0 z-[1000]">
        {items.map((t) => (
          <ToastBubble key={t.id} {...t} onDone={remove} />
        ))}
      </div>
    );
  }, [items, remove]);

  return { fireXp, XpOverlay: Overlay };
}

function ToastBubble({
  id, x, y, amount, onDone
}: {
  id: number;
  x: number;
  y: number;
  amount: number;
  onDone: (id: number) => void;
}) {
  const [style, setStyle] = React.useState<{ opacity: number; ty: number; scale: number }>({
    opacity: 0, ty: 0, scale: 0.9,
  });

  React.useEffect(() => {
    const raf1 = requestAnimationFrame(() => { setStyle({ opacity: 1, ty: -32, scale: 1 }); });
    const t1 = setTimeout(() => setStyle({ opacity: 0, ty: -56, scale: 1.02 }), 650);
    const t2 = setTimeout(() => onDone(id), 900);
    return () => { cancelAnimationFrame(raf1); clearTimeout(t1); clearTimeout(t2); };
  }, [id, onDone]);

  const positive = amount >= 0;
  const sign = positive ? "+" : "";
  const bg = positive ? "rgba(52,211,153,0.95)" : "rgba(244,63,94,0.95)";
  const color = positive ? "#052e26" : "#fff";

  return (
    <div
      style={{
        position: "fixed", left: x, top: y,
        transform: `translate(-50%, -50%) translateY(${style.ty}px) scale(${style.scale})`,
        opacity: style.opacity,
        transition: "transform 600ms cubic-bezier(.2,.7,.2,1), opacity 600ms linear",
        background: bg, color, padding: "6px 10px", borderRadius: 999, fontWeight: 900,
        boxShadow: "0 10px 30px rgba(0,0,0,0.35)", pointerEvents: "none", zIndex: 1000, letterSpacing: 0.2,
      }}
    >
      {`${sign}${amount} XP`}
    </div>
  );
}

/* ─────────────── Typewriter for narrative ─────────────── */
const TYPE_STEP_MS = 14;

function TypeLine({
  text,
  onDone,
  audio
}: {
  text: string;
  onDone: () => void;
  audio: ReturnType<typeof useGlobalTypewriterAudio>;
}) {
  const [out, setOut] = React.useState("");
  const [done, setDone] = React.useState(false);

  const onDoneRef = React.useRef(onDone);
  React.useEffect(() => { onDoneRef.current = onDone; }, [onDone]);

  const playRef = React.useRef(audio.playImmediately);
  const stopRef = React.useRef(audio.stopAll);
  React.useEffect(() => { playRef.current = audio.playImmediately; }, [audio.playImmediately]);
  React.useEffect(() => { stopRef.current = audio.stopAll; }, [audio.stopAll]);

  const startedRef = React.useRef(false);
  const rafIdRef = React.useRef<number | null>(null);
  const startTimeRef = React.useRef<number>(0);
  const lastIdxRef = React.useRef<number>(0);

  React.useEffect(() => {
    setOut(""); setDone(false); stopRef.current?.(); startedRef.current = false; lastIdxRef.current = 0;

    const loop = (t: number) => {
      if (!startedRef.current) { rafIdRef.current = requestAnimationFrame(loop); return; }
      const elapsed = t - startTimeRef.current;
      const idx = Math.min(text.length, Math.floor(elapsed / TYPE_STEP_MS));
      if (idx !== lastIdxRef.current) { lastIdxRef.current = idx; setOut(text.slice(0, idx)); }
      if (idx >= text.length) {
        setDone(true); stopRef.current?.(); onDoneRef.current?.();
        if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null; return;
      }
      rafIdRef.current = requestAnimationFrame(loop);
    };

    rafIdRef.current = requestAnimationFrame(loop);

    const startBoth = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      playRef.current?.();
      startTimeRef.current = performance.now();
    };

    const once = () => { startBoth(); window.removeEventListener("pointerdown", once); window.removeEventListener("keydown", once); };
    window.addEventListener("pointerdown", once, { once: true });
    window.addEventListener("keydown", once, { once: true });

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
      stopRef.current?.();
    };
  }, [text]);

  return (
    <pre className="whitespace-pre-wrap text-[1.075rem] leading-relaxed text-slate-100">
      {out}
      {!done && <span className="ml-0.5 text-emerald-300 animate-pulse">▍</span>}
    </pre>
  );
}
