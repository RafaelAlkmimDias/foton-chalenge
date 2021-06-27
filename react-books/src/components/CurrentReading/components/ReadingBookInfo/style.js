import style from 'styled-components';
import readBookDecoration from '../../../../assets/images/readBookDecoration.png';

export const Wrapper = style.div`
  margin-top: 30px;
  position: relative;
  width: 136px;
`;

export const Book = style.img`
  margin-left: 19px;
  position:absolute;
  top:-17px;
  width: 91px;
  height: 136px;
`;

export const Card = style.div`
  background-image: url(${readBookDecoration});
  background-position: center;
  background-repeat: no-repeat;

  width: 331px;
  height: 100px;
  margin: 17px 0px 19px 0px;
  border-radius: 0px 3px 3px 0px;
  padding: 10px 0px 12px 118px
`;

export const Decoration = style.img`
  z-index: 0;
`;

export const Title = style.div`
  font-family: Playfair Display;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 2px;
  color: #2A2B26;
`;

export const Autor = style.div`
  padding-top: 5px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  color: #74776D;
`;

export const Mark = style.div`
  padding-top: 22px;
  font-family: SF Pro Display, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.020635px;
  color: #2A2B26;
  display: flex;
  align-items: center;
`;
export const MarkSpan = style.span`
  font-weight: 700;
  color: #ff6978;
`;
export const MarkImg = style.img`
  width: 12px;
  height: 14.67px;
`;

export default {
  Title,
};
