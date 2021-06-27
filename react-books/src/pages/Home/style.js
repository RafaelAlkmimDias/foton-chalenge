import style from 'styled-components';

export const Greeting = style.div`
    padding-left: 20px;
    padding-top: 30px;
    font-family: SF Pro Display, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 29px;
    color: #54565A;
`;

export const NameTitle = style.span`
    color: #FF6978;
`;

export default {
  Greeting,
  NameTitle,
};
