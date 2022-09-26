import React from "react";
import {
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
} from "./PlayerInfo.style";

const PlayerInfo = () => {
  return (
    <Wrapper>
      <ProfileDiv>
        <ImgDiv>
          <ProfileImg src={"assets/chanho.jpg"} />
        </ImgDiv>
        <Name>박찬호</Name>
      </ProfileDiv>

      <InfoDiv>
        <InfoBox>
          <Content>
            <Title>포지션</Title>
            <Detail>우익수</Detail>
          </Content>
          <Content>
            <Title>출생</Title>
            <Detail>1999.03.02</Detail>
          </Content>
          <Content>
            <Title>키</Title>
            <Detail>188 (cm)</Detail>
          </Content>
          <Content>
            <Title>체중</Title>
            <Detail>99 (kg)</Detail>
          </Content>
          <Content>
            <Title>소속팀</Title>
            <Detail>롯데 프링글스</Detail>
          </Content>
        </InfoBox>
      </InfoDiv>
    </Wrapper>
  );
};

export default PlayerInfo;
