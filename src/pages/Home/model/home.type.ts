export interface SideMenuShoweActionInterface {
  type: 'SHOW_SIDE_MENU';
}
export interface LogoutActionInterface {
  type: 'LOGOUT';
  payload: any;
}

export type ActionType =
  | LogoutActionInterface
  | SideMenuShoweActionInterface

