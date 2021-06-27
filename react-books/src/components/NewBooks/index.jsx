import React from 'react';
import {
  Wrapper,
  BooksWrapper,
} from './style';
import NewBookCard from './components/NewBookCard';
import bookImg from '../../assets/images/book1.svg';
import TitleSection from '../TitleSection';

const NewBooks = () => {
  const book1 = {
    name: 'Hooked',
    autor: 'Nir Eyal',
    number: 120,
    img: bookImg,
  };
  const book2 = {
    name: 'The One Thing',
    autor: 'Garry Keller',
    number: 90,
    img: '',
  };
  return (
    <Wrapper>
      <TitleSection
        title="Discover new book"
        clickText="More"
      />
      <BooksWrapper>
        <NewBookCard book={book1} color="#00173D" />
        <NewBookCard book={book2} color="#451475" />
      </BooksWrapper>
    </Wrapper>
  );
};

export default NewBooks;
