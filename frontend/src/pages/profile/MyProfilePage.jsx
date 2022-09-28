import { useState, useEffect } from "react";
import {
  PageContainer,
  NameBox,
  Name,
  Id,
  ChangePwd,
  GraphBox,
} from "./MyProfilePage.style";
import { myprofile, myteam } from "./myprofile-slice";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

// 닉네임 변경 모달 활성화
// 팀 이름 설정 모달 활성화
// 만약 등록 선수 없다? 선수 등록하러가기 링크 활성화 : 선수 목록 뿌려주기

const MyProfilePage = () => {
  const [nickName, setNickname] = useState("");
  const [usermail, setUsermail] = useState("");
  const [teamName, setTeamName] = useState("");
  const [userTeam, setUserTeam] = useState([]);
  const dispatch = useDispatch();

  //  유저 팀 받아오기
  // useEffect(() => {
  //   const data = { eamil: usermail };
  //   dispatch(myteam(data))
  //     .unwrap()
  //     .then((res) => {
  //       console.log(res);
  //       console.log("안됨?");
  //     })
  //     .catch((err) => alert("또 안된다"));
  //   // const mail = { email: usermail };
  //   // getInfo(mail);
  // }, []);

  // 팀 정보 받아오기
  async function getInfo() {
    const userInfo = await dispatch(myprofile());
    const infodata = await userInfo.payload.data;
    const mail = { email: infodata.userId };
    const res = await dispatch(myteam(mail));
    if (res.payload.data.length === 0) {
      setUserTeam("선수등록하러 가기");
    } else {
      setUserTeam(res.payload.data);
    }
    // await setUsermail(infodata.userId);
    // if (userInfo.teamName === null) {
    //   await setTeamName("팀 이름을 설정해주세요");
    // } else {
    //   await setTeamName(userInfo.teamName);
    // }
    return res;
  }

  useEffect(() => {
    getInfo();
  }, []);

  // 유저 정보 받아오기
  useEffect(() => {
    dispatch(myprofile())
      .unwrap()
      .then((res) => {
        setNickname(res.data.nickname);
        setUsermail(res.data.userId);
        if (res.data.teamName === null) {
          setTeamName("팀 이름을 설정해주세요");
        } else {
          setTeamName(res.data.teamName);
        }
      })
      .catch((err) => alert("오류"));
  }, []);

  // 유저 팀 정보 받아오기

  return (
    <PageContainer>
      <NameBox>
        <Name>
          <div>{nickName}</div>
          <span>님</span>
        </Name>
        <Id>{usermail}</Id>
      </NameBox>
      <ChangePwd>
        <Link to="/findPwd">
          <img src="/assets/edit.png" alt="편집이미지였던것.." />
          개인정보 변경하기
        </Link>
      </ChangePwd>
      <div className="divide">{nickName} 님의 구단</div>
      <div>{teamName}</div>
      <GraphBox>
        <div>현재 {nickName}의 선수정보</div>
        <div>{userTeam}</div>
        {/* 실경기 박스
        <div className="GraphDraw">
          <div className="nameDraw">
            <span>실경기 : </span>
            <span> 34회 (68%)</span>
          </div>
          <div>
            <img src="/assets/cap.png" alt="" />
          </div>
        </div>
        커스텀 경기
        <div className="GraphDraw">
          <div className="nameDraw">
            <span>커스텀 경기:</span>
            <span>34회(68%)</span>
          </div>
          <div>
            <img src="/assets/cap.png" alt="" />
          </div>
        </div> */}
      </GraphBox>
    </PageContainer>
  );
};

export default MyProfilePage;
