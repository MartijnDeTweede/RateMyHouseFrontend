import { call, put, takeEvery, all } from 'redux-saga/effects';
import { VIDEOS_FETCH_REQUESTED, getVideosSuccessActionCreator, getVideosFailureActionCreator, VIDEOS_UPDATE_REQUESTED, updateVideoSuccessActionCreator, updateVideoFailureActionCreator, addVideosSuccessActionCreator, addVideosFailureActionCreator, VIDEOS_ADD_REQUESTED, VIDEOS_DELETE_REQUESTED, deleteVideoSuccessActionCreator, deleteVideoFailureActionCreator, rateVideoSuccessActionCreator, rateVideoFailureActionCreator, RATE_VIDEO_REQUESTED } from '../actions/VideoActionCreator';
import { getVideos, updateVideo, addVideo, deleteVideo, addVideoFile, rateVideo, getFeaturedVideos, addThumbnailFile } from '../api/videoApi';
import { getToken } from '../helpers/tokenhelpers';
import { FEATURED_VIDEOS_FETCH_REQUESTED, getFeatureVideosSuccessActionCreator, getFeatureVideosFailureActionCreator } from '../actions/FeaturedVideosActionCreators';

export function* getVideosSaga(action: any) : any {
  try {
    const userName = action.userName;
    const response = yield call(getVideos, userName);
    yield put(getVideosSuccessActionCreator(response))
  } catch(e) {
    yield put(getVideosFailureActionCreator(e.message));
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
    yield put(updateVideoFailureActionCreator(e.message));
  }
}

export function* addVideosSaga(action: any) : any {
  try {
    const token = getToken();
    const videoFileResponse = yield call(addVideoFile, {videoFile: action.payload.videoFile, token});
    const thumbNailFileResponse = yield call(addThumbnailFile, {thumbnailFile: action.payload.thumbnailFile, token});

    const videoPayload = {
      video: { 
        ...action.payload.video,
        videoSrc: videoFileResponse.location,
        videoKey: videoFileResponse.key,
        thumbNailSrc: thumbNailFileResponse.location,
        thumbNailKey: thumbNailFileResponse.key,
      },
      userName: action.payload.userName,
      token,
    };
    const response = yield call(addVideo, videoPayload);
    yield put(addVideosSuccessActionCreator(response))
  } catch(e) {
    yield put(addVideosFailureActionCreator(e.message));
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
    yield put(deleteVideoFailureActionCreator(e.message));
  }
}

export function* rateVideosSaga(action: any) : any {
  try {
    const token = getToken();
    const payload = {
      videoId: action.payload.videoId,
      rating: action.payload.rating,
      token,
    };
    const response = yield call(rateVideo, payload);
    yield put(rateVideoSuccessActionCreator(response))
  } catch(e) {
    yield put(rateVideoFailureActionCreator(e.message));
  }
}

export function* getFeaturedVideosSaga(action: any) : any {
  try {
    const response = yield call(getFeaturedVideos);
    yield put(getFeatureVideosSuccessActionCreator(response))
  } catch(e) {
    yield put(getFeatureVideosFailureActionCreator(e.message));
  }
}

export function* videoSaga() {
  yield all([
    takeEvery(VIDEOS_FETCH_REQUESTED, getVideosSaga),
    takeEvery(VIDEOS_UPDATE_REQUESTED, updateVideosSaga),
    takeEvery(VIDEOS_ADD_REQUESTED, addVideosSaga),
    takeEvery(VIDEOS_DELETE_REQUESTED, deleteVideosSaga),
    takeEvery(RATE_VIDEO_REQUESTED, rateVideosSaga),
    takeEvery(FEATURED_VIDEOS_FETCH_REQUESTED, getFeaturedVideosSaga),
  ]);
}
