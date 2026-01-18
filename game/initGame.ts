import { cards } from './cards'
import { Card, GameState, Location } from './types'
import { locations } from './locations'

export function createInitialGameState(): GameState {
  // Split cards into hands per player
  const hands = {
    1: cards.filter(c => c.owner === 1).slice(0, 4),
    2: cards.filter(c => c.owner === 2).slice(0, 4)
  }

  const board: { location: Location; cards: Card[] }[] = locations.map(loc => ({
    location: loc,
    cards: []
  }))

  return {
    turn: 1,
    activePlayer: 1,
    hands,
    board,
    energy: { 1: 1, 2: 1 },
    gameOver: false
  }
}
