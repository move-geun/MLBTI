import React from "react";
import { Background, SearchDiv } from "./PlayerDetailPage.style";
import PlayerInfo from "../../components/PlayerDetail/PlayerInfo";

const PlayerDetailPage = () => {
  return (
    <Background>
      <SearchDiv>
        <div className="title">
          <span>선수 프로필</span>
        </div>
      </SearchDiv>
      <PlayerInfo />
    </Background>
  );
};

export default PlayerDetailPage;
