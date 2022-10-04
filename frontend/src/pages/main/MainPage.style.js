import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Main = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 1rem auto 0 auto;
  justify-content: center;
  font-size: 1.5rem;

  /* 스켈레톤용 */
  .skel {
    margin-bottom: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    width: 100%;
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
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    width: 48%;
  }

  img {
    height: 330px;
    width: 100%;
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
  border-left: 2px solid rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;

  font-size: 1rem;
  .title {
    margin-bottom: 20px;
  }

  .content {
    margin-bottom: 5px;
  }

  @media screen and (max-width: 830px) {
    font-size: 0.8rem;
    border-left: none;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.5rem;
  }
`;

const Today = styled.div`
  width: 100%;
  text-align: center;
  border-left: 2px solid rgba(0, 0, 0, 0.2);
  border-right: 2px solid rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 1rem;

  .title {
    margin-bottom: 20px;
  }
  .content {
    margin-bottom: 5px;
  }

  @media screen and (max-width: 830px) {
    font-size: 0.8rem;
    border-left: none;
    border-right: none;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.5rem;
  }
`;

const Rank = styled.div`
  width: 100%;
  text-align: center;
  border-right: 2px solid rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  font-size: 1rem;

  .title {
    margin-bottom: 20px;
    width: 100%;
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

// const League = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   margin: 0 auto;
// `;
export {
  Notice,
  Main,
  SimulationCase,
  CheckBox,
  Predict,
  Today,
  Rank,
  DownChart,
  Leagues,
  League,
};
