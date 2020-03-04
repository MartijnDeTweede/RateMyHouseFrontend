import styled from 'styled-components';
import { device } from '../../static/devices';

const ErrorInfoBlock = styled.section`
margin: 10px;
padding: 15px;
border:2px solid red;
border-radius: 5px;
width: 82vw;

@media ${device.tablet} {
  width: 90vw;
}

@media ${device.laptop} {
  width: auto;
  min-height: 290px;
  max-width: 50vw;
}`

export default ErrorInfoBlock;
