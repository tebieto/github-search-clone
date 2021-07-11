import styled from 'styled-components';

export const SearchContainer = styled.div`
  .search-header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 20px 200px;
  }
  .search-body {
    display: flex;
    justify-content: center;
    .search-body-contents {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 100px 0;
      button {
        height: 40px !important;
        padding: 0 30px !important;
      }
      .search-input {
        width: 600px;
        margin: 30px 0;
      }
    }
  }
`;
