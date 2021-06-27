import React from 'react';
import {
  Wrapper,
} from './style';
import ReadingBookInfo from './components/ReadingBookInfo';
import book2 from '../../assets/images/book2.svg';
import TitleSection from '../TitleSection';

const CurrentReading = () => {
  const book = {
    name: 'Originals',
    autor: 'Adam Grant',
    chapter: '2',
    maxChapter: '9',
    img: book2,
  };

  return (
    <Wrapper>
      <TitleSection
        title="Currently Reading"
        clickText="All"
      />
      <ReadingBookInfo book={book} />
    </Wrapper>
  );
};

export default CurrentReading;
