import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { VideoContainerState, Video } from '../types/video.types';
import { getVideosRequestActionCreator } from '../actions/VideoActionCreator';
import VideoEditForm from '../components/VideoEditForm';
import VideoDisplay from '../components/VideoDisplay';

const VideoEditor: React.FC<{
  videos: Video[];
  updateVideo: Function;
  addVideo: Function;
  deleteVideo: Function;
  userName: string;
}> = ({
  videos,
  updateVideo,
  addVideo,
  deleteVideo,
  userName,
}) => {

  const videosToRender = videos.map((video) => ({
    video: video,
    sendform: updateVideo,
    deleteVideo: deleteVideo,
    sendFormButtonText: 'Update video'
  }))

  if(videosToRender.length < 4) {
    videosToRender.push(
      {video: {
        owner: userName,
      },
      sendform: addVideo,
      deleteVideo: deleteVideo,
      sendFormButtonText: 'Add video'
    })
  }

  return(
    <div>
      {
        videosToRender.map(videoToRender => (
          <VideoEditForm
          video={videoToRender.video}
          sendForm={videoToRender.sendform}
          sendFormButtonText={videoToRender.sendFormButtonText}
          deleteVideo={videoToRender.deleteVideo}
          /> 
        ))
      }
    </div>
  )
}

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
        <div>{
          videos.map((video: Video) => (
            <VideoDisplay video={video} />
          ))}</div>
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
})

export default connect(mapStateToProps,mapDispatchToProps)(VideoContainer);