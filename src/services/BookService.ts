import { Book } from '../types/book';
import { api } from '../utils/api';

api.interceptors.response.use((res) => res.data.books);

export const BookService = {
  getLastBooks: async (): Promise<Book[]> => api.get('/new'),
  getBook: async (isbn13: string): Promise<Book> => api.get(`/books/${isbn13}`),
  findBook: async (query: string): Promise<Book[]> => api.get(`/search/${query}`),
};
