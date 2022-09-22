import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 50%;
  margin: 2rem 0 0 1rem;
`;

const ContentSwitch = styled.div`
  display: flex;
  width: 90%;
  font-size: 30px;
`;

const Switch = styled.button`
  background-color: white;
  color: black;
  margin-right: 2rem;
  border-radius: 0;
  padding: 0;
  border-bottom: 3px solid #2565d0;
`;

const Content = styled.div``;

const Schedule = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 2rem auto;
`;

const ScheduleDetail = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  font-size: 25px;
  margin-bottom: 1.5rem;
  @media screen and (max-width: 830px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
  .day {
    display: flex;
    justify-content: space-evenly;
    width: 30%;
    border-right: 1px solid;
  }

  .content {
    display: flex;
    justify-content: space-evenly;
    width: 40%;
    
  }

  .date {
  }
`;

const Player = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90%;
  margin: 2rem auto;
`;


const PlayerDetail = styled.div`
  display: flex;
  font-size: 25px;
  justify-content: space-evenly;
  width: 70%;
  
`
export {
  Wrapper,
  ContentSwitch,
  Switch,
  Content,
  Schedule,
  ScheduleDetail,
  Player,
  PlayerDetail,
};
