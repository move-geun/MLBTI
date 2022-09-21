import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  width: 70%;
  height: 50%;
  /* outline: 1px solid; */
`

const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
  align-items: center;
  justify-content: center;
`

const ImgDiv = styled.div`
  width: 70%;
  overflow: hidden;
  margin-bottom: 1rem;
`
const ProfileImg = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
`

const Name = styled.div`
  font-size: 30px;
`

const InfoDiv = styled.div`
  width: 100%;
  height: 100%;
  outline: 1px solid;
`

const InfoTitle = styled.div`

`

const InfoContent = styled.div`

`

export {
  Wrapper,
  ProfileDiv,
  ImgDiv,
  ProfileImg,
  Name,
  InfoDiv,
  InfoTitle,
  InfoContent,
}