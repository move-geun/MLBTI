import styled from "styled-components";

const TeamTableContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const TeamBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 830px) {
    font-size: 0.8rem;
    margin-bottom: 3px;
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.625rem;
    margin-bottom: 2px;
  }
`;

const Team = styled.div`
  width: 100%;
  border-bottom: 2px solid black;
  padding-bottom: 5px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    width: 60px;
    height: 60px;
  }
  .teamtitle {
    margin-left: 1rem;
    font-size: 2rem;
  }
`;
export { TeamBox, Team, TeamTableContainer };
