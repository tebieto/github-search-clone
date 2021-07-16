import styled from 'styled-components';
import colors from '../../utils/colors';

export const RepositoryResultListsContainer = styled.div`
  .repository-result-list {
    background-color: ${colors.secondaryColor};
    display: inline-block;
    min-width: 700px;
    padding: 20px;
    border-radius: 5px;
    @media screen and (max-width: 800px) {
      display: flex;
      flex-direction: column;
      min-width: 0;
      margin: 20px;
    }
    .title {
      margin-bottom: 10px;
      .main-title {
        margin: 0;
        margin-bottom: 5px;
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
