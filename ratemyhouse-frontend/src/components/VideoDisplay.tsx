import React from 'react';
import { Video } from '../types/video.types';
import BlockWrapper from './BlockWrapper';
import FlexBoxRow from './FlexBoxRow';
import VideoFormCart from './VideoFormCart';
import VideoPlayer from './VideoPlayer';
import SubTitle from './SubTitle';
import TextBlock from './Text';
import RatingSection from './RatingSection';
import StarRatingComponent from 'react-star-rating-component';
import FlexBoxColumn from './FlexBoxColumn';
import VideoPlayerWrapper from './VideoPlayerWrapper';
import DisplaySpacerTop from './DisplaySpacerTop';

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
    <VideoFormCart>
      <VideoPlayerWrapper>
        {videoSrc && thumbNailSrc && < VideoPlayer videoSrc={videoSrc} thumbNailSrc={thumbNailSrc} />} 
      </VideoPlayerWrapper>
      <BlockWrapper>
      <FlexBoxRow>
        <SubTitle>{title}</SubTitle>
      </FlexBoxRow>
      <FlexBoxColumn>
        <DisplaySpacerTop>
          <FlexBoxRow>
            <TextBlock>{room}</TextBlock>
        </FlexBoxRow>
        <FlexBoxRow>
          <RatingSection>
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
              <RatingSection>
                {nrOfRates} Ratings
              </RatingSection>
          </RatingSection>
          </FlexBoxRow>
        </DisplaySpacerTop>
      </FlexBoxColumn>
    </BlockWrapper>
  </VideoFormCart>
  )
}

export default VideoDisplay;