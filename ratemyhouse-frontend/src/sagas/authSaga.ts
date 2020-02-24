import { call, put, takeEvery, all } from 'redux-saga/effects';
import { 
  LOGIN_REQUESTED,
  loginSuccessActionCreator,
  loginFailureActionCreator,
  LOGOUT_REQUESTED,
  logoutFailureActionCreator,
  logoutSuccessActionCreator,
} from '../actions/AuthActionCreator'
import { login, logout } from '../api/authApi';

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

export function* logoutSaga() : any {
  try {
    const response = yield call(logout);
    console.log('response: ', response);
    if(response.message) {
      yield put(logoutFailureActionCreator(response.message))
    } else{ 
      yield put(logoutSuccessActionCreator())
    }
  } catch(e) {
    yield put(logoutFailureActionCreator());
  }
}

export function* authSaga() {
  yield all([
    takeEvery(LOGIN_REQUESTED, loginSaga),
    takeEvery(LOGOUT_REQUESTED, logoutSaga),
  ]);
}

