export const USER_FETCH_REQUESTED = "USER_FETCH_REQUESTED";
export const USER_FETCH_SUCCEEDED = "USER_FETCH_SUCCEEDED";
export const USER_FETCH_FAILED = "USER_FETCH_FAILED";

export const USER_ISOWNPAGE_REQUESTED = "USER_ISOWNPAGE_REQUESTED";
export const USER_ISOWNPAGE_SUCCEEDED = "USER_ISOWNPAGE_SUCCEEDED";
export const USER_ISOWNPAGE_FAILED = "USER_ISOWNPAGE_FAILED";

export const USER_UPDATE_REQUESTED = "USER_UPDATE_REQUESTED";
export const USER_UPDATE_SUCCEEDED = "USER_UPDATE_SUCCEEDED";
export const USER_UPDATE_FAILED = "USER_UPDATE_FAILED";

export const getUserRequestActionCreator = (userName) => {
  return {
    type: USER_FETCH_REQUESTED,
    userName,
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

export const getIsOwnPageRequestActionCreator = (userName) => {
  return {
    type: USER_ISOWNPAGE_REQUESTED,
    userName,
    isFetching: true,
  };
}

export const getIsOwnPageSuccessActionCreator = (isOwnPage) => {
  return {
    type: USER_ISOWNPAGE_SUCCEEDED,
    isOwnPage,
    isFetching: false,
  };
}

export const getIsOwnPageFailureActionCreator = () => {
  return {
    type: USER_ISOWNPAGE_FAILED,
    isFetching: false,
  };
}

export const updateUserRequestActionCreator = (user) => {
  return {
    type: USER_UPDATE_REQUESTED,
    user,
    isFetching: true,
  };
}

export const updateUserSuccessActionCreator = (user) => {
  return {
    type: USER_UPDATE_SUCCEEDED,
    user,
    isFetching: false,
  };
}

export const updateUserFailureActionCreator = () => {
  return {
    type: USER_UPDATE_FAILED,
    isFetching: false,
  };
}