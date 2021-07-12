import styled from 'styled-components';
import colors from '../../utils/colors';

export const ResultTabContainer = styled.div`
  .nav {
    background-color: ${colors.secondaryColor};
    padding: 20px;
    display: inline-block;
    padding: 30px;
    border-radius: 5px;
    list-style: none;

    .active {
      background-color: ${colors.primaryHoverColor};
    }

    .nav-item {
      padding: 10px;
      width: 200px;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: ${colors.secondaryTextColor};
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
