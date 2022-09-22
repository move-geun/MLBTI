import React from "react";
import styled from "styled-components";
import { Wrapper, Logo, InfoWrapper, Info, LogoDiv } from "./TeamInfo.style";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";

// const player = {
//   win: "79",
//   lose: "51",
//   winRate: ".608",
//   home: "34-31",
//   recentGame: "6-4",
// };

// const TableList = styled(TableCell)``;

const TeamInfo = () => {
  return (
    <Wrapper>
      <LogoDiv>
        <Logo src={"/logo512.png"} />
      </LogoDiv>
      <InfoWrapper>
        <Info className="name">LA 다져스</Info>
        <Info className="rank">2위</Info>
        <Info className="header">
          <div>승</div>
          <div>패</div>
          <div>승률</div>
          <div>홈</div>
          <div>최근 10경기</div>
        </Info>
        <Info className="content" >
          <div>79</div>
          <div>61</div>
          <div>.723</div>
          <div>34-21</div>
          <div>6-4</div>
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
