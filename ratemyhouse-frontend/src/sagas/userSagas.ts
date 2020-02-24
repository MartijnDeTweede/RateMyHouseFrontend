import { call, put, takeEvery, all } from 'redux-saga/effects';
import {
  USER_FETCH_REQUESTED,
  getUserSuccessActionCreator,
  getUserFailureActionCreator,
  USER_ISOWNPAGE_REQUESTED,
  getIsOwnPageSuccessActionCreator,
  getIsOwnPageFailureActionCreator,
} from '../actions/UserActionCreators';
import { getUser, getIsOwnPage } from '../api/userApi';

export function* getUserSaga(action: any) : any {
  try {
    const userName = action.userName;
    const response = yield call(getUser, userName);
    yield put(getUserSuccessActionCreator(response))
  } catch(e) {
    yield put(getUserFailureActionCreator());
  }
}

export function* getisOwnPageSage(action: any) : any {
  try {
    const response = yield call(getIsOwnPage, action.payload);
    yield put(getIsOwnPageSuccessActionCreator(response.isOwnPage))
  } catch(e) {
    yield put(getIsOwnPageFailureActionCreator());
  }
}

export function* userSaga() {
  yield all([
    takeEvery(USER_FETCH_REQUESTED, getUserSaga),
    takeEvery(USER_ISOWNPAGE_REQUESTED, getisOwnPageSage),
  ]);
}

