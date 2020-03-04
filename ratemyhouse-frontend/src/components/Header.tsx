
import React from 'react'
import FlexBoxRow from './FlexBoxRow';
import HeaderLink from './HeaderLink';
import HeaderWrapper from './HeaderWrapper';

const Header: React.FC<{}> = () => (
<HeaderWrapper>
  <FlexBoxRow>
    <HeaderLink href="/">Home</HeaderLink>
    <HeaderLink href="/login">Login</HeaderLink>
    <HeaderLink href="/signup" >Sign-up</HeaderLink>
  </FlexBoxRow>
</HeaderWrapper>
);

export default Header;