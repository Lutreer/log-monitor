import { call, put, takeLatest } from 'redux-saga/effects';
import {
  GetGameListActionInterface,
  GetGameListSuccessActionInterface,
  GetGameListFailActionInterface,
  GET_GAME_LIST_SUCCESS,
  GET_GAME_LIST_FAIL,
  GET_GAME_LIST,
} from './game.type';
import GameService from '../../../services/GameService';

function* gameListSage(action: GetGameListActionInterface) {
  let { payload } = action;
  let res = yield call(GameService.getGameList, payload);
  if (res.errorCode == 0) {
    const gameSuccessAction: GetGameListSuccessActionInterface = {
      type: GET_GAME_LIST_SUCCESS,
      payload: res.data,
    };
    yield put(gameSuccessAction);
  } else {
    let gameFailAction: GetGameListFailActionInterface = {
      type: GET_GAME_LIST_FAIL,
      message: res.message,
    };
    yield put(gameFailAction);
  }
}


export default function* sage(){
    yield takeLatest(GET_GAME_LIST,gameListSage)
}