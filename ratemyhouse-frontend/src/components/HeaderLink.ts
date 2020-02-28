
import styled from 'styled-components';
import { device } from '../helpers/devices';

const HeaderLink = styled.a`
margin-top: 15px;
margin-left: 10px;

@media ${device.laptop} {
  margin-left: 50px;
}
`;

export default HeaderLink;