import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { useHistory, useLocation } from 'react-router-dom';
import {
  Background,
  Header,
  BackButton,
  BookImage,
  Title,
  Author,
  Description,
  BookImageWrapper,
} from './style';
import backButton from '../../assets/images/backButton.svg';
import { getData } from '../../services/api';
import detailDecoration from '../../assets/images/detailDecoration.svg';
import SecondMenu from '../../components/SecondMenu';

const Detail = () => {
  const [book, setBook] = useState(false);
  const history = useHistory();
  const isLoaded = (book && book !== undefined);
  // eslint-disable-next-line no-unused-vars
  const [rota, setRote] = useState(useLocation().search);
  const back = () => {
    history.goBack();
  };

  const callBookApi = async (id) => {
    const data = await getData(id);
    setBook(data);
  };

  useEffect(() => {
    const id = new URLSearchParams(rota).get('id');
    callBookApi(id);
  }, []);

  return (
    <Background>
      <Header src={detailDecoration} />
      <BackButton src={backButton} onClick={back} />
      {isLoaded && (
        <BookImageWrapper>
          <BookImage src={book.volumeInfo.imageLinks.thumbnail} />
        </BookImageWrapper>
      )}
      <Title>
        {isLoaded && (book.volumeInfo.title)}
      </Title>
      <Author>
        {isLoaded && (book.volumeInfo.authors[0])}
      </Author>
      <Description>
        {isLoaded && ReactHtmlParser(book.volumeInfo.description) }
      </Description>
      <SecondMenu />
    </Background>
  );
};

export default Detail;
