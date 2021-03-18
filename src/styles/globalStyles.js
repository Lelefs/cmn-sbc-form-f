import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root {
    --verde: #34a853;
    --branco: #fff;
    --erro: #c53030;
    --preto: #666360;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  #root {
    min-height: 100vh;
    background-color: #ede7f6;
  }

  html {
    font-size: 16px;

    @media only screen and (max-width: 600px) {
      font-size: 14px;
    }
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
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
