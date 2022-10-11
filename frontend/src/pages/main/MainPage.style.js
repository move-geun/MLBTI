import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Main = styled.div`
  width: 88%;
  display: flex;
  flex-direction: column;
  margin: 1rem auto 0 auto;
  justify-content: center;
  font-size: 1.5rem;

  .loading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 50%;
    height: 70vh;
    .spinner {
      margin: 0 1rem 2rem 0;
    }
  }
  .main_des {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
    margin-top: 5px;
    font-size: 1rem;
    @media screen and (max-width: 830px) {
      font-size: 0.6rem;
    }
    h5 {
      font-size: 1.5rem;
      margin-top: 0;
      margin-bottom: 10px;
      @media screen and (max-width: 830px) {
        font-size: 1rem;
      }
    }
    img {
      width: 50px;
      height: 50px;
      @media screen and (max-width: 830px) {
        width: 30px;
        height: 30px;
      }
      @media screen and (max-width: 480px) {
        width: 30px;
        height: 30px;
      }
    }
    .team_des {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      div {
        margin-top: 5px;
        width: 100%;
        text-align: center;
      }
    }
    .simul_case {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .dot-elastic {
      position: relative;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: lightgray;
      color: #9880ff;
      animation: dotElastic 1s infinite linear;
      @media screen and (max-width: 830px) {
        width: 15px;
        height: 15px;
      }
      @media screen and (max-width: 480px) {
        width: 10px;
        height: 10px;
      }
    }

    .dot-elastic::before,
    .dot-elastic::after {
      content: "";
      display: inline-block;
      position: absolute;
      top: 0;
    }

    .dot-elastic::before {
      left: -30px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: lightgray;
      color: #9880ff;
      animation: dotElasticBefore 1s infinite linear;
      @media screen and (max-width: 830px) {
        width: 15px;
        height: 15px;
      }
      @media screen and (max-width: 480px) {
        left: -15px;
        width: 10px;
        height: 10px;
      }
    }

    .dot-elastic::after {
      left: 30px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: lightgray;
      color: #9880ff;
      animation: dotElasticAfter 1s infinite linear;
      @media screen and (max-width: 830px) {
        width: 15px;
        height: 15px;
      }
      @media screen and (max-width: 480px) {
        left: 15px;
        width: 10px;
        height: 10px;
      }
    }

    @keyframes dotElasticBefore {
      0% {
        transform: scale(1, 1);
      }
      25% {
        transform: scale(1, 1.5);
      }
      50% {
        transform: scale(1, 0.67);
      }
      75% {
        transform: scale(1, 1);
      }
      100% {
        transform: scale(1, 1);
      }
    }

    @keyframes dotElastic {
      0% {
        transform: scale(1, 1);
      }
      25% {
        transform: scale(1, 1);
      }
      50% {
        transform: scale(1, 1.5);
      }
      75% {
        transform: scale(1, 1);
      }
      100% {
        transform: scale(1, 1);
      }
    }

    @keyframes dotElasticAfter {
      0% {
        transform: scale(1, 1);
      }
      25% {
        transform: scale(1, 1);
      }
      50% {
        transform: scale(1, 0.67);
      }
      75% {
        transform: scale(1, 1.5);
      }
      100% {
        transform: scale(1, 1);
      }
    }
  }
`;

const Notice = styled(Slider)`
  height: 90%;
  .slick-list {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overflow-x: hidden;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 4px 0;
  }

  .slick-slide div {
    cursor: pointer;
    background-color: white;
    font-size: 1rem;
  }

  .slick-dots {
    display: none;
  }

  .slick-track {
    width: 100%;
  }
`;

const DownChart = styled(Slider)`
  height: 90%;
  .slick-list {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overflow-x: hidden;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 4px 0;
  }

  .slick-slide div {
    cursor: pointer;
    background-color: white;
    font-size: 1rem;
    .gray {
      background-color: rgba(0, 0, 0, 0.17);
    }
    .win {
      background-color: #4d79be;
    }
    .lose {
      background-color: tomato;
    }
    .title {
      @media screen and (max-width: 830px) {
        font-size: 1.5rem;
      }
      @media screen and (max-width: 480px) {
        font-size: 1rem;
      }
    }
  }

  .slick-dots {
    display: none;
  }

  .slick-track {
    width: 100%;
  }
`;

