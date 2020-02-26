import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { VideoContainerState, Video } from '../types/video.types';
import { getVideosRequestActionCreator } from '../actions/VideoActionCreator';
import VideoEditForm from '../components/VideoEditForm';
import VideoDisplay from '../components/VideoDisplay';

const VideoHolder: React.FC<{
  isOwnPage: boolean;
  videos: Video[];
  sendForm: Function;
}> = ({isOwnPage, videos, sendForm}) => {
  return(
    <div>
      {videos.map((video: Video) => (
        isOwnPage ? <VideoEditForm video={video} sendForm={(upDatedVideoInfo: Video) => sendForm(upDatedVideoInfo)} /> :
        <VideoDisplay video={video}/>
      ))}
    </div>
  )
}

const VideoContainer: React.FC<{
  isFetching: boolean,
  isOwnPage: boolean,
  userName: string,
  getVideos: Function,
  updateVideo: Function,
  videos: Video [],
}> = ({
  getVideos,
  userName,
  videos,
  isOwnPage,
  updateVideo,
  isFetching,
}) => {
  useEffect(()=> {
    getVideos(userName);
  }, []);

  return(
    <div>{isFetching ?
      <div>Fetching data</div> :
      <VideoHolder videos={videos} isOwnPage={isOwnPage} sendForm={updateVideo} />}
    </div>
  )
}

const mapStateToProps = (state: VideoContainerState) => ({ ...state.videos });

const mapDispatchToProps = (dispatch : any) => ({
  getVideos: (userName: string) => dispatch(getVideosRequestActionCreator(userName)),
})

export default connect(mapStateToProps,mapDispatchToProps)(VideoContainer);