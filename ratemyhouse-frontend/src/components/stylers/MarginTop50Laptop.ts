import styled from 'styled-components';
import { device } from '../../static/devices';

const MarginTop50Laptop = styled.section`
  @media ${device.laptop} {
    margin-top: 50px;
  }
`

export default MarginTop50Laptop;