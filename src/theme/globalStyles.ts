import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

html {
  min-height: 100vh;
  
}

  body {
    font-family: "Mulish";
    min-height: 100vh;
      font-family: ${(props) => props.theme.font.primary};
    font-size: 1.6rem;
   
  }

  #root {
    min-height: 100vh;
    
  }

  #root > div {
    overflow: hidden;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  a {
    text-decoration:none;
  }


  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    box-shadow: 12px 12px 4px #f5f5f5f; 
     }

  
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

 
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  } 
   &::-webkit-scrollbar {
    width: 10px;
  }

  
  div[role='responsive-region'], main section{
        ::-webkit-scrollbar {
      height: 5px;
    }
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
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

  
`;
