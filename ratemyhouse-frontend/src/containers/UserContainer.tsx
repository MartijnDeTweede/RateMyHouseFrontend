import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserRequestActionCreator, getIsOwnPageRequestActionCreator, updateUserRequestActionCreator } from '../actions/UserActionCreators';
import { User } from '../types/user.types';
import UserDisplay from '../components/UserDisplay';
import UserEditForm from '../components/UserEditForm';

interface UserState {
  user: User,
  isFetching: boolean,
}

const UserHolder: React.FC<{
    user: User;
    isOwnPage: boolean
    updateUser: Function
  }> = ({user, isOwnPage, updateUser}) => {
  return (
    isOwnPage && user ? 
      <UserEditForm user={user} sendForm={(updatedUserInfo: User) => {
        updateUser(updatedUserInfo);
      }} /> :
      <UserDisplay user={user} />
  )
}

const UserContainer: React.FC<{
  user: User,
  isFetching: boolean,
  getUser: Function,
  getIsOwnPage: Function,
  isOwnPage: boolean,
  updateUser: Function,
}> = ({
  user,
  isFetching,
  getUser,
  getIsOwnPage,
  isOwnPage,
  updateUser,
}) => {
  const { pathname } = window.location;
  const userName = pathname.replace('/user/', '');
  
  useEffect(() => {
    getUser(userName);
    getIsOwnPage(userName)
  }, [])
  return(
    <div>
      {
        isFetching ? <div> fetching data </div> : <UserHolder user={user} isOwnPage={isOwnPage} updateUser={updateUser} />
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
    getIsOwnPage: (userName: string) => dispatch(getIsOwnPageRequestActionCreator(userName)),
    updateUser: (user: User) => dispatch(updateUserRequestActionCreator(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);