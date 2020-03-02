import { userSaga } from './userSagas';
import { authSaga } from './authSaga';
import { userPageSaga } from './userPageSaga';
import { all } from 'redux-saga/effects';
import { videoSaga } from './videoSaga';

export default function* rootSaga() {
  yield all([
    authSaga(),
    userPageSaga(),
    userSaga(),
    videoSaga(),
  ])
}