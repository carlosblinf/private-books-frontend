import React from 'react';
import Share from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
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
import image from '../../assets/image.png';

type BookDetailProps = {
  book: Book;
};

function BookDetail({ book }: BookDetailProps) {
  const favorite = () => {
    const isFavorite = false;
    if (isFavorite) return <FavoriteIcon />;

    return <FavoriteBorderOutlinedIcon />;
  };

  return (
    <BookDetailContainer className="cardWhite">
      <div className="flex w-full lg:w-1/2 h-[500px] md:p-3">
        <img className="w-full" src={image} alt="book" />
      </div>
      <BookDetails>
        <div>
          <BookTitle>Lorem ipsum dolor sit amet.</BookTitle>
          <BookSubtitle>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, nostrum!</BookSubtitle>
        </div>
        <AuthorContainer>
          <div className="flex gap-1">
            <span className="font-bold">author: </span>
            <span>Lorem ipsum dolor sit.</span>
          </div>
          <div className="flex gap-1">
            <span className="font-bold">publisher: </span>
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </AuthorContainer>
        <DetailContainer>
          <DetailSection>
            <div>
              <span className="font-bold">pages: </span>
              <span>450</span>
            </div>
            <div>
              <span className="font-bold">year: </span>1995
            </div>
          </DetailSection>
          <DetailSection>
            <div>
              <span className="font-bold">isbn: </span>1995asdasdas
            </div>
            <div>
              <span className="font-bold">price: </span>55.5
            </div>
          </DetailSection>
        </DetailContainer>
        <div>
          <h4 className="font-semibold text-xl">About book</h4>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis commodi velit in fugiat, molestias quasi quisquam
            est incidunt, ab ipsa quam ipsum mollitia iure? Voluptatum quasi quidem rem at delectus.
          </p>
        </div>
        <Actions>
          <a href="#" target="_blank" className="py-2 px-6 bg-gray-700 text-white rounded">
            visit
          </a>
          <div>{favorite()}</div>
          <div>
            <Share />
          </div>
        </Actions>
      </BookDetails>
    </BookDetailContainer>
  );
}

export default BookDetail;
