import { call, put, takeEvery, all } from 'redux-saga/effects';
import { VIDEOS_FETCH_REQUESTED, getVideosSuccessActionCreator, getVideosFailureActionCreator, VIDEOS_UPDATE_REQUESTED, updateVideoSuccessActionCreator, updateVideoFailureActionCreator, addVideosSuccessActionCreator, addVideosFailureActionCreator, VIDEOS_ADD_REQUESTED, VIDEOS_DELETE_REQUESTED, deleteVideoSuccessActionCreator, deleteVideoFailureActionCreator } from '../actions/VideoActionCreator';
import { getVideos, updateVideo, addVideo, deleteVideo, addVideoFile } from '../api/videoApi';
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

export function* addVideosSaga(action: any) : any {
  try {
    const token = getToken();

    const fileUplaodResponse = yield call(addVideoFile, {file: action.payload.file, token});

    const videoPayload = {
      video: { 
        ...action.payload.video,
        src: fileUplaodResponse.location,
        videoKey: fileUplaodResponse.key,
      } ,
      userName: action.payload.userName,
      token,
    };
    const response = yield call(addVideo, videoPayload);
    yield put(addVideosSuccessActionCreator(response))
  } catch(e) {
    yield put(addVideosFailureActionCreator());
  }
}

export function* deleteVideosSaga(action: any) : any {
  try {
    const token = getToken();
    const payload = {
      video: action.video,
      token,
    };
    const response = yield call(deleteVideo, payload);
    yield put(deleteVideoSuccessActionCreator(response))
  } catch(e) {
    yield put(deleteVideoFailureActionCreator());
  }
}

export function* videoSaga() {
  yield all([
    takeEvery(VIDEOS_FETCH_REQUESTED, getVideosSaga),
    takeEvery(VIDEOS_UPDATE_REQUESTED, updateVideosSaga),
    takeEvery(VIDEOS_ADD_REQUESTED, addVideosSaga),
    takeEvery(VIDEOS_DELETE_REQUESTED, deleteVideosSaga),
  ]);
}
