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
import { useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonCircleMinus } from "@fortawesome/free-solid-svg-icons";
import {
  deletePlayer,
  modifiedOrder,
} from "../../components/TeamCustom/teamCustom-slice";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { CompositionWrapper } from "../../components/TeamCustom/TeamCoposiotion.style";
import {RiBallPenFill} from "react-icons/ri"

const TaBleList = styled(TableCell)`
  font-family: "MICEGothic Bold";
`;

const EditPen = styled(RiBallPenFill)`
  margin-left: 0.5rem;
`

const MyProfilePage = () => {
  const [nickName, setNickname] = useState("");
  const [usermail, setUsermail] = useState("");
  const [teamName, setTeamName] = useState("");
  const [tmpteam, setTmpTeam] = useState("");

  const [myTeam, setMyTeam] = useState([]);

  const [open, setOpen] = useState(false);

  const [isModified, setIsModified] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  // 팀 정보 받아오기
  async function getInfo() {
    const userInfo = await dispatch(myprofile());
    const infodata = await userInfo.payload.data;
    const mail = { email: infodata.userId };
    const res = await dispatch(getMyteam(mail));
    setMyTeam(res.payload);

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
      });
  }

  // 팀 정보 받아오기
  useEffect(() => {
    getInfo();
  }, [isModified]);

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
      .catch();
  }, []);

  const deleteHandle = (data) => {
    dispatch(deletePlayer(data.uid));
    setIsModified(!isModified);
  };

  const orderList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const imgUrl = "/assets/smallGround.png";

  const handleChange = (e, player) => {
    const data = {
      email: usermail,
      order: e.target.value,
      player_uid: player.baseballPlayer.uid,
    };

    dispatch(modifiedOrder(data))
      .unwrap()
      .then((res) => {
        if (res.status === 200) {
          setIsModified(!isModified);
        }
      });
  };

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
          내 정보 변경
        </Link>
      </ChangePwd>
      <div className="divide">
        구단명
        <EditPen
          onClick={handleOpen}
        />
        <div>{teamName}</div>
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
      
      <GraphBox>
        <div>
          현재 {teamName}의 전력
          <img className="myprofileLogo" alt="mark" src={imgUrl}></img>
        </div>
        <CompositionWrapper>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TaBleList>시즌</TaBleList>
                  <TaBleList>선수명</TaBleList>
                  <TaBleList align="right">포지션</TaBleList>
                  <TaBleList align="right">포지션 코드</TaBleList>
                  <TaBleList align="right">우완(R), 좌완(L)</TaBleList>
                  <TaBleList align="center">타순</TaBleList>
                  <TaBleList align="right">생년월일</TaBleList>
                  <TaBleList align="center">선수삭제</TaBleList>
                </TableRow>
              </TableHead>
              <TableBody>
                {myTeam.map((player, idx) => (
                  <TableRow
                    key={idx}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TaBleList>{player["season"]}</TaBleList>
                    <TaBleList>
                      <Link
                        to={`/playerdetail/${player["baseballPlayer"]["uid"]}`}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        {player["baseballPlayer"]["fullName"]}
                      </Link>
                    </TaBleList>

                    <TaBleList align="right" component="th" scope="player">
                      {player["baseballPlayer"]["primaryPositionName"]}
                    </TaBleList>
                    <TaBleList align="right" component="th" scope="player">
                      {player["baseballPlayer"]["primaryPositionAbbreviation"]}
                    </TaBleList>
                    <TaBleList align="right">
                      {player["baseballPlayer"]["batSideCode"]}
                    </TaBleList>

                    <TaBleList align="right">
                      <FormControl sx={{ m: 1, minWidth: 70 }} size="small">
                        <InputLabel>타순</InputLabel>
                        <Select
                          labelId="demo-select-small"
                          id="demo-select-small"
                          value={player.order}
                          label="타순"
                          onChange={(e) => handleChange(e, player)}
                        >
                          {player["baseballPlayer"][
                            "primaryPositionAbbreviation"
                          ] === "P" ? (
                            <MenuItem key={0} value={0}>
                              0
                            </MenuItem>
                          ) : (
                            orderList.map((idx) => (
                              <MenuItem key={idx} value={idx}>
                                {idx}
                              </MenuItem>
                            ))
                          )}
                        </Select>
                      </FormControl>
                    </TaBleList>
                    <TaBleList align="right">
                      {player["baseballPlayer"]["birthDate"]}
                    </TaBleList>
                    <TaBleList align="center" className="deletePlayer">
                      <FontAwesomeIcon
                        onClick={() => deleteHandle(player)}
                        style={{ color: "#c20c2aab", cursor: "pointer" }}
                        icon={faPersonCircleMinus}
                      />
                    </TaBleList>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CompositionWrapper>
      </GraphBox>
    </PageContainer>
  );
};

export default MyProfilePage;
