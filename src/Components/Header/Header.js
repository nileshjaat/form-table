import React from 'react';
import { HeaderContainer, HeaderTitle, UserDetails } from './styledComponents';

function Header() {
  return (
    <>
      <HeaderContainer>
        <HeaderTitle>Form and Table</HeaderTitle>

        <UserDetails>Hi, User</UserDetails>
      </HeaderContainer>
    </>
  );
}

export default Header;
