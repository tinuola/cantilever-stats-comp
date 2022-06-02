import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  li {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #221e3f;
    color: #fff;
    font-family: 'Graphik';
    line-height: 1.5;
  }
`
export default GlobalStyles;