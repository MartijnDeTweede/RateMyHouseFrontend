import UserContainer from '../containers/UserContainer';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getIsOwnPageRequestActionCreator } from '../actions/UserPageActionCreators';
import VideoContainer from '../containers/VideoContainer';
import FloatLeftHolder from '../components/stylers/FloatLeftHolder';

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
      <FloatLeftHolder>
          <UserContainer isOwnPage={isOwnPage} userName={userName} />
        </FloatLeftHolder>
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