import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 40%;
  width: 90%;
  margin-top: 2rem;
`;

const LogoDiv = styled.div`
  display: flex;
  align-items: center;

`

const Logo = styled.img`
  width: 100%;
  height: 100%;
  @media screen and (max-width: 830px) {
    width: 190px;
    height: 190px;
  }
  @media screen and (max-width: 560px) {
    width: 150px;
    height: 150px;
  }
  @media screen and (max-width: 480px) {
    width: 120px;
    height: 120px;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* margin-left: 1rem; */
`;

const Info = styled.div`
  margin-bottom: 2rem;
  display: flex;

  &.name {
    font-size: 50px;
    @media screen and (max-width: 830px) {
      font-size: 30px;
    }
    @media screen and (max-width: 480px) {
      font-size: 27px;
    }
  }

  &.rank {
    font-size: 30px;
    @media screen and (max-width: 830px) {
      font-size: 15px;
    }
    @media screen and (max-width: 480px) {
      font-size: 12px;
    }
  }
  th,
  td {
    font-family: "MICEGothic Bold";
  }
`;

export { Wrapper, Logo, InfoWrapper, Info, LogoDiv };
