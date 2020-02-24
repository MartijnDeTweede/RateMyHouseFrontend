import { call, put, takeEvery, all } from 'redux-saga/effects';

import { USER_FETCH_REQUESTED, getUserSuccessActionCreator, getUserFailureActionCreator } from '../actions/UserActionCreators';

export function* getUserSaga() : any {
  try {
    // const response = yield call(getCharactersFromApi);
    const user = {userName: "Martijn"};
    yield put(getUserSuccessActionCreator(user))
  } catch(e) {
    yield put(getUserFailureActionCreator());
  }
}

export function* userSaga() {
  yield all([
    takeEvery(USER_FETCH_REQUESTED, getUserSaga),
  ]);
}

