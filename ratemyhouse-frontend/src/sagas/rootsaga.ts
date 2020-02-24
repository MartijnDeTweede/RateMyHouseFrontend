import { userSaga } from './userSagas';
import { authSaga } from './authSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    userSaga(),
    authSaga()
  ])
}