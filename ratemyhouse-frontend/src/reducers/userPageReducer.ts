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
        ...initialUserPageState,
      };
    }
    default:
      return state;
  }
};

export default userPageReducer;