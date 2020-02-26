import { call, put, takeEvery, all } from 'redux-saga/effects';
import { VIDEOS_FETCH_REQUESTED, getVideosSuccessActionCreator, getVideosFailureActionCreator } from '../actions/VideoActionCreator';
import { getVideos } from '../api/videoApi';

export function* getVideosSaga(action: any) : any {
  try {
    const userName = action.userName;
    const response = yield call(getVideos, userName);
    yield put(getVideosSuccessActionCreator(response))
  } catch(e) {
    yield put(getVideosFailureActionCreator());
  }
}

export function* videoSaga() {
  yield all([
    takeEvery(VIDEOS_FETCH_REQUESTED, getVideosSaga),
  ]);
}
