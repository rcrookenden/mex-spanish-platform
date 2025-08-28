'use client'
import { useState } from 'react'
import { scenes } from './missions/act-1/Mission'

export default function Home() {
  const [currentScene, setCurrentScene] = useState(0)
  const [totalXP, setTotalXP] = useState(0)
  const [feedback, setFeedback] = useState('')
  
  const scene = scenes[currentScene]
  
  const handleChoice = (choice: any) => {
    setFeedback(choice.feedback)
    setTotalXP(totalXP + choice.xp)
    
    // Move to next scene after 2 seconds
    if (choice.correct) {
      setTimeout(() => {
        if (currentScene < scenes.length - 1) {
          setCurrentScene(currentScene + 1)
          setFeedback('')
        }
      }, 2000)
    }
  }
  
  return (
    <main className="min-h-screen p-8 bg-gray-900 text-white">
      <div className="max-w-2xl mx-auto">
        {/* XP Counter */}
        <div className="text-right mb-4 text-yellow-400">
          XP: {totalXP}
        </div>
        
        {/* Scene */}
        <h2 className="text-2xl font-bold mb-4">{scene.title}</h2>
        <p className="mb-6">{scene.content}</p>
        
        {/* Choices */}
        <div className="space-y-3">
          {scene.choices.map((choice, index) => (
            <button
              key={index}
              onClick={() => handleChoice(choice)}
              className="w-full p-4 text-left bg-gray-800 hover:bg-gray-700 rounded-lg transition"
            >
              {choice.text}
            </button>
          ))}
        </div>
        
        {/* Feedback */}
        {feedback && (
          <div className={`mt-4 p-4 rounded-lg ${
            feedback.includes('Perfect') || feedback.includes('Nice') 
              ? 'bg-green-800' 
              : 'bg-red-800'
          }`}>
            {feedback}
          </div>
        )}
      </div>
    </main>
  )
}