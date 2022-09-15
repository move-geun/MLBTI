import { Link } from "react-router-dom";
import * as React from "react";
import Modal from "@mui/material/Modal";
import {
  CustomConatiner,
  TeamContainer,
  TeamCase,
  ModalBox,
} from "./CustomSimulationPage.style";
// 모달 연결
// 전체 width 조절
// 승률 높은 곳에 색 변경
// 수정필요

const CustomSimulationPage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const chat = () => console.log("눌러짐");

  return (
    <CustomConatiner>
      <TeamContainer>
        <TeamCase onClick={handleOpen}>
          <img src="/assets/cap.png" alt="1팀이었던것.." />
          <div>팀 설정하기</div>
          <div>56%</div>
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
        </TeamCase>
        <span> VS </span>
        <TeamCase>
          <img src="/assets/cap.png" alt="2팀이었던것.." />
          <div>팀 설정하기</div>
          <div>44%</div>
        </TeamCase>
      </TeamContainer>
      <Link to="/simulation" style={{ textDecoration: "none", color: "black" }}>
        <div className="start">
          <img src="/assets/cap.png" alt="시작아이콘..이었던것" />
          <span>시뮬레이션 시작</span>
        </div>
      </Link>
    </CustomConatiner>
  );
};

export default CustomSimulationPage;
