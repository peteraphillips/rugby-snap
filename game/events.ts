export type GameEvent =
  | {
      type: 'PLAY_CARD'
      cardId: string
      locationIndex: number
    }
  | {
      type: 'END_TURN'
    }
