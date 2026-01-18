import { GameState, PlayerId } from './types'

export function calculateLocationPower(
  state: GameState,
  locationIndex: number,
  player: PlayerId
): number {
  return state.board[locationIndex].cards
    .filter(c => c.owner === player)
    .reduce((sum, c) => sum + c.basePower, 0)
}

export function calculateWinner(state: GameState): PlayerId | null {
  let p1Wins = 0
  let p2Wins = 0

  state.board.forEach((_, idx) => {
    const p1 = calculateLocationPower(state, idx, 1)
    const p2 = calculateLocationPower(state, idx, 2)
    if (p1 > p2) p1Wins++
    if (p2 > p1) p2Wins++
  })

  if (p1Wins > p2Wins) return 1
  if (p2Wins > p1Wins) return 2
  return null
}
