import React from 'react';
import VideoPlayerHolder from './stylers/VideoPlayerHolder';
import VideoLarge from './userInterActionComponents/VideoLarge';

const VideoPlayer: React.FC<{videoSrc: string, thumbNailSrc: string}> = ({videoSrc, thumbNailSrc}) => (
  <VideoPlayerHolder>
    <VideoLarge width="568" height="320" controls preload="none" poster={thumbNailSrc}>
      <source src={videoSrc} type="video/mp4" />
    </VideoLarge>
  </VideoPlayerHolder>
);

export default VideoPlayer;