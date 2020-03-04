import styled from 'styled-components';
import { device } from '../static/devices';

const BlockWrapper = styled.section`
margin: 20px 10px;
padding: 15px;
border:2px solid #32a852;
border-radius: 5px;
width: 82vw;
background-color: white;
color: #292929;

@media ${device.tablet} {
  width: 90vw;
}

@media ${device.laptop} {
  width: auto;
  min-height: 290px;
  min-width: 240px;
  max-width: 50vw;
}`;

export default BlockWrapper;
