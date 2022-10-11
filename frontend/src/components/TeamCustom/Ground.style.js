import styled from "styled-components";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  .namediv {
    display: flex;
    align-items: center;
  }
`;

const ImgDiv = styled.div`
  position: relative;
`;

const Img = styled.img`
  &.ground {
    padding: 0;
    /* width: 450px;
    height: 450px; */
    width: 500px;
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


const Nickname = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  padding-left: 1rem;
`

const Player = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &.FB {
    position: absolute;
    top: 16rem;
    left: 19.5rem;
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
    top: 12.5rem;
    left: 18rem;
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
    top: 16rem;
    left: 8.5rem;
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
    top: 12.5rem;
    left: 11rem;
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
    top: 9rem;
    left: 7rem;
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
    top: 5rem;
    left: 14.2rem;
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
    top: 9rem;
    left: 21rem;
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
    top: 16rem;
    left: 14rem;
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
    top: 21.5rem;
    left: 14.5rem;
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
    padding: 0;
    width: 40px;
    height: 40px;
    @media screen and (max-width: 830px) {
      width: 35px;
      height: 35px;
    }
    @media screen and (max-width: 480px) {
      width: 30px;
      height: 30px;
    }
  }
`;

export { Background, Img, ImgDiv, Player, Nickname };