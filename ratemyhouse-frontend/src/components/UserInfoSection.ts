import styled from 'styled-components';
import { device } from '../helpers/devices';

const UserInfoSection = styled.section`
margin: 10px;
padding: 15px;
border:1px solid #cccccc;
border-radius: 5px;
width: 82vw;

@media ${device.tablet} {
  width: 90vw;
}

@media ${device.laptop} {
  width: auto;
  min-height: 290px;
}

`

export default UserInfoSection;
