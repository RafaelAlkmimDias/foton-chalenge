import style from 'styled-components';

export const LojinhaHeaderSearchWrapper = style.div`
    padding: 50px 20px 0px 20px;
    width: inherit;
`;

export const LojinhaHeaderSearchLabel = style.label`
    width: 100%;
    position: relative;
    height: 48px;
`;
export const LojinhaHeaderSearchInput = style.input`
    border-radius: 10px;
    height: 48px;
    padding-left: 41px;
    font-family: SFProText, sans-serif;
    font-size: 16px;
    line-height: 18px;
    color: #54565A;
    border: none;
    width: 100%;
`;
export const LojinhaHeaderSearchSpan = style.span`
    position: absolute;
    top: 0;
    left: 15px;
    width: 18px;
    height: 19px;
    display: flex;
    align-items: center;
`;
export const LojinhaHeaderSearchSpanImg = style.img`
    vertical-align: top;
`;

export default {

};
