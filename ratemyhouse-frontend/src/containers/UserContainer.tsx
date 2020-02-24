import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserRequestActionCreator, getIsOwnPageRequestActionCreator } from '../actions/UserActionCreators';
import { User } from '../types/user.types';

interface UserState {
  user: User,
  isFetching: boolean,
}

const UserContainer: React.FC<{
  user: User,
  isFetching: boolean,
  getUser: Function,
  getIsOwnPage: Function,
}> = ({
  user,
  isFetching,
  getUser,
  getIsOwnPage
}) => {
  const { pathname } = window.location;
  const userName = pathname.replace('/user/', '');
  const sessionStorageData = sessionStorage.getItem("rateMyHouseAuth");
  
  const token = sessionStorageData ? JSON.parse(sessionStorageData).token : '';

  useEffect(() => {
    getUser(userName);
    getIsOwnPage({userName: userName,token: token})
  }, [])
  return(
    <div>
      {
        !isFetching && user && user.userName ? <div>{user.userName}</div> : <div>fetching</div>
      }
    </div>
  );
}

const mapStateToProps = (state: UserState) => {
  return {...state.user}
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getUser: (userName: string) => dispatch(getUserRequestActionCreator(userName)),
    getIsOwnPage: (payload: {userName: string, token: string}) => dispatch(getIsOwnPageRequestActionCreator(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);