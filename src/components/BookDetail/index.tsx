import React from 'react';
import Share from '@mui/icons-material/Share';
import { Book } from '../../types/book';
import {
  Actions,
  AuthorContainer,
  BookDetails,
  BookDetailContainer,
  BookSubtitle,
  BookTitle,
  DetailContainer,
  DetailSection,
} from './styled-components';

import { useFavorites } from '../../hooks/useFavorites';

type BookDetailProps = {
  book: Book;
};

function BookDetail({ book }: BookDetailProps) {
  const { favorite, handleOnclick } = useFavorites(book);

  return (
    <BookDetailContainer className="cardWhite">
      <div className="flex w-full lg:w-1/2 h-[500px] md:p-3">
        <img className="w-full" src={book.image} alt="book" />
      </div>
      <BookDetails>
        <div>
          <BookTitle>{book.title}</BookTitle>
          <BookSubtitle>{book.subtitle}</BookSubtitle>
        </div>
        <AuthorContainer>
          <div className="flex gap-1">
            <span className="font-bold">author: </span>
            <span>{book.authors}</span>
          </div>
          <div className="flex gap-1">
            <span className="font-bold">publisher: </span>
            <span>{book.publisher}</span>
          </div>
        </AuthorContainer>
        <DetailContainer>
          <DetailSection>
            <div>
              <span className="font-bold">pages: </span>
              <span>{book.pages}</span>
            </div>
            <div>
              <span className="font-bold">year: </span>
              <span>{book.year}</span>
            </div>
          </DetailSection>
          <DetailSection>
            <div>
              <span className="font-bold">isbn13: </span>
              <span>{book.isbn13}</span>
            </div>
            <div>
              <span className="font-bold">price: </span>
              <span>{book.price}</span>
            </div>
          </DetailSection>
        </DetailContainer>
        <div>
          <h4 className="font-semibold text-xl">About book</h4>
          <p className="text-justify">
            <span>{book.desc}</span>
          </p>
        </div>
        <Actions>
          <a href={book.url} target="_blank" className="py-2 px-6 bg-gray-700 text-white rounded" rel="noreferrer">
            visit
          </a>
          <div onClick={() => handleOnclick()}>{favorite()}</div>
          <div>
            <Share />
          </div>
        </Actions>
      </BookDetails>
    </BookDetailContainer>
  );
}

export default BookDetail;
