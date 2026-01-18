import { GameState } from './types'

export type EffectFn = (state: GameState, cardId: string) => GameState

export const abilityEffects: Record<string, EffectFn> = {
  'boost-adjacent': (state, cardId) => {
    // +1 power to other cards of same player in same location
    const newBoard = state.board.map(loc => ({
      ...loc,
      cards: loc.cards.map(c =>
        c.id === cardId
          ? c
          : c.owner === state.activePlayer
          ? { ...c, basePower: c.basePower + 1 }
          : c
      )
    }))
    return { ...state, board: newBoard }
  }
}
