import React, { useEffect,useState } from "react";
import { Background, Img, ImgDiv, Player } from "./Ground.style";

const Ground = ({ myTeam }) => {
  
  const [cnt, setCnt] = useState(0)
  
  useEffect(() => {

  }, []);

  const cntOutFielder = () => {
    setCnt(...cnt+1)
    console.log(cnt)
  }
  
  // console.log(myTeam);
  return (
    <Background>
      <ImgDiv>
        <Img className="ground" src={"/assets/Ground.png"}></Img>
        {/* {myTeam.map((player) => (

          player.position === "First Base" ? (
            <Player className="FB">
              <Img className="img" src={"/assets/shortStop3.png"}></Img>
            </Player>
          ) : player.position === "Second Base" ? (
            <Player className="SB">
              <Img className="img" src={"/assets/shortStop3.png"}></Img>
            </Player>

          ) : player.position === "Third Base" ? (
            <Player className="SB">
              <Img className="img" src={"/assets/shortStop3.png"}></Img>
            </Player>

          ) : player.position === "Short stop" ? (
            <Player className="SB">
              <Img className="img" src={"/assets/shortStop3.png"}></Img>
            </Player>

          ) : player.position === "OutFileder" && cnt === 0 ? (
            <Player className="SB">
             
              <Img className="img" src={"/assets/shortStop3.png"}></Img>
            </Player>
          ) : player.position === "OutFileder" ? (
            <Player className="SB">
              <Img className="img" src={"/assets/shortStop3.png"}></Img>
            </Player>

          ) : player.position === "OutFileder" ? (
            <Player className="SB">
              <Img className="img" src={"/assets/shortStop3.png"}></Img>
            </Player>

          ) : player.position === "Pitcher" ? (
            <Player className="SB">
              <Img className="img" src={"/assets/shortStop3.png"}></Img>
            </Player>

          ) : player.position === "Catcher" ? (
            <Player className="SB">
              <Img className="img" src={"/assets/shortStop3.png"}></Img>
            </Player>

          ) : 
         
        ))} */}

    
          

        <Player className="TB"> {cntOutFielder}
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
  );
};

export default Ground;
