import React from 'react';
import VideoPlayerWrapper from './VideoPlayerWrapper';
import VideoStyled from './VideoStyled';

const VideoPlayer: React.FC<{videoSrc: string, thumbNailSrc: string}> = ({videoSrc, thumbNailSrc}) => (
  <VideoPlayerWrapper>
    <VideoStyled width="568" height="320" controls preload="none" poster={thumbNailSrc}>
      <source src={videoSrc} type="video/mp4" />
    </VideoStyled>
  </VideoPlayerWrapper>
);

export default VideoPlayer;