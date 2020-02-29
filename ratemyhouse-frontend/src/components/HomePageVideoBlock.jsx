import React from 'react';
import styled from 'styled-components';
import { device } from '../helpers/devices';;

const StyledBlock = styled.section`
margin: ${(props) => props.margin};
padding: ${(props) => props.padding};
border:2px solid #32a852;
border: ${(props) => `2px solid ${props.inputColor}`};
align-self: center;
border-radius: 5px;
background-color: white;
color: ${(props) => props.inputColor};
animation: Block-fade-in  1 0.5s;
animation-delay: ${(props) => props.delay}; 
@keyframes Block-fade-in {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
`

const VideoStyled = styled.video`
width: 90vw;
height: 50vw;
border-radius: 5px;

@media ${device.laptop} {
  width: ${(props) => props.width};
  height: ${(props) => props.height};
}
`
const UserLink = styled.a`
text-decoration: none;
color: ${(props) => props.inputColor};
font-size: calc(10px + 2vmin);
margin: 10px;

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

const generateRandomColor = (nrOfInts) => {
  const index = getRandomInt(nrOfInts);
  const colours = ["#32a852", "#b52419", "#3b19b5"];
  return colours[index];
}

const getRandomDimentions = (nrOfInts) => {
  const index = getRandomInt(nrOfInts);
  const dimentions = [{height: '157px', width:'280px'}, {height: '157px', width:'280px'}, {height: '240px', width:'420px'} ];
  return dimentions[index];
}

const generateRandomPadding = (nrOfInts) => {
  const top = getRandomInt(nrOfInts) * 5;
  const bottom = getRandomInt(nrOfInts) * 5;
  
  return `${top}px 5px ${bottom}px 5px`
}

const generateRandomMargin = (nrOfInts) => {
  const right = getRandomInt(nrOfInts) * 10;
  const left = getRandomInt(nrOfInts) * 10;
  
  return ` 20px ${right}px 20px ${left}px`
}

const generateRandomDelay = (nrOfInts) => (
  `${(getRandomInt(nrOfInts)/10)}s`
)

class HomePageVideoBlock extends React.Component {

  render() {
    const {
      video: {
        src,
        title,
        owner,
      }
  
    } = this.props;
  
    const inputColor = generateRandomColor(3);

    const dimentions = getRandomDimentions(1);

    const padding = generateRandomPadding(3);
    const margin = generateRandomMargin(3);
    const delay = generateRandomDelay(10);

    return(
      <StyledBlock inputColor={inputColor} padding={padding} margin={margin} delay={delay}>
          <LinkWrapper>
                <UserLink inputColor={inputColor} href={`/user/${owner}`}>{title}</UserLink>
            </LinkWrapper>
            <VideoStyled width={dimentions.width} height={dimentions.height} controls preload="metadata">
              <source src={`${src}#t=1`} type="video/mp4" />
            </VideoStyled>
      </StyledBlock>
    )
  }
 
};

export default HomePageVideoBlock;