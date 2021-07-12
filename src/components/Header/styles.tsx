import { AppBar, Toolbar } from '@material-ui/core';
import styled from 'styled-components';

export const HeaderContainer = styled(AppBar)`
  display: flex !important;
  padding: 15px 200px;
  .search-input-container {
    width: 400px;
  }
`;

export const ToolbarContainer = styled(Toolbar)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;