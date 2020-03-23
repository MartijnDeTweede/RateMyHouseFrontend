import React from 'react';
import SmallVideoBlock from '../blocks/SmallVideoBlock';
import VideoSmall from '../userInterActionComponents/VideoSmall';
import UserLink from '../userInterActionComponents/UserLink';
import { randomAnimation } from '../../helpers/randomhelpers';
import StarRatingComponent from 'react-star-rating-component';

// TODO: make TypeScript friends with styled components so i can pass props in and dont have to use jsx.
class HomePageVideoHolder extends React.Component {
  render() {
    const {
      video: {
        videoSrc,
        title,
        owner,
        thumbNailSrc,
        nrOfRates,
        ratingPoints,
        _id,
      },
      rateVideo,
    } = this.props;

    const animation = randomAnimation(6);

    return(
      <section>
        <UserLink href={`/user/${owner}`}>{title}</UserLink>
        <SmallVideoBlock animation={animation}>
          <VideoSmall controls preload="none" poster={thumbNailSrc}>
            <source src={`${videoSrc}#t=1`} type="video/mp4" />
          </VideoSmall>
          <section>
          <StarRatingComponent 
            name={`rate_${title}`}
            starCount={5}
            value={nrOfRates > 0 ? ratingPoints/nrOfRates : 1}
            onStarClick={(value) => {
              rateVideo(_id,value)}}
          />
          </section>
        </SmallVideoBlock>
      </section>
    )
  }
};

export default HomePageVideoHolder;