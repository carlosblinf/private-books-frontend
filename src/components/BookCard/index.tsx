import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Share from '@mui/icons-material/Share';
import { Link } from 'react-router-dom';
import { Book } from '../../types/book';
import { BookContainer, BookInfo, Actions, BookTitle, BookSubTitle } from './styled-components';

type BookProps = {
  book: Book;
};

function BookCard({ book }: BookProps) {
  const favorite = () => {
    const isFavorite = false;
    if (isFavorite) return <FavoriteIcon />;

    return <FavoriteBorderOutlinedIcon />;
  };

  return (
    <BookContainer className="cardW ">
      <div>
        <a href={book.url} target="_blank" className="w-[200px]" rel="noreferrer">
          <img src={book.image} alt="book" className="w-full h-[230px]" title="See in the store" />
        </a>
        <BookInfo>
          <div className="flex justify-between gap-3">
            <BookTitle>{book.title}</BookTitle>
            <span>{book.price}</span>
          </div>
          <BookSubTitle>{book.subtitle}</BookSubTitle>
        </BookInfo>
      </div>
      <Actions>
        <div className="flex gap-2 cursor-pointer">
          {favorite()}
          <Share />
        </div>
        <Link to={`/books/${book.isbn13}`} className="px-2 py-1 text-white bg-gray-700 rounded">
          Detail
        </Link>
      </Actions>
    </BookContainer>
  );
}

export default BookCard;
