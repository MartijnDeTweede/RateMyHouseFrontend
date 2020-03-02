import styled from 'styled-components';
import { device } from '../helpers/devices';


const FloatLeftWrapper = styled.section`
  @media ${device.laptop} {
    float: left
  }

`

export default FloatLeftWrapper;