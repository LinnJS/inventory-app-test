import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

export default createGlobalStyle`
  ${normalize};

  html {
   box-sizing: border-box;
   height: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    background: ${({ theme }) => theme.background};
    overflow-x: hidden;
    max-width: 100%;
    margin: 0;
  }


  a {
    text-decoration: none;
    color: #031d42;
    &:visited {
      color: #031d42;
    }
  }

  button {
    border: none;
  }
`;
