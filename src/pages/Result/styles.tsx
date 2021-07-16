import styled from 'styled-components';
import colors from '../../utils/colors';

export const ResultContainer = styled.div`
  min-height: 100vh;
  background-color: ${colors.resultPageBackgroundColor};
  .search-result-body {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    @media screen and (max-width: 800px) {
      flex-direction: column;
    }
    .lists {
      flex: 0;
      margin-left: 20px;
      @media screen and (max-width: 800px) {
        margin: 30px 0;
      }
      h2 {
        margin: 0;
        margin-bottom: 30px;
        min-width: 700px;
        @media screen and (max-width: 800px) {
          text-align: center;
          min-width: 100vw;
        }
      }
    }
  }
`;
