import styled from 'styled-components';
import colors from '../../utils/colors';

export const PaginationContainer = styled.div`
  margin: 50px 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: 800px) {
    justify-content: center;
  }
  .pages,
  .prefix,
  .suffix {
    display: flex;
    justify-content: center;
    .page {
      color: ${colors.secondaryTextColor};
      margin: 0 12px;
      font-size: 18px;
      cursor: pointer;
    }
    .active {
      color: ${colors.primaryTextColor};
    }
  }

  .icon {
    background-color: ${colors.primaryHoverColor};
    color: ${colors.tertiaryTextColor};
    font-size: 35px;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
  }

  .active-icon {
    background-color: ${colors.primaryColor};
    color: ${colors.secondaryColor};
  }

  .arrow-left {
    margin-right: 10px;
  }

  .arrow-right {
    margin-left: 10px;
  }
`;
