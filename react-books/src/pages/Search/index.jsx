import React, { useState, useEffect } from 'react';
import PageDefault from '../../components/PageDefault';
import { SearchApi } from '../../services/api';
import BookList from '../../components/BookList';
import { MoreBooks } from './style';

const Search = () => {
  const [books, setBooks] = useState([]);
  const [startSearch, setStartSearch] = useState('');
  const [index, setIndex] = useState(0);
  const [mount, setMount] = useState(false);
  const hasBooks = Boolean(books);

  const callSearchApi = async (search, start = true) => {
    console.log(books);
    console.log(index);
    const data = await SearchApi(search, index);
    setBooks(data.items);
    if (start) { setIndex(0); }
    setStartSearch(search);
  };

  const addIndex = () => {
    setIndex(index + 10);
  };

  useEffect(() => {
    const search = localStorage.getItem('book');
    const term = search || 'home';
    setStartSearch(term);
  }, []);

  useEffect(() => {
    if (mount) { callSearchApi(startSearch); } else { setMount(true); }
  }, [startSearch]);

  useEffect(() => {
    callSearchApi(startSearch, false);
  }, [index]);

  return (
    <PageDefault search={callSearchApi} startSearch={startSearch}>
      <BookList books={books} />
      { hasBooks && (
        <MoreBooks onClick={addIndex}>
          Load more
        </MoreBooks>
      )}
    </PageDefault>
  );
};

export default Search;
