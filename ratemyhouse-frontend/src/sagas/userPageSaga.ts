import { call, put, takeEvery, all } from 'redux-saga/effects';
import {
  USER_ISOWNPAGE_REQUESTED,
  getIsOwnPageSuccessActionCreator,
  getIsOwnPageFailureActionCreator,
} from '../actions/UserPageActionCreators';
import {getIsOwnPage } from '../api/userApi';
import { getToken } from '../helpers/tokenhelpers';

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

export function* userPageSaga() {
  yield all([
    takeEvery(USER_ISOWNPAGE_REQUESTED, getisOwnPageSage),
  ]);
}