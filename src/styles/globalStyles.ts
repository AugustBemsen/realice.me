import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.FontFace.primary};
    scroll-behavior: smooth;
  }

  
  /* Scroll Bar */
  /* width */
  ::-webkit-scrollbar {
    width: 12px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #e0e0e0;
  }


  body {
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.offwhite};
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;    
    -ms-overflow-style: none; 
    scrollbar-width: none; 
    scroll-behavior: smooth !important;
  }
  
  button, input {
    outline: none;
  }

  button {
    cursor: pointer;
  }

  a {
    outline: none;
    text-decoration: none;
    color: inherit;
  }

  h1 {
    font-size: ${({ theme }) => theme.fonts.sizes.xxl};
    color: ${({ theme }) => theme.colors.white};

    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media screen and (max-width: 500px) {

    h1 {
      font-size: ${({ theme }) => theme.fonts.sizes.xl};
    }
  }

`;

export default GlobalStyle;
