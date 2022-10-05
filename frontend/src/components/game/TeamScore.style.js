import styled from "styled-components";

const Score = styled.div`
  width: 60rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2565d0;
  color: white;
  border-radius: 10px;
  margin-top: 1rem;
  margin-left: 5rem;
  padding: 1rem 0;
`;

const ScoreTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 45px;
    height: 45px;
    margin: 0 5px;
    @media screen and (max-width: 830px) {
      width: 30px;
      height: 30px;
    }
    @media screen and (max-width: 480px) {
      width: 25px;
      height: 25px;
    }
  }

  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 7px;
  }

  .score {
    font-size: 3rem;
    margin: 0 5px;
    @media screen and (max-width: 830px) {
      font-size: 2rem;
    }
    @media screen and (max-width: 480px) {
      font-size: 1rem;
    }
  }

  .status {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    .now {
      padding: 5px;
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.3);
      margin-bottom: 5px;
      @media screen and (max-width: 830px) {
        margin-bottom: 3px;
      }
      @media screen and (max-width: 480px) {
        margin-bottom: 2px;
      }
    }
    .date {
      font-size: 1rem;
      margin-bottom: 5px;
      @media screen and (max-width: 830px) {
        font-size: 0.8rem;
        margin-bottom: 3px;
      }
      @media screen and (max-width: 480px) {
        font-size: 0.625rem;
        margin-bottom: 2px;
      }
    }
    .stadium {
      font-size: 1rem;
      color: rgba(1, 1, 1, 0.8);
      @media screen and (max-width: 830px) {
        font-size: 0.8rem;
      }
      @media screen and (max-width: 480px) {
        font-size: 0.625rem;
      }
    }
  }
`;

const ScoreInfo = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  @media screen and (max-width: 830px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.625rem;
  }

  .each {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 8px;

    .info {
      color: rgba(1, 1, 1, 0.5);
      margin-bottom: 3px;
    }
  }
`;

export { Score, ScoreTitle, ScoreInfo };
