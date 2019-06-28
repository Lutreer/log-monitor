import { ILoginAction, LOGIN, IUser, SET_USER_INFO, ISetUserInfoAction, ILoginForm } from "./user.type";

export default {
    login(payload:ILoginForm):ILoginAction{
        return {
            type: LOGIN,
            payload:payload
        }
    },
    setUserInfo(payload:IUser):ISetUserInfoAction{
        return {
            type: SET_USER_INFO,
            payload:payload
        }
    }
}
