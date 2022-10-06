import { useState, useEffect } from "react";
import * as React from "react";
import Modal from "@mui/material/Modal";
import {
  PageContainer,
  NameBox,
  Name,
  Id,
  ChangePwd,
  GraphBox,
  ModalBox,
} from "./MyProfilePage.style";
import { myprofile, getMyteam, changeTeamName } from "./myprofile-slice";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// 선수 목록 받아와서 뿌리기 남음

const MyProfilePage = () => {
  const [nickName, setNickname] = useState("");
  const [usermail, setUsermail] = useState("");
  const [teamName, setTeamName] = useState("");
  const [tmpteam, setTmpTeam] = useState("");

  const myteam = useSelector((state) => state.main.myteam);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
    const res = await dispatch(getMyteam(mail));
    // await setUsermail(infodata.userId);
    // if (userInfo.teamName === null) {
    //   await setTeamName("팀 이름을 설정해주세요");
    // } else {
    //   await setTeamName(userInfo.teamName);
    // }
  }

  // 팀 이름 변경
  function teamChange(e) {
    e.preventDefault();
    const data = {
      email: usermail,
      newTeamName: tmpteam,
    };
    dispatch(changeTeamName(data))
      .unwrap()
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        alert("에러떴다");
      });
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
      <div className="divide">
        {nickName} 님의 구단
        <img
          src="/assets/edit.png"
          alt="편집이미지였던것.."
          onClick={handleOpen}
        />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ModalBox>
            <div className="title">팀 이름 변경하기</div>
            <div className="content">
              <form onSubmit={(e) => teamChange(e)}>
                <span>팀 이름</span>
                <input
                  type="text"
                  value={tmpteam}
                  onChange={(e) => setTmpTeam(e.target.value)}
                />
                <button onClick={(e) => teamChange(e)}>설정하기</button>
              </form>
            </div>
            <button className="change" onClick={handleClose}>
              닫기
            </button>
          </ModalBox>
        </Modal>
      </div>
      <div>{teamName}</div>
      <GraphBox>
        <div>현재 {nickName}의 선수정보</div>
        {/* <Link to="/teamcustom">{userTeam}</Link> */}
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
