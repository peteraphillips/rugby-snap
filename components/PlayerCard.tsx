'use client'

import { Card as CardType, PlayerId } from '@/game/types'

type Props = {
  card: CardType
  selected?: boolean
  owner: PlayerId
  disabled?: boolean
  onClick?: () => void
}

export default function PlayerCard({
  card,
  selected = false,
  owner,
  disabled = false,
  onClick
}: Props) {
  const borderColor = selected
    ? 'border-blue-500'
    : owner === 1
    ? 'border-red-500'
    : 'border-green-500'

  return (
    <div
      onClick={disabled ? undefined : onClick}
      className={`
        w-32 border-2 ${borderColor} rounded p-2 text-sm cursor-pointer
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 transition-transform'}
      `}
    >
      <div className="font-bold">{card.name}</div>
      <div className="text-xs">Cost: {card.cost}</div>
      <div className="text-xs">Power: {card.basePower}</div>
      {card.ability && (
        <div className="text-xs mt-1 italic text-gray-600">
          {card.ability.trigger}: {card.ability.text}
        </div>
      )}
    </div>
  )
}
