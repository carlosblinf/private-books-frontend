/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Book } from '../../types/book';
import { getItem, setItem } from '../../utils/localStorage';

type BookState = {
  books: Book[];
  favorites: Book[];
  search: Book[];
};
const initialState: BookState = {
  books: [] as Book[],
  favorites: getItem('favorites') || [],
  search: [],
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
    addFavorites: (state, action: PayloadAction<Book>) => {
      const include = state.favorites?.map((item) => item.isbn13).includes(action.payload.isbn13);
      if (include) {
        state.favorites = state.favorites.filter((book) => book.isbn13 !== action.payload.isbn13);
      } else state.favorites?.push(action.payload);
      setItem('favorites', state.favorites);
    },
    addSearch: (state, action: PayloadAction<Book[]>) => {
      state.search = action.payload;
    },
  },
});

export const { getBooks, addBook, addFavorites, addSearch } = bookSlice.actions;
export const selectBooks = (state: RootState) => state.book.books;

export default bookSlice.reducer;
