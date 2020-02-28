
import React from 'react'

import StyledHeader from './StyledHeader';
import FlexWrapper from './FlexWrapper';
import HeaderLink from './HeaderLink';

const Header: React.FC<{}> = () => (
<StyledHeader>
  <FlexWrapper>
    <HeaderLink href="/">Home</HeaderLink>
    <HeaderLink href="/login">Login</HeaderLink>
    <HeaderLink href="/signup" >Sign-up</HeaderLink>
  </FlexWrapper>
</StyledHeader>
);

export default Header;