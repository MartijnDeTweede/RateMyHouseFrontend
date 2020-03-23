import React  from 'react';
import { Video } from '../../types/video.types';
import VideoAddForm from '../forms/VideoAddForm';
import VideoEditForm from '../forms/VideoEditForm';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import caroucelConfig from '../../static/caroucelConfig';

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
  return(
    <Carousel
    responsive={caroucelConfig}
    containerClass="carousel-container"
    itemClass="carousel-item-padding-40-px"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    showDots
    >
      {
        videos.map(video => (
          <VideoEditForm
            video={video}
            updateVideo={updateVideo}
            deleteVideo={deleteVideo}
          /> 
        ))
      }
      {
        (videos.length < 5) && 
          <VideoAddForm
            addVideo={addVideo}
            userName={userName}
          /> 
      }
    </Carousel>
  )
}

export default VideoEditor;