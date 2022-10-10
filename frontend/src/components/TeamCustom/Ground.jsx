import React, { useState } from "react";
import { Background, Img, ImgDiv, Player, Nickname } from "./Ground.style";
import { MdDeleteForever } from "react-icons/md";
import TeamDeleteModal from "./TeamDeleteModal";

const Ground = ({ myTeam, userInfo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onCreate = () => {
    setIsOpen(true);
  };

  // 그라운드 이미지에 선수 이름 표시
  if (myTeam.length !== 0) {
    myTeam.map(
      (player) =>
        (player.baseballPlayer.nickName =
          player.baseballPlayer.fullName.split(" "))
    );
  }

  return myTeam ? (
    <Background>
      <ImgDiv>
        <Img className="ground" src={"/assets/Ground5.png"}></Img>

        {myTeam.map((player, idx) =>
          player.baseballPlayer.primaryPositionName === "First Base" ? (
            <Player key={idx} className="FB">
              <Img className="img" src={"/assets/shortStop3.png"}></Img>
              <div>{player.baseballPlayer.nickName[0]}</div>
            </Player>
          ) : player.baseballPlayer.primaryPositionName === "Second Base" ? (
            <Player key={idx} className="SB">
              <Img className="img" src={"/assets/shortStop3.png"}></Img>
              <div>{player.baseballPlayer.nickName[0]}</div>
            </Player>
          ) : player.baseballPlayer.primaryPositionName === "Third Base" ? (
            <Player key={idx} className="TB">
              <Img className="img" src={"/assets/shortStop3.png"}></Img>
              <div>{player.baseballPlayer.nickName[0]}</div>
            </Player>
          ) : player.baseballPlayer.primaryPositionName === "Shortstop" ? (
            <Player key={idx} className="SS">
              <Img className="img" src={"/assets/shortStop3.png"}></Img>
              <div>{player.baseballPlayer.nickName[0]}</div>
            </Player>
          ) : player.baseballPlayer.primaryPositionAbbreviation === "LF" ? (
            <Player key={idx} className="LF">
              <Img className="img" src={"/assets/outFielder3.png"}></Img>
              <div>{player.baseballPlayer.nickName[0]}</div>
            </Player>
          ) : player.baseballPlayer.primaryPositionAbbreviation === "CF" ? (
            <Player key={idx} className="CF">
              <Img className="img" src={"/assets/outFielder3.png"}></Img>
              <div>{player.baseballPlayer.nickName[0]}</div>
            </Player>
          ) : player.baseballPlayer.primaryPositionAbbreviation === "RF" ? (
            <Player key={idx} className="RF">
              <Img className="img" src={"/assets/outFielder3.png"}></Img>
              <div>{player.baseballPlayer.nickName[0]}</div>
            </Player>
          ) : player.baseballPlayer.primaryPositionName === "Pitcher" ? (
            <Player key={idx} className="P">
              <Img className="img" src={"/assets/pitcher3.png"}></Img>
              <div>{player.baseballPlayer.nickName[0]}</div>
            </Player>
          ) : player.baseballPlayer.primaryPositionName === "Catcher" ? (
            <Player key={idx} className="C">
              <Img className="img" src={"/assets/catcher.png"}></Img>
              <div>{player.baseballPlayer.nickName[0]}</div>
            </Player>
          ) : null
        )}
      </ImgDiv>

      <Nickname>
        {userInfo.nickname} 님의 구단
        <MdDeleteForever
          onClick={onCreate}
          style={{ cursor: "pointer" }}
        ></MdDeleteForever>
        {isOpen && (
          <TeamDeleteModal
            open={isOpen}
            userInfo={userInfo}
            onClose={() => {
              setIsOpen(false);
            }}
          ></TeamDeleteModal>
        )}
      </Nickname>
    </Background>
  ) : null;
};

export default Ground;
