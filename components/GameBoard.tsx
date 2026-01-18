'use client'

import { useReducer, useState } from 'react'
import { createInitialGameState } from '@/game/initGame'
import { gameReducer } from '@/game/reducer'
import { calculateLocationPower } from '@/game/scoring'
import { Card } from '@/game/types'

export default function GameBoard() {
  const [state, dispatch] = useReducer(
    gameReducer,
    undefined,
    createInitialGameState
  )

  const [selectedCard, setSelectedCard] = useState<Card | null>(null)
  const activeHand = state.hands[state.activePlayer]

  return (
    <div className="max-w-5xl mx-auto mt-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <div className="font-bold text-lg">
            Turn {state.turn} — Player {state.activePlayer}
          </div>
          <div className="text-sm text-gray-600">
            Energy: {state.energy[state.activePlayer]}
          </div>
        </div>

        <button
          onClick={() => {
            setSelectedCard(null)
            dispatch({ type: 'END_TURN' })
          }}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          End Turn
        </button>
      </div>

      {/* Board */}
      <div className="grid grid-cols-3 gap-4">
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
            className={`border-2 rounded p-3 min-h-[160px] cursor-pointer
              ${selectedCard ? 'border-blue-500' : 'border-gray-700'}`}
          >
            <div className="font-semibold">{loc.location.name}</div>
            <div className="text-xs text-gray-500">
              {loc.location.text}
            </div>

            <div className="mt-2 space-y-1">
              {loc.cards.map(card => (
                <div
                  key={card.id}
                  className="text-xs border rounded px-2 py-1 bg-gray-100"
                >
                  {card.name} ({card.basePower})
                </div>
              ))}
            </div>

            <div className="mt-2 text-xs text-gray-600">
              P1: {calculateLocationPower(state, idx, 1)} | P2:{' '}
              {calculateLocationPower(state, idx, 2)}
            </div>
          </div>
        ))}
      </div>

      {/* Hand */}
      <div>
        <div className="font-semibold mb-2">
          Player {state.activePlayer} Hand
        </div>

        <div className="flex gap-3">
          {activeHand.map(card => {
            const disabled =
              card.cost > state.energy[state.activePlayer]

            return (
              <div
                key={card.id}
                onClick={() => !disabled && setSelectedCard(card)}
                className={`
                  w-32 border-2 rounded p-2 text-sm cursor-pointer
                  ${
                    selectedCard?.id === card.id
                      ? 'border-blue-600'
                      : 'border-gray-500'
                  }
                  ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
                `}
              >
                <div className="font-bold">{card.name}</div>
                <div>Cost: {card.cost}</div>
                <div>Power: {card.basePower}</div>
              </div>
            )
          })}
        </div>
      </div>

      {state.gameOver && (
        <div className="text-center font-bold text-xl">
          Game Over
        </div>
      )}
    </div>
  )
}
