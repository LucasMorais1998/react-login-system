import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --white-100: #FCFCFC; // bg
    --white-200: #F1F1F2; // bg-input

    --gray-100: #3D4046; // text
    --gray-200: #93969D;
    --gray-300: #12161E; // title
    
    --blue-100: rgb(92, 137, 222); // button
    --blue-200: rgb(56, 120, 218); // hover
    
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: var(--white-100);
    -webkit-font-smoothing: antialiaased;
  }
  
  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
    color: var(--gray-300);
  } 

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
