// import { border } from "@mui/system";
import React from "react";
import { Wrapper, Title, Table, Header, Td } from "./PlayerRecord.style";

const PlayerRecord = () => {
  return (
    <Wrapper>
      <Title>기록</Title>
      <Table>
        <Header style={{ color: "blue" ,margin:'2rem' }}>
          <tr>
            <Td>경기</Td>
            <Td>AB</Td>
            <Td>R</Td>
            <Td>H</Td>
          </tr>
        </Header>
        <tbody>
          <tr>
            <Td>8.30 에인절스</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </tr>
          <tr>
            <Td>8.30 에인절스</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </tr>
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default PlayerRecord;
