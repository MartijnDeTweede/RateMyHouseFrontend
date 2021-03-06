import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { VideoContainerState, Video } from '../types/video.types';
import { getVideosRequestActionCreator, updateVideoRequestActionCreator, addVideosRequestActionCreator, deleteVideoRequestActionCreator, rateVideoRequestActionCreator } from '../actions/VideoActionCreator';
import VideoEditor from '../components/VideoEditor';
import VideoDisplayCaroucel from '../components/VideoDisplayCaroucel';

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
    return(<article>Fetching data</article>)
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
        <VideoDisplayCaroucel videos={videos} rateVideo={rateVideo} />
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
  rateVideo:(videoId: string, rating: number) => dispatch(rateVideoRequestActionCreator({ videoId, rating })),
})

export default connect(mapStateToProps,mapDispatchToProps)(VideoContainer);