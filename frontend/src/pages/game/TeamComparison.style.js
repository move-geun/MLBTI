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

  .vs {
    font-size: 3rem;
  }

  .center {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 3rem;
    margin: 3rem auto;
    @media screen and (max-width: 830px) {
      font-size: 1.5rem;
    }
    @media screen and (max-width: 480px) {
      font-size: 1rem;
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 3rem;
  @media screen and (max-width: 830px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
  img {
    width: 200px;
    height: 200px;
    margin: 1rem;
    @media screen and (max-width: 830px) {
      width: 80px;
      height: 80px;
    }
    @media screen and (max-width: 480px) {
      width: 60px;
      height: 60px;
    }
  }
  span {
    margin-right: 1rem;
  }
  .victory {
    color: green;
  }
  .lose {
    color: tomato;
  }
`;

const ResultTable = styled.div`
  margin-top: 3rem;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-row: 3000px;
  background-color: #2565d0;
  color: white;
  border-radius: 10px;
  img {
    object-fit: cover;
    width: 35%;
    height: 30%;
    margin-bottom: 10px;
  }
  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  }
`;

export { CompareContainer, LogoContainer, Logo, ResultTable };
