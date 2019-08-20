import { RouteComponentProps } from "react-router-dom";
import { IUser } from "../../User/model/user.type";
import { IRoute } from "../../../router/router";


/**
 * props
 */
export interface IHomeProps extends RouteComponentProps<any> {
  showSideMenu: Function;
  siderMenuCollapsed: boolean;
  userInfo:IUser;
  setUserInfo:Function;
  loading:boolean;
  
}


/**
 * state
 */
export interface IHomeState {
  defaultSelectedKeys: Array<string>;
  defaultOpenKeys: Array<string>;
  navTabs:Array<IRoute>
}

/**
 * store
 */
export interface IHomeStore{
  siderMenuCollapsed: boolean;
  loading:boolean;
}

/**
 * action
 */

export const SHOW_SIDE_MENU = 'SHOW_SIDE_MENU';
export type SHOW_SIDE_MENU = typeof SHOW_SIDE_MENU;
export const SHOW_LOADING = 'SHOW_LOADING';
export type SHOW_LOADING = typeof SHOW_LOADING;

export const ERROR_MESSAGE = 'ERROR_MESSAGE';
export type ERROR_MESSAGE = typeof ERROR_MESSAGE;
export const WARN_MESSAGE = 'WARN_MESSAGE';
export type WARN_MESSAGE = typeof WARN_MESSAGE;
export const INFO_MESSAGE = 'INFO_MESSAGE';
export type INFO_MESSAGE = typeof INFO_MESSAGE;

export const LOGOUT = 'LOGOUT';
export type LOGOUT = typeof LOGOUT;
export interface ISideMenuShoweAction {
  type: SHOW_SIDE_MENU;
}
export interface IShowLoadingAction {
  type: SHOW_LOADING;
  data:boolean
}
export interface ILogoutAction {
  type: LOGOUT;
  payload: any;
}
export interface IMessageAction {
  type: ERROR_MESSAGE | WARN_MESSAGE | INFO_MESSAGE;
  data: string;
}

export type ActionType =
  | ILogoutAction
  | ISideMenuShoweAction
  | IShowLoadingAction
  | IMessageAction

