export const FEATURED_VIDEOS_FETCH_REQUESTED = "FEATURED_VIDEOS_FETCH_REQUESTED";
export const FEATURED_VIDEOS_FETCH_SUCCEEDED = "FEATURED_VIDEOS_FETCH_SUCCEEDED";
export const FEATURED_VIDEOS_FETCH_FAILED = "FEATURED_VIDEOS_FETCH_FAILED";

export const getFeatureVideosRequestActionCreator = (userName) => {
  return {
    type: FEATURED_VIDEOS_FETCH_REQUESTED,
    userName,
    isFetching: true,
  };
}
export const getFeatureVideosSuccessActionCreator = (videos) => {
  return {
    type: FEATURED_VIDEOS_FETCH_SUCCEEDED,
    videos,
    isFetching: false,
  };
}
export const getFeatureVideosFailureActionCreator = () => {
  return {
    type: FEATURED_VIDEOS_FETCH_FAILED,
    isFetching: false,
    videos: [],
  };
}