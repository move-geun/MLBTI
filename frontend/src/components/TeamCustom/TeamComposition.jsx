import React from "react";
import { PlyaerDetail } from "./PlyaerList.style";
import {
  CompositionWrapper,
  Header,
  ListWrapper,
  MyNickname,
  ListHeader,
  HeaderDetail,
  PlyaerList,
  PlayerDetail,
} from "./TeamCoposiotion.style";

const TeamCoposition = () => {
  return (
    <CompositionWrapper>
      <Header>
        <MyNickname>홈런맞아부러쓰 </MyNickname>
        <p>의 전력</p>
      </Header>
      <ListWrapper>
        <ListHeader className="Header">
          <HeaderDetail>포지션</HeaderDetail>
          <HeaderDetail>선수명</HeaderDetail>
          <HeaderDetail>소속팀</HeaderDetail>
          <HeaderDetail>선수스탯</HeaderDetail>
        </ListHeader>

        <PlyaerList>
          <PlyaerDetail>투수</PlyaerDetail>
          <PlyaerDetail>Aldfs adflkdsf</PlyaerDetail>
          <PlyaerDetail>LA다져스</PlyaerDetail>
          <PlyaerDetail>0.302</PlyaerDetail>
        </PlyaerList>
        <PlyaerList>
          <PlyaerDetail>투수</PlyaerDetail>
          <PlyaerDetail>Aldfs adflkdsf</PlyaerDetail>
          <PlyaerDetail>LA다져스</PlyaerDetail>
          <PlyaerDetail>0.302</PlyaerDetail>
        </PlyaerList>
        <PlyaerList>
          <PlyaerDetail>투수</PlyaerDetail>
          <PlyaerDetail>Aldfs adflkdsf</PlyaerDetail>
          <PlyaerDetail>LA다져스</PlyaerDetail>
          <PlyaerDetail>0.302</PlyaerDetail>
        </PlyaerList>
        <PlyaerList>
          <PlyaerDetail>투수</PlyaerDetail>
          <PlyaerDetail>Aldfs adflkdsf</PlyaerDetail>
          <PlyaerDetail>LA다져스</PlyaerDetail>
          <PlyaerDetail>0.302</PlyaerDetail>
        </PlyaerList>
      </ListWrapper>
    </CompositionWrapper>
  );
};

export default TeamCoposition;
