import {
  ActionType,
  IHomeStore,
  SHOW_SIDE_MENU,
  SHOW_LOADING,
  LOGOUT,
  ERROR_MESSAGE,
  INFO_MESSAGE,
  WARN_MESSAGE,
} from './home.type';
import { message } from 'antd';
let initState: IHomeStore = {
  siderMenuCollapsed: false,
  loading: false,
};

export default function gameReducer(state: IHomeStore = initState, action: ActionType): IHomeStore {
  switch (action.type) {
    case LOGOUT:
      return state;
    case SHOW_SIDE_MENU:
      return { ...state, ...{ siderMenuCollapsed: !state.siderMenuCollapsed } };
    case SHOW_LOADING:
      return { ...state, loading: action.data };
    case ERROR_MESSAGE:
      message.error(action.data);
      return state;
    case INFO_MESSAGE:
      message.info(action.data);
      return state;
    case WARN_MESSAGE:
      message.warn(action.data);
      return state;
    default:
      return state;
  }
}
