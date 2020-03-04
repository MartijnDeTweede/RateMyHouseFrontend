import {
  USER_FETCH_REQUESTED,
  USER_FETCH_SUCCEEDED,
  USER_FETCH_FAILED,
  USER_UPDATE_REQUESTED,
  USER_UPDATE_SUCCEEDED,
  USER_UPDATE_FAILED,
} from '../actions/UserActionCreators';
import { initialUserState } from '../static/initialUserState';

const userReducer = (state=initialUserState, action: any) => {
  switch(action.type) {
    case USER_FETCH_REQUESTED: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case USER_FETCH_SUCCEEDED: {
      return {
        ...state,
        user: action.user,
        isFetching: false,
      };
    }
    case USER_FETCH_FAILED: {
      return {
        ...initialUserState,
      };
    }
    case USER_UPDATE_REQUESTED: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case USER_UPDATE_SUCCEEDED: {
      return {
        ...state,
        user: action.user,
        isFetching: false,
      };
    }
    case USER_UPDATE_FAILED: {
      return {
        ...initialUserState,
      };
    }
    default:
      return state;
  }
}

export default userReducer;