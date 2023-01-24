import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import BookCardList from '../../components/BookCardList';
import { Book } from '../../types/book';

function Search() {
  const { query } = useParams();
  const [filtered, setFiltered] = useState<Book[]>({} as Book[]);

  useEffect(() => {
    if (query) {
      // call api
      setFiltered({} as Book[]);
    }
  }, [query]);
  

  return (
    <div className="flex flex-col items-center gap-5 px-5 py-5 md:px-20">
      <h3 className="text-3xl font-bold">Find your books</h3>
      {filtered.length ? <BookCardList books={filtered} /> : <Typography>The BookFinder is empty</Typography>}
    </div>
  );
}

export default Search;
