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
      <div>
        <div>포지션</div>
        <div>포지션</div>
        <div>포지션</div>
        <div>포지션</div>
        <div>포지션</div>
      </div>
      <Name>박찬호</Name>
      <Name>박찬호</Name>
    </Wrapper>
  );
};

export default PlayerInfo;
