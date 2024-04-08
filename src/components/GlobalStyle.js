import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  h1 {
    font-family: 'Oswald', sans-serif;
  }

  html {
    font-size: 14px;
  }

  body * {
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  a {
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
    padding: 0;
  }

  @media (min-width: 576px) {
    html {
      font-size: 16px;
    }
  }
`;

export default GlobalStyle;