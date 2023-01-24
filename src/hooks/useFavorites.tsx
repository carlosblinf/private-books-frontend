import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
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

  const handleOnclick = () => {
    dispatch(addFavorites(book));
  };
  return { favorite, handleOnclick };
}
