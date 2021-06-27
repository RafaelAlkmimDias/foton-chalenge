import styled from 'styled-components';

export const Background = styled.div`
  background: #FFFCF9;
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  overflow-y: auto;
  padding-bottom: 59px;
`;

export default {
  Background,
  Content,
};
