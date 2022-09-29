import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Background,
  Header,
  CenterWrapper,
  MyteamWrapper,
  Nickname,
  CustomTeamName,
  SearchDiv,
  Img,
  EditBtn,
  SearchInput,
} from "./TeamCustomPage.style";
import PlayerList from "../../components/TeamCustom/PlayerList";
import TeamCoposition from "../../components/TeamCustom/TeamComposition";
import Ground from "../../components/TeamCustom/Ground";
import { myprofile } from "../profile/myprofile-slice";
import ModifiedModal from "../../components/TeamCustom/ModifiedModal";

const TeamCustomPage = () => {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  // const [addPlayer, setAddPlayer] = useState(false);

  
  useEffect(() => {
    dispatch(myprofile())
      .unwrap()
      .then((res) => {
        setUserInfo(res.data);
      });
    }, []);
    
  
  const onCreate = () => {
    setIsOpen(true);
  }
    


  return (
    <Background>
      <Header>My team 구성하기</Header>
      <CenterWrapper>
        {/* 왼쪽 박스 */}
        <MyteamWrapper>
          <Nickname>{userInfo["nickname"]} 님의 구단</Nickname>
          <CustomTeamName>
            {userInfo["teamName"]}
            <EditBtn onClick = {onCreate} />
            {isOpen && (<ModifiedModal userInfo={userInfo} open = {isOpen} onClose = { ()=> {
      setIsOpen(false);
    }}
    
    />)}
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
          
          <PlayerList email={userInfo['userId']}/>
        </MyteamWrapper >
        {/* 오른쪽 박스 */}
        <Ground />
      </CenterWrapper>

      {/* 팀 전력 */}
      <TeamCoposition userInfo={userInfo} ></TeamCoposition>
    </Background>
  );
};
export default TeamCustomPage;
