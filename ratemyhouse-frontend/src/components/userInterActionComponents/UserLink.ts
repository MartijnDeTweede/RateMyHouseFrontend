import styled from 'styled-components';

const UserLink = styled.a`
text-decoration: none;
color: #32a852;
font-size: calc(10px + 2vmin);
font-weight: bold;
margin: 5px 0 5px 10px;

&:hover {
  text-decoration: none;
}

&.active {
  text-decoration: none;
}`;

export default UserLink;