import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { VideoContainerState, Video } from '../types/video.types';
import { getVideosRequestActionCreator, updateVideoRequestActionCreator, addVideosRequestActionCreator, deleteVideoRequestActionCreator } from '../actions/VideoActionCreator';
import VideoDisplay from '../components/VideoDisplay';
import VideoEditor from '../components/VideoEditor';
import VideoDisplayCaroucel from '../components/VideoDisplayCaroucel';

const VideoHolder: React.FC<{
  isOwnPage: boolean;
  videos: Video[];
  updateVideo: Function;
  addVideo: Function;
  deleteVideo: Function;
  userName: string;
}> = ({isOwnPage, videos, updateVideo, addVideo, deleteVideo, userName}) => {
  return(
    <div>
      {
        isOwnPage ? 
        <VideoEditor
          videos={videos}
          updateVideo={updateVideo}
          addVideo={addVideo}
          deleteVideo={deleteVideo}
          userName={userName}
        /> :
        <VideoDisplayCaroucel videos={videos} />
      }
    </div>
  )
}

const VideoContainer: React.FC<{
  isFetching: boolean;
  isOwnPage: boolean;
  userName: string;
  getVideos: Function;
  updateVideo: Function;
  addVideo: Function;
  deleteVideo: Function;
  videos: Video [];
}> = ({
  getVideos,
  userName,
  videos,
  isOwnPage,
  updateVideo,
  addVideo,
  deleteVideo,
  isFetching,
}) => {
  useEffect(()=> {
    getVideos(userName);
  }, []);

  return(
    <div>{isFetching ?
      <div>Fetching data</div> :
      <VideoHolder
        videos={videos}
        isOwnPage={isOwnPage}
        updateVideo={updateVideo}
        addVideo={addVideo}
        deleteVideo={deleteVideo}
        userName={userName}
      />}
    </div>
  )
}

const mapStateToProps = (state: VideoContainerState) => ({ ...state.videos });

const mapDispatchToProps = (dispatch : any) => ({
  getVideos: (userName: string) => dispatch(getVideosRequestActionCreator(userName)),
  updateVideo: (video: Video) => dispatch(updateVideoRequestActionCreator(video)),
  addVideo: ({video, userName, file}: {video: Video, userName: string, file: File}) => dispatch(addVideosRequestActionCreator({video, userName, file})),
  deleteVideo: (video: Video) => dispatch(deleteVideoRequestActionCreator(video)),
})

export default connect(mapStateToProps,mapDispatchToProps)(VideoContainer);