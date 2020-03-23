import React from 'react';
import { Video } from '../../types/video.types';
import InformationBlock from '../blocks/InformationBlock';
import FlexBoxRowHolder from '../stylers/FlexBoxRowHolder';
import VideoFormHolder from '../stylers/VideoFormHolder';
import VideoPlayer from '../userInterActionComponents/VideoPlayer';
import SubTitle from './SubTitle';
import TextBlock from './Text';
import MargintTop10 from '../stylers/MargintTop10';
import StarRatingComponent from 'react-star-rating-component';
import FlexBoxColumnHolder from '../stylers/FlexBoxColumnHolder';
import DisplaySpacerTopHolder from '../stylers/MarginTop50Laptop';

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
      {videoSrc && thumbNailSrc && < VideoPlayer videoSrc={videoSrc} thumbNailSrc={thumbNailSrc} />} 
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
          <MargintTop10>
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
              <MargintTop10>
                {nrOfRates} Ratings
              </MargintTop10>
          </MargintTop10>
          </FlexBoxRowHolder>
        </DisplaySpacerTopHolder>
      </FlexBoxColumnHolder>
    </InformationBlock>
  </VideoFormHolder>
  )
}

export default VideoDisplay;