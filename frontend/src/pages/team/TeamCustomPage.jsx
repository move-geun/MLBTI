import React from "react";
import Navbar from "../../components/navbar/Navbar";
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
} from "./TeamCustomPage.style";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Dropdown from "../../components/TeamCustom/Dropdown";

const SearchInput = styled(TextField)`
  margin: 1rem;
`;

const TeamCustomPage = () => {


  return (
    <>
      <Navbar />
      <Background>
        <Header>My team 구성하기</Header>
        <CenterWrapper>
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
              <Img className="magnifying  " src={"/assets/MagnifyingGlass.png"}></Img>
            </SearchDiv>
              
            <Dropdown/>
          </MyteamWrapper>

          <SimulationWrapper>
            시뮬 자리
            <Img className="ground" src={"/assets/Ground.png"}/>


          </SimulationWrapper>
        </CenterWrapper>
      </Background>
    </>
  );
};
export default TeamCustomPage;
