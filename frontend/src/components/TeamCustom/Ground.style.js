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
    @media screen and (max-width: 830px) {
      top: 9rem;
      left: 16rem;
    }
    @media screen and (max-width: 480px) {
      top: 6.5rem;
      left: 11.5rem;
    }
  }
  
  &.SB {
    position: absolute;
    top: 5rem;
    left: 17rem;
    @media screen and (max-width: 830px) {
      top: 4rem;
      left: 13rem;
    }
    @media screen and (max-width: 480px) {
      top: 3.5rem;
      left: 10rem;
    }
  }
  &.TB {
    position: absolute;
    top: 12rem;
    left: 4.5rem;
    @media screen and (max-width: 830px) {
      top: 9rem;
      left: 3.6rem;
    }
    @media screen and (max-width: 480px) {
      top: 6.5rem;
      left: 2.5rem;
    }
  }

  &.SS {
    position: absolute;
    top: 5rem;
    left: 8rem;
    @media screen and (max-width: 830px) {
      top: 4rem;
      left: 6rem;
    }
    @media screen and (max-width: 480px) {
      top: 3.5rem;
      left: 4.3rem;
    }
  }
  &.LF {
    position: absolute;
    top: 5rem;
    left: 3rem;
    @media screen and (max-width: 830px) {
      top: 5rem;
      left: 2rem;
    }
    @media screen and (max-width: 480px) {
      top: 3rem;
      left: 1.5rem;
    }
  }
  &.CF {
    position: absolute;
    top: 1rem;
    left: 12.5rem;
    @media screen and (max-width: 830px) {
      top: 0.8rem;
      left: 9.5rem;
    }
    @media screen and (max-width: 480px) {
      top: 0.5rem;
      left: 6.9rem;
    }
  }
  &.RF {
    position: absolute;
    top: 5rem;
    left: 22rem;
    @media screen and (max-width: 830px) {
      top: 4rem;
      left: 17rem;
    }
    @media screen and (max-width: 480px) {
      top: 3rem;
      left: 12.5rem;
    }
  }
  &.P {
    position: absolute;
    top: 12rem;
    left: 12.5rem;
    @media screen and (max-width: 830px) {
      top: 9.3rem;
      left: 9.7rem;
    }
    @media screen and (max-width: 480px) {
      top: 6.6rem;
      left: 6.9rem;
    }
  }

  &.C {
    position: absolute;
    top: 20rem;
    left: 12.5rem;
    @media screen and (max-width: 830px) {
      top: 16.5rem;
      left: 9.7rem;
    }
    @media screen and (max-width: 480px) {
      top: 11.5rem;
      left: 6.9rem;
    }
  }
  
  
  .img {
    width: 50px;
    height: 50px;
    @media screen and (max-width: 830px) {
      width: 40px;
      height: 40px;
    }
    @media screen and (max-width: 480px) {
      width: 30px;
      height: 30px;
    }
  }
`;

export { Background, Img, ImgDiv, Player };