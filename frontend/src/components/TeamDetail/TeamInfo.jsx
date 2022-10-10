import React, { useState } from "react";
import { useEffect } from "react";
import { Wrapper, Logo, InfoWrapper, Info, LogoDiv } from "./TeamInfo.style";

const TeamInfo = (props) => {

  const [teamInfo, setTeamInfo] = useState({});

  useEffect(() => {
    setTeamInfo(props.data);
  }, []);

  useEffect(() => {}, [teamInfo]);

  return (
    <Wrapper>
      <LogoDiv>
        <Logo src={"/logo512.png"} />
      </LogoDiv>
      <InfoWrapper>
        <Info className="name">{teamInfo.teamName}</Info>
        <Info className="rank">2위</Info>
        <Info className="content">
          <div>승</div>
          <div>패</div>
          <div>승률</div>
          <div>홈</div>
          <div>최근 10경기</div>
          <div>79</div>
          <div>61</div>
          <div>.723</div>
          <div>34-21</div>
          <div>6-4</div>
        </Info>
      </InfoWrapper>
    </Wrapper>
  );
};

export default TeamInfo;
