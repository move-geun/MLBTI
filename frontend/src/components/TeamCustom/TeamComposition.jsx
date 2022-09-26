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

function createData(position, name, team, stats) {
  return { position, name, team, stats };
}

const playerList = [
  createData("투수", "이동근", "남포동", 99),
  createData("투수", "이동근", "남포동", 99),
  createData("투수", "이동근", "남포동", 99),
  createData("투수", "이동근", "남포동", 99),
];

const TaBleList = styled(TableCell)`
  font-family: "MICEGothic Bold";
`;

const TeamCoposition = () => {
  return (
    <CompositionWrapper>
      <Header>
        <MyNickname>홈런맞아부러쓰 </MyNickname>
        <p>의 전력</p>
      </Header>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TaBleList>포지션</TaBleList>
              <TaBleList align="right">선수명</TaBleList>
              <TaBleList align="right">소속팀</TaBleList>
              <TaBleList align="right">선수 스탯</TaBleList>
            </TableRow>
          </TableHead>
          <TableBody>
            {playerList.map((player) => (
              <TableRow
                key={player.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TaBleList component="th" scope="player">
                  {player.position}
                </TaBleList>
                <TaBleList align="right">{player.name}</TaBleList>
                <TaBleList align="right">{player.team}</TaBleList>
                <TaBleList align="right">{player.stats}</TaBleList>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </CompositionWrapper>
  );
};

export default TeamCoposition;
