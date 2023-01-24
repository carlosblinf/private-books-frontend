import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import userImg from '../../assets/user.png';
import Navigation, { menuId } from './components/Navigation';
import { HeaderContainer, Container, MainTitile, SearchBar } from './styled-components';
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store';
import { BookService } from '../../services/BookService';
import { addSearch } from '../../redux/slices/book.slice';

type QueryForm = {
  query: string;
};

function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const dispatch = useAppDispatch();
  const { user: currentUser } = useAppSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QueryForm>();

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

  function onSearch(data: QueryForm) {
    BookService.findBook(data.query).then((res) => dispatch(addSearch(res)));
    reset();
    navigate('/search');
  }

  return (
    <HeaderContainer className="cardWhite">
      <Container>
        <Link to="/">
          <MainTitile>BookFinder</MainTitile>
        </Link>
        <SearchBar onSubmit={handleSubmit(onSearch)}>
          <input
            className="w-full ml-1 border-none"
            type="text"
            placeholder="What book you are looking for?"
            {...register('query', { required: true, minLength: 3 })}
          />
          <SearchIcon />
          {errors.query && (
            <div className="absolute -bottom-8 text-center right-1 left-1 mb-3 text-normal text-red-500 ">
              Is required, please enter at least 3 letters
            </div>
          )}
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
