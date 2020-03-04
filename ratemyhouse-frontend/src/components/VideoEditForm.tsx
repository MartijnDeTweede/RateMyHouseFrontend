import React, { useState } from 'react';
import { Video } from '../types/video.types';
import InputField from './InputField';
import BlockWrapper from './BlockWrapper';
import VideoFormCart from './VideoFormCart';
import VideoPlayerWrapper from './VideoPlayerWrapper';
import ConfirmButton from './ConfirmButton';
import FlexBoxRow from './FlexBoxRow';
import StarRatingComponent from 'react-star-rating-component';
import FlexBoxColumn from './FlexBoxColumn';
import VideoPlayer from './VideoPlayer';
import RatingSection from './RatingSection';
import SelectField from './SelectField';
import roomOptions from '../static/roomOptions';

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

    const { videoSrc, ratingPoints, nrOfRates, thumbNailSrc } = video;

  return(
    <VideoFormCart>
      <VideoPlayerWrapper>
      { videoSrc && thumbNailSrc && < VideoPlayer videoSrc={videoSrc} thumbNailSrc={thumbNailSrc} />} 
      </VideoPlayerWrapper>
        <BlockWrapper>
          <FlexBoxColumn >
            <SelectField
              fieldName="room"
              labelText="Room"
              onBlur={(event: any) => setRoom(event.target.value)}
            >
              {
                roomOptions.map(option => (
                  <option value={option.value}>{option.title}</option>
                ))
              }
            </SelectField>
            <InputField 
              fieldName="title"
              labelText="Title"
              onBlur={(event: any) => setTitle(event.target.value)}
              type="text"
              defaultValue={title}
            />            
          </FlexBoxColumn>
          <FlexBoxRow>
            <RatingSection>
              {
                typeof ratingPoints !== 'undefined' && typeof nrOfRates !== 'undefined' &&
                <StarRatingComponent 
                  name={`rate_${title}`}
                  editing={false}
                  starCount={5}
                  value={nrOfRates > 0 ? ratingPoints/nrOfRates : 0}
                />
              }
              <article>
                {nrOfRates} Ratings
              </article>
            </RatingSection>
          </FlexBoxRow>
          <FlexBoxRow>
            <ConfirmButton onClick={() => updateVideo({
              ...video,
              title,
              room,
            })}>Update video</ConfirmButton>
            <ConfirmButton onClick={() => deleteVideo(video)}>Delete video</ConfirmButton>
          </FlexBoxRow>
      </BlockWrapper>
    </VideoFormCart>
  )
};

export default VideoEditForm;