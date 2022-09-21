import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 2rem;
  width: 80%;
  height: 50%;
  /* outline: 1px solid green; */
  @media screen and (max-width: 830px) {
    height: 40%;
  }
  @media screen and (max-width: 480px) {
    height: 20%;
  }
`

const ProfileDiv = styled.div`
  display: flex;
  margin-left: 5rem;
  flex-direction: column;
  width: 40%;
  align-items: center;
  justify-content: center;
`

const ImgDiv = styled.div`
  width: 40%;
  overflow: hidden;
  margin-bottom: 1rem;
  @media screen and (max-width: 830px) {
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`
const ProfileImg = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
`

const Name = styled.div`
  font-size: 50px;
  @media screen and (max-width: 830px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`

const InfoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  /* outline: 1px solid; */

`

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 90%;
  height: 60%;
  /* outline: 1px solid; */
  @media screen and (max-width: 830px) {
    height: 50%;
  }
  @media screen and (max-width: 480px) {
    height: 40%;
  }
`
const Content = styled.div`
  display: flex;
  font-size: 25px;
  @media screen and (max-width: 830px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
  
  
`

const Title = styled.div`
  width: 100px;
  margin-left: 2rem;
  
`

const Detail = styled.div`

`

export {
  Wrapper,
  ProfileDiv,
  ImgDiv,
  ProfileImg,
  Name,
  InfoDiv,
  InfoBox,
  Content,
  Title,
  Detail,
}