import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserRequestActionCreator, updateUserRequestActionCreator } from '../actions/UserActionCreators';
import { User, UserState } from '../types/user.types';
import UserDisplay from '../components/displayComponents/UserDisplay';
import UserEditForm from '../components/forms/UserEditForm';
import FlexBoxRowHolder from '../components/stylers/FlexBoxRowHolder';


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

  if(isFetching) {
    return(<article>Fetching data</article>)
  }

  return(
    <FlexBoxRowHolder>
      {
          isOwnPage && user ? 
            <UserEditForm user={user} sendForm={(updatedUserInfo: User) => {
              updateUser(updatedUserInfo);
            }} /> :
            <UserDisplay user={user} />
      }
    </FlexBoxRowHolder>
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