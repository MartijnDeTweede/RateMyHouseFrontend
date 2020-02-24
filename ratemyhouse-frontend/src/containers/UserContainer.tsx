import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUserRequestActionCreator } from '../actions/UserActionCreators';

interface UserState {
  user: any,
  isFetching: boolean,
}

const UserContainer: React.FC<{
  user: any,
  isFetching: boolean,
  getUser: Function,
}> = ({user, isFetching, getUser}) => {

  const { pathname } = window.location;
  const userName = pathname.replace('/user/', '');

  useEffect(() => {
    getUser(userName)
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
    getUser: (userName: string) => dispatch(getUserRequestActionCreator(userName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);