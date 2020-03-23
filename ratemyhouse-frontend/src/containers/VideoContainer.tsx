import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { VideoContainerState, Video } from '../types/video.types';
import { getVideosRequestActionCreator, updateVideoRequestActionCreator, addVideosRequestActionCreator, deleteVideoRequestActionCreator, rateVideoRequestActionCreator } from '../actions/VideoActionCreator';
import VideoEditor from '../components/userInterActionComponents/VideoEditor';
import VideoDisplayCaroucel from '../components/userInterActionComponents/VideoDisplayCaroucel';
import Loader from '../components/displayComponents/Loader';

const VideoContainer: React.FC<{
  isFetching: boolean;
  isOwnPage: boolean;
  userName: string;
  getVideos: Function;
  updateVideo: Function;
  addVideo: Function;
  deleteVideo: Function;
  videos: Video [];
  rateVideo: Function;
}> = ({
  getVideos,
  userName,
  videos,
  isOwnPage,
  updateVideo,
  addVideo,
  deleteVideo,
  rateVideo,
  isFetching,
}) => {
  useEffect(()=> {
    getVideos(userName);
  }, []);

  if(isFetching) {
    return(<Loader />)
  }

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
        <VideoDisplayCaroucel videos={videos} rateVideo={(videoId: string, rating: string) => rateVideo(videoId, rating, userName)} />
      }
    </div>
  )
}

const mapStateToProps = (state: VideoContainerState) => ({ ...state.videos });

const mapDispatchToProps = (dispatch : any) => ({
  getVideos: (userName: string) => dispatch(getVideosRequestActionCreator(userName)),
  updateVideo: (video: Video) => dispatch(updateVideoRequestActionCreator(video)),
  addVideo: ({video, userName, videoFile, thumbnailFile}: {video: Video, userName: string, videoFile: File, thumbnailFile: File}) => dispatch(addVideosRequestActionCreator({video, userName, videoFile, thumbnailFile})),
  deleteVideo: (video: Video) => dispatch(deleteVideoRequestActionCreator(video)),
  rateVideo:(videoId: string, rating: number, userName: string) => dispatch(rateVideoRequestActionCreator({
    videoId,
    rating,
    getNewVideos: () => dispatch(getVideosRequestActionCreator(userName)),
  })),
})

export default connect(mapStateToProps,mapDispatchToProps)(VideoContainer);