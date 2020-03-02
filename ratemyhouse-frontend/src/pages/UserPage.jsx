import UserContainer from '../containers/UserContainer';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getIsOwnPageRequestActionCreator } from '../actions/UserPageActionCreators';
import VideoContainer from '../containers/VideoContainer';
import FloatLeftWrapper from '../components/FloatLeftWrapper';

const UserPage = ({
  isOwnPage,
  getIsOwnPage,
}) => {
  
  const { pathname } = window.location;
  const userName = pathname.replace('/user/', ''); 
  useEffect(() => {
    getIsOwnPage(userName);
  }, [])

  return(
    <div>
      <div>
      <FloatLeftWrapper>
          <UserContainer isOwnPage={isOwnPage} userName={userName} />
        </FloatLeftWrapper>
        <VideoContainer isOwnPage={isOwnPage} userName={userName} />
      </div>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {...state.userPage}
}

const mapDispatchToProps = (dispatch) => ({
  getIsOwnPage: (userName) => dispatch(getIsOwnPageRequestActionCreator(userName)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);