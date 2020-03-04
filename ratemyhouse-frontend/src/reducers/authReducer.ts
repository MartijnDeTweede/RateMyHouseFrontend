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
import { initialAuthState } from '../static/initialAuthState';

const authReducer = (state=initialAuthState, action: any) => {
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
        ...initialAuthState,
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
          userName: undefined,
          token: undefined,
        },
        isFetching: action.isFetching,
      };
    }
    case LOGOUT_FAILED: {
      return {
        ...initialAuthState,
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
        ...initialAuthState,
      };
    }
    default:
      return state;
  }
}

export default authReducer;