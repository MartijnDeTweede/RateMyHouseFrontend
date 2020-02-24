import { Reducer } from 'redux';
import { USER_FETCH_REQUESTED, USER_FETCH_SUCCEEDED, USER_FETCH_FAILED } from '../actions/UserActionCreators';

const initialUserState = {
  user: {},
  isFetching: false,
};

const userReducer = (state=initialUserState, action) => {
  switch(action.type) {
    case USER_FETCH_REQUESTED: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case USER_FETCH_SUCCEEDED: {
      return {
        ...state,
        user: action.user,
        isFetching: action.isFetching,
      };
    }
    case USER_FETCH_FAILED: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    default:
      return state;
  }
}

export default userReducer;