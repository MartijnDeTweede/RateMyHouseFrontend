import { call, put, takeEvery, all } from 'redux-saga/effects';
import { VIDEOS_FETCH_REQUESTED, getVideosSuccessActionCreator, getVideosFailureActionCreator, VIDEOS_UPDATE_REQUESTED, updateVideoSuccessActionCreator, updateVideoFailureActionCreator } from '../actions/VideoActionCreator';
import { getVideos, updateVideo } from '../api/videoApi';
import { getToken } from '../helpers/tokenhelpers';

export function* getVideosSaga(action: any) : any {
  try {
    const userName = action.userName;
    const response = yield call(getVideos, userName);
    yield put(getVideosSuccessActionCreator(response))
  } catch(e) {
    yield put(getVideosFailureActionCreator());
  }
}

export function* updateVideosSaga(action: any) : any {
  try {

    const token = getToken();
    const payload = {
      video: action.video,
      token,
    };
    const response = yield call(updateVideo, payload);
    yield put(updateVideoSuccessActionCreator(response))
  } catch(e) {
    yield put(updateVideoFailureActionCreator());
  }
}

export function* videoSaga() {
  yield all([
    takeEvery(VIDEOS_FETCH_REQUESTED, getVideosSaga),
    takeEvery(VIDEOS_UPDATE_REQUESTED, updateVideosSaga),
  ]);
}
