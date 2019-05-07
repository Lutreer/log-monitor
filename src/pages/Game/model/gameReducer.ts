import { GameInterface, ActionType } from "./gameType";
import { GameStateInterface } from "../Game";

let initState: GameStateInterface = {
  gameList: []
};
export default function gameReducer(state: GameStateInterface = initState, action: ActionType):GameStateInterface {
  switch (action.type) {
    case 'GET_GAME_LIST':
      state.gameList = [];
      return state;
    default:
      return state;
  }
}



