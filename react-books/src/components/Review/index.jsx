import React from 'react';
import {
  Wrapper,
  ReviewImg,
} from './style';
import TitleSection from '../TitleSection';
import reviewImg from '../../assets/images/bookReview.png';

const Review = () => (
  <Wrapper>
    <TitleSection
      title="Reviews of The Days"
      clickText="All Video"
    />
    <ReviewImg src={reviewImg} />
  </Wrapper>
);

export default Review;
