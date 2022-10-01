import styled from "styled-components";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  margin-top: 3rem;
`;

const ImgDiv = styled.div`
  position: relative;
`;

const Img = styled.img`
  &.ground {
    width: 450px;
    height: 450px;

    @media screen and (max-width: 830px) {
      width: 350px;
      height: 350px;
    }
    @media screen and (max-width: 480px) {
      width: 250px;
      height: 250px;
    }
  }
`;
const Player = styled.div`
  &.FB {
    position: absolute;
    top: 12rem;
    left: 20rem;
  }
  
  &.SB {
    position: absolute;
    top: 5rem;
    left: 17rem;
  }
  &.TB {
    position: absolute;
    top: 12rem;
    left: 4.5rem;
  }

  &.SS {
    position: absolute;
    top: 5rem;
    left: 8rem;
  }
  &.LF {
    position: absolute;
    top: 5rem;
    left: 3rem;
  }
  &.CF {
    position: absolute;
    top: 1rem;
    left: 12.5rem;
  }
  &.RF {
    position: absolute;
    top: 5rem;
    left: 22rem;
  }
  &.P {
    position: absolute;
    top: 12rem;
    left: 12.5rem;
  }

  &.C {
    position: absolute;
    top: 20rem;
    left: 12.5rem;
  }
  
  
  .img {
    width: 50px;
    height: 50px;
  }
`;

export { Background, Img, ImgDiv, Player };