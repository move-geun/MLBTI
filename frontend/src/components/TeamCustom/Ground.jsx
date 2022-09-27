import React, { useState } from "react";
import { Background, Img, ImgDiv, BtnDiv } from "./Ground.style";
import { useDispatch } from "react-redux";
import { registTeam } from "./teamCustom-slice";


const Ground = ({email}) => {
  
  const [myTeam, setMyTeam] = useState([])

  const dispatch = useDispatch()
  
  const saveTeam = () => {
    const data = {
      email : email,
      player_uid : 547943,
      position : "pitcher"
    }
    dispatch(registTeam(data))
  }
  
  return (
    <Background>
      <ImgDiv>
        <Img className="ground" src={"/assets/Ground.png"} />
      </ImgDiv>
      <BtnDiv>
        <button className="save" type='button' onClick={saveTeam}>팀 저장하기</button>
      </BtnDiv>
    </Background>
  );
};

export default Ground;

// email, playeruid, postion