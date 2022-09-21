import styled from "styled-components";

const HistoryContainer = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 1rem auto 0 auto;
  font-size: 1.5rem;

  .title {
    text-align: left;
    padding-bottom: 4px;
    border-bottom: 2px solid #2565d0;
  }
  @media screen and (max-width: 830px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.625rem;
  }
`;

const EventBox = styled.div`
  width: 50%;
  height: 150px;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: gray;
`;

// const TeamBox = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   @media screen and (max-width: 830px) {
//     font-size: 0.8rem;
//     margin-bottom: 3px;
//     flex-direction: column;
//   }
//   @media screen and (max-width: 480px) {
//     font-size: 0.625rem;
//     margin-bottom: 2px;
//   }
// `;

// const Team = styled.div`
//   width: 100%;
//   border-bottom: 2px solid black;
//   padding-bottom: 5px;
//   margin-bottom: 10px;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   img {
//     width: 60px;
//     height: 60px;
//   }
//   .teamtitle {
//     margin-left: 1rem;
//     font-size: 2rem;
//   }
// `;

export { HistoryContainer, EventBox };
