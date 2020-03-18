import React from 'react';
import VideoLarge from './userInterActionComponents/VideoLarge';
import styled from 'styled-components';

const VideoPlayerHolder = styled.section`
margin: 10px 25px 10px 10px;
`;


const VideoPlayer: React.FC<{videoSrc: string, thumbNailSrc: string}> = ({videoSrc, thumbNailSrc}) => (
  <VideoPlayerHolder>
    <VideoLarge width="400" height="320" controls preload="none" poster={thumbNailSrc}>
      <source  src={`${videoSrc}#t=1`}  type="video/mp4" />
    </VideoLarge>
  </VideoPlayerHolder>
);

export default VideoPlayer;