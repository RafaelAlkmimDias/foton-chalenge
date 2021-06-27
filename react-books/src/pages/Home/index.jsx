import React from 'react';
import { useHistory } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import NewBooks from '../../components/NewBooks';
import CurrentReading from '../../components/CurrentReading';
import Review from '../../components/Review';
import { Greeting, NameTitle } from './style';

const Home = () => {
  const history = useHistory();
  const search = (searchBook) => {
    localStorage.setItem('book', searchBook);
    history.push('/search');
  };

  return (
    <PageDefault search={search}>
      <Greeting>
        Hi,
        <NameTitle> Mehmed Al Fatih </NameTitle>
        👋
      </Greeting>
      <NewBooks />
      <CurrentReading />
      <Review />
    </PageDefault>
  );
};

export default Home;
