import {

  USER_ISOWNPAGE_REQUESTED,
  USER_ISOWNPAGE_SUCCEEDED,
  USER_ISOWNPAGE_FAILED,

} from '../actions/UserPageActionCreators';
import { UserPageState } from '../types/userpage.types';
import { initialUserPageState } from '../static/initialUserPageState';

const userPageReducer = (state: UserPageState =initialUserPageState, action: any) => {
  switch(action.type) {
    case USER_ISOWNPAGE_REQUESTED: {
      return {
        ...state,
        message: action.message,
        isFetching: action.isFetching,
      };
    }
    case USER_ISOWNPAGE_SUCCEEDED: {
      return {
        ...state,
        isOwnPage: action.isOwnPage,
        message: action.message,
        isFetching: action.isFetching,
      };
    }
    case USER_ISOWNPAGE_FAILED: {
      return {
        ...initialUserPageState,
        isOwnPage: action.isOwnPage,
        message: action.message,
        isFetching: action.isFetching,
      };
    }
    default:
      return state;
  }
};

export default userPageReducer;