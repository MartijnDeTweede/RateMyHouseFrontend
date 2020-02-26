import React from 'react';
import { Video } from '../types/video.types';

const VideoDisplay: React.FC<{video: Video}> = ({video}) => {
  const {
    room,
    title,
    ratingPoints,
    nrOfRates,
    _id,
  } = video;

  return(
    <div>
      <div>{_id}</div>
      <div>{room}</div>
      <div>{title}</div>
      <div>{ratingPoints}</div>
      <div>{nrOfRates}</div>
    </div>
  )
}

export default VideoDisplay;