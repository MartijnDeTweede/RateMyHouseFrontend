import React, { useState } from 'react';
import { Video } from '../../types/video.types';
import InputField from '../userInterActionComponents/InputField';
import InformationBlock from '../blocks/InformationBlock';
import VideoFormHolder from '../stylers/VideoFormHolder';
import ConfirmButton from '../userInterActionComponents/ConfirmButton';
import FlexBoxRowHolder from '../stylers/FlexBoxRowHolder';
import StarRatingComponent from 'react-star-rating-component';
import FlexBoxColumnHolder from '../stylers/FlexBoxColumnHolder';
import VideoPlayer from '../userInterActionComponents/VideoPlayer';
import MargintTop10 from '../stylers/MargintTop10';
import SelectField from '../userInterActionComponents/SelectField';
import roomOptions from '../../static/roomOptions';
import { isFilledString } from '../../helpers/validationHelpers';

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
  
  const inputIsValid = (): boolean => (isFilledString(room) && isFilledString(title))

  return(
    <VideoFormHolder>
        { videoSrc && thumbNailSrc && < VideoPlayer videoSrc={videoSrc} thumbNailSrc={thumbNailSrc} />}
        <InformationBlock>
          <FlexBoxColumnHolder >
            <SelectField
              fieldName="room"
              labelText="Room"
              onBlur={(event: any) => setRoom(event.target.value)}
            >
              {
                roomOptions.map(option => (
                <option value={option.value} selected={option.value === room}>{option.title}</option>
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
          </FlexBoxColumnHolder>
          <FlexBoxRowHolder>
            <MargintTop10>
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
            </MargintTop10>
          </FlexBoxRowHolder>
          <FlexBoxRowHolder>
            <ConfirmButton
            disabled={!inputIsValid()}
            onClick={() => updateVideo({
              ...video,
              title,
              room,
            })}>Update video</ConfirmButton>
            <ConfirmButton onClick={() => deleteVideo(video)}>Delete video</ConfirmButton>
          </FlexBoxRowHolder>
      </InformationBlock>
    </VideoFormHolder>
  )
};

export default VideoEditForm;