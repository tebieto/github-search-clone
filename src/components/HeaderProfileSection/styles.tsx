import styled from 'styled-components';

export const HeaderProfileSectionContainer = styled.div`
  display: flex;
  align-items: center;
  .auth-user-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }

  .auth-user-name {
    margin: 0 10px;
  }
`;
