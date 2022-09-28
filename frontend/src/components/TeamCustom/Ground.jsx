import React from "react";
import { Background, Img, ImgDiv} from "./Ground.style";



const Ground = () => {
  
  return (
    <Background>
      <ImgDiv>
        <Img className="ground" src={"/assets/Ground.png"} />
      </ImgDiv>
    </Background>
  );
};

export default Ground;