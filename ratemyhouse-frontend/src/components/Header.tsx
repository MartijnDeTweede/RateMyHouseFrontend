
import React from 'react'
import FlexBoxRowHolder from './stylers/FlexBoxRowHolder';
import HeaderLink from './userInterActionComponents/HeaderLink';
import HeaderHolder from './stylers/HeaderHolder';

const Header: React.FC<{}> = () => (
<HeaderHolder>
  <FlexBoxRowHolder>
    <HeaderLink href="/">Home</HeaderLink>
    <HeaderLink href="/login">Login</HeaderLink>
    <HeaderLink href="/signup" >Sign-up</HeaderLink>
  </FlexBoxRowHolder>
</HeaderHolder>
);

export default Header;