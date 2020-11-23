import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    margin: 0;
    padding: 0;
    height: 100%;
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily};
    transition: all 0.25s linear;
  }

  h1, h2, h3, h4, p {
      margin: 0;
      padding; 0;
  }
`