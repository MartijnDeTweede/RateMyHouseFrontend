import { call, put, takeEvery, all } from 'redux-saga/effects';
import {
  USER_FETCH_REQUESTED,
  getUserSuccessActionCreator,
  getUserFailureActionCreator,
  USER_ISOWNPAGE_REQUESTED,
  getIsOwnPageSuccessActionCreator,
  getIsOwnPageFailureActionCreator,
  USER_UPDATE_REQUESTED,
  updateUserFailureActionCreator,
  updateUserSuccessActionCreator,
} from '../actions/UserActionCreators';
import { getUser, getIsOwnPage, updateUser } from '../api/userApi';

const getToken = () => {
  const sessionStorageData = sessionStorage.getItem("rateMyHouseAuth");
  const token = sessionStorageData ? JSON.parse(sessionStorageData).token : '';
  return token;
};

export function* getUserSaga(action: any) : any {
  try {
    const userName = action.userName;
    const response = yield call(getUser, userName);
    yield put(getUserSuccessActionCreator(response))
  } catch(e) {
    yield put(getUserFailureActionCreator());
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
    yield put(updateUserFailureActionCreator());
  }
}

export function* getisOwnPageSage(action: any) : any {
  try {
    const token = getToken();
    const payload = {
      userName: action.userName,
      token,
    }
    const response = yield call(getIsOwnPage, payload);
    yield put(getIsOwnPageSuccessActionCreator(response.isOwnPage))
  } catch(e) {
    yield put(getIsOwnPageFailureActionCreator());
  }
}

export function* userSaga() {
  yield all([
    takeEvery(USER_FETCH_REQUESTED, getUserSaga),
    takeEvery(USER_UPDATE_REQUESTED, updateUserSaga),
    takeEvery(USER_ISOWNPAGE_REQUESTED, getisOwnPageSage),
  ]);
}

