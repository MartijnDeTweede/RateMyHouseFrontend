import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { VideoContainerState } from '../types/video.types';
import { getVideosRequestActionCreator } from '../actions/VideoActionCreator';

const VideoContainer: React.FC<{
  isFetching: boolean,
  isOwnPage: boolean,
  userName: string,
  getVideos: Function,
}> = ({getVideos, userName}) => {
  useEffect(()=> {
    getVideos(userName);
  }, []);

  return(
    <div>VideoContainer</div>
  )
}

const mapStateToProps = (state: VideoContainerState) => ({ ...state.videos });

const mapDispatchToProps = (dispatch : any) => ({
  getVideos: (userName: string) => dispatch(getVideosRequestActionCreator(userName)),
})

export default connect(mapStateToProps,mapDispatchToProps)(VideoContainer);