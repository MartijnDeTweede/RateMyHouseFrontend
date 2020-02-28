import React from 'react';
import VideoPlayerWrapper from './VideoPlayerWrapper';
import VideoStyled from './VideoStyled';


const VideoPlayer: React.FC<{src: string}> = ({src}) => (
  <VideoPlayerWrapper>
    <VideoStyled width="568" height="320" controls preload="metadata">
      <source src={`${src}#t=1`} type="video/mp4" />
    </VideoStyled>
  </VideoPlayerWrapper>
);

export default VideoPlayer;