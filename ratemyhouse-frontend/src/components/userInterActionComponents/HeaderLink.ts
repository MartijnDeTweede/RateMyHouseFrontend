
import styled from 'styled-components';
import { device } from '../../static/devices';

const HeaderLink = styled.a`
margin-top: 10px;
margin-left: 10px;
text-decoration: none;
color: #32a852;

&:hover {
  text-decoration: none;
}

&.active {
  text-decoration: none;
}

@media ${device.laptop} {
  margin-left: 50px;
}`;

export default HeaderLink;