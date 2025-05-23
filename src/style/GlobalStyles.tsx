import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    //* rem scaling
    font-size: 62.5%;
  }

  body {
    font-family: ${(props) => props.theme.font.primary};
    font-size: 1.6rem;
  }



  
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Spartan',sans-serif;
}

h1 {
    font-size: 50px;
    line-height: 64px;
    color: #222;
}

h2 {
    font-size: 46px;
    line-height: 54px;
    color: #222;
}

h4 {
    font-size: 20px;
    color: #222;
}

h6 {
    font-weight: 700;
    font-size: 12x;
}

p {
    font-size: 16px;
    color: #465b52;
    margin: 15px 0 20px 0;
}
`