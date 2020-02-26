export const VIDEOS_FETCH_REQUESTED = "VIDEOS_FETCH_REQUESTED";
export const VIDEOS_FETCH_SUCCEEDED = "VIDEOS_FETCH_SUCCEEDED";
export const VIDEOS_FETCH_FAILED = "VIDEOS_FETCH_FAILED";

export const VIDEOS_UPDATE_REQUESTED = "VIDEOS_UPDATE_REQUESTED";
export const VIDEOS_UPDATE_SUCCEEDED = "VIDEOS_UPDATE_SUCCEEDED";
export const VIDEOS_UPDATE_FAILED = "VIDEOS_UPDATE_FAILED";

export const getVideosRequestActionCreator = (userName) => {
  return {
    type: VIDEOS_FETCH_REQUESTED,
    userName,
    isFetching: true,
  };
}

export const getVideosSuccessActionCreator = (videos) => {
  return {
    type: VIDEOS_FETCH_SUCCEEDED,
    videos,
    isFetching: false,
  };
}

export const getVideosFailureActionCreator = () => {
  return {
    type: VIDEOS_FETCH_FAILED,
    isFetching: false,
  };
}