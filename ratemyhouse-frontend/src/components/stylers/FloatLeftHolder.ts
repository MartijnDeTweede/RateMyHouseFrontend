import styled from 'styled-components';
import { device } from '../../static/devices';

const FloatLeftHolder = styled.section`
  @media ${device.laptop} {
    float: left
  }`

export default FloatLeftHolder;