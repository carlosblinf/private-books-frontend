import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookDetail from '../../components/BookDetail';
import { Book } from '../../types/book';
import { BookService } from '../../services/BookService';

function Detail() {
  const { isbn } = useParams();
  const [book, setBook] = useState<Book>({} as Book);

  useEffect(() => {
    if (isbn) {
      BookService.getBook(isbn).then((res) => {
        setBook(res);
      });
    }
  }, [isbn]);

  if (!book.isbn13) return null;

  return <BookDetail book={book} />;
}

export default Detail;
