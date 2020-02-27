import { VideoContainerState } from "../types/video.types";
import { VIDEOS_FETCH_REQUESTED, VIDEOS_FETCH_SUCCEEDED, VIDEOS_FETCH_FAILED, VIDEOS_UPDATE_REQUESTED, VIDEOS_UPDATE_SUCCEEDED, VIDEOS_UPDATE_FAILED } from "../actions/VideoActionCreator";

const intialVideosstate: VideoContainerState = {
videos: [],
isFetching: false,
}

const videoReducer = (state=intialVideosstate, action: any) => {
  switch(action.type) {
    case VIDEOS_FETCH_REQUESTED : {
      return {
        ...state,
        isFetching: true,
      };
    }
    case VIDEOS_FETCH_SUCCEEDED: {
      return {
        ...state,
        videos: action.videos,
        isFetching: false,
      };
    }
    case VIDEOS_FETCH_FAILED: {
      return {
        ...state,
        isFetching: false,
      };
    }
    case VIDEOS_UPDATE_REQUESTED : {
      return {
        ...state,
        isFetching: true,
      };
    }
    case VIDEOS_UPDATE_SUCCEEDED: {
      return {
        ...state,
        videos: action.videos,
        isFetching: false,
      };
    }
    case VIDEOS_UPDATE_FAILED: {
      return {
        ...state,
        isFetching: false,
      };
    }
    default:
      return state;
  }
}

export default videoReducer;