import React from "react";

import {
  Background,
  Header,
  CenterWrapper,
  MyteamWrapper,
  SimulationWrapper,
  Nickname,
  CustomTeamName,
  SearchDiv,
  Img,
  EditBtn,
  SearchInput,
} from "./TeamCustomPage.style";
import Dropdown from "../../components/TeamCustom/Dropdown";
import PlyaerList from "../../components/TeamCustom/PlayerList";
import TeamCoposition from "../../components/TeamCustom/TeamComposition";

const TeamCustomPage = () => {
  return (
    <Background>
      <Header>My team 구성하기</Header>
      <CenterWrapper>
        {/* 왼쪽 박스 */}
        <MyteamWrapper>
          <Nickname>배송윤 아님 님의 구단</Nickname>
          <CustomTeamName>
            홈런 맞아부러쓰
            <EditBtn />
          </CustomTeamName>
          <SearchDiv>
            <SearchInput
              id="standard-basic"
              label="선수검색"
              variant="standard"
              sx={{
                marginLeft: "1rem",
              }}
            />
            <Img className="magnifying  " src={"/assets/MagnifyingGlass.png"} />
          </SearchDiv>
          <Dropdown />
          <PlyaerList />
        </MyteamWrapper>
        {/* 오른쪽 박스 */}
        <SimulationWrapper>
          <Img className="ground" src={"/assets/Ground.png"} />
        </SimulationWrapper>
      </CenterWrapper>

      {/* 팀 전력 */}
      <TeamCoposition></TeamCoposition>
    </Background>
  );
};
export default TeamCustomPage;
