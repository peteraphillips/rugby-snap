export type PlayerId = 1 | 2

export type Position =
  | 'Prop'
  | 'Hooker'
  | 'Lock'
  | 'BackRow'
  | 'ScrumHalf'
  | 'FlyHalf'
  | 'Centre'
  | 'Wing'
  | 'Fullback'

export type Trigger =
  | 'onReveal'
  | 'ongoing'
  | 'endOfTurn'

export type Ability = {
  trigger: Trigger
  text: string
  effectId: string
}

export type Card = {
  id: string
  name: string
  position: Position
  cost: number
  basePower: number
  owner: PlayerId
  ability?: Ability
}

export type LocationId =
  | 'scrum'
  | 'lineout'
  | 'ruck'

export type Location = {
  id: LocationId
  name: string
  text: string
}

export type BoardLocation = {
  location: Location
  cards: Card[]
}

export type GameState = {
  turn: number
  activePlayer: PlayerId
  energy: Record<PlayerId, number>
  hands: Record<PlayerId, Card[]>
  board: BoardLocation[]
  gameOver: boolean
}
