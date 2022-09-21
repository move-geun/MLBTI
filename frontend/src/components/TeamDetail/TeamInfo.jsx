import React from "react";
import styled from "styled-components";
import { Wrapper, Logo, InfoWrapper, Info, LogoDiv } from "./TeamInfo.style";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const player = {
  win: "79",
  lose: "51",
  winRate: ".608",
  home: "34-31",
  recentGame: "6-4",
};

const TableList = styled(TableCell)``;

const TeamInfo = () => {
  return (
    <Wrapper>
      <LogoDiv>
        <Logo src={"/logo512.png"} />
      </LogoDiv>
      <InfoWrapper>
        <Info className="name">LA 다져스</Info>
        <Info className="rank">2위</Info>
        <Info className="detail">
          <table>
            <thead >
              <tr>
                <th>승</th>
                <th>패</th>
                <th>승률</th>
                <th>게임차</th>
                <th>홈</th>
                <th>원정</th>
                <th>최근 10경기</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>79</td>
                <td>51</td>
                <td>.608</td>
                <td>-</td>
                <td>45-10</td>
                <td>34-31</td>
                <td>6-4</td>
              </tr>
            </tbody>

          </table>
        </Info>
      </InfoWrapper>
    </Wrapper>
  );
};

export default TeamInfo;

{
  /* <TableContainer sx={{ 
            '@media screen and (max-width: 510px)': {
              width: '70%',
            },
            }}component={Paper}>
            <Table sx={{ 
              witdh:'10px'  
            }} 
          
              aria-label="simple table">
              <TableHead>
                <TableRow sx={{backgroundColor:'#7ce0ff'}}>
                  <TableList>승</TableList>
                  <TableList align="right">패</TableList>
                  <TableList align="right">승률</TableList>
                  <TableList align="right">홈</TableList>
                  <TableList align="right">최근 10 경기</TableList>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key={player.name} sx={{ backgroundColor: "#f2f0f0" }}>
                  <TableList component="th" scope="player">
                    {player.win}
                  </TableList>
                  <TableList align="right">{player.lose}</TableList>
                  <TableList align="right">{player.winRate}</TableList>
                  <TableList align="right">{player.home}</TableList>
                  <TableList align="right">{player.recentGame}</TableList>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer> */
}
