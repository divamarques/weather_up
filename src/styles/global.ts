import { createGlobalStyle } from "styled-components";
// import "leaflet/dist/leaflet.css";

export const GlobalStyle = createGlobalStyle`

  .leaflet-container {
    width: 100%;
    height: 80vh;
    
  }

  :root {
    --background: #E5E5E5;
    --black: #000814;
    --dark-blue: #003566;
    --dark-yellow: #FFC300;
    --bright-yellow: #ffd60a;
    --text-body: #363f5f;
    --text-title: #969cb3;
    --shape: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (min-width: 1080px) {
      font-size: 93.75%; //15px
    }
    @media (min-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  body {
    background: var(--shape);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button { 
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0,0,0,0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .react-modal-content {
    width: 100%;
    max-width: 300px;
    height: 400px;
    background: var(--shape);
    padding: 2rem;
    position: relative;
    border-radius: 0.25rem;
   
  }

  .react-modal-close{
    position: absolute;
    right: 0;
    top: 0;
    border: 0;
    background: transparent;

    &:hover {
      filter: brightness(0.7);
    }
  }

  .social-bar {
    margin-left: 1rem;
    top: 15rem;
  }
  
  .scroll-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: none;
  }

  .scroll-to-top.show {
    display: block;
    transform: rotate(-90deg);
    bottom: 5rem;
    right: 0;
  }
 
`;