import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background-color: #fafafa;
  box-shadow: -2px -2px 4px 2px #ffffff, 2px 2px 4px 2px #dddddd;
  display: flex;
  justify-content: space-between;
  padding: 16px 32px;
  position: sticky;
  top: 0;
  z-index: 2;
`;

export const HeaderTitle = styled.h1`
  color: #333333;
  font-family: 'Public Sans';
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 20px;
`;

export const UserDetails = styled.h1`
  color: #444444;
  font-family: Comfortaa;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 14px;
`;
