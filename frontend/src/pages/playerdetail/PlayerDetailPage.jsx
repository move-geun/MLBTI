<<<<<<< HEAD
import React from "react";
import { Background, SearchDiv } from "./PlayerDetailPage.style";
import PlayerInfo from "../../components/PlayerDetail/PlayerInfo";
import PlayerRecord from "../../components/PlayerDetail/PlayerRecord";
import { SearchInput, Img } from "../../pages/team/TeamCustomPage.style";
=======
import React from "react"
import { 
  Background, 
} from "./PlayerDetailPage.style"
import PlayerInfo from "../../components/PlayerDetail/PlayerInfo"
import PlayerRecord from "../../components/PlayerDetail/PlayerRecord"
>>>>>>> 01670c4 (add: 선수 상세 페이지 구현중)

const PlayerDetailPage = () => {
  return (
    <Background>
<<<<<<< HEAD
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
=======
      <PlayerInfo/>
      <PlayerRecord/>
    </Background>
    )
} 
>>>>>>> 01670c4 (add: 선수 상세 페이지 구현중)

export default PlayerDetailPage;
