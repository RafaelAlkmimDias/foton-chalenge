import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Name,
  Author,
  Number,
  Detail,
  BookImg,
  CardBack,
  CardFront,
} from './style';
import { ReactComponent as NumberRead } from '../../../../assets/images/numberRead.svg';
import firstRound from '../../../../assets/images/firstRound.svg';
import frontDetails from '../../../../assets/images/frontDetails.svg';

const NewBookCard = ({
  book,
  color,
}) => {
  const Style = {
    backgroundColor: color,
  };

  const hasImg = book.img !== '';

  return (
    <Card style={Style}>
      <CardBack src={firstRound} />
      <CardFront src={frontDetails} />
      <Detail>
        <Name>
          { book.name }
        </Name>
        <Author>
          { book.autor }
        </Author>
        <Number>
          <NumberRead />
          &nbsp;
          { book.number }
          + Read Now
        </Number>
      </Detail>
      {hasImg && (<BookImg src={book.img} />)}

    </Card>
  );
};

NewBookCard.propTypes = {
  book: PropTypes.shape({
    name: PropTypes.string,
    autor: PropTypes.string,
    number: PropTypes.number,
    img: PropTypes.string,
  }).isRequired,
  color: PropTypes.string,
};

NewBookCard.defaultProps = {
  color: '#00173D',
};

export default NewBookCard;
