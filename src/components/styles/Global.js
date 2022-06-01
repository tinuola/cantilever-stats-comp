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

  img {
    display: block;
    max-width: 100%;
  }

  body {
    background-color: #221e3f;
    color: #fff;
    font-family: 'Caslon';
    line-height: 1.8;
  }
`
export default GlobalStyles;