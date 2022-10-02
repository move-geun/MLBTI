import React, { useEffect, useState } from "react";
import { Background, Img, ImgDiv, Player } from "./Ground.style";

const Ground = ({ myTeam }) => {
  if (myTeam.length !== 0) {
    let cnt = 0;
    myTeam.map((item) =>
      item.baseballPlayer.primaryPositionType === "Outfielder"
        ? ((item.baseballPlayer.primaryPositionType = `Outfielder${cnt}`),
          cnt++)
        : null
    );
  }

  return myTeam ? (
    <Background>
      <ImgDiv>
        <Img className="ground" src={"/assets/Ground.png"}></Img>

        {/* {myTeam.map((player) =>
          player.baseballPlayer.primaryPositionName === "First Base" ? (
            <Player className="FB">
              <Img className="img" src={"/assets/shortStop3.png"}></Img>
            </Player>
          ) : player.baseballPlayer.primaryPositionName === "Second Base" ? (
            <Player className="SB">
              <Img className="img" src={"/assets/shortStop3.png"}></Img>
            </Player>
          ) : player.baseballPlayer.primaryPositionName === "Third Base" ? (
            <Player className="TB">
              <Img className="img" src={"/assets/shortStop3.png"}></Img>
            </Player>
          ) : player.baseballPlayer.primaryPositionName === "Short stop" ? (
            <Player className="SS">
              <Img className="img" src={"/assets/shortStop3.png"}></Img>
            </Player>
          ) : player.baseballPlayer.primaryPositionType === "Outfielder0" ? (
            <Player className="LF">
              <Img className="img" src={"/assets/outFielder3.png"}></Img>
            </Player>
          ) : player.baseballPlayer.primaryPositionType === "Outfielder1" ? (
            <Player className="CF">
              <Img className="img" src={"/assets/outFielder3.png"}></Img>
            </Player>
          ) : player.baseballPlayer.primaryPositionType === "Outfielder2" ? (
            <Player className="RF">
              <Img className="img" src={"/assets/outFielder3.png"}></Img>
            </Player>
          ) : player.baseballPlayer.primaryPositionName === "Pitcher" ? (
            <Player className="P">
              <Img className="img" src={"/assets/pitcher3.png"}></Img>
            </Player>
          ) : player.baseballPlayer.primaryPositionName === "Catcher" ? (
            <Player className="C">
              <Img className="img" src={"/assets/catcher.png"}></Img>
            </Player>
          ) : null
        )} */}

        <Player className="FB"> 
          <Img className="img" src={"/assets/shortStop3.png"}></Img>
        </Player>
        <Player className="TB"> 
          <Img className="img" src={"/assets/shortStop3.png"}></Img>
        </Player>
        <Player className="SB"> 
          <Img className="img" src={"/assets/shortStop3.png"}></Img>
        </Player>
        <Player className="SS">
          <Img className="img" src={"/assets/shortStop3.png"}></Img>
        </Player>
        <Player className="LF">
          <Img className="img" src={"/assets/outFielder3.png"}></Img>
        </Player>
        <Player className="CF">
          <Img className="img" src={"/assets/outFielder3.png"}></Img>
        </Player>
        <Player className="RF">
          <Img className="img" src={"/assets/outFielder3.png"}></Img>
        </Player>
        <Player className="C">
          <Img className="img" src={"/assets/catcher.png"}></Img>
        </Player>
        <Player className="P">
          <Img className="img" src={"/assets/pitcher3.png"}></Img>
        </Player>
      </ImgDiv>
    </Background>
  ) : null;
};

export default Ground;
