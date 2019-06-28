import { FormComponentProps } from 'antd/lib/form';
export interface IUser {
  id: string;
  avatar: string;
  userName: string;
  token:string;
  vmaToken:string;
}
export interface ILoginForm {
  userName:string,
  password:string,
  vmaToken:string,

}
/**
 * state
 */
export interface ILoginState {
  rememberMe: boolean;
}

/**
 * props
 */
export interface ILoginProps extends FormComponentProps {
  login: Function;
  isLogining: boolean;
  loginErrMsg: string;
  userInfo: IUser;
}
/**
 * store
 */
export interface IUserStore {
  userInfo:IUser;
  isLogining:boolean;
  loginErrMsg:string;
}
/**
 * action
 */
export const LOGIN = 'LOGIN';
export type LOGIN = typeof LOGIN;
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export type LOGIN_SUCCESS = typeof LOGIN_SUCCESS;
export const LOGIN_FAIL = 'LOGIN_FAIL';
export type LOGIN_FAIL = typeof LOGIN_FAIL;

export const SET_USER_INFO = 'SET_USER_INFO';
export type SET_USER_INFO = typeof SET_USER_INFO;

export interface ILoginAction {
  type: LOGIN;
  payload: any;
}

export interface ILoginSuccessAction {
  type: LOGIN_SUCCESS;
  payload: IUser;
}
export interface ILoginFailAction {
  type: LOGIN_FAIL;
  message: string;
}
export interface ISetUserInfoAction {
  type: SET_USER_INFO;
  payload: IUser;
}

export type ActionType =
  | ILoginSuccessAction
  | ILoginFailAction
  | ISetUserInfoAction
  | ILoginAction;

// action end
