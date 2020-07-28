import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  #root {
    min-height: 100vh;
    background-color: #ede7f6;
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
    &:enabled:hover {
      filter: brightness(90%);
    }
    &:disabled {
      cursor: default;
      opacity: 0.5;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

`;
