import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 50%;
  margin-top: 2rem;
  flex-direction: column;
  align-items: center;
 

  .detail {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    
  }
`;

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

const PicName = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .outline {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 5rem;
    width: 330px;
    z-index: -1;
  }
`;

const ProfileImg = styled.img`
position: relative;
  width: 230px;
  border-radius: 2rem;
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
`;

export { Wrapper, ProfileDiv, ProfileImg, Name, PicName };
