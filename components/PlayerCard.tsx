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
    ? 'border-yellow-400'
    : owner === 1
    ? 'border-red-600'
    : 'border-blue-600'

    const bgColor =
    owner === 1
        ? 'bg-red-100'
        : 'bg-blue-100'

    return (
        <div
            onClick={disabled ? undefined : onClick}
            className={`
                w-32 border-2 ${borderColor} ${bgColor} rounded p-2 text-sm cursor-pointer
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
