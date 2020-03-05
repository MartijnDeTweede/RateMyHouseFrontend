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
        message: action.message,
        isFetching: action.isFetching,
      };
    }
    case USER_FETCH_SUCCEEDED: {
      return {
        ...state,
        user: action.user,
        message: action.message,
        isFetching: action.isFetching,
      };
    }
    case USER_FETCH_FAILED: {
      return {
        ...initialUserState,
        message: action.message,
        isFetching: action.isFetching,
      };
    }
    case USER_UPDATE_REQUESTED: {
      return {
        ...state,
        message: action.message,
        isFetching: action.isFetching,
      };
    }
    case USER_UPDATE_SUCCEEDED: {
      return {
        ...state,
        user: action.user,
        message: action.message,
        isFetching: action.isFetching,
      };
    }
    case USER_UPDATE_FAILED: {
      return {
        ...initialUserState,
        message: action.message,
        isFetching: action.isFetching,
      };
    }
    default:
      return state;
  }
}

export default userReducer;