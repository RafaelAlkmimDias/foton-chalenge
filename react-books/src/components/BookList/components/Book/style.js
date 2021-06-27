import style from 'styled-components';

export const Wrapper = style.div`
  margin: 12px 8px;
  display: flex;
  flex-direction: column;
  width: 105px;
`;

export const Image = style.img`
  width: 105px;
  height: 153px;
`;

export const Title = style.div`
  font-family: SF Pro Display, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  margin-top: 9px;
  color: rgba(49, 49, 49, 0.8);
`;

export const Author = style.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 10px;
  line-height: 12px;
  margin-top: 5px;
  color: rgba(49, 49, 49, 0.8);
`;

export default {

};
