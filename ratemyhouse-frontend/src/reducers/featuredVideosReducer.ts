import {
  FEATURED_VIDEOS_FETCH_REQUESTED,
  FEATURED_VIDEOS_FETCH_SUCCEEDED,
  FEATURED_VIDEOS_FETCH_FAILED
} from "../actions/FeaturedVideosActionCreators";
import { initalHomeState } from "../static/initialHomeState";
import { FeaturedVideosState } from "../types/featuredVideos.types";

const featuredVideosReducer = (state: FeaturedVideosState =initalHomeState, action: any) => {
  switch(action.type) {
    case FEATURED_VIDEOS_FETCH_REQUESTED: {
      return {
        ...state,
        message: action.message,
        isFetching: action.isFetching,
      };
    }
    case FEATURED_VIDEOS_FETCH_SUCCEEDED: {
      return {
        ...state,
        featuredVideos: action.videos,
        message: action.message,
        isFetching: action.isFetching,
      };
    }
    case FEATURED_VIDEOS_FETCH_FAILED: {
      return {
        ...initalHomeState,
        message: action.message,
        isFetching: action.isFetching,
      };
    }
    default:
      return state;
  }
};

export default featuredVideosReducer;