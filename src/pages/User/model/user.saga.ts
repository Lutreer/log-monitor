import { call, put, takeLatest } from 'redux-saga/effects';
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
  debugger
  let { payload } = action;
  let res = yield call(UserService.login, payload);
  if (res.errorCode == 0) {
    const loginSuccessAction: LoginSuccessActionInterface = {
      type: LOGIN_SUCCESS,
      payload: res.data,
    };
    yield put(loginSuccessAction);
  } else {
    let loginFailAction: LoginFailActionInterface = {
      type: LOGIN_FAIL,
      message: res.message,
    };
    yield put(loginFailAction);
  }
}

export default function* sage() {
  yield takeLatest(LOGIN, loginSage);
}
