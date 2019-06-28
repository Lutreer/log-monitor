import { RouteComponentProps } from "react-router-dom";
import { IUser } from "../../User/model/user.type";


/**
 * props
 */
export interface IHomeProps extends RouteComponentProps<any> {
  showSideMenu: Function;
  siderMenuCollapsed: boolean;
  addNavTab:Function;
  navTabs: Array<any>;
  userInfo:IUser,
  setUserInfo:Function
}


/**
 * state
 */
export interface IHomeState {
}

/**
 * store
 */
export interface IHomeStore{
  siderMenuCollapsed: boolean;
  navTabs: Array<any>;
}

/**
 * action
 */
export interface ISideMenuShoweAction {
  type: 'SHOW_SIDE_MENU';
}
export interface ILogoutAction {
  type: 'LOGOUT';
  payload: any;
}

export type ActionType =
  | ILogoutAction
  | ISideMenuShoweAction

