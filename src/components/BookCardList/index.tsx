import React from 'react';
import { Book } from '../../types/book';
import BookCard from '../BookCard';

type BookListProps = {
  books: Book[];
};

function BookCardList({ books }: BookListProps) {
  return (
    <div className="flex flex-wrap justify-center gap-10 p-5">
      {books.map((book) => (
        <BookCard book={book} key={book.isbn13} />
      ))}
    </div>
  );
}

export default BookCardList;
