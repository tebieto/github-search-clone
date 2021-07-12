import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Menu, MenuItem } from '@material-ui/core';
import colors from '../../utils/colors';

const CustomMenu = (): JSX.Element => {
  const target = document.getElementById('null');
  const [anchorEl, setAnchorEl] = React.useState(target);

  const handleClick = (e: React.SyntheticEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
          onClick={handleClose}
          style={{ color: colors.logoutButtonColor }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default CustomMenu;
