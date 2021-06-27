/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Wrapper,
  Image,
  Title,
  Author,
} from './style';
// eslint-disable-next-line react/prop-types
const Book = ({ book }) => {
  if (!(Boolean(book.volumeInfo.imageLinks)
    && Boolean(book.volumeInfo.imageLinks.thumbnail))) return '';

  const history = useHistory();

  const hasAuthors = (Boolean(book.volumeInfo.authors)
    && Boolean(book.volumeInfo.authors.lenght));

  const showDetail = (id) => {
    history.push(`/detail?id=${id}`);
  };

  return (
    <Wrapper onClick={() => { showDetail(book.id); }}>
      <Image src={book.volumeInfo.imageLinks.thumbnail} />
      <Title>
        {book.volumeInfo.title}
      </Title>
      { hasAuthors && (
        <Author>
          by&nbsp;
          {book.volumeInfo.authors[0]}
        </Author>
      )}
    </Wrapper>
  );
};

export default Book;
