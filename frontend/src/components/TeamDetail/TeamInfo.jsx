import React from "react";
import styled from "styled-components";
import { Wrapper, Logo, InfoWrapper, Info, LogoDiv } from "./TeamInfo.style";


const TeamInfo = () => {
  return (
    <Wrapper>
      <LogoDiv>
        <Logo src={"/logo512.png"} />
      </LogoDiv>
      <InfoWrapper>
        <Info className="name">LA 다져스</Info>
        <Info className="rank">2위</Info>
        <Info className="header">
          <div>승</div>
          <div>패</div>
          <div>승률</div>
          <div>홈</div>
          <div>최근 10경기</div>
        </Info>
        <Info className="content" >
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

