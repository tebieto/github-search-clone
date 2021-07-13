import styled from 'styled-components';
import colors from '../../utils/colors';

export const UserResultListsContainer = styled.div`
  width: 700px;
  .user-result-list {
    background-color: ${colors.secondaryColor};
    display: inline-block;
    width: 100%;
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

    margin-bottom: 20px;
  }
`;
