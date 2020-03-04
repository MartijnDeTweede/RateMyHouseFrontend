import { call, put, takeEvery, all } from 'redux-saga/effects';
import {
  USER_FETCH_REQUESTED,
  getUserSuccessActionCreator,
  getUserFailureActionCreator,
  USER_UPDATE_REQUESTED,
  updateUserFailureActionCreator,
  updateUserSuccessActionCreator,
} from '../actions/UserActionCreators';
import { getUser, updateUser } from '../api/userApi';
import { getToken } from '../helpers/tokenhelpers';

export function* getUserSaga(action: any) : any {
  try {
    const userName = action.userName;
    const response = yield call(getUser, userName);
    yield put(getUserSuccessActionCreator(response))
  } catch(e) {
    yield put(getUserFailureActionCreator(e.message));
  }
}

export function* updateUserSaga(action: any) : any {
  try {
    const token = getToken();
    const payload = {
      user: action.user,
      token,
    }

    const response = yield call(updateUser, payload);
    yield put(updateUserSuccessActionCreator(response))
  } catch(e) {
    yield put(updateUserFailureActionCreator(e.message));
  }
}

export function* userSaga() {
  yield all([
    takeEvery(USER_FETCH_REQUESTED, getUserSaga),
    takeEvery(USER_UPDATE_REQUESTED, updateUserSaga),
  ]);
}

