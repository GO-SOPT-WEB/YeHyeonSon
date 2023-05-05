import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'bitbit';
    src: url('//cdn.df.nexon.com/img/common/font/DNFBitBit-Regular.woff'),
      url('//cdn.df.nexon.com/img/common/font/DNFBitBit-Regular.woff2');
  }
  
  color: pink;
  
`;

export default GlobalStyle;

