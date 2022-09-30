import React, { useEffect } from "react";
import { Background, Img, ImgDiv, Player } from "./Ground.style";

const Ground = ({ myTeam }) => {
  useEffect(() => {
    // console.log("선수한명의 정보", myTeam[0].baseballPlayer);
  }, []);

  return (
    <Background>
      <ImgDiv>
        <Img className="ground" src={"/assets/Ground.png"}></Img>
      <Player className="FB">
        <Img className="img" src={"/assets/shortStop.png"}></Img>
      </Player>
      </ImgDiv>
    </Background>
  );
};

export default Ground;
