import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface Book {
  id: string;
  title: string;
  description: string;
  image: string;
}

type BookState = {
  books: Book[];
};
const initialState: BookState = {
  books: [],
};
export const bookSlice = createSlice({
  name: 'bookSlice',
  initialState,
  reducers: {
    getBooks: (state, action: PayloadAction<BookState>) => {
      // eslint-disable-next-line no-param-reassign
      state.books = action.payload.books;
    },
    addBook: (state, action: PayloadAction<Book>) => {
      state.books?.push(action.payload);
    },
    getBook: (state, action: PayloadAction<string>) => {
      state.books?.find((book) => book.id !== action.payload);
    },
    updateBook: (state, action: PayloadAction<Book>) => {
      state.books?.map((book) => (book.id === action.payload.id ? action.payload : book));
    },
    deleteBook: (state, action: PayloadAction<string>) => {
      state.books?.filter((book) => book.id !== action.payload);
    },
  },
});

export const { getBooks, addBook, getBook, updateBook, deleteBook } = bookSlice.actions;
export const selectBooks = (state: RootState) => state.book.books;

export default bookSlice.reducer;
