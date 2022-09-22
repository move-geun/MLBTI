import React, { useState } from "react";
import {
  Wrapper,
  ContentSwitch,
  Switch,
  Schedule,
  ScheduleDetail,
  Cell,
} from "./DetailInfo.style";
import { TeamBox } from "../game/TeamTable.style";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const DetailInfo = () => {
  const [page, setPage] = useState("경기일정");

  const handlePage = (e) => {
    setPage(e.target.value);
  };

  function createData(name, a, b) {
    return { name, a, b };
  }

  const rows = [
    createData("Frozen yoghurt", 3, 2),
    createData("Frozen yoghurt", 3, 2),
    createData("Frozen yoghurt", 3, 2),
  ];

  return (
    <Wrapper>
      <ContentSwitch>
        <Switch value="경기일정" onClick={handlePage}>
          경기 일정
        </Switch>
        <Switch value="선수보기" onClick={handlePage}>
          선수 보기
        </Switch>
      </ContentSwitch>

      {/* page 값에 따라 보여지는 화면 다름 */}
      {/* ScheduleDetail을 map으로 반복 */}
      {page === "경기일정" ? (
        <Schedule>
          <ScheduleDetail>
            <div className="day">
              <div className="date">8.12(월)</div>
              <div className="state">경기종료</div>
            </div>
            <div className="content">
              <div className="team">롯데프링글스</div>
              <div className="result">3:1</div>
              <div className="team">베스킨라빈스</div>
            </div>
          </ScheduleDetail>
          <ScheduleDetail>
            <div className="day">
              <div className="date">8.12(월)</div>
              <div className="state">경기종료</div>
            </div>
            <div className="content">
              <div className="team">롯데프링글스</div>
              <div className="result">3:1</div>
              <div className="team">베스킨라빈스</div>
            </div>
          </ScheduleDetail>
          <ScheduleDetail>
            <div className="day">
              <div className="date">8.12(월)</div>
              <div className="state">경기종료</div>
            </div>
            <div className="content">
              <div className="team">롯데프링글스</div>
              <div className="result">3:1</div>
              <div className="team">베스킨라빈스</div>
            </div>
          </ScheduleDetail>
        </Schedule>
      ) : null}

      {page === "선수보기" ? (
        <TableContainer
          sx={{ marginTop: "2rem", fontFamily: "MICEGothic Bold" }}
          component={Paper}
        >
          <TeamBox>
            <Table sx={{ minWidth: 400 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <Cell sx={{ fontFamily: "MICEGothic Bold" }}>선수명</Cell>
                  <Cell sx={{ fontFamily: "MICEGothic Bold" }} align="right">
                    포지션
                  </Cell>
                  <Cell sx={{ fontFamily: "MICEGothic Bold" }} align="right">
                    스탯
                  </Cell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <Cell
                      sx={{ fontFamily: "MICEGothic Bold" }}
                      component="th"
                      scope="row"
                    >
                      {row.name}
                    </Cell>
                    <Cell sx={{ fontFamily: "MICEGothic Bold" }} align="right">
                      {row.a}
                    </Cell>
                    <Cell sx={{ fontFamily: "MICEGothic Bold" }} align="right">
                      {row.b}
                    </Cell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TeamBox>
        </TableContainer>
      ) : null}
    </Wrapper>
  );
};

export default DetailInfo;
