import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'bitbit';
    src: url('//cdn.df.nexon.com/img/common/font/DNFBitBit-Regular.woff'),
      url('//cdn.df.nexon.com/img/common/font/DNFBitBit-Regular.woff2');
  }
  
  color: pink;
  
  #root {
  max-width: max-content;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  text-align: center;
}
`;

export default GlobalStyle;

