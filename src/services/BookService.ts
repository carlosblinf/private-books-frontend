import { Book } from '../types/book';
import { api } from '../utils/api';

api.interceptors.response.use(
  (res) => {
    if (res.data.books) return res.data.books;
    return res.data;
  },
  (error) => console.log(error)
);

export const BookService = {
  getLastBooks: async (): Promise<Book[]> => api.get('/new'),
  getBook: async (isbn: string): Promise<Book> => api.get(`/books/${isbn}`),
  findBook: async (query: string): Promise<Book[]> => api.get(`/search/${query}`),
};
