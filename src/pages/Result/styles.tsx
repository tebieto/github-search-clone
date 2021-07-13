import styled from 'styled-components';
import colors from '../../utils/colors';

export const ResultContainer = styled.div`
  min-height: 100vh;
  background-color: ${colors.resultPageBackgroundColor};
  .search-result-body {
    display: flex;
    justify-content: center;
    margin: 50px 0;
    .lists {
      flex: 0;
      margin-left: 20px;
      h2 {
        margin: 0;
        margin-bottom: 30px;
      }
    }
  }
`;
