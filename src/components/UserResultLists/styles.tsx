import styled from 'styled-components';
import colors from '../../utils/colors';

export const UserResultListsContainer = styled.div`
  .user-result-list {
    background-color: ${colors.secondaryColor};
    display: inline-block;
    width: 700px;
    padding: 20px;
    border-radius: 5px;
    .title {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      .main-title {
        margin: 0;
        margin-right: 10px;
      }
      .sub-title {
        color: ${colors.tertiaryTextColor};
        font-size: 14px;
      }
    }
    .description {
      color: ${colors.tertiaryTextColor};
      font-size: 12px;
    }
  }
`;
