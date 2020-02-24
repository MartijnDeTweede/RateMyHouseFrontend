import { call, put, takeEvery, all } from 'redux-saga/effects';
import { LOGIN_REQUESTED, loginSuccessActionCreator, loginFailureActionCreator } from '../actions/AuthActionCreator'
import { login } from '../api/authApi';

export function* loginSaga(action: any) : any {
  try {
    const response = yield call(login, action.loginCredentials);
    if(response.message) {
      yield put(loginFailureActionCreator(response.message))
    } else{ 
      yield put(loginSuccessActionCreator(response))
    }
  } catch(e) {
    yield put(loginFailureActionCreator());
  }
}

export function* authSaga() {
  yield all([
    takeEvery(LOGIN_REQUESTED, loginSaga),
  ]);
}

