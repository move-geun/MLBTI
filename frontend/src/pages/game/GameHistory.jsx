import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import {
  HistoryContainer,
  Score,
  ScoreTitle,
  ScoreInfo,
  EventBox,
  TeamBox,
  Team,
} from "./GameHistory.style";

function createData(name, a, b, c, d, e, f, g, h) {
  return { name, a, b, c, d, e, f, g, h };
}

// 그래프 만들기
// 표 가져와서 정렬시키기

const GameHistory = () => {
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
    <HistoryContainer>
      <div className="title">경기 기록</div>
      <Score>
        <ScoreTitle>
          <div className="title">
            <div>휴스턴</div>
            <div>승-하비에르</div>
          </div>
          <img src="/assets/cap.png" alt="" />
          <div className="score">5</div>
          <div className="status">
            <div className="now">경기종료</div>
            <div className="date">09.01 03:50</div>
            <div className="stadium">글로벌라이프필드</div>
          </div>
          <div className="score">3</div>
          <img src="/assets/cap.png" alt="" />
          <div className="title">
            <div>텍사스</div>
            <div>패-페레즈</div>
          </div>
        </ScoreTitle>
        <ScoreInfo>
          <div className="each">
            <div className="info">팀명</div>
            <div>휴스턴</div>
            <div>텍사스</div>
          </div>
          <div className="each">
            <div className="info">1</div>
            <div>1</div>
            <div>2</div>
          </div>
          <div className="each">
            <div className="info">2</div>
            <div>1</div>
            <div>2</div>
          </div>
          <div className="each">
            <div className="info">3</div>
            <div>1</div>
            <div>2</div>
          </div>
          <div className="each">
            <div className="info">4</div>
            <div>1</div>
            <div>2</div>
          </div>
          <div className="each">
            <div className="info">5</div>
            <div>1</div>
            <div>2</div>
          </div>
          <div className="each">
            <div className="info">6</div>
            <div>1</div>
            <div>2</div>
          </div>
          <div className="each">
            <div className="info">7</div>
            <div>1</div>
            <div>2</div>
          </div>
          <div className="each">
            <div className="info">8</div>
            <div>1</div>
            <div>2</div>
          </div>
          <div className="each">
            <div className="info">9</div>
            <div>1</div>
            <div>2</div>
          </div>
          <div className="each">
            <div className="info">R</div>
            <div>5</div>
            <div>3</div>
          </div>
          <div className="each">
            <div className="info">H</div>
            <div>11</div>
            <div>6</div>
          </div>
          <div className="each">
            <div className="info">E</div>
            <div>0</div>
            <div>0</div>
          </div>
          <div className="each">
            <div className="info">B</div>
            <div>7</div>
            <div>3</div>
          </div>
        </ScoreInfo>
      </Score>
      <EventBox>[임시] 전광판</EventBox>
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
    </HistoryContainer>
  );
};

export default GameHistory;
