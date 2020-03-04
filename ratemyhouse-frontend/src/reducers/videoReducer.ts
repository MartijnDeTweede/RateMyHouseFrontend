import { VideoContainerState } from "../types/video.types";
import { 
  VIDEOS_FETCH_REQUESTED,
  VIDEOS_FETCH_SUCCEEDED,
  VIDEOS_FETCH_FAILED,
  VIDEOS_UPDATE_REQUESTED,
  VIDEOS_UPDATE_SUCCEEDED,
  VIDEOS_UPDATE_FAILED,
  VIDEOS_ADD_REQUESTED,
  VIDEOS_ADD_SUCCEEDED,
  VIDEOS_ADD_FAILED,
  VIDEOS_DELETE_REQUESTED,
  VIDEOS_DELETE_SUCCEEDED,
  VIDEOS_DELETE_FAILED,
  RATE_VIDEO_FAILED,
  RATE_VIDEO_SUCCEEDED,
  RATE_VIDEO_REQUESTED,
} from "../actions/VideoActionCreator";
import { intialVideosstate } from "../static/initalVideoState";

const videoReducer = (state: VideoContainerState =intialVideosstate, action: any) => {
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
        ...intialVideosstate,
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
        ...intialVideosstate,
      };
    }
    case VIDEOS_ADD_REQUESTED : {
      return {
        ...state,
        isFetching: true,
      };
    }
    case VIDEOS_ADD_SUCCEEDED: {
      return {
        ...state,
        videos: action.videos,
        isFetching: false,
      };
    }
    case VIDEOS_ADD_FAILED: {
      return {
        ...intialVideosstate,
      };
    }
    case VIDEOS_DELETE_REQUESTED : {
      return {
        ...state,
        isFetching: true,
      };
    }
    case VIDEOS_DELETE_SUCCEEDED: {
      return {
        ...state,
        videos: action.videos,
        isFetching: false,
      };
    }
    case VIDEOS_DELETE_FAILED: {
      return {
        ...intialVideosstate,
      };
    }
    case RATE_VIDEO_REQUESTED : {
      return {
        ...state,
        isFetching: true,
      };
    }
    case RATE_VIDEO_SUCCEEDED: {
      return {
        ...state,
        videos: action.videos,
        isFetching: false,
      };
    }
    case RATE_VIDEO_FAILED: {
      return {
        ...intialVideosstate,
      };
    }
    default:
      return state;
  }
}

export default videoReducer;