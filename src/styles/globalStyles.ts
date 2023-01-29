import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.FontFace.primary};
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


  :root {
    --nav-height: 12vh;

    @media screen and (max-width: 800px) { 
      --nav-height: 9vh;
    }
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

`;

export default GlobalStyle;
