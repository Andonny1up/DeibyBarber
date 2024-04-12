import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  h1 {
    font-family: 'Oswald', sans-serif;
    font-weight: 500;
  }
  body{
    background-color: ${props => props.theme.background[20]};
    color: ${props => props.theme.text[20]};
  }
  body * {
    transition: background-color 0.3s ease;
  }
  section {
    background-color: ${props => props.theme.background[20]};
  }

  a {
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
    padding: 0;
  }

`;

export default GlobalStyle;