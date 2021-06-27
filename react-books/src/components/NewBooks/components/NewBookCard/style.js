import style from 'styled-components';

export const Card = style.div`
    position: relative;
    width: 272px;
    height: 139px;
    /*box-shadow: 2px 4px 48px rgba(154, 175, 209, 0.62134);*/
    border-radius: 5px;
    padding: 15px 20px 13px 20px;
    margin: 0 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const CardFront = style.img`
    z-index: 3;
    position: absolute;
    top: 3.8px;
    right: 70.63px;
`;

export const CardBack = style.img`
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
`;

export const Name = style.div`
    margin-top: 2px;
    font-family: Playfair Display;
    font-style: normal;
    font-weight: bold;
    font-size: 27px;
    line-height: 36px;
    letter-spacing: 2px;
    color: #FEFEFE;
    white-space: nowrap;
`;

export const Author = style.div`
    margin-top: 5px;
    height: 17px;
    font-family: SFProDisplay, sans-serif;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 1.28889px;
    color: #E7E7E1;
`;

export const Number = style.div`
    margin-top: 30px;
    font-family: SF Pro Display, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.020635px;
    color: #E7E7E1;
    display: flex;
    align-items: center;
`;

export const Detail = style.div`
    z-index: 2;
`;

export const BookImg = style.img`
    position: relative;
`;

export default {

};
