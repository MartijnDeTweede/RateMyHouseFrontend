import React  from 'react';
import { Video } from '../../types/video.types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import VideoDisplay from '../displayComponents/VideoDisplay';
import caroucelConfig from '../../static/caroucelConfig';

const VideoDisplayCaroucel: React.FC<{
  videos: Video [],
  rateVideo: Function,
}> = ({videos = [], rateVideo}) => {
  return(
    <Carousel
    responsive={caroucelConfig}
    containerClass="carousel-container"
    itemClass="carousel-item-padding-40-px"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    showDots>
    {
      videos.map((video: Video) => (
        <VideoDisplay video={video} rateVideo={rateVideo} />
      ))}
    </Carousel>
  )
}

export default VideoDisplayCaroucel;