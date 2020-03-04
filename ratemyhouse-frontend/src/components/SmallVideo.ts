import styled from 'styled-components';
import { device } from '../static/devices';

const SmallVideo = styled.video`
width: 90vw;
height: 50vw;
border-radius: 5px;

@media ${device.laptop} {
  width: 280px;
  height: 160px;
}`;

export default SmallVideo;
