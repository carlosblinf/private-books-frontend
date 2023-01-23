import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Share from '@mui/icons-material/Share';
import { Link } from 'react-router-dom';
import { Book } from '../../types/book';

import { BookContainer, BookInfo, Actions, BookTitle, BookSubTitle } from './styled-components';
import image from '../../assets/image.png';

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
        <a href={book.url} target="_blank" className="w-[200px] h-[230px]" rel="noreferrer">
          <img src={image} alt="book" className="w-full" title="See in the store" />
        </a>
        <BookInfo>
          <div className="flex justify-between gap-3">
            <BookTitle>Lorem ipsum dolor sit amet.</BookTitle>
            <span>$55.40</span>
          </div>
          <BookSubTitle>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, a!</BookSubTitle>
        </BookInfo>
      </div>
      <Actions>
        <div className="flex gap-2">
          {favorite()}
          <Share />
        </div>
        <Link to={`/book/${book.isbn13}`} className="px-2 py-1 text-white bg-gray-700 rounded">
          Detail
        </Link>
      </Actions>
    </BookContainer>
  );
}

export default BookCard;
