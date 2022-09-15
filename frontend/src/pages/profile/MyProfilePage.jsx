// import { useState } from "react";
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

// const [nickName, setNickname] = useState("");

const MyProfilePage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <PageContainer>
      <NameBox>
        <Name>
          <div>배송윤 아님</div>
          <span>님</span>
          <img
            src="/assets/cap.png"
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
              <div className="title">닉네임 변경</div>
              <div className="content">
                <span>닉네임</span>
                <input type="text" />
                <button>중복확인</button>
              </div>
              <button className="change" onClick={handleClose}>
                변경하기
              </button>
            </ModalBox>
          </Modal>
        </Name>
        <Id>example@naver.com</Id>
      </NameBox>
      <ChangePwd>
        <img src="/assets/cap.png" alt="자물쇠였던것.." />
        비밀번호 변경하기
      </ChangePwd>
      <div className="divide">배송윤아님 님의 선구안</div>
      <GraphBox>
        {/* 실경기 박스 */}
        <div className="GraphDraw">
          <div className="nameDraw">
            <span>실경기 : </span>
            <span> 34회 (68%)</span>
          </div>
          <div>
            <img src="/assets/cap.png" alt="" />
          </div>
        </div>
        {/* 커스텀 경기 */}
        <div className="GraphDraw">
          <div className="nameDraw">
            <span>커스텀 경기:</span>
            <span>34회(68%)</span>
          </div>
          <div>
            <img src="/assets/cap.png" alt="" />
          </div>
        </div>
      </GraphBox>
    </PageContainer>
  );
};

export default MyProfilePage;
