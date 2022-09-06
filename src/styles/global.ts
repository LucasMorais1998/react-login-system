import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --white-100: #FCFCFC; // bg
    --white-200: #F1F1F2; // bg-input
    --white-300: #EEEEEE;

    --gray-100: #93969D;
    --gray-200: #3D4046; // text
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

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 300px;
    background: var(--white-100);
    color: var(--gray-200);
    padding: 1.8rem;
    position: relative;
    border-radius: 0.25rem;
    text-align: center;

    .react-modal-close {
      position: absolute;
      top: 0.6rem;
      right: 0.6rem;
      border: 0;
      font-size: 1.2rem;
      background: transparent;
      cursor: pointer;
      opacity: .6;
      transition: opacity ease 0.2s;

      &:hover {
        opacity: 1;
        color: var(--gray-300);
      }
    }
    
    .react-modal-message {
      margin-top: 1rem;
      color: var(--gray-200);
      line-height: 1.3rem;
      letter-spacing: .05rem;
      text-transform: uppercase;
    }
  } 
`;
