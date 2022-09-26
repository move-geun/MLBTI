import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* Mice고딕 */
@font-face {
    font-family: 'MICEGothic Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-01@1.0/MICEGothic Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}
body{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'MICEGothic Bold';
}
a{
    text-decoration: none;
}
ul{
    padding: 0;
    margin: 0;
}
li{
    list-style: none;
}
input, button{
    border:none;
    background-color: white;
    white-space: nowrap;
}
input:focus,
input:active,
button:focus,
button:active {
  outline: none;
  box-shadow: none;
}
div {
    white-space: nowrap;
}

button {
    background-color: #2565d0;
    font-weight: 600;
    color: white;
    padding: 0.625rem 1.7rem;
    border-radius: 0.5rem;
    font-size:1.5rem;
    cursor: pointer;

    @media screen and (max-width: 830px) {
        font-size:1rem;
    }

    @media screen and (max-width: 480px) {
        font-size:0.8rem;
  }
}

h1 {
    font-size: 80px;

    @media screen and (max-width: 830px) {
        font-size: 50px;
    }
    @media screen and (max-width: 480px) {
        font-size: 30px;
  }
  }
`;

export default GlobalStyle;
