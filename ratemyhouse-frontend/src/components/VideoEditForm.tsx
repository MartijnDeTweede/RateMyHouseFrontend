import React, { useState } from 'react';
import { Video } from '../types/video.types';
import InputField from './InputField';
import UserInfoSection from './UserInfoSection';
import VideoFormCart from './VideoFormCart';
import VideoPlayerWrapper from './VideoPlayerWrapper';
import ConfirmButton from './ConfirmButton';
import FlexWrapper from './FlexWrapper';
import StarRatingComponent from 'react-star-rating-component';
import FlexBoxColumn from './FlexBoxColumn';
import VideoPlayer from './VideoPlayer';
import RatingSection from './RatingSection';

const VideoEditForm: React.FC<{
  video: Video,
  updateVideo: Function
  deleteVideo: Function
  }> = ({
    video,
    updateVideo,
    deleteVideo,
  }) => {
  const [room, setRoom] = useState<string|undefined>(video.room);
  const [title, setTitle] = useState<string|undefined>(video.title);

    const { src, ratingPoints, nrOfRates } = video;

  return(
    <VideoFormCart>
      <VideoPlayerWrapper>
      { src && < VideoPlayer src={src} />} 
      </VideoPlayerWrapper>
        <UserInfoSection>
          <FlexBoxColumn >
            <InputField 
              fieldName="room"
              labelText="Room"
              onBlur={(event: any) => setRoom(event.target.value)}
              type="text"
              defaultValue={room}
            />
            <InputField 
              fieldName="title"
              labelText="Title"
              onBlur={(event: any) => setTitle(event.target.value)}
              type="text"
              defaultValue={title}
            />            
          </FlexBoxColumn>
          <FlexWrapper>
            <RatingSection>
              {
                  typeof ratingPoints !== 'undefined' && typeof nrOfRates !== 'undefined' && <StarRatingComponent 
                  name={`rate_${title}`}
                  editing={false}
                  starCount={5}
                  value={nrOfRates > 0 ? ratingPoints/nrOfRates : 0}
                />
                }
                <div>
                  {nrOfRates} Ratings
                </div>
            </RatingSection>
          </FlexWrapper>
          <FlexWrapper>
            <ConfirmButton onClick={() => updateVideo({
              ...video,
              title,
              room,
            })}>Update video</ConfirmButton>
            
            <ConfirmButton onClick={() => deleteVideo(video)}
            >Delete video</ConfirmButton>
          </FlexWrapper>
          

      </UserInfoSection>
    </VideoFormCart>
  )
};

export default VideoEditForm;