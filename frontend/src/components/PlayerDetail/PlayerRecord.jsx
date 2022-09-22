import { border } from "@mui/system";
import React from "react";
import { Wrapper, Title, Table, Header, Td } from "./PlayerRecord.style";

<<<<<<< HEAD

=======
>>>>>>> 01670c4 (add: 선수 상세 페이지 구현중)
const PlayerRecord = () => {
  return (
    <Wrapper>
      <Title>기록</Title>
      <Table>
<<<<<<< HEAD
        <Header style={{ color: "blue" ,margin:'2rem' }}>
=======
        <Header style={{ color: "blue" }}>
>>>>>>> 01670c4 (add: 선수 상세 페이지 구현중)
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
