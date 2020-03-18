import styled from 'styled-components';
import { device } from '../../static/devices';

const InformationBlock = styled.section`
margin: 10px 5px;
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
  padding:15px 5px 15px 15px;
  min-height: 290px;
  min-width: 200px;
  max-width: 50vw;
}`;

export default InformationBlock;
