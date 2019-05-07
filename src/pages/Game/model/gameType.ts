export interface GameInterface {
  id: string;
  icon_path: string;
  app_name: string;
  pkg_name: string;
}
export interface GameListActionInterface {
  type: 'GET_GAME_LIST';
  payload: any;
}

export type ActionType = GameListActionInterface;
