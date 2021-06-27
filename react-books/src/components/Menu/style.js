import style from 'styled-components';

export const Wrapper = style.div`
  background-color: #fff;
  height: 59px;
  width: 100%;
  position: fixed;
  bottom: 0px;
  left: 0px;
  display: flex;
  justify-content: space-around;
`;

export const Button = style.button`
    width: 59px;
    height: 59px;
    border: none;
    background-color: transparent;
`;

export default {
  Wrapper,
  Button,
};
