import React from 'react';
import { Video } from '../types/video.types';
import UserInfoSection from './UserInfoSection';
import FlexWrapper from './FlexWrapper';
import VideoPlayerWrapper from './VideoPlayerWrapper';
import VideoFormCart from './VideoFormCart';
import VideoStyled from './VideoStyled';
import DisplayField from './DisplayField';
import VideoPlayer from './VideoPlayer';

const VideoDisplay: React.FC<{video: Video}> = ({video}) => {
  const {
    room,
    title,
    ratingPoints,
    nrOfRates,
    _id,
    src,
  } = video;

  return(
    <VideoFormCart>
    <FlexWrapper>
      { src && < VideoPlayer src={src} />} 
      <UserInfoSection>
        {room && <DisplayField label="Room" fieldValue={room} />}
        {title && <DisplayField label="Title" fieldValue={title} />}
      <div>{ratingPoints}</div>
      <div>{nrOfRates}</div>
    </UserInfoSection>
    </FlexWrapper>
  </VideoFormCart>
  )
}

export default VideoDisplay;