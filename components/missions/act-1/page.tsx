'use client'
import { useMemo, useState } from 'react'
import { Act1 } from './Mission'
import type { Mission, Scene, Block, Option } from './Mission' // uses types from Mission.tsx

type SimpleChoice = Pick<Option, 'text' | 'feedback' | 'xp' | 'correct'>
type SimpleScene = { title: string; content: string; choices: SimpleChoice[] }

/** Adapt Mission.scenes[..].blocks into a super-simple shape for this page */
function adaptScenes(mission: Mission): SimpleScene[] {
  return mission.scenes.map((s: Scene) => {
    const narrative = s.blocks.find((b: Block) => b.kind === 'narrative') as any
    const card = s.blocks.find((b: Block) => b.kind === 'card') as any
    const content: string = (narrative?.text ?? card?.body ?? '') as string

    const choiceBlock =
      (s.blocks.find((b: Block) => b.kind === 'choice') as any) ??
      (s.blocks.find((b: Block) => b.kind === 'choiceLead') as any) ??
      (s.blocks.find((b: Block) => b.kind === 'dialogueWithChoice') as any)

    const choices: SimpleChoice[] = (choiceBlock?.options ?? []).map((o: Option) => ({
      text: o.text,
      feedback: o.feedback,
      xp: o.xp,
      correct: o.correct,
    }))

    return { title: s.title, content, choices }
  })
}

export default function Home() {
  const scenes = useMemo(() => adaptScenes(Act1), [])
  const [currentScene, setCurrentScene] = useState(0)
  const [totalXP, setTotalXP] = useState(0)
  const [feedback, setFeedback] = useState('')

  const scene = scenes[currentScene] ?? scenes[0]

  function handleChoice(choice: SimpleChoice) {
    setFeedback(choice.feedback)
    setTotalXP((xp) => xp + (choice.xp ?? 0))
    if (choice.correct) {
      setTimeout(() => {
        setFeedback('')
        setCurrentScene((s) => Math.min(s + 1, scenes.length - 1))
      }, 2000)
    }
  }

  if (!scene) {
    return (
      <main className="min-h-screen p-8 text-white bg-gray-900">
        No scenes found.
      </main>
    )
  }

  return (
    <main className="min-h-screen p-8 bg-gray-900 text-white">
      <div className="max-w-2xl mx-auto">
        {/* XP counter */}
        <div className="text-right mb-4 text-yellow-400">XP: {totalXP}</div>

        {/* Scene */}
        <h2 className="text-2xl font-bold mb-4">{scene.title}</h2>
        <p className="mb-6 whitespace-pre-wrap">{scene.content}</p>

        {/* Choices */}
        <div className="space-y-3">
          {scene.choices.map((choice, idx) => (
            <button
              key={idx}
              onClick={() => handleChoice(choice)}
              className="w-full p-4 text-left bg-gray-800 hover:bg-gray-700 rounded-lg transition"
            >
              {choice.text}
            </button>
          ))}
        </div>

        {/* Feedback */}
        {feedback && (
          <div
            className={`mt-4 p-4 rounded-lg ${
              /Perfect|Nice|¡Bien|Exacto|Correct/i.test(feedback)
                ? 'bg-green-800'
                : 'bg-red-800'
            }`}
          >
            {feedback}
          </div>
        )}
      </div>
    </main>
  )
}
