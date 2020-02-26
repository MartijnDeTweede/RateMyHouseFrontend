import {
  USER_FETCH_REQUESTED,
  USER_FETCH_SUCCEEDED,
  USER_FETCH_FAILED,
  USER_UPDATE_REQUESTED,
  USER_UPDATE_SUCCEEDED,
  USER_UPDATE_FAILED,
} from '../actions/UserActionCreators';
import { UserState } from '../containers/UserContainer';


const initialUserState: UserState = {
  user: {
    userName: '',
    objectForSale: false,
    _id: '',
    contactInfo: {
      email: '',
      phoneNumber: '',
    },
    location: {
      street: '',
      city: '',
      houseNumber: 0,
      houseNumberAddition: '',
      county: '',
      postalCode: '',
    }
  },
  isFetching: false,
};

const userReducer = (state=initialUserState, action: any) => {
  switch(action.type) {
    case USER_FETCH_REQUESTED: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case USER_FETCH_SUCCEEDED: {
      return {
        ...state,
        user: action.user,
        isFetching: false,
      };
    }
    case USER_FETCH_FAILED: {
      return {
        ...state,
        isFetching: false,
      };
    }
    case USER_UPDATE_REQUESTED: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case USER_UPDATE_SUCCEEDED: {
      return {
        ...state,
        user: action.user,
        isFetching: false,
      };
    }
    case USER_UPDATE_FAILED: {
      return {
        ...state,
        isFetching: false,
      };
    }
    default:
      return state;
  }
}

export default userReducer;