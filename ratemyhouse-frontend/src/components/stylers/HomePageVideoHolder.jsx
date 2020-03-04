import React from 'react';
import SmallVideoBlock from '../blocks/SmallVideoBlock';
import VideoSmall from '../userInterActionComponents/VideoSmall';
import UserLink from '../userInterActionComponents/UserLink';
import { randomAnimation } from '../../helpers/randomhelpers';

// TODO: make TypeScript friends with styled components so i can pass props in and dont have to use jsx.
class HomePageVideoHolder extends React.Component {
  render() {
    const {
      video: {
        videoSrc,
        title,
        owner,
        thumbNailSrc,
      }
    } = this.props;

    const animation = randomAnimation(6);

    return(
      <section>
        <UserLink href={`/user/${owner}`}>{title}</UserLink>
        <SmallVideoBlock animation={animation}>
          <VideoSmall controls preload="none" poster={thumbNailSrc}>
            <source src={videoSrc} type="video/mp4" />
          </VideoSmall>
        </SmallVideoBlock>
      </section>
    )
  }
};

export default HomePageVideoHolder;