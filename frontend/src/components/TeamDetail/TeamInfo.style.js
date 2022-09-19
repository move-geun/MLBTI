import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 40%;
  width: 90%;
  outline: 1px solid;
  margin-top: 2rem;
`

const Logo = styled.img`
  width: 30%;
  height: 60%;
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`


const Info = styled.div`
  margin-bottom: 2rem;

  &.name {
    font-size: 50px;
  }

  &.rank {
    font-size: 30px;
  }
  th, td{
    font-family: 'MICEGothic Bold';
  }
  
`

export {
  Wrapper,
  Logo,
  InfoWrapper,
  Info,
}