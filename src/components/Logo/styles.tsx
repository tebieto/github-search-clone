import styled from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  .logo {
    height: 50px;

    @media screen and (max-width: 800px) {
      display: none;
    }
  }
  .logo-mark {
    height: 60px;
    margin-right: 5px;
  }
`;
