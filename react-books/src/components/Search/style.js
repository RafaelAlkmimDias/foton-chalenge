import style from 'styled-components';

export const Wrapper = style.div`
    background-color: transparent;
    width: 100%;
    height: 98px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-left: 20px;
    padding-right: 20px;
`;

export const Input = style.input`
    height: 48px;
    border-radius: 10px;
    background: #FDFCFC;
    box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.122623);
    width: 100%;
    border: none;
`;

export default {
  Wrapper,
  Input,
};
