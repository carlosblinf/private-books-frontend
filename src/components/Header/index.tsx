import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import userImg from '../../assets/user.png';
import Navigation, { menuId } from './components/Navigation';
import { HeaderContainer, Container, MainTitile, SearchBar } from './styled-components';
import { RootState, useAppSelector } from '../../redux/store';

function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { user: currentUser } = useAppSelector((state: RootState) => state.auth);

  const urlImg = () => {
    if (currentUser.image) return currentUser.image;
    return userImg;
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <HeaderContainer className="cardWhite">
      <Container>
        <Link to="/">
          <MainTitile>BookFinder</MainTitile>
        </Link>
        <SearchBar>
          <input className="w-full ml-1 border-none" type="text" placeholder="What book you are looking for?" />
          <SearchIcon />
        </SearchBar>
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
      </Container>
      <Navigation anchorEl={anchorEl} handleMenuClose={handleMenuClose} />
    </HeaderContainer>
  );
}

export default Header;
