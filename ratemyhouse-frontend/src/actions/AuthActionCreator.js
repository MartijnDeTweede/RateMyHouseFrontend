export const LOGIN_REQUESTED = 'LOGIN_REQUESTED';
export const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED';
export const LOGIN_FAILED = 'LOGIN_FAILED';

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
  console.log('message: ', message);
  return {
    type: LOGIN_FAILED,
    message,
    isFetching: false,
  };
}