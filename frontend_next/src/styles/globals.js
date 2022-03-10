import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${props => props.theme.fonts.main};
    /* background: ${props => props.theme.colors.background4}; */
    cursor: default;

  }

  a {
    text-decoration: none;
  }

  li{
    list-style: none;
  }
`;

export default GlobalStyles;
