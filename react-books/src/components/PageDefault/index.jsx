import React from 'react';
import { Background, Content } from './style';
import Search from '../Search';
import Menu from '../Menu';

// eslint-disable-next-line react/prop-types
const PageDefault = ({ children }) => (
  <>
    <Background>
      <Search/>
      <Content>
        { children }
      </Content>
      <Menu/>
    </Background>
  </>
);

export default PageDefault;
