import styled from 'styled-components';
import { device } from '../../static/devices';

const DisplaySpacerTopHolder = styled.section`
  @media ${device.laptop} {
    margin-top: 50px;
  }
`

export default DisplaySpacerTopHolder;