import { GameState } from "./types";
import { GameEvent } from "./events";
import { abilityEffects } from "./abilities";

export function gameReducer(state: GameState, event: GameEvent): GameState {
  if (state.gameOver) return state;

  switch (event.type) {
    case "PLAY_CARD": {
      const player = state.activePlayer;
      const hand = state.hands[player];
      const card = hand.find((c) => c.id === event.cardId);
      if (!card) return state;

      if (card.cost > state.energy[player]) return state;

      const newHands = {
        ...state.hands,
        [player]: hand.filter((c) => c.id !== card.id),
      };

      const newBoard = state.board.map((loc, idx) =>
        idx === event.locationIndex
          ? { ...loc, cards: [...loc.cards, card] }
          : loc,
      );

      let newState = {
        ...state,
        hands: newHands,
        board: newBoard,
        energy: {
          ...state.energy,
          [player]: state.energy[player] - card.cost,
        },
      };

      const location = state.board[event.locationIndex].location;
      const allowedPositions =
        location.id === "scrum"
          ? ["Prop", "Hooker", "Lock", "BackRow"]
          : location.id === "lineout"
            ? ["Lock", "BackRow"]
            : [
                "Prop",
                "Hooker",
                "Lock",
                "BackRow",
                "ScrumHalf",
                "FlyHalf",
                "Centre",
                "Wing",
                "Fullback",
              ];

      if (!allowedPositions.includes(card.position)) return state;

      // Trigger onReveal ability if present
      if (card.ability?.trigger === "onReveal") {
        const effectFn = abilityEffects[card.ability.effectId];
        if (effectFn) newState = effectFn(newState, card.id);
      }

      return newState;
    }

    case "END_TURN": {
      const nextPlayer = state.activePlayer === 1 ? 2 : 1;
      const nextTurn = nextPlayer === 1 ? state.turn + 1 : state.turn;

      return {
        ...state,
        turn: nextTurn,
        activePlayer: nextPlayer,
        energy: {
          ...state.energy,
          [nextPlayer]: Math.min(nextTurn, 6),
        },
        gameOver: nextTurn > 6,
      };
    }

    default:
      return state;
  }
}
