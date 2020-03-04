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
        isFetching: true,
      };
    }
    case FEATURED_VIDEOS_FETCH_SUCCEEDED: {
      return {
        ...state,
        featuredVideos: action.videos,
        isFetching: false,
      };
    }
    case FEATURED_VIDEOS_FETCH_FAILED: {
      return {
        ...initalHomeState,
      };
    }
    default:
      return state;
  }
};

export default featuredVideosReducer;