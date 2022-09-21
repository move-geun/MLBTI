import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Team, TeamBox, TeamTableContainer } from "./TeamTable.style";

function createData(name, a, b, c, d, e, f, g, h) {
  return { name, a, b, c, d, e, f, g, h };
}

const TeamTable = () => {
  const rows = [
    createData("Frozen yoghurt", 3, 2, 2, 2, 0, 2, 1, 0.283),
    createData("Frozen yoghurt", 3, 2, 2, 2, 0, 2, 1, 0.283),
    createData("Frozen yoghurt", 3, 2, 2, 2, 0, 2, 1, 0.283),
    createData("Frozen yoghurt", 3, 2, 2, 2, 0, 2, 1, 0.283),
    createData("Frozen yoghurt", 3, 2, 2, 2, 0, 2, 1, 0.283),
    createData("Frozen yoghurt", 3, 2, 2, 2, 0, 2, 1, 0.283),
    createData("Frozen yoghurt", 3, 2, 2, 2, 0, 2, 1, 0.283),
    createData("Frozen yoghurt", 3, 2, 2, 2, 0, 2, 1, 0.283),
    createData("Frozen yoghurt", 3, 2, 2, 2, 0, 2, 1, 0.283),
  ];
  return (
    <TeamTableContainer>
      {/* 1팀 */}
      <Team>
        <img src="/assets/cap.png" alt="" />
        <div className="teamtitle">휴스턴</div>
      </Team>
      <TableContainer component={Paper}>
        <TeamBox>
          <Table sx={{ minWidth: 400 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>타자명</TableCell>
                <TableCell align="right">타수</TableCell>
                <TableCell align="right">득점</TableCell>
                <TableCell align="right">안타</TableCell>
                <TableCell align="right">타점</TableCell>
                <TableCell align="right">홈런</TableCell>
                <TableCell align="right">볼넷</TableCell>
                <TableCell align="right">삼진</TableCell>
                <TableCell align="right">타율</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.a}</TableCell>
                  <TableCell align="right">{row.b}</TableCell>
                  <TableCell align="right">{row.c}</TableCell>
                  <TableCell align="right">{row.d}</TableCell>
                  <TableCell align="right">{row.e}</TableCell>
                  <TableCell align="right">{row.f}</TableCell>
                  <TableCell align="right">{row.g}</TableCell>
                  <TableCell align="right">{row.h}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Table sx={{ minWidth: 400 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>투수명</TableCell>
                <TableCell align="right">타수</TableCell>
                <TableCell align="right">득점</TableCell>
                <TableCell align="right">안타</TableCell>
                <TableCell align="right">타점</TableCell>
                <TableCell align="right">홈런</TableCell>
                <TableCell align="right">볼넷</TableCell>
                <TableCell align="right">삼진</TableCell>
                <TableCell align="right">타율</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.a}</TableCell>
                  <TableCell align="right">{row.b}</TableCell>
                  <TableCell align="right">{row.c}</TableCell>
                  <TableCell align="right">{row.d}</TableCell>
                  <TableCell align="right">{row.e}</TableCell>
                  <TableCell align="right">{row.f}</TableCell>
                  <TableCell align="right">{row.g}</TableCell>
                  <TableCell align="right">{row.h}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TeamBox>
      </TableContainer>
      {/* 2팀 */}
      <Team>
        <img src="/assets/cap.png" alt="" />
        <div className="teamtitle">휴스턴</div>
      </Team>
      <TableContainer component={Paper}>
        <TeamBox>
          <Table sx={{ minWidth: 400 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>타자명</TableCell>
                <TableCell align="right">타수</TableCell>
                <TableCell align="right">득점</TableCell>
                <TableCell align="right">안타</TableCell>
                <TableCell align="right">타점</TableCell>
                <TableCell align="right">홈런</TableCell>
                <TableCell align="right">볼넷</TableCell>
                <TableCell align="right">삼진</TableCell>
                <TableCell align="right">타율</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.a}</TableCell>
                  <TableCell align="right">{row.b}</TableCell>
                  <TableCell align="right">{row.c}</TableCell>
                  <TableCell align="right">{row.d}</TableCell>
                  <TableCell align="right">{row.e}</TableCell>
                  <TableCell align="right">{row.f}</TableCell>
                  <TableCell align="right">{row.g}</TableCell>
                  <TableCell align="right">{row.h}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Table sx={{ minWidth: 400 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>투수명</TableCell>
                <TableCell align="right">타수</TableCell>
                <TableCell align="right">득점</TableCell>
                <TableCell align="right">안타</TableCell>
                <TableCell align="right">타점</TableCell>
                <TableCell align="right">홈런</TableCell>
                <TableCell align="right">볼넷</TableCell>
                <TableCell align="right">삼진</TableCell>
                <TableCell align="right">타율</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.a}</TableCell>
                  <TableCell align="right">{row.b}</TableCell>
                  <TableCell align="right">{row.c}</TableCell>
                  <TableCell align="right">{row.d}</TableCell>
                  <TableCell align="right">{row.e}</TableCell>
                  <TableCell align="right">{row.f}</TableCell>
                  <TableCell align="right">{row.g}</TableCell>
                  <TableCell align="right">{row.h}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TeamBox>
      </TableContainer>
    </TeamTableContainer>
  );
};
export default TeamTable;
