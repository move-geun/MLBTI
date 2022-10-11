import React from "react";
import {
  CompositionWrapper,
  Header,
  MyNickname,
} from "./TeamCoposiotion.style";
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
import { deletePlayer, modifiedOrder } from "./teamCustom-slice";
import { useDispatch } from "react-redux/es/exports";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const TaBleList = styled(TableCell)`
  font-family: "MICEGothic Bold";
`;
const TeamCoposition = ({ userInfo, myTeam, isModified, setIsModified }) => {
  const dispatch = useDispatch();

  const deleteHandle = (data) => {
    dispatch(deletePlayer(data.uid));
    setIsModified(!isModified);
  };

  const orderList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const imgUrl = "/assets/smallGround.png";

  const handleChange = (e, player) => {
    const data = {
      email: userInfo.userId,
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
    <CompositionWrapper>
      <Header>
        <MyNickname>{userInfo["teamName"]}</MyNickname>
        <p>의 전력</p> <img className="mark" alt="mark" src={imgUrl}></img>
      </Header>
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
                <TaBleList>{player["baseballPlayer"]["fullName"]}</TaBleList>
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
  );
};

export default TeamCoposition;
