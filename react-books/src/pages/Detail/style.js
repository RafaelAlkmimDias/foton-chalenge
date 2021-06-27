import style from 'styled-components';

export const Background = style.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #F2F2F2;
    
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
`;

export const Header = style.img`
    position: absolute;
    
    top: 0px;
    left: 0px;
    width: 100%;
`;

export const BackButton = style.img`
    position: relative;
    z-index: 2;
    margin-top: 55px;
    margin-left: 33px;
    
    width: 14px;
    height: 14px;
`;
export const BookImageWrapper = style.div`
    position: relative;
    width: 100%;
    display: flex;
    margin-top: 15px;
    justify-content: center;
`;
export const BookImage = style.img`
    width: 151px;
    height: 234px;
`;

export const Title = style.div`
    position: relative;
    padding: 31px 20px 0px 21px;
    font-family: SF Pro Display, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 1.5px;

    color: #36383A;
`;

export const Author = style.div`
    position: relative;
    padding: 7px 20px 0px 21px;
    font-family: SFProDisplay, sans-serif;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.670588px;

    color: #FF6978;
`;
export const Description = style.div`
    position: relative;
    padding: 10px 20px 109px 21px;
    overflow-y: auto;
    font-family: SFProText, sans-serif;
    font-size: 14px;
    line-height: 25px;
    letter-spacing: 0.2px;

    color: rgba(49, 49, 49, 0.6);
`;

export default {

};
