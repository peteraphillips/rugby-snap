'use client'

import { useReducer, useState } from 'react'
import { createInitialGameState } from '@/game/initGame'
import { gameReducer } from '@/game/reducer'
import { calculateLocationPower } from '@/game/scoring'
import { Card } from '@/game/types'
import PlayerCard from './PlayerCard'

export default function GameBoard() {
  const [state, dispatch] = useReducer(
    gameReducer,
    undefined,
    createInitialGameState
  )

  const [selectedCard, setSelectedCard] = useState<Card | null>(null)
  const activeHand = state.hands[state.activePlayer]

  return (
    <div className="relative space-y-6">
      {/* Optional midline */}
      <div className="absolute top-1/2 w-full border-t-2 border-white border-dashed pointer-events-none"></div>

      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="text-white">
          <div className="font-bold text-lg">
            Turn {state.turn} — Player {state.activePlayer}
          </div>
          <div className="text-sm text-gray-200">
            Energy: {state.energy[state.activePlayer]}
          </div>
        </div>

        <button
          onClick={() => {
            setSelectedCard(null)
            dispatch({ type: 'END_TURN' })
          }}
          className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500"
        >
          End Turn
        </button>
      </div>

      {/* Board */}
      <div className="grid grid-cols-3 gap-4 border-t-2 border-white/50 pt-2">
        {state.board.map((loc, idx) => (
          <div
            key={loc.location.id}
            onClick={() => {
              if (selectedCard) {
                dispatch({
                  type: 'PLAY_CARD',
                  cardId: selectedCard.id,
                  locationIndex: idx
                })
                setSelectedCard(null)
              }
            }}
            className={`
              flex-1 min-h-[160px] border-l-2 border-white/50 last:border-r-2 rounded p-3 cursor-pointer
              ${selectedCard ? 'border-yellow-400' : 'border-gray-300'}
              ${
                loc.location.id === 'scrum'
                  ? 'bg-gray-200'
                  : loc.location.id === 'lineout'
                  ? 'bg-white'
                  : 'bg-green-200'
              }
            `}
          >
            <div className="font-semibold">{loc.location.name}</div>
            <div className="text-xs text-gray-600">{loc.location.text}</div>

            <div className="mt-2 space-y-1">
              {loc.cards.map(card => (
                <div
                  key={card.id}
                  className="transition-all duration-300 ease-out"
                >
                  <PlayerCard card={card} owner={card.owner} selected={false} />
                </div>
              ))}
            </div>

            {/* Location power totals */}
            <div className="mt-2 text-xs font-bold">
              <span className="text-red-600">
                P1: {calculateLocationPower(state, idx, 1)}
              </span>{' '}
              |{' '}
              <span className="text-blue-600">
                P2: {calculateLocationPower(state, idx, 2)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Hand */}
      <div>
        <div className="font-semibold mb-2 text-white">
          Player {state.activePlayer} Hand
        </div>

        <div className="flex gap-3">
          {activeHand.map(card => {
            const disabled = card.cost > state.energy[state.activePlayer]

            return (
              <PlayerCard
                key={card.id}
                card={card}
                owner={card.owner}
                selected={selectedCard?.id === card.id}
                disabled={disabled}
                onClick={() => !disabled && setSelectedCard(card)}
              />
            )
          })}
        </div>
      </div>

      {/* Game Over */}
      {state.gameOver && (
        <div className="text-center font-bold text-xl text-yellow-400">
          Game Over
        </div>
      )}
    </div>
  )
}
