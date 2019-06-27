import { call, put, takeLatest, all } from 'redux-saga/effects';
import {
  LoginActionInterface,
  LoginSuccessActionInterface,
  LOGIN_SUCCESS,
  LoginFailActionInterface,
  LOGIN_FAIL,
  LOGIN,
} from './user.type';
import UserService from '../../../services/UserSevice';

function* loginSage(action: LoginActionInterface) {
  let { payload } = action;
  let res = yield call(UserService.login, payload);
  if (res.code == 200) {
    const loginSuccessAction: LoginSuccessActionInterface = {
      type: LOGIN_SUCCESS,
      payload: {...res.data, vmaToken:payload.vmaToken},
    };
    yield put(loginSuccessAction);
  } else {
    let loginFailAction: LoginFailActionInterface = {
      type: LOGIN_FAIL,
      message: res.msg,
    };
    yield put(loginFailAction);
  }
}

export default function* sage() {
  yield all([
    takeLatest(LOGIN, loginSage)
  ])
}
