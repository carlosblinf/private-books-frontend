import React from 'react';
import { Book } from '../../types/book';

type BookDetailProps = {
  book: Book;
};

function BookDetail({ book }: BookDetailProps) {
  return <div>
    <img src="" alt="" />
    <div className="detail">
      de
    </div>
  </div>;
}

export default BookDetail;
