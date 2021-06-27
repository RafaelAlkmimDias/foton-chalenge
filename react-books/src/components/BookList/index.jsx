/* eslint-disable react/prop-types */
import React from 'react';
import { Wrapper } from './style';
import Book from './components/Book';

const BookList = ({ books }) => {
  const hasBook = Boolean(books) && Boolean(books.length);
  const showBooks = hasBook ? books.map((book) => (<Book book={book} />)) : '';
  return (
    <Wrapper>
      { showBooks }
    </Wrapper>
  );
};

export default BookList;
