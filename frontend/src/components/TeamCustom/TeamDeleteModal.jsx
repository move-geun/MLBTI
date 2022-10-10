import React from "react";
import { Overlay, ModalWrap, Button, Contents } from "./ModifiedModal.style";
import { useDispatch } from "react-redux";
import { deleteUserTeam } from "./teamCustom-slice";

function TeamDeleteModal({ userInfo, onClose }) {
  const dispatch = useDispatch();
  // 모달 닫기
  const handleClose = () => {
    onClose?.();
  };

  // 저장 버튼 클릭
  const deleteHandle = () => {
    dispatch(deleteUserTeam(userInfo.userId))
      .unwrap()
      .then((res) => {})
      .catch((err) => {
        alert("선수 삭제 실패");
      });
  };

  return (
    <Overlay>
      <ModalWrap>
        <Contents>
          <h1>구단 삭제</h1>
          <p>정말 구단을 삭제 하시겠습니까?</p>
          <div className="buttonDiv">
            <Button className="save" onClick={deleteHandle}>
              예
            </Button>
            <Button className="close" onClick={handleClose}>
              아니오
            </Button>
          </div>
        </Contents>
      </ModalWrap>
    </Overlay>
  );
}

export default TeamDeleteModal;
