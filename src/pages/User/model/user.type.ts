export interface IUser {
  id: string;
  avator: string;
  userName: string;
  token:string;
  vmaToken:string;
}
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
export interface LoginActionInterface {
  type: LOGIN;
  payload: any;
}

export interface LoginSuccessActionInterface {
  type: LOGIN_SUCCESS;
  payload: IUser;
}
export interface LoginFailActionInterface {
  type: LOGIN_FAIL;
  message: string;
}

export type ActionType =
  | LoginSuccessActionInterface
  | LoginFailActionInterface
  | LoginActionInterface;

// action end
