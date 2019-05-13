import { UserInfoStateInterface } from "../Login";
import { ActionType, LOGIN, LOGIN_SUCCESS,UserInterface } from "./user.type";

let initState: UserInfoStateInterface = {
  userInfo:{
    id: '',
    avator: '',
    username: '',
    password: ''
  },
  isLogining:false
};
export default function userReducer(state: UserInfoStateInterface = initState, action: ActionType):UserInfoStateInterface {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {...state,...action.payload};
    default:
      return state;
  }
}



