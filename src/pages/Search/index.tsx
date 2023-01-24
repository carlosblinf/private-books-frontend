import React from 'react';
import { Typography } from '@mui/material';
import BookCardList from '../../components/BookCardList';
import { RootState, useAppSelector } from '../../redux/store';

function Search() {
  const search = useAppSelector((state: RootState) => state.book.search);

  return (
    <div className="flex flex-col items-center gap-5 px-5 py-5 md:px-20">
      <h3 className="text-3xl font-bold">Find your books</h3>
      {search && search.length ? <BookCardList books={search} /> : <Typography>The BookFinder is empty</Typography>}
    </div>
  );
}

export default Search;
