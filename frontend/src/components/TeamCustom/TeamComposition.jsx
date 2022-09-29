import React, {useEffect, useState} from "react";
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
import { getUserTeam } from "./teamCustom-slice";
import { useDispatch } from "react-redux";


const TaBleList = styled(TableCell)`
  font-family: "MICEGothic Bold";
`;

const TeamCoposition = ({userInfo}) => {
  const dispatch = useDispatch()
  const [myTeam, setMyTeam] = useState([])
  
  async function getTeam () {
    const res = await dispatch(getUserTeam(userInfo['userId']))
    
    if (res.meta.requestStatus === "fulfilled") {
      setMyTeam(res.payload)
    }
  }

  useEffect(() => {
    if(userInfo['userId']){
      getTeam()
    }
  }, [userInfo])
  

  return (
    <CompositionWrapper>
      <Header>
        <MyNickname>{userInfo['teamName']}</MyNickname>
        <p>의 전력</p>
      </Header>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TaBleList >선수명</TaBleList>
              <TaBleList align="right">포지션</TaBleList>
              <TaBleList align="right">우완(R), 좌완(L)</TaBleList>
              <TaBleList align="right">생년월일</TaBleList>
            </TableRow>
          </TableHead>
          <TableBody>
            {myTeam.map((player,idx) => (
              <TableRow
                key={idx}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TaBleList >{player['baseballPlayer']['fullName']}</TaBleList>
                <TaBleList align="right" component="th" scope="player">
                  {player['baseballPlayer']['primaryPositionName']}
                </TaBleList>
                <TaBleList align="right">{player['baseballPlayer']['batSideCode']}</TaBleList>
                <TaBleList align="right">{player['baseballPlayer']['birthDate']}</TaBleList>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </CompositionWrapper>
  );
};

export default TeamCoposition;
