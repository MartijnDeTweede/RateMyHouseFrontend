import styled from 'styled-components';
import { device } from '../helpers/devices';

const VideoFormCart = styled.section`
display: flex;
flex-wrap: wrap;
margin-bottom: 10px;

@media ${device.tablet} {
  margin-bottom: 15px;
}

@media ${device.laptop} {
  margin-left: 140px;
}


`


export default VideoFormCart;