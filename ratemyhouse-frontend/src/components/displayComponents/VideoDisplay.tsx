import React from 'react';
import { Video } from '../../types/video.types';
import InformationBlock from '../stylers/InformationBlock';
import FlexBoxRowHolder from '../stylers/FlexBoxRowHolder';
import VideoFormHolder from '../stylers/VideoFormHolder';
import VideoPlayer from '../VideoPlayer';
import SubTitle from './SubTitle';
import TextBlock from './Text';
import RatingHolder from '../stylers/RatingHolder';
import StarRatingComponent from 'react-star-rating-component';
import FlexBoxColumnHolder from '../stylers/FlexBoxColumnHolder';
import VideoPlayerHolder from '../stylers/VideoPlayerHolder';
import DisplaySpacerTopHolder from '../stylers/DisplaySpacerTopHolder';

const VideoDisplay: React.FC<{video: Video, rateVideo: Function}> = ({video, rateVideo}) => {
  const {
    room,
    title,
    ratingPoints,
    nrOfRates,
    _id,
    videoSrc,
    thumbNailSrc,
  } = video;

  return(
    <VideoFormHolder>
      <VideoPlayerHolder>
        {videoSrc && thumbNailSrc && < VideoPlayer videoSrc={videoSrc} thumbNailSrc={thumbNailSrc} />} 
      </VideoPlayerHolder>
      <InformationBlock>
      <FlexBoxRowHolder>
        <SubTitle>{title}</SubTitle>
      </FlexBoxRowHolder>
      <FlexBoxColumnHolder>
        <DisplaySpacerTopHolder>
          <FlexBoxRowHolder>
            <TextBlock>{room}</TextBlock>
        </FlexBoxRowHolder>
        <FlexBoxRowHolder>
          <RatingHolder>
            {
                typeof ratingPoints !== 'undefined' && typeof nrOfRates !== 'undefined' &&
                <StarRatingComponent 
                name={`rate_${title}`}
                starCount={5}
                value={nrOfRates > 0 ? ratingPoints/nrOfRates : 1}
                onStarClick={(value) => {
                  rateVideo(_id,value)}}
              />
              }
              <RatingHolder>
                {nrOfRates} Ratings
              </RatingHolder>
          </RatingHolder>
          </FlexBoxRowHolder>
        </DisplaySpacerTopHolder>
      </FlexBoxColumnHolder>
    </InformationBlock>
  </VideoFormHolder>
  )
}

export default VideoDisplay;