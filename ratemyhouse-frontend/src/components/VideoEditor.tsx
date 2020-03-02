import React  from 'react';
import { Video } from '../types/video.types';
import VideoAddForm from './VideoAddForm';
import VideoEditForm from './VideoEditForm';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return(
    <Carousel
    responsive={responsive}
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