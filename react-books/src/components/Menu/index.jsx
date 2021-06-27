import React from 'react';
import { Wrapper, Button } from './style';
import Home from '../../assets/images/home.svg';
import Libraries from '../../assets/images/libraries.svg';
import Profile from '../../assets/images/profile.svg';

const Menu = () => (
  <Wrapper>
    <Button>
      <img src={Home} alt="home" />
    </Button>
    <Button>
      <img src={Libraries} alt="libraries" />
    </Button>
    <Button>
      <img src={Profile} alt="profile" />
    </Button>
  </Wrapper>
);

export default Menu;
