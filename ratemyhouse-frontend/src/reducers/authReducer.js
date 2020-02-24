import { LOGIN_REQUESTED, LOGIN_SUCCEEDED, LOGIN_FAILED } from '../actions/AuthActionCreator';

const initialAuthState = {
  auth: {
    isFetching: false,
    isLoggedIn: false,
    userName: undefined
  },
  isFetching: false,
  message: undefined,
}

const authReducer = (state=initialAuthState, action) => {
  switch(action.type) {
    case LOGIN_REQUESTED: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case LOGIN_SUCCEEDED: {
      return {
        ...state,
        auth: action.auth,
        isFetching: action.isFetching,
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        message: action.message,
        isFetching: action.isFetching,
      };
    }
    default:
      return state;
  }
}

export default authReducer;