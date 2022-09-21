import React from "react";
import { Background, SearchDiv } from "./PlayerDetailPage.style";
import PlayerInfo from "../../components/PlayerDetail/PlayerInfo";
import PlayerRecord from "../../components/PlayerDetail/PlayerRecord";
import { SearchInput, Img } from "../../pages/team/TeamCustomPage.style";

const PlayerDetailPage = () => {
  return (
    <Background>
      <SearchDiv>
        <div className="title">선수 프로필</div>
        <div className="search">
          <SearchInput
            id="standard-basic"
            label="선수검색"
            variant="standard"
            sx={{
              marginLeft: "1rem",
            }}
          />
          <Img className="magnifying  " src={"/assets/MagnifyingGlass.png"} />
        </div>
      </SearchDiv>
      <PlayerInfo />
      <PlayerRecord />
    </Background>
  );
};

export default PlayerDetailPage;
