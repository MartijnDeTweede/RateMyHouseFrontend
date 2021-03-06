export const LOGIN_REQUESTED = 'LOGIN_REQUESTED';
export const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const LOGOUT_REQUESTED = 'LOGOUT_REQUESTED';
export const LOGOUT_SUCCEEDED = 'LOGOUT_SUCCEEDED';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

export const SIGNUP_REQUESTED = 'SIGNUP_REQUESTED';
export const SIGNUP_SUCCEEDED = 'SIGNUP_SUCCEEDED';
export const SIGNUP_FAILED = 'SIGNUP_FAILED';

export const loginRequestActionCreator = (loginCredentials) => {
  return {
    type: LOGIN_REQUESTED,
    loginCredentials,
    isFetching: false,
    message: undefined,
  };
}

export const loginSuccessActionCreator = (auth) => {
  return {
    type: LOGIN_SUCCEEDED,
    auth,
    isFetching: false,
    message: undefined,
  };
}

export const loginFailureActionCreator = (message) => {
  return {
    type: LOGIN_FAILED,
    message,
    auth: {},
    isFetching: false,
  };
}

export const logoutRequestActionCreator = () => {
  return {
    type: LOGOUT_REQUESTED,
    isFetching: true,
    message: undefined,
  };
}

export const logoutSuccessActionCreator = () => {
  return {
    type: LOGOUT_SUCCEEDED,
    auth: {
      isLoggedIn: false,
      userName: undefined,
      token: undefined,
    },
    isFetching: false,
    message: undefined,
  };
}

export const logoutFailureActionCreator = (message) => {
  return {
    type: LOGOUT_FAILED,
    auth: {},
    message,
    isFetching: false,
  };
}

export const signupRequestActionCreator = (signupCredentials) => {
  return {
    type: SIGNUP_REQUESTED,
    signupCredentials,
    isFetching: false,
    message: undefined,
  };
}

export const signupSuccessActionCreator = (auth) => {
  return {
    type: SIGNUP_SUCCEEDED,
    auth,
    isFetching: false,
    message: undefined,
  };
}

export const signupFailureActionCreator = (message) => {
  return {
    type: SIGNUP_FAILED,
    auth: {},
    isFetching: false,
    message: message,
  };
}