import React from 'react';
import { Background, Content } from './style';
import Menu from '../Menu';
import SearchInput from '../SearchInput';

// eslint-disable-next-line react/prop-types
const PageDefault = ({ children, search, startSearch }) => (
  <>
    <Background>
      <SearchInput label="Search book" getData={search} startSearch={startSearch} />
      <Content>
        { children }
      </Content>
      <Menu />
    </Background>
  </>
);

export default PageDefault;
