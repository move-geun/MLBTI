import styled from "styled-components";

const SpinnerDiv = styled.div`
  width: 100%;
  height: 50vh;
  position: absolute;
  top: 40vh;
  left: 50%;
`;

const SimulContainer = styled.div`
  width: 88%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: relative;
`;

const Center = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const Groundmap = styled.div`
  background-image: url("/assets/Ground.png");
  position: relative;
  width: 370px;
  height: 370px;
  background-color: transparent;
  background-size: cover;
`;

const BaseBall = styled.img`
  width: 60px;
  height: 60px;
  position: absolute;
  left: 155px;
  top: 155px;

  animation: rotate_ball 0.7s linear infinite;
  transform-origin: 50% 50%;
  @keyframes rotate_ball {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Base = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;

  animation: blink-effect 0.8s step-end infinite;

  @keyframes blink-effect {
    50% {
      opacity: 0;
    }
  }
`;

// const BatterWrap = styled.div`
//   text-align: center;
// `;

const BatterEvent = styled.div`
  position: absolute;
  z-index: 100;
  width: 17rem;
  height: 40px;
  left: 40px;
  line-height: 40px;
  background-color: white;
  text-align: center;
  border: #16345a solid;
  box-shadow: 2px 2px #16345a, 5px 5px #4d8cbf;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const BatterName = styled.div`
  font-size: 1.5em;
  font-weight: 700;
  margin-left: 10px;
`;

const FirstB = styled.img`
  width: 50px;
  height: 60px;
  position: absolute;

  top: 155px;
  right: 60px;

  animation: blink-effect 1s step-end infinite;

  @keyframes blink-effect {
    50% {
      opacity: 0;
    }
  }
`;

const SecondB = styled.img`
  width: 50px;
  height: 60px;
  position: absolute;
  top: 53px;
  left: 160px;

  animation: blink-effect 1s step-end infinite;
  @keyframes blink-effect {
    50% {
      opacity: 0;
    }
  }
`;

const ThirdB = styled.img`
  width: 50px;
  height: 60px;
  position: absolute;

  top: 155px;
  left: 58px;

  animation: blink-effect 1s step-end infinite;
  @keyframes blink-effect {
    50% {
      opacity: 0;
    }
  }
`;

const BallCountContainer = styled.div`
  min-width: 250px;
  height: 300px;
  border-radius: 20px;
  background-color: #343434;
  /* background-color: rgba(0, 0, 0, 0.43); */
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: space-evenly;
  align-items: center;
  font-size: 30px;

  .title {
    width: 23px;
  }

  .count {
    margin-left: 10px;
    width: 200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
  .circle_case {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .circle {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: whitesmoke;
    margin-left: 15px;
  }

  .ball {
    background-color: #148b33;
  }

  .strike {
    background-color: #f2920e;
  }

  .out {
    background-color: #b00d0a;
  }
`;

export {
  SpinnerDiv,
  SimulContainer,
  Groundmap,
  Center,
  BaseBall,
  Base,
  BatterEvent,
  BatterName,
  FirstB,
  SecondB,
  ThirdB,
  BallCountContainer,
};
