import { RouteComponentProps } from "react-router-dom";
import { IUser } from "../../User/model/user.type";
import { IRoute } from "../../../router/router";


/**
 * props
 */
export interface IHomeProps extends RouteComponentProps<any> {
  showSideMenu: Function;
  siderMenuCollapsed: boolean;
  addNavTab:Function;
  userInfo:IUser,
  setUserInfo:Function
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

