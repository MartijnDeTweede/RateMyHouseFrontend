export const USER_ISOWNPAGE_REQUESTED = "USER_ISOWNPAGE_REQUESTED";
export const USER_ISOWNPAGE_SUCCEEDED = "USER_ISOWNPAGE_SUCCEEDED";
export const USER_ISOWNPAGE_FAILED = "USER_ISOWNPAGE_FAILED";

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