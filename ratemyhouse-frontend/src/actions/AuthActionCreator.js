export const LOGIN_REQUESTED = 'LOGIN_REQUESTED';
export const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const LOGOUT_REQUESTED = 'LOGOUT_REQUESTED';
export const LOGOUT_SUCCEEDED = 'LOGOUT_SUCCEEDED';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

export const loginRequestActionCreator = (loginCredentials) => {
  return {
    type: LOGIN_REQUESTED,
    loginCredentials,
    isFetching: true,
  };
}

export const loginSuccessActionCreator = (auth) => {
  return {
    type: LOGIN_SUCCEEDED,
    auth,
    isFetching: false,
  };
}

export const loginFailureActionCreator = (message) => {
  return {
    type: LOGIN_FAILED,
    message,
    isFetching: false,
  };
}
export const logoutRequestActionCreator = () => {
  return {
    type: LOGOUT_REQUESTED,
    isFetching: true,
  };
}

export const logoutSuccessActionCreator = () => {
  return {
    type: LOGOUT_SUCCEEDED,
    isFetching: false,
  };
}

export const logoutFailureActionCreator = (message) => {
  return {
    type: LOGOUT_FAILED,
    message,
    isFetching: false,
  };
}