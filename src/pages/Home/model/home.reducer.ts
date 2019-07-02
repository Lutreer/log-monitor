import { ActionType, IHomeStore } from "./home.type";
let initState:IHomeStore = {
  siderMenuCollapsed:false,
}

export default function gameReducer(state: IHomeStore = initState, action: ActionType):IHomeStore {
  switch (action.type) {
    case 'LOGOUT':
      return state;
    case 'SHOW_SIDE_MENU':
      return {...state, ...{siderMenuCollapsed:!state.siderMenuCollapsed}};
    default:
      return state;
  }
}