const SimulationCase = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  font-size: 0.8rem;
  .main_con {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-right: 15px;
    border-right: 2px solid rgba(0, 0, 0, 0.1);

    .simul_page {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      .temp_ball {
        margin-left: 20px;
      }
    }
  }
  .logo {
    height: 330px;
    width: 500px;
  }

  .sub {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;
  }

  .Main {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  @media screen and (max-width: 830px) {
    .logo {
      height: 330px;
      width: 300px;
    }
    font-size: 0.5rem;
  }
`;

const CheckBox = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 450px;
  /* flex-direction: row;
  justify-content: space-between;
  align-items: center; */
  margin-top: 3rem;

  .title {
    height: 25px;
  }
  @media screen and (max-width: 830px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.625rem;
  }
`;

const Predict = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  /* background-color: rgba(123, 12, 15, 0.2); */
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    height: 5%;
    background-color: rgba(123, 12, 15, 0.2);
    border-radius: 2rem;
  }

  &::-webkit-scrollbar-track {
    height: 5%;
    background-color: #d7dcff;
    border-radius: 2rem;
  }
  font-size: 0.8rem;
  .title {
    margin-bottom: 20px;
    font-size: 1.5rem;
    @media screen and (max-width: 830px) {
      font-size: 1rem;
    }
    @media screen and (max-width: 480px) {
      font-size: 0.625rem;
    }
  }

  .contentdiv {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 10px auto;

    img {
      margin: 0 5px;
    }
  }

  .home {
    display: flex;
    flex-direction: column;
    width: 105px;

    div {
      margin: 3px;
    }
  }
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  .status {
    width: 130px;
    display: flex;
    flex-direction: column;
  }
  .away {
    width: 105px;
    display: flex;
    flex-direction: column;
    div {
      margin: 3px;
    }
  }

  .content {
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .gray {
    background-color: rgba(0, 0, 0, 0.17);
  }
  .win {
    background-color: #4d79be;
  }
  .lose {
    background-color: tomato;
  }

  @media screen and (max-width: 830px) {
    font-size: 0.8rem;
    border-left: none;
    .home {
      width: 200px;
    }
    .away {
      width: 200px;
    }
    img {
      margin: 0 10px;
    }
  }
  @media screen and (max-width: 480px) {
    font-size: 0.3rem;
    .home {
      width: 130px;
    }
    .away {
      width: 130px;
    }
  }
`;

// const Today = styled.div`
//   width: 100%;
//   text-align: center;
//   border-left: 2px solid rgba(0, 0, 0, 0.2);
//   border-right: 2px solid rgba(0, 0, 0, 0.2);
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   font-size: 1rem;
//   overflow-y: auto;

//   .title {
//     margin-bottom: 20px;
//   }
//   .content {
//     margin-bottom: 5px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
//   .home {
//     width: 150px;
//     text-align: left;
//     font-size: 0.8rem;
//   }

//   .vs {
//     width: 30px;
//     text-align: center;
//     font-size: 0.8rem;
//   }

//   .away {
//     width: 150px;
//     text-align: right;
//     font-size: 0.8rem;
//   }

//   @media screen and (max-width: 830px) {
//     font-size: 0.8rem;
//     border-left: none;
//     border-right: none;
//   }
//   @media screen and (max-width: 480px) {
//     font-size: 0.5rem;
//   }
// `;

const Rank = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  font-size: 1rem;

  .title {
    margin-bottom: 20px;
    width: 100%;
    font-size: 1.5rem;
    @media screen and (max-width: 830px) {
      font-size: 1rem;
    }
    @media screen and (max-width: 480px) {
      font-size: 0.625rem;
    }
  }

  .divide {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
  .leaguebtn {
    &.hover {
      cursor: pointer;
    }
  }
  @media screen and (max-width: 830px) {
    font-size: 1rem;
    border-right: none;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.625rem;
  }
`;

const Leagues = styled(Slider)`
  width: 280px;
  height: 90%;
  margin: 20px auto;
  .slick-list {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overflow-x: hidden;
    padding: 4px 0;
  }

  .slick-slide div {
    cursor: pointer;
    background-color: white;
    font-size: 1rem;
  }

  .slick-dots {
    display: none;
  }

  .slick-track {
    width: 100%;
  }
`;

const League = styled.div`
  box-sizing: inherit;
  width: 100%;
  display: flex;
  flex-direction: column;
  .leaguetitle {
    margin: 15px 0;
  }
  .rank_cont {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 20px auto;
  }
  .number {
    margin-left: 40px;
  }
  .rank {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-right: 10px;
      margin-left: 20px;
    }
    &.hover {
      cursor: pointer;
    }
  }
`;

const SubItem = styled.div`
  margin: 0;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 160px;
  /* background-color: rgba(0, 0, 0, 0.05); */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: right;
  .sub_dot {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  @media screen and (max-width: 830px) {
    width: 300px;
  }

  .sub_title {
    font-size: 1.5rem;
    @media screen and (max-width: 830px) {
      font-size: 1rem;
    }
  }
  .sub_simul {
    width: 200px;
    height: 120px;
    @media screen and (max-width: 830px) {
      width: 80px;
      height: 120px;
    }
  }

  .sub_des {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-right: 10px;
    .sub_container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      font-size: 1rem;
      h5 {
        font-size: 1rem;
      }
      .sub_home {
        display: flex;
        flex-direction: column;
        align-items: center;
        @media screen and (max-width: 830px) {
          font-size: 0.6rem;
        }
      }
      img {
        width: 40px;
        height: 40px;
        margin-bottom: 5px;
      }
    }
  }
  .go_simul {
    font-size: 1rem;
  }
  .dot-elastic {
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: blue;
    color: #9880ff;
    animation: dotElastic 1s infinite linear;
    @media screen and (max-width: 830px) {
      width: 15px;
      height: 15px;
    }
    @media screen and (max-width: 480px) {
      width: 10px;
      height: 10px;
    }
  }

  .dot-elastic::before,
  .dot-elastic::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
  }

  .dot-elastic::before {
    left: -30px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: yellow;
    color: #9880ff;
    animation: dotElasticBefore 1s infinite linear;
    @media screen and (max-width: 830px) {
      left: -20px;
      width: 15px;
      height: 15px;
    }
  }

  .dot-elastic::after {
    left: 30px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: tomato;
    color: #9880ff;
    animation: dotElasticAfter 1s infinite linear;
    @media screen and (max-width: 830px) {
      left: 20px;
      width: 15px;
      height: 15px;
    }
  }

  @keyframes dotElasticBefore {
    0% {
      transform: scale(1, 1);
    }
    25% {
      transform: scale(1, 1.5);
    }
    50% {
      transform: scale(1, 0.67);
    }
    75% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  @keyframes dotElastic {
    0% {
      transform: scale(1, 1);
    }
    25% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1, 1.5);
    }
    75% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  @keyframes dotElasticAfter {
    0% {
      transform: scale(1, 1);
    }
    25% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1, 0.67);
    }
    75% {
      transform: scale(1, 1.5);
    }
    100% {
      transform: scale(1, 1);
    }
  }
`;

// const League = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   margin: 0 auto;
// `;

const MainGameCard = styled.div`
  width: 100%;
  border-radius: 0.7em;
  border-style: none;
  box-shadow: 3px 3px 10px 0.1px gray;
  background-color: #e7eff99f;
  margin-bottom: 10px;
`;
export {
  Notice,
  Main,
  SimulationCase,
  CheckBox,
  Predict,
  Rank,
  DownChart,
  Leagues,
  League,
  SubItem,
  MainGameCard,
};
