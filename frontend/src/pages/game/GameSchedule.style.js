import styled from "styled-components";

const CompareContainer = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 1rem auto 0 auto;
  font-size: 1.5rem;
  input {
    text-align: center;
    padding-left: 10px;
    font-size: 2.5rem;
    width: 120px;
  }

  .title {
    text-align: left;
    padding-bottom: 4px;
    border-bottom: 2px solid #2565d0;
  }
  .year {
    margin-top: 3rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .third {
    width: 33%;
  }
  @media screen and (max-width: 830px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.625rem;
  }
`;

const ScheduleBox = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .month {
    display: grid;
    text-align: center;
    grid-template-columns: repeat(7, 1fr);
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    padding: 1rem 0;
  }
  .info {
    padding: 1rem 0;
    display: grid;
    text-align: center;
    grid-template-columns: repeat(10, 1fr);
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }
`;

const Schedule = styled.div`
  width: 100%;
  display: grid;
  text-align: center;
  grid-template-columns: repeat(10, 1fr);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  color: rgba(0, 0, 0, 0.5);
  font-size: 0.625rem;
  padding: 0.5rem 0;
`;

export { CompareContainer, ScheduleBox, Schedule };
