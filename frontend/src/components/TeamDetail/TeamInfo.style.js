import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 40%;
  width: 90%;
  margin-top: 2rem;
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
`;

const Info = styled.div`
  margin-bottom: 2rem;
  display: flex;

  &.name {
    font-size: 50px;
    @media screen and (max-width: 830px) {
      font-size: 45px;
    }

    @media screen and (max-width: 480px) {
      font-size: 20px;
    }
  }

  &.rank {
    font-size: 40px;
    @media screen and (max-width: 830px) {
      font-size: 30px;
    }

    @media screen and (max-width: 480px) {
      font-size: 15px;
    }
  }

  &.header {
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid;
    @media screen and (max-width: 830px) {
      font-size: 30px;
    }

    @media screen and (max-width: 480px) {
      font-size: 15px;
    }
  }

  table {
    width: 20px;
  }

  div {
    font-size: 25px;
    width: 20%;
    @media screen and (max-width: 830px) {
      font-size: 20px;
    }

    @media screen and (max-width: 480px) {
      font-size: 15px;
    }
  }
`;

export { Wrapper, Logo, InfoWrapper, Info, LogoDiv };
