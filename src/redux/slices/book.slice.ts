/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Book } from '../../types/book';

type BookState = {
  books: Book[];
  currentBook: Book;
};
const initialState: BookState = {
  books: [] as Book[],
  currentBook: {} as Book,
};
export const bookSlice = createSlice({
  name: 'bookSlice',
  initialState,
  reducers: {
    getBooks: (state, action: PayloadAction<Book[]>) => {
      state.books = action.payload;
    },
    addBook: (state, action: PayloadAction<Book>) => {
      state.books?.push(action.payload);
    },
    getBook: (state, action: PayloadAction<string>) => {
      state.currentBook = state.books?.find((book) => book.isbn13 !== action.payload) || ({} as Book);
    },
    updateBook: (state, action: PayloadAction<Book>) => {
      state.books?.map((book) => (book.isbn13 === action.payload.isbn13 ? action.payload : book));
    },
    deleteBook: (state, action: PayloadAction<string>) => {
      state.books?.filter((book) => book.isbn13 !== action.payload);
    },
  },
});

export const { getBooks, addBook, getBook, updateBook, deleteBook } = bookSlice.actions;
export const selectBooks = (state: RootState) => state.book.books;

export default bookSlice.reducer;
