export const VIDEOS_FETCH_REQUESTED = "VIDEOS_FETCH_REQUESTED";
export const VIDEOS_FETCH_SUCCEEDED = "VIDEOS_FETCH_SUCCEEDED";
export const VIDEOS_FETCH_FAILED = "VIDEOS_FETCH_FAILED";

export const VIDEOS_UPDATE_REQUESTED = "VIDEOS_UPDATE_REQUESTED";
export const VIDEOS_UPDATE_SUCCEEDED = "VIDEOS_UPDATE_SUCCEEDED";
export const VIDEOS_UPDATE_FAILED = "VIDEOS_UPDATE_FAILED";

export const VIDEOS_ADD_REQUESTED = "VIDEOS_ADD_REQUESTED";
export const VIDEOS_ADD_SUCCEEDED = "VIDEOS_ADD_SUCCEEDED";
export const VIDEOS_ADD_FAILED = "VIDEOS_ADD_FAILED";

export const VIDEOS_DELETE_REQUESTED = "VIDEOS_DELETE_REQUESTED";
export const VIDEOS_DELETE_SUCCEEDED = "VIDEOS_DELETE_SUCCEEDED";
export const VIDEOS_DELETE_FAILED = "VIDEOS_DELETE_FAILED";

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
export const updateVideoRequestActionCreator = (video) => {
  return {
    type: VIDEOS_UPDATE_REQUESTED,
    video,
    isFetching: true,
  };
}
export const updateVideoSuccessActionCreator = (videos) => {
  return {
    type: VIDEOS_UPDATE_SUCCEEDED,
    videos,
    isFetching: false,
  };
}
export const updateVideoFailureActionCreator = () => {
  return {
    type: VIDEOS_UPDATE_FAILED,
    isFetching: false,
  };
}
export const addVideosRequestActionCreator = (payload) => {
  return {
    type: VIDEOS_ADD_REQUESTED,
    payload,
    isFetching: true,
  };
}
export const addVideosSuccessActionCreator = (videos) => {
  return {
    type: VIDEOS_ADD_SUCCEEDED,
    videos,
    isFetching: false,
  };
}
export const addVideosFailureActionCreator = () => {
  return {
    type: VIDEOS_ADD_FAILED,
    isFetching: false,
  };
}

export const deleteVideoRequestActionCreator = (video) => {
  return {
    type: VIDEOS_DELETE_REQUESTED,
    video,
    isFetching: true,
  };
}
export const deleteVideoSuccessActionCreator = (videos) => {
  return {
    type: VIDEOS_DELETE_SUCCEEDED,
    videos,
    isFetching: false,
  };
}
export const deleteVideoFailureActionCreator = () => {
  return {
    type: VIDEOS_DELETE_FAILED,
    isFetching: false,
  };
}