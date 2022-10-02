import styled from "styled-components";


const Img = styled.img`

  position: relative;

  &.ground{
    width: 450px;
    height: 450px;
    
    @media screen and (max-width: 830px) {
      width: 350px;
      height: 350px;
      
    }
    @media screen and (max-width: 480px) {
      width: 250px;
      height: 250px;
    }
  }
`


const BaseBall = styled.img`
  width: 30px;
  height: 30px;
  /* position: absolute; */

  animation: rotate_ball 0.5s linear infinite;
  transform-origin: 50% 50%;

  @keyframes rotate_ball {
    100% {
      transform: rotate(360deg);
    }
  }
`

const Base = styled.img`
  width: 40px;
  height: 40px;
  /* position: absolute; */

  /* animation: blink-effect 0.8s step-end infinite; */
  animation: hue-rotate 3s linear infinite;
/* 
  @keyframes blink-effect {
  50% {
    opacity: 0;
  } */


  @keyframes hue-rotate {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
}





`

export { Img, BaseBall, Base };