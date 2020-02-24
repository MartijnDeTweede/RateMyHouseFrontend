import {
  LOGIN_REQUESTED,
  LOGIN_SUCCEEDED,
  LOGIN_FAILED,
  LOGOUT_REQUESTED,
  LOGOUT_SUCCEEDED,
  LOGOUT_FAILED,
  SIGNUP_REQUESTED,
  SIGNUP_SUCCEEDED,
  SIGNUP_FAILED,
} from '../actions/AuthActionCreator';

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
        message: undefined,
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
    case LOGOUT_REQUESTED: {
      return {
        ...state,
        message: undefined,
        isFetching: action.isFetching,
      };
    }
    case LOGOUT_SUCCEEDED: {
      return {
        ...state,
        auth: {
          isLoggedIn: false,
          userName: undefined
        },
        isFetching: action.isFetching,
      };
    }
    case LOGOUT_FAILED: {
      return {
        ...state,
        message: action.message,
        isFetching: action.isFetching,
      };
    }
    case SIGNUP_REQUESTED: {
      return {
        ...state,
        message: undefined,
        isFetching: action.isFetching,
      };
    }
    case SIGNUP_SUCCEEDED: {
      return {
        ...state,
        auth: action.auth,
        isFetching: action.isFetching,
      };
    }
    case SIGNUP_FAILED: {
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