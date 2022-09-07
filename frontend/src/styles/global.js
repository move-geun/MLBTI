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
}
input:focus,
input:active,
button:focus,
button:active {
  outline: none;
  box-shadow: none;
}
`;

export default GlobalStyle;
