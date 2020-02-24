export const USER_FETCH_REQUESTED = "USER_FETCH_REQUESTED";
export const USER_FETCH_SUCCEEDED = "USER_FETCH_SUCCEEDED";
export const USER_FETCH_FAILED = "USER_FETCH_FAILED";

export const USER_UPDATE_REQUESTED = "USER_UPDATE_REQUESTED";
export const USER_UPDATE_SUCCEEDED = "USER_UPDATE_SUCCEEDED";
export const USER_UPDATE_FAILED = "USER_UPDATE_FAILED";

export const getUserRequestActionCreator = () => {
  return {
    type: USER_FETCH_REQUESTED,
    isFetching: true,
  };
}

export const getUserSuccessActionCreator = (user) => {
  return {
    type: USER_FETCH_SUCCEEDED,
    user,
    isFetching: false,
  };
}

export const getUserFailureActionCreator = () => {
  return {
    type: USER_FETCH_FAILED,
    isFetching: false,
  };
}

