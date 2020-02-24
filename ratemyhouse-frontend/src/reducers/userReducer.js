import {
  USER_FETCH_REQUESTED,
  USER_FETCH_SUCCEEDED,
  USER_FETCH_FAILED,
  USER_ISOWNPAGE_REQUESTED,
  USER_ISOWNPAGE_SUCCEEDED,
  USER_ISOWNPAGE_FAILED,
} from '../actions/UserActionCreators';


const initialUserState = {
  user: {},
  isFetching: false,
  isOwnPage: false,
};

const userReducer = (state=initialUserState, action) => {
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
        ...state,
        isFetching: false,
      };
    }
    case USER_ISOWNPAGE_REQUESTED: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case USER_ISOWNPAGE_SUCCEEDED: {
      return {
        ...state,
        isOwnPage: action.isOwnPage,
        isFetching: false,
      };
    }
    case USER_ISOWNPAGE_FAILED: {
      return {
        ...state,
        isFetching: false,
      };
    }
    default:
      return state;
  }
}

export default userReducer;