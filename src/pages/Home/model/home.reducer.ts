import { HomeStateInterface } from "../Home";
import { ActionType } from "./home.type";
let initState:HomeStateInterface = {
  siderMenuCollapsed:false,
  navTabs:[]
}

export default function gameReducer(state: HomeStateInterface = initState, action: ActionType):HomeStateInterface {
  switch (action.type) {
    case 'LOGOUT':
      return state;
    case 'SHOW_SIDE_MENU':
      return {...state, ...{siderMenuCollapsed:!state.siderMenuCollapsed}};
    default:
      return state;
  }
}



