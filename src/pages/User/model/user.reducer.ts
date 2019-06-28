import { ActionType, LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, SET_USER_INFO, IUser, IUserStore } from './user.type';
import CONST from '../../../assets/js/CONST';
import history from '../../../assets/js/handler/history';

let initState: IUserStore = {
  userInfo: {
    id: '',
    avatar: '',
    userName: '',
    token: '',
    vmaToken: '',
  },
  isLogining: false,
  loginErrMsg: '',
};
export default function userReducer(state: IUserStore = initState, action: ActionType): IUserStore {
  switch (action.type) {
    case LOGIN:
      return { ...state, isLogining: true, loginErrMsg: '' };
    case LOGIN_SUCCESS:
    case SET_USER_INFO:
      localStorage.setItem(CONST.TOKEN, action.payload.token);
      localStorage.setItem(CONST.LOCALSTORAGE_USER_INFO, JSON.stringify(action.payload));
      return { ...state, userInfo: action.payload, isLogining: false };
    case LOGIN_FAIL:
      return { ...state, loginErrMsg: action.message, isLogining: false };
    default:
      return state;
  }
}
