import {

  USER_ISOWNPAGE_REQUESTED,
  USER_ISOWNPAGE_SUCCEEDED,
  USER_ISOWNPAGE_FAILED,

} from '../actions/UserPageActionCreators';
import { UserPageState } from '../types/userpage.types';

const initialUserPageState: UserPageState = {
  isOwnPage: false,
  isFetching: false,
};

const userPageReducer = (state=initialUserPageState, action: any) => {
  switch(action.type) {
    case USER_ISOWNPAGE_REQUESTED: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case USER_ISOWNPAGE_SUCCEEDED: {
      return {
        ...state,
        isOwnPage: action.isOwnPage,
        isFetching: false,
      };
    }
    case USER_ISOWNPAGE_FAILED: {
      return {
        ...state,
        isFetching: false,
      };
    }
    default:
      return state;
  }
};

export default userPageReducer;