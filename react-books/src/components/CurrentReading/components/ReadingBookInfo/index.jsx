import React from 'react';
import PropTypes from 'prop-types';
import book2 from '../../../../assets/images/book2.svg';
import pageMark from '../../../../assets/images/pageMark.svg';
import {
  Wrapper,
  Book,
  Card,
  Title,
  Autor,
  Mark,
  MarkImg,
  MarkSpan,
} from './style';

const ReadingBookInfo = ({ book }) => (
  <Wrapper>
    <Book src={book2} />
    <Card>
      <Title>{book.name}</Title>
      <Autor>
        by
        {book.autor}
      </Autor>
      <Mark>
        <MarkImg src={pageMark} alt="readingBook" />
        Chapter&nbsp;
        <MarkSpan>{book.chapter}</MarkSpan>
        &nbsp;From&nbsp;
        {book.maxChapter}
      </Mark>
    </Card>
  </Wrapper>
);

ReadingBookInfo.propTypes = {
  book: PropTypes.shape({
    name: PropTypes.string,
    autor: PropTypes.string,
    chapter: PropTypes.number,
    maxChapter: PropTypes.number,
    img: PropTypes.string,
  }).isRequired,
};

ReadingBookInfo.defaultProps = {
};

export default ReadingBookInfo;
