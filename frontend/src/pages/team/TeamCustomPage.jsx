import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Background,
  Header,
  CenterWrapper,
  MyteamWrapper,
  Nickname,
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
  // 선수 추가 및 삭제 시 팀 전력 다시 불러오기 위한 변수
  const [isModifiedPlayer, setIsModifiedPlayer] = useState(true);
  // 구단 명 수정 시 유저 정보 다시 불러오기
  const [isChangeName, setIsChangeName] = useState(true);

  // 팀 불러오기
  async function getTeam() {
    const res = await dispatch(getUserTeam(userInfo["userId"]));

    // 성공적으로 dispatatch 했을 때 payload에 팀이 담겨 옴
    if (res.meta.requestStatus === "fulfilled") {
      setMyTeam(res.payload);
    }
  }

  // 유저 정보 받아옴 (구단 명 변경 시 새로 받아옴)
  useEffect(() => {
    dispatch(myprofile())
      .unwrap()
      .then((res) => {
        setUserInfo(res.data);
      });
  }, [isChangeName]);

  // userId에 값이 들어왔을 때 해당 유저의 팀 불러오기
  useEffect(() => {
    getTeam();
  }, [userInfo]);

  // 선수 추가 및 삭제 시  팀 다시 불러옴
  useEffect(() => {
    getTeam();
  }, [isModifiedPlayer]);

  // 구단 명 수정 모달 띄우기
  const onCreate = () => {
    setIsOpen(true);
  };

  

  return (
    <Background>
      <Header>My team 구성하기</Header>
      <CenterWrapper>
        {/* 왼쪽 박스 */}
        <MyteamWrapper>
          <Nickname>{userInfo["nickname"]} 님의 구단</Nickname>
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
          <PlayerList
            email={userInfo["userId"]}
            isModifiedPlayer={isModifiedPlayer}
            setIsModifiedPlayer={setIsModifiedPlayer}
            myTeam={myTeam}
          />
        </MyteamWrapper>
        {/* 오른쪽 박스 */}
        <Ground myTeam={myTeam} />
      </CenterWrapper>

      {/* 팀 전력 */}
      <TeamCoposition
        isModifiedPlayer={isModifiedPlayer}
        setIsModifiedPlayer={setIsModifiedPlayer}
        userInfo={userInfo}
        myTeam={myTeam}
      ></TeamCoposition>
    </Background>
  );
};
export default TeamCustomPage;
