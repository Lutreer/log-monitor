import { GameInterface, ActionType, GET_GAME_LIST, GET_GAME_LIST_SUCCESS } from "./game.type";
import { GameStateInterface } from "../Game";

let initState: GameStateInterface = {
  gameList: []
};
export default function gameReducer(state: GameStateInterface = initState, action: ActionType):GameStateInterface {
  switch (action.type) {
    case GET_GAME_LIST_SUCCESS:
      return {...state,gameList:action.payload};
    default:
      return state;
  }
}



