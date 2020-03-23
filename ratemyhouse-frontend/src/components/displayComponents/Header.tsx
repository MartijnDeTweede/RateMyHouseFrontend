
import React, { useState, useEffect } from 'react'
import FlexBoxRowHolder from '../stylers/FlexBoxRowHolder';
import HeaderLink from '../userInterActionComponents/HeaderLink';

import styled from 'styled-components';
import { getToken } from '../../helpers/tokenhelpers';

const HeaderHolder = styled.header`
width: 100%;
height: 50px;
background-color: white;
color: #32a852;
font-weight: bold;
border: 2px solid #32a852;
font-size: calc(10px + 2vmin);
margin-bottom: 10px;
transition: 3s ease-in;
animation: Header-fade-in 1 0.5s linear;

@keyframes Header-fade-in {
  from {
    transform: translateY(-50px);
  }
  to {
    transform: translateY(0);
  }
}`;

const Header: React.FC<{}> = () => {
  
  const [token, setToken] = useState<string| undefined>(undefined);

  useEffect(() => {
    const storedToken = getToken();
    setToken(storedToken);
  }, [token]);

  return(
  <HeaderHolder>
    <FlexBoxRowHolder>
      <HeaderLink href="/">Home</HeaderLink>
      <HeaderLink href="/login">{token ? "Logout" : "Login"}</HeaderLink>
      <HeaderLink href="/signup" >Sign-up</HeaderLink>
    </FlexBoxRowHolder>
  </HeaderHolder>
  )
};

export default Header;