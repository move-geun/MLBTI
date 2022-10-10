import React, { useState} from "react";
import {
  Overlay,
  ModalWrap,
  Button,
  Contents,
} from "./ModifiedModal.style";
import { SearchDiv } from "../../pages/team/TeamCustomPage.style";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux/es/exports";
import { modifiedTeamName } from "./teamCustom-slice";

function ModifiedModal({ userInfo, onClose, isChangeName, setIsChangeName }) {
  const dispatch = useDispatch();
  const [newName, setNewName] = useState("");

  // 모달 닫기
  const handleClose = () => {
    onClose?.();
  };

  // 입력 대로 값 변경
  const changeHandle = (e) => {
    setNewName(e.target.value);
  };

  // 저장 버튼 클릭
  const saveHandle = () => {
    const data = {
      email: userInfo.userId,
      newTeamName: newName,
    };
    dispatch(modifiedTeamName(data))
      .unwrap()
      .then((res) => {
        setIsChangeName(!isChangeName)
        handleClose()
      })
      .catch((err) => {
        alert("선수 추가에 실패 했습니다.");
      });
  };
  return (
    <Overlay>
      <ModalWrap>
        <Contents>
          <h1>구단 이름 변경</h1>
          <SearchDiv>
            <TextField
              style={{ textAlign: "center" }}
              id="outlined-basic"
              label="구단 이름"
              variant="outlined"
              size="small"
              onChange={changeHandle}
              value={newName}
            />
          </SearchDiv>
          <div className="buttonDiv">
            <Button className="save" onClick={saveHandle}>
              저장
            </Button>
            <Button className="close" onClick={handleClose}>
              닫기
            </Button>
          </div>
        </Contents>
      </ModalWrap>
    </Overlay>
  );
}

export default ModifiedModal;
