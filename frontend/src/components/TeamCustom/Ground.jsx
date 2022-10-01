import React, { useEffect, useState } from "react";
import { Background, Img, ImgDiv, Player } from "./Ground.style";

const Ground = ({ myTeam }) => {
  const [cnt, setCnt] = useState(0)
  const [out, setOut] = useState([false, false, false])
  useEffect(() => {}, []);
  
  // console.log('내팀',myTeam[0].baseballPlayer)
  // const cntOutFielder = () => {
  //   setCnt(cnt+1)
  //   console.log(cnt)
  // }

  // if (myTeam !== undefined) {
  //   console.log(myTeam[0]);
  // }

  console.log(out)
  return (
   myTeam ?
    <Background>
      <ImgDiv>
        <Img className="ground" src={"/assets/Ground.png"}></Img>

        {myTeam.map((player) => (

          player.baseballPlayer.primaryPositionName === "First Base" ? (
            <Player className="FB">
              <Img className="img" src={"/assets/shortStop3.png"}></Img>
            </Player>
          ) : player.baseballPlayer.primaryPositionName === "Second Base" ? (
            <Player className="SB">
              <Img className="img" src={"/assets/shortStop3.png"}></Img>
            </Player>

          ) : player.baseballPlayer.primaryPositionName === "Third Base" ? (
            <Player className="SB">
              <Img className="img" src={"/assets/shortStop3.png"}></Img>
            </Player>

          ) : player.baseballPlayer.primaryPositionName === "Short stop" ? (
            <Player className="SB">
              <Img className="img" src={"/assets/shortStop3.png"}></Img>
            </Player>

          ) : player.baseballPlayer.primaryPositionName === "Outfielder" && out === [false,false,false] ? (
            <Player className="LF">  
              <Img className="img" src={"/assets/shortStop3.png"}></Img>
              {setOut([true, false, false])}
            </Player>
          ) : player.baseballPlayer.primaryPositionName === "Outfielder" && out === [true,false,false]  ? (
            <Player className="CF">
              {setOut([true, true, false])}
              <Img className="img" src={"/assets/shortStop3.png"}></Img>
            </Player>

          ) : player.baseballPlayer.primaryPositionName === "Outfielder" && out[2] === false ? (
            <Player className="RF">
              {setOut([true, true, true])}
              <Img className="img" src={"/assets/shortStop3.png"}></Img>
            </Player>

          ) : player.baseballPlayer.primaryPositionName === "Pitcher" ? (
            <Player className="SB">
              <Img className="img" src={"/assets/shortStop3.png"}></Img>
            </Player>

          ) : player.baseballPlayer.primaryPositionName === "Catcher" ? (
            <Player className="SB">
              <Img className="img" src={"/assets/shortStop3.png"}></Img>
            </Player>

          ) : null ))}

        {/* <Player className="TB"> 
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
        </Player> */}
      </ImgDiv>
    </Background>
  : null
  );
};

export default Ground;
