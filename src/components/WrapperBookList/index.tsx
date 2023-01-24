import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import BookCardList from '../BookCardList';
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store';
import { getBooks } from '../../redux/slices/book.slice';
import { BookService } from '../../services/BookService';

function WrapperBookList() {
  const dispatch = useAppDispatch();
  const books = useAppSelector((state: RootState) => state.book.books);

  useEffect(() => {
    BookService.getLastBooks().then((res) => {
      dispatch(getBooks(res));
    });
  }, []);

  return (
    <div className="flex items-center content-center justify-center">
      {books && books.length ? <BookCardList books={books} /> : <Typography>The BookFinder is empty</Typography>}
    </div>
  );
}

export default WrapperBookList;
