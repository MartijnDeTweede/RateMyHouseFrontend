import React  from 'react';
import { Video } from '../types/video.types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import VideoDisplay from './VideoDisplay';

const VideoDisplayCaroucel: React.FC<{videos: Video []}> = ({videos}) => {

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
      videos.map((video: Video) => (
        <VideoDisplay video={video} />
      ))}
    </Carousel>
  )
}

export default VideoDisplayCaroucel;