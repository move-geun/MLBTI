import React from "react";
import {
  Wrapper,
  ProfileDiv,
  ImgDiv,
  ProfileImg,
  Name,
  InfoDiv,
  InfoTitle,
  InfoContent,
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
        <InfoTitle>포지션</InfoTitle>
      </InfoDiv>
    </Wrapper>
  );
};

export default PlayerInfo;
