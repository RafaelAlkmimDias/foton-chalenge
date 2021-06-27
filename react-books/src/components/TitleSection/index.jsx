import React from 'react';
import PropTypes from 'prop-types';
import {
  TitleWrapper,
  Title,
  More,
} from './style';

const TitleSection = ({
  title,
  clickText,
  onClickHandler,
}) => (
  <TitleWrapper>
    <Title>
      {title}
    </Title>
    <More onClick={onClickHandler}>
      {clickText}
    </More>
  </TitleWrapper>
);

TitleSection.propTypes = {
  title: PropTypes.string.isRequired,
  clickText: PropTypes.string,
  onClickHandler: PropTypes.func,
};

TitleSection.defaultProps = {
  clickText: '',
  onClickHandler: () => {},
};

export default TitleSection;
