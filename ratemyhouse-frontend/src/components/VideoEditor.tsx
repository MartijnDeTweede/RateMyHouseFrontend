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
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return(
    <Carousel responsive={responsive}>
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
        (videos.length < 4) && 
          <VideoAddForm
            addVideo={addVideo}
            userName={userName}
          />
        
      }
    </Carousel>
  )
}

export default VideoEditor;