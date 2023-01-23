import React from 'react';
import Typography from '@mui/material/Typography';
import BookCardList from '../BookCardList';

function WrapperBookList() {
  const books = [
    {
      title: 'Architecting and Building High-Speed SoCs',
      subtitle: 'Design, develop, and debug complex FPGA-based systems-on-chip',
      isbn13: '9781801810999',
      price: '$32.99',
      image: 'https://itbook.store/img/books/9781801810999.png',
      url: 'https://itbook.store/books/9781801810999',
    },
    {
      title: 'Web Development with Julia and Genie',
      subtitle: 'A hands-on guide to high-performance server-side web development with the Julia programming language',
      isbn13: '9781801811132',
      price: '$39.99',
      image: 'https://itbook.store/img/books/9781801811132.png',
      url: 'https://itbook.store/books/9781801811132',
    },
    {
      title: 'Java Memory Management',
      subtitle: 'A comprehensive guide to garbage collection and JVM tuning',
      isbn13: '9781801812856',
      price: '$34.99',
      image: 'https://itbook.store/img/books/9781801812856.png',
      url: 'https://itbook.store/books/9781801812856',
    },
    {
      title: 'Test-Driven Development with C++',
      subtitle: 'A simple guide to writing bug-free Agile code',
      isbn13: '9781803242002',
      price: '$44.99',
      image: 'https://itbook.store/img/books/9781803242002.png',
      url: 'https://itbook.store/books/9781803242002',
    },
    {
      title: 'Software Test Design',
      subtitle: 'Write comprehensive test plans to uncover critical bugs in web, desktop, and mobile apps',
      isbn13: '9781804612569',
      price: '$44.99',
      image: 'https://itbook.store/img/books/9781804612569.png',
      url: 'https://itbook.store/books/9781804612569',
    },
  ];
  // books = [];
  return (
    <div className="flex items-center content-center justify-center">
      {books.length ? <BookCardList books={books} /> : <Typography>The BookFinder is empty</Typography>}
    </div>
  );
}

export default WrapperBookList;
