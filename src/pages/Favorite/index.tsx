import React from 'react';
import { Typography } from '@mui/material';
import BookCardList from '../../components/BookCardList';
import { RootState, useAppSelector } from '../../redux/store';

function Favorite() {
  const favorites = useAppSelector((state: RootState) => state.book.favorites);

  return (
    <div className="flex flex-col items-center gap-5 px-5 py-5 md:px-20">
      <h3 className="text-3xl font-bold">Favorites</h3>
      {favorites && favorites.length ? <BookCardList books={favorites} /> : <Typography>The BookFinder is empty</Typography>}
    </div>
  );
}

export default Favorite;
