import styled from 'styled-components';
import { device } from '../static/devices';

const FloatLeftWrapper = styled.section`
  @media ${device.laptop} {
    float: left
  }`

export default FloatLeftWrapper;