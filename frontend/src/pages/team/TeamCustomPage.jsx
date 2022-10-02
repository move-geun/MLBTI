import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Background,
  Header,
  CenterWrapper,
  MyteamWrapper,
  // Nickname,
  CustomTeamName,
  EditBtn,
} from "./TeamCustomPage.style";
import PlayerList from "../../components/TeamCustom/PlayerList";
import TeamCoposition from "../../components/TeamCustom/TeamComposition";
import Ground from "../../components/TeamCustom/Ground";
import { myprofile } from "../profile/myprofile-slice";
import ModifiedModal from "../../components/TeamCustom/ModifiedModal";
import { getUserTeam } from "../../components/TeamCustom/teamCustom-slice";

const TeamCustomPage = () => {
  const dispatch = useDispatch();

  // 유저 정보
  const [userInfo, setUserInfo] = useState([]);

  // 내 구단 선수 목록
  const [myTeam, setMyTeam] = useState([]);

  // 구단명 변경 모달 띄우기
  const [isOpen, setIsOpen] = useState(false);

  // 구단 명 수정 시 유저 정보 다시 불러오기
  const [isChangeName, setIsChangeName] = useState(true);

  // userInfo가 들어왔을 때, 내 팀 목록을 불러옴
  if (userInfo.length !== 0) {
    async function getTeam() {
      const res = await dispatch(getUserTeam(userInfo["userId"]));

      // 성공적으로 dispatatch 했을 때 payload에 팀이 담겨 옴
      if (res.meta.requestStatus === "fulfilled") {
        setMyTeam(res.payload);
      }
    }
    getTeam();
  }

  useEffect(() => {
    dispatch(myprofile())
      .unwrap()
      .then((res) => {
        setUserInfo(res.data);
      });
  }, [isChangeName]);


  // 구단 명 수정 모달 띄우기
  const onCreate = () => {
    setIsOpen(true);
  };

  

  return (
    <Background>
      <div className="header">
        <Header>My team 구성하기</Header>
        
      </div>
      <CenterWrapper>
        {/* 왼쪽 박스 */}
        <MyteamWrapper>
          {/* <Nickname>{userInfo["nickname"]} 님의 구단</Nickname> */}
          <CustomTeamName>
            {userInfo["teamName"]}
            <EditBtn onClick={onCreate} />
            {isOpen && (
              <ModifiedModal
                userInfo={userInfo}
                open={isOpen}
                onClose={() => {
                  setIsOpen(false);
                }}
                isChangeName={isChangeName}
                setIsChangeName={setIsChangeName}
              />
            )}
          </CustomTeamName>
          <PlayerList email={userInfo["userId"]} myTeam={myTeam} />
        </MyteamWrapper>
        {/* 오른쪽 박스 */}
        <Ground myTeam={myTeam} userInfo={userInfo} />
      </CenterWrapper>

      {/* 팀 전력 */}
      <TeamCoposition userInfo={userInfo} myTeam={myTeam}></TeamCoposition>
    </Background>
  );
};
export default TeamCustomPage;
