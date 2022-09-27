import React from "react";
import { Background, Img, ImgDiv, BtnDiv } from "./Ground.style";

const Ground = () => {
  return (
    <Background>
      <ImgDiv>
        <Img className="ground" src={"/assets/Ground.png"} />
      </ImgDiv>
      <BtnDiv>
        <button className="save" type='button'>팀 저장하기</button>
      </BtnDiv>
    </Background>
  );
};

export default Ground;
