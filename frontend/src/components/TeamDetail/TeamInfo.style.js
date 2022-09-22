import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 40%;
  width: 90%;
  margin-top: 3rem;

`;

const LogoDiv = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 250px;
  height: 250px;
  @media screen and (max-width: 830px) {
    width: 190px;
    height: 190px;
  }
  @media screen and (max-width: 560px) {
    width: 150px;
    height: 150px;
  }
  @media screen and (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 830px) {
      margin-left: 2rem;
    }

    @media screen and (max-width: 480px) {
      margin-left: 2rem;
    }
`;

const Info = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  &.name {
    margin-left: 1rem;
    font-size: 50px;
    @media screen and (max-width: 830px) {
      font-size: 45px;
    }

    @media screen and (max-width: 480px) {
      font-size: 20px;
    }
  }

  &.rank {
    margin-left: 1rem;

    font-size: 40px;
    @media screen and (max-width: 830px) {
      font-size: 30px;
    }

    @media screen and (max-width: 480px) {
      font-size: 15px;
    }
  }

  &.content {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-row-gap: 1rem;
    place-items: center;
    text-align: center;
    margin: 0;
  }
  div {
    font-size: 25px;
    @media screen and (max-width: 830px) {
      font-size: 20px;
    }

    @media screen and (max-width: 480px) {
      font-size: 15px;
    }
  }

  table {
    width: 20px;
  }
`;

export { Wrapper, Logo, InfoWrapper, Info, LogoDiv };
