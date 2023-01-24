import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookDetail from '../../components/BookDetail';
import { Book } from '../../types/book';

function Detail() {
  const { isbn } = useParams();
  const [book, setBook] = useState<Book>({} as Book);

  useEffect(() => {
    if (isbn) {
      // dispatch call api
      setBook({} as Book);
    }
  }, [isbn]);

  // if (!book.isbn13) return null;

  return <BookDetail book={book} />;
}

export default Detail;
