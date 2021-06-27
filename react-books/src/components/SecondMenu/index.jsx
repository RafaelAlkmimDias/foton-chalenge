import React from 'react';
import {
  Wrapper,
  Button,
  ImgButton,
} from './style';
import openedBook from '../../assets/images/openedBook.svg';
import headset from '../../assets/images/headset.svg';
import share from '../../assets/images/share.svg';

const SecondMenu = () => (
  <Wrapper>
    <Button>
      <ImgButton src={openedBook} />
      &nbsp;Read
    </Button>
    <Button>
      <ImgButton src={headset} />
      &nbsp;Listen
    </Button>
    <Button>
      <ImgButton src={share} />
      &nbsp;Share
    </Button>
  </Wrapper>
);

export default SecondMenu;
