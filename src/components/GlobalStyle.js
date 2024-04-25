import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Dagger Square', sans-serif;
  }

  h1 {
    font-family: 'Oswald', sans-serif;
    font-weight: 500;
  }
  h2{
    font-family: 'Oswald', sans-serif;
    font-weight: 400;
    font-size: 1.5rem;

    @media (min-width: 576px) {
      font-size: 2rem;
    }
  }
  p{
    font-size: 0.8rem;
    color: ${props => props.theme.text[10]};
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);

    @media (min-width: 576px) {
      font-size: 1rem;
    }
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
    padding: 3rem 0;
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