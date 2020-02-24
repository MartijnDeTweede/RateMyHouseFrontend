import { call, put, takeEvery, all } from 'redux-saga/effects';
import { 
  LOGIN_REQUESTED,
  loginSuccessActionCreator,
  loginFailureActionCreator,
  LOGOUT_REQUESTED,
  logoutFailureActionCreator,
  logoutSuccessActionCreator,
  SIGNUP_REQUESTED,
  signupSuccessActionCreator,
  signupFailureActionCreator,
} from '../actions/AuthActionCreator'
import { login, logout, signup } from '../api/authApi';

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
    if(response.message) {
      yield put(logoutFailureActionCreator(response.message))
    } else{ 
      yield put(logoutSuccessActionCreator())
    }
  } catch(e) {
    yield put(logoutFailureActionCreator());
  }
}

export function* signupSaga(action: any) : any {
  try {
    const response = yield call(signup, action.signupCredentials);
    if(response.message) {
      yield put(signupFailureActionCreator(response.message))
    } else{ 
      yield put(signupSuccessActionCreator(response))
    }
  } catch(e) {
    yield put(signupFailureActionCreator());
  }
}

export function* authSaga() {
  yield all([
    takeEvery(LOGIN_REQUESTED, loginSaga),
    takeEvery(LOGOUT_REQUESTED, logoutSaga),
    takeEvery(SIGNUP_REQUESTED, signupSaga),
  ]);
}

