import style from 'styled-components';

export const Wrapper = style.div`
    padding-top: 30px;
    position: relative;
`;

export const BooksWrapper = style.div`
    padding-top: 15px;
    height: 154px;
    overflow-x: auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding-left: 15px;
    padding-right: 15px;
`;

export default {
  Wrapper,
  BooksWrapper,
};
