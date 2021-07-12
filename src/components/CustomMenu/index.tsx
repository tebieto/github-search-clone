import React, { useCallback } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Menu, MenuItem } from '@material-ui/core';
import colors from '../../utils/colors';
import { ACCESS_TOKEN_KEY } from '../../utils/constants';
const CustomMenu = (): JSX.Element => {
  const target = document.getElementById('null');
  const [anchorEl, setAnchorEl] = React.useState(target);
  const handleClick = useCallback((e: React.SyntheticEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    handleClose();
    window.location.reload();
  }, []);

  const id = 'custom-menu';

  return (
    <div>
      <div
        className="icon"
        aria-controls={id}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <ExpandMoreIcon style={{ cursor: 'pointer' }} />
      </div>
      <Menu
        id={id}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={handleLogout}
          style={{ color: colors.logoutButtonColor }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default CustomMenu;
