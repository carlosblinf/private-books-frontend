import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useNavigate } from 'react-router-dom';

export const menuId = 'primary-search-account-menu';

type NavigationProps = {
  anchorEl: null | HTMLElement;
  handleMenuClose: () => void;
};

function Navigation({ anchorEl, handleMenuClose }: NavigationProps) {
  const navigate = useNavigate();
  const isMenuOpen = Boolean(anchorEl);

  function handleOnClick(rute: 'profile' | 'search' | 'favorite' | 'logout') {
    handleMenuClose();
    if (rute === 'logout') console.log('logout');
    else navigate(rute);
  }

  return (
    <Menu
      anchorEl={anchorEl}
      sx={{ top: 50, left: -50 }}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => handleOnClick('favorite')}>Favorites</MenuItem>
      <MenuItem onClick={() => handleOnClick('profile')}>Profile</MenuItem>
      <MenuItem onClick={() => handleOnClick('search')}>Search</MenuItem>
      <MenuItem onClick={() => handleOnClick('logout')}>Logout</MenuItem>
    </Menu>
  );
}

export default Navigation;
