import { GameState } from './types'
import { starterCards } from './cards'
import { locations } from './locations'

export function createInitialGameState(): GameState {
  return {
    turn: 1,
    activePlayer: 1,
    energy: {
      1: 1,
      2: 1
    },
    hands: {
      1: starterCards.filter(c => c.owner === 1),
      2: starterCards.filter(c => c.owner === 2)
    },
    board: locations.map(loc => ({
      location: loc,
      cards: []
    })),
    gameOver: false
  }
}
