import React, { useEffect, useState } from "react";
import {
  Wrapper,
  ProfileDiv,
  ProfileImg,
  Name,
  PicName,
} from "./PlayerInfo.style";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPlayerDetail } from "./playerdetail-slice";
const PlayerInfo = () => {
  const dispatch = useDispatch();
  const { uid } = useParams();
  const [infoData, setInfoData] = useState();

  useEffect(() => {
    dispatch(getPlayerDetail(uid))
      .unwrap()
      .then((res) => {
        // feet, pound => cm, kg
        const height = res.height.split("'");
        res.height =
          parseInt(height[0]) * 30.48 +
          parseInt(height[1].replace('"', "")) * 2.54;
        res.weight = res.weight * 0.45;
        setInfoData(res);
      });
  }, []);
  
  return infoData ? (
    <Wrapper>
      <PicName>
        <ProfileImg src={infoData.imgUrl}></ProfileImg>
        <img alt="outline" className="outline" src={"/assets/outline.png"}></img>
        <Name>{infoData.fullName}</Name>
      </PicName>
      <div className="detail">
        <ProfileDiv>
          <div className="title">포지션</div>
          <div className="content">{infoData.primaryPositionName}</div>
        </ProfileDiv>
        <ProfileDiv>
          <div className="title">출생</div>
          <div className="content">{infoData.birthDate}</div>
        </ProfileDiv>
        <ProfileDiv>
          <div className="title">키</div>
          <div className="content">{infoData.height} cm</div>
        </ProfileDiv>
        <ProfileDiv>
          <div className="title">몸무게</div>
          <div className="content">{infoData.weight} kg</div>
        </ProfileDiv>
        <ProfileDiv>
          <div className="title">주 팔</div>
          <div className="content">{infoData.pitchHandCode}</div>
        </ProfileDiv>
      </div>
    </Wrapper>
  ) : null;
};

export default PlayerInfo;
