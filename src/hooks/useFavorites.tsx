import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { toast } from 'react-hot-toast';
import { Book } from '../types/book';
import { RootState, useAppDispatch, useAppSelector } from '../redux/store';
import { addFavorites } from '../redux/slices/book.slice';

export function useFavorites(book: Book) {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state: RootState) => state.book.favorites);

  const favorite = () => {
    if (favorites.map((b) => b.isbn13).includes(book.isbn13)) return <FavoriteIcon />;

    return <FavoriteBorderOutlinedIcon />;
  };
  const notify = (text: string) => toast.success(text);

  const handleOnclick = () => {
    dispatch(addFavorites(book));
    if (favorites.map((b) => b.isbn13).includes(book.isbn13)) notify('Book removed from favorites');
    else notify('Book added to favorites');
  };
  return { favorite, handleOnclick };
}
