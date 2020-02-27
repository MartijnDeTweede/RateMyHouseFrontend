import React from 'react';
import { Video } from '../types/video.types';
import UserInfoSection from './UserInfoSection';
import FlexWrapper from './FlexWrapper';
import VideoPlayerWrapper from './VideoPlayerWrapper';

const VideoDisplay: React.FC<{video: Video}> = ({video}) => {
  const {
    room,
    title,
    ratingPoints,
    nrOfRates,
    _id,
  } = video;

  return(
    <UserInfoSection>
    <FlexWrapper>
      <VideoPlayerWrapper>
      Here we do the whole player thing.
      </VideoPlayerWrapper>
      <UserInfoSection>
      <div>{_id}</div>
      <div>{room}</div>
      <div>{title}</div>
      <div>{ratingPoints}</div>
      <div>{nrOfRates}</div>
    </UserInfoSection>
    </FlexWrapper>
  </UserInfoSection>
  )
}

export default VideoDisplay;