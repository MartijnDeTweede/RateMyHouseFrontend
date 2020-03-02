import React from 'react';
import styled from 'styled-components';
import { device } from '../helpers/devices';;

const StyledBlock = styled.section`
margin: 10px 10px;
padding: 5px};
border:2px solid #32a852;
align-self: center;
border-radius: 5px;
background-color: white;
color: #32a852;

transition: 3s ease-in;
animation: ${(props) => props.animation};

@keyframes Scale-fade-in {
  from {
    transform: Scale(1)
  }
  to {
    transform: Scale(1.1)
  }
}
`

const VideoStyled = styled.video`
width: 90vw;
height: 50vw;
border-radius: 5px;

@media ${device.laptop} {
  width: 280px;
  height: 160px;
}
`
const UserLink = styled.a`
text-decoration: none;
color: #32a852;
font-size: calc(10px + 2vmin);
font-weight: bold;
margin: 5px 0 5px 10px;

&:hover {
  text-decoration: none;
}

&.active {
  text-decoration: none;
}
`

const LinkWrapper = styled.section`
align-content: center;
`

const  getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

const randomAnimation = (nr) => {
  const index = getRandomInt(nr);
  return index === 0 ? "Scale-fade-in 1 0.5s linear" : '';
}

class HomePageVideoBlock extends React.Component {

  render() {
    const {
      video: {
        videoSrc,
        title,
        owner,
      }
  
    } = this.props;

    const animation = randomAnimation(6);

    return(
      <div>
      <LinkWrapper>
        <UserLink href={`/user/${owner}`}>{title}</UserLink>
      </LinkWrapper>

      <StyledBlock animation={animation}>
        <VideoStyled controls preload="metadata">
          <source src={`${videoSrc}#t=1`} type="video/mp4" />
        </VideoStyled>
      </StyledBlock>
      </div>
    )
  }
 
};

export default HomePageVideoBlock;