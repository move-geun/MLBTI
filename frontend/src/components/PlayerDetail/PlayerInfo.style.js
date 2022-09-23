import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  width: 50%;
  place-items: center;
  grid-template-columns: 1fr 1fr;
	grid-template-rows: 50px minmax(auto);
  grid-column-gap: 2rem;
  margin-top: 2rem;
  @media screen and (max-width: 830px) {
  }

  @media screen and (max-width: 480px) {
    grid-gap: 1rem;
  }

  .detail {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

const ProfileDiv = styled.div`
  display: flex;
  font-size: 30px;
  margin-bottom: 2rem;
  @media screen and (max-width: 830px) {
    font-size: 25px;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
    margin-bottom: 0.5rem;
  }
  .title {
    width: 150px;
    @media screen and (max-width: 830px) {
    width: 70px;
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
  }
`;

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
  width: 300px;
  @media screen and (max-width: 830px) {
    width: 150px;
  }
  @media screen and (max-width: 480px) {
    width: 90px;
    
  }
`;

const Name = styled.div`
  font-size: 40px;
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