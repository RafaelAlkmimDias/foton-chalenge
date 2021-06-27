import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  LojinhaHeaderSearchWrapper,
  LojinhaHeaderSearchLabel,
  LojinhaHeaderSearchInput,
  LojinhaHeaderSearchSpan,
  LojinhaHeaderSearchSpanImg,
} from './style';
import Search from '../../assets/images/search-gray.svg';

const SearchInput = ({ getData, label }) => {
  const [searchText, setSearchText] = useState('');
  const [timer, setTimer] = useState(() => { });
  const [typed, setTyped] = useState(false);

  function handlerChangeSearchText(e) {
    const valor = e.target.value;
    setSearchText(valor);
    setTyped(true);
  }

  function activateGetData(text) {
    clearTimeout(timer);
    setTimer(setTimeout(() => {
      if (text === searchText) {
        getData(searchText);
      }
    }, 1000));
  }

  useEffect(() => {
    if (typed) { activateGetData(searchText); }
  }, [searchText]);

  return (
    <LojinhaHeaderSearchWrapper>
      <LojinhaHeaderSearchLabel>
        <LojinhaHeaderSearchInput
          placeholder={label}
          value={searchText}
          onChange={handlerChangeSearchText}
        />
        <LojinhaHeaderSearchSpan>
          <LojinhaHeaderSearchSpanImg src={Search} alt="search" />
        </LojinhaHeaderSearchSpan>
      </LojinhaHeaderSearchLabel>
    </LojinhaHeaderSearchWrapper>
  );
};

SearchInput.propTypes = {
  getData: PropTypes.func,
  label: PropTypes.string,
};

SearchInput.defaultProps = {
  getData: () => {},
  label: 'Buscar Produtos',
};

export default SearchInput;
