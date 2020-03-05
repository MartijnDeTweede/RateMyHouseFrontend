import { initialUserState } from '../static/initialUserState';

export const USER_FETCH_REQUESTED = "USER_FETCH_REQUESTED";
export const USER_FETCH_SUCCEEDED = "USER_FETCH_SUCCEEDED";
export const USER_FETCH_FAILED = "USER_FETCH_FAILED";

export const USER_UPDATE_REQUESTED = "USER_UPDATE_REQUESTED";
export const USER_UPDATE_SUCCEEDED = "USER_UPDATE_SUCCEEDED";
export const USER_UPDATE_FAILED = "USER_UPDATE_FAILED";

export const getUserRequestActionCreator = (userName) => {
  return {
    type: USER_FETCH_REQUESTED,
    userName,
    isFetching: false,
    message: undefined,
  };
}

export const getUserSuccessActionCreator = (user) => {
  return {
    type: USER_FETCH_SUCCEEDED,
    user,
    isFetching: false,
    message: undefined,
  };
}

export const getUserFailureActionCreator = (message) => {
  return {
    type: USER_FETCH_FAILED,
    user: initialUserState,
    message: message,
    isFetching: false,
  };
}

export const updateUserRequestActionCreator = (user) => {
  return {
    type: USER_UPDATE_REQUESTED,
    user,
    isFetching: false,
    message: undefined,
  };
}

export const updateUserSuccessActionCreator = (user) => {
  return {
    type: USER_UPDATE_SUCCEEDED,
    user,
    isFetching: false,
    message: undefined,
  };
}

export const updateUserFailureActionCreator = (message) => {
  return {
    type: USER_UPDATE_FAILED,
    user: initialUserState,
    message: message,
    isFetching: false,
  };
}