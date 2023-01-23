import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import user from '../../assets/user.png';
import Navigation, { menuId } from './components/Navigation';

function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const urlImg = () =>
    // if (user.img) return user.img;
    user;

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className="flex flex-col items-center border-b border-gray-200 md:px-14 md:px-15">
      <div className="flex flex-wrap items-center content-center justify-between w-full gap-5 p-5 bg-transparent md:gap-10">
        <Link to="/">
          <h1 className="text-2xl font-bold uppercase md:text-3xl lg:text-5xl">BookFinder</h1>
        </Link>
        <div className="flex order-1 flex-1 px-2 py-1 min-w-[268px] max-w-2xl text-gray-400 border-[1px] border-gray-200 rounded sm:w-auto md:order-none">
          <input className="w-full ml-1 border-none" type="text" placeholder="What book you are looking for?" />
          <SearchIcon />
        </div>
        <Box sx={{ display: 'flex', position: 'relative' }}>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <img className="sm:order-1 w-[50px] h-[50px] rounded-full cursor-pointer" src={urlImg()} alt="profile" />
          </IconButton>
        </Box>
      </div>
      <Navigation anchorEl={anchorEl} handleMenuClose={handleMenuClose} />
    </div>
  );
}

export default Header;
