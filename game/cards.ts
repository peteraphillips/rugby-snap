import { Card } from './types'

export const cards: Card[] = [
  {
    id: 'p1-prop',
    name: 'Prop Player',
    owner: 1,
    position: 'Prop',
    cost: 2,
    basePower: 3,
    ability: {
      trigger: 'onReveal',
      effectId: 'boost-adjacent',
      text: 'Boosts other forwards in same location by +1'
    }
  },
  {
    id: 'p1-hooker',
    name: 'Hooker Hero',
    owner: 1,
    position: 'Hooker',
    cost: 3,
    basePower: 4,
    ability: {
      trigger: 'onReveal',
      effectId: 'boost-adjacent',
      text: 'Boosts other forwards in same location by +1'
    }
  },
  {
    id: 'p1-lock',
    name: 'Towering Lock',
    owner: 1,
    position: 'Lock',
    cost: 4,
    basePower: 5,
    ability: null
  },
  {
    id: 'p2-prop',
    name: 'Steel Prop',
    owner: 2,
    position: 'Prop',
    cost: 2,
    basePower: 3,
    ability: {
      trigger: 'onReveal',
      effectId: 'boost-adjacent',
      text: 'Boosts other forwards in same location by +1'
    }
  },
  {
    id: 'p2-hooker',
    name: 'Hooker Hammer',
    owner: 2,
    position: 'Hooker',
    cost: 3,
    basePower: 4,
    ability: null
  },
  {
    id: 'p2-lock',
    name: 'Lock Tower',
    owner: 2,
    position: 'Lock',
    cost: 4,
    basePower: 5,
    ability: null
  },
  {
    id: 'p1-scrumhalf',
    name: 'Quick Scrumhalf',
    owner: 1,
    position: 'ScrumHalf',
    cost: 1,
    basePower: 2,
    ability: null
  },
  {
    id: 'p2-flyhalf',
    name: 'Flyhalf Flash',
    owner: 2,
    position: 'FlyHalf',
    cost: 2,
    basePower: 3,
    ability: null
  }
]
