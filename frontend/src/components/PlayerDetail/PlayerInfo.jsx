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
      <ProfileImg src={"assets/chanho.jpg"}></ProfileImg>
      <div className="detail">
        <ProfileDiv>
          <div className="title">포지션</div>
          <div className="content">우익수</div>
        </ProfileDiv>
        <ProfileDiv>
          <div className="title">출생</div>
          <div className="content">1999.03.02</div>
        </ProfileDiv>
        <ProfileDiv>
          <div className="title">키</div>
          <div className="content">188 (cm)</div>
        </ProfileDiv>
        <ProfileDiv>
          <div className="title">소속팀</div>
          <div className="content">롯데 프링글스</div>
        </ProfileDiv>
        <ProfileDiv>
          <div className="title">입단일</div>
          <div className="content">2022.01.01</div>
        </ProfileDiv>

      </div>
      <Name>박찬호</Name>
    </Wrapper>
  );
};

export default PlayerInfo;
