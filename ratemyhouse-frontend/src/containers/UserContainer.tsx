import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserRequestActionCreator, updateUserRequestActionCreator } from '../actions/UserActionCreators';
import { User } from '../types/user.types';
import UserDisplay from '../components/displayComponents/UserDisplay';
import UserEditForm from '../components/forms/UserEditForm';
import FlexBoxRowHolder from '../components/stylers/FlexBoxRowHolder';

export interface UserState {
  user: User,
  isFetching: boolean,
}

const UserHolder: React.FC<{
    user: User;
    isOwnPage: boolean
    updateUser: Function
  }> = ({user, isOwnPage, updateUser}) => {
  return (
    <FlexBoxRowHolder>
      {
          isOwnPage && user ? 
            <UserEditForm user={user} sendForm={(updatedUserInfo: User) => {
              updateUser(updatedUserInfo);
            }} /> :
            <UserDisplay user={user} />
      }
    </FlexBoxRowHolder>
  )
}

const UserContainer: React.FC<{
  user: User,
  isFetching: boolean,
  getUser: Function,
  isOwnPage: boolean,
  userName: string,
  updateUser: Function,
}> = ({
  user,
  isFetching,
  getUser,
  isOwnPage,
  userName,
  updateUser,
}) => {
  
  useEffect(() => {
    getUser(userName);
  }, []);

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
    updateUser: (user: User) => dispatch(updateUserRequestActionCreator(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);