import styled from "styled-components";


const TopLayout = styled.div`
  width: 100%;
  height: 500px;



`


const BottomLayout = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: row;


`
const GroundContainer = styled.div`

  flex-grow:1;
  width: 50%;
  height: 100%;
  box-sizing: border-box;

`

const SimulResultContainer = styled.div`

  flex-grow:1;
  width: 50%;
  height: 100%;
  box-sizing: border-box;

`

const GroundWrap = styled.div`
  position: relative;
`

const Img = styled.img`

  position: absolute;
  margin: 1rem 1rem 0 1rem;

  &.ground{
    width: 30em;
    height: 30em;
    
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
const BallWrap = styled.div`

position: absolute;
width: 50px;
height: 50px;
left: 14.45rem;
top: 14rem;
  /* animation-name: motion;
  animation-duration: 0.6s;
  animation-direction: normal; */

  @keyframes motion {
    0%{
      top: 10rem;
    }
    100%{
      top : 50rem;
    }
  }


`


const BaseBall = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;



  animation: rotate_ball 0.7s linear infinite;
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
  position: absolute;

  animation: blink-effect 0.8s step-end infinite;
  /* animation: hue-rotate 3s linear infinite; */

  @keyframes blink-effect {
  50% {
    opacity: 0;
  }

  }
  /* @keyframes hue-rotate {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
} */
`

const BatterEvent = styled.div`
  font-size: xxx-large;
  font-weight: bold;
  top: 2rem;
  left: 8rem;
  position: relative;
  z-index: 100;

`

const FirstB = styled.img`
width: 60px;
height: 80px;
position: absolute;

top : 13rem;
left: 22.5rem;

animation: blink-effect 1s step-end infinite;
  /* animation: hue-rotate 3s linear infinite; */

  @keyframes blink-effect {
  50% {
    opacity: 0;
  }

  }


`

const SecondB = styled.img`
width: 60px;
height: 80px;
position: absolute;
top : 5rem;
left: 14em;


animation: blink-effect 1s step-end infinite;
  /* animation: hue-rotate 3s linear infinite; */

  @keyframes blink-effect {
  50% {
    opacity: 0;
  }

  }

`

const ThirdB = styled.img`
width: 60px;
height: 80px;
position: absolute;

top : 13rem;
left: 5.5em;

animation: blink-effect 1s step-end infinite;
  /* animation: hue-rotate 3s linear infinite; */

  @keyframes blink-effect {
  50% {
    opacity: 0;
  }

  }

`

export { TopLayout, BottomLayout, GroundContainer,SimulResultContainer, 
  GroundWrap, Img,BallWrap, BaseBall, Base, 
  BatterEvent, FirstB, SecondB, ThirdB };