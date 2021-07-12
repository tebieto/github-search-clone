import styled from 'styled-components';
import colors from '../../utils/colors';

export const GithubAuthContainer = styled.div`
  .github-login-button {
    background-color: ${colors.primaryButtonColor} !important;
    color: ${colors.primaryButtonTextColor} !important;
    height: 50px !important;
    padding: 10px 30px !important;
    font-weight: bold !important;
    font-size: 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;
