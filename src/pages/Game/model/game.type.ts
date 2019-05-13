export interface GameInterface {
  id: string;
  icon_path: string;
  app_name: string;
  pkg_name: string;
}

/**
 * action
 */
export const GET_GAME_LIST = 'GET_GAME_LIST';
export type GET_GAME_LIST = typeof GET_GAME_LIST;
export const GET_GAME_LIST_SUCCESS = 'GET_GAME_LIST_SUCCESS';
export type GET_GAME_LIST_SUCCESS = typeof GET_GAME_LIST_SUCCESS;
export const GET_GAME_LIST_FAIL = 'GET_GAME_LIST_FAIL';
export type GET_GAME_LIST_FAIL = typeof GET_GAME_LIST_FAIL;
export interface GetGameListActionInterface {
  type: GET_GAME_LIST;
  payload: any;
}

export interface GetGameListSuccessActionInterface {
  type: GET_GAME_LIST_SUCCESS;
  payload: Array<GameInterface>;
}
export interface GetGameListFailActionInterface {
  type: GET_GAME_LIST_FAIL;
  message: string;
}

export type ActionType =
  | GetGameListActionInterface
  | GetGameListSuccessActionInterface
  | GetGameListFailActionInterface;

// action end
