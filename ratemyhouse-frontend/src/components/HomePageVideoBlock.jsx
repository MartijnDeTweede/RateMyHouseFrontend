import React from 'react';
import SmallVideoBlock from './SmallVideoBlock';
import SmallVideo from './SmallVideo';
import UserLink from './UserLink';
import { randomAnimation } from '../helpers/randomhelpers';

// TODO: make TypeScript friends with styled components so i can pass props in and dont have to use jsx.
class HomePageVideoBlock extends React.Component {
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
        <SmallVideo controls preload="none" poster={thumbNailSrc}>
          <source src={videoSrc} type="video/mp4" />
        </SmallVideo>
      </SmallVideoBlock>
      </section>
    )
  }
 
};

export default HomePageVideoBlock;