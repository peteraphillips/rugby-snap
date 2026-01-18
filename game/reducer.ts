import { GameState } from './types'
import { GameEvent } from './events'

export function gameReducer(
  state: GameState,
  event: GameEvent
): GameState {
  if (state.gameOver) return state

  switch (event.type) {
    case 'PLAY_CARD': {
      const player = state.activePlayer
      const hand = state.hands[player]
      const card = hand.find(c => c.id === event.cardId)
      if (!card) return state

      if (card.cost > state.energy[player]) return state

      const newHands = {
        ...state.hands,
        [player]: hand.filter(c => c.id !== card.id)
      }

      const newBoard = state.board.map((loc, idx) =>
        idx === event.locationIndex
          ? { ...loc, cards: [...loc.cards, card] }
          : loc
      )

      return {
        ...state,
        hands: newHands,
        board: newBoard,
        energy: {
          ...state.energy,
          [player]: state.energy[player] - card.cost
        }
      }
    }

    case 'END_TURN': {
      const nextPlayer = state.activePlayer === 1 ? 2 : 1
      const nextTurn =
        nextPlayer === 1 ? state.turn + 1 : state.turn

      return {
        ...state,
        turn: nextTurn,
        activePlayer: nextPlayer,
        energy: {
          ...state.energy,
          [nextPlayer]: Math.min(nextTurn, 6)
        },
        gameOver: nextTurn > 6
      }
    }

    default:
      return state
  }
}
