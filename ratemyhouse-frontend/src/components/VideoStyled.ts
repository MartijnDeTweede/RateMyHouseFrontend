import styled from 'styled-components';
import { device } from '../helpers/devices';

const VideoStyled = styled.video`
width: 90vw;
height: 50vw;
border-radius: 5px;

@media ${device.laptop} {
  width: 568px;
  height: 320px;
}
`


export default VideoStyled;