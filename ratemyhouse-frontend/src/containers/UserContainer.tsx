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
  useEffect(() => {
    getUser()
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
  console.log('state: ', state);
  return {...state.user}
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getUser: () => dispatch(getUserRequestActionCreator())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);