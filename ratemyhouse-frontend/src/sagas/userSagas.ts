import { call, put, takeEvery, all } from 'redux-saga/effects';
import { USER_FETCH_REQUESTED, getUserSuccessActionCreator, getUserFailureActionCreator } from '../actions/UserActionCreators';
import { getUser } from '../api/userApi';

export function* getUserSaga(action: any) : any {
  try {
    const userName = action.userName;
    const response = yield call(getUser, userName);
    yield put(getUserSuccessActionCreator(response))
  } catch(e) {
    yield put(getUserFailureActionCreator());
  }
}

export function* userSaga() {
  yield all([
    takeEvery(USER_FETCH_REQUESTED, getUserSaga),
  ]);
}

