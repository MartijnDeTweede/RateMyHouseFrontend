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
import { writeCredentialsToSessionStorage, removeCredialsFromSessionStorage } from '../helpers/localStorageHelpers';

export function* loginSaga(action: any) : any {
  try {
    const response = yield call(login, action.loginCredentials);
    writeCredentialsToSessionStorage(response); 
    yield put(loginSuccessActionCreator(response));

  } catch(e) {
    yield put(loginFailureActionCreator(e.message || e.details[0].message));
  }
}

export function* logoutSaga() : any {
  try {
    yield call(logout);
    yield put(logoutSuccessActionCreator());
    removeCredialsFromSessionStorage("rateMyHouseAuth")
  } catch(e) {
    yield put(logoutFailureActionCreator(e.message || e.details[0].message));
  }
}

export function* signupSaga(action: any) : any {
  try {
    const response = yield call(signup, action.signupCredentials);
    writeCredentialsToSessionStorage(response);  
    yield put(signupSuccessActionCreator(response))

  } catch(e) {
    console.log('e: ', e);
    yield put(signupFailureActionCreator(e.message || e.details[0].message));
  }
}

export function* authSaga() {
  yield all([
    takeEvery(LOGIN_REQUESTED, loginSaga),
    takeEvery(LOGOUT_REQUESTED, logoutSaga),
    takeEvery(SIGNUP_REQUESTED, signupSaga),
  ]);
}

