import { combineReducers } from 'redux';
import userReducer from './userReducer';
import authReducer from './authReducer';
import userPageReducer from './userPageReducer';
import videoReducer from './videoReducer';

export default combineReducers({
  user: userReducer,
  auth: authReducer,
  userPage: userPageReducer,
  videos: videoReducer,
})