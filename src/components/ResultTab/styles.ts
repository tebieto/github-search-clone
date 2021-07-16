import styled from 'styled-components';
import colors from '../../utils/colors';

export const ResultTabContainer = styled.div`
  .nav {
    background-color: ${colors.secondaryColor};
    display: inline-block;
    padding: 30px;
    margin: 0;
    border-radius: 5px;
    list-style: none;
    @media screen and (max-width: 800px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0;
      margin: 30px 0;
    }
    .active {
      background-color: ${colors.primaryHoverColor};
    }

    .nav-item {
      padding: 10px;
      min-width: 200px;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: ${colors.secondaryTextColor};
      @media screen and (max-width: 800px) {
        min-width: 0;
      }
      .record-count {
        background-color: ${colors.secondaryHoverColor};
        border-radius: 25px;
        font-size: 0.7em;
        padding: 5px 10px;
        color: ${colors.primaryTextColor};
      }
    }
  }
`;
