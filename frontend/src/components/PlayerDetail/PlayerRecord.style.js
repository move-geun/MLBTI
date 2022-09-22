import styled from "styled-components";
import TextField from "@mui/material/TextField";

const Wrapper = styled.div`
  margin-top: 5rem;
  width: 90%;
  background-color: #ceddf7;
  border-radius: 2rem;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 50px;
  margin-bottom: 2rem;
  @media screen and (max-width: 830px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;

const Table = styled.table`
  width: 70%;
  margin: auto;
  /* outline: 1px solid; */
  font-size: 30px;
`;

const Header = styled.thead` 
  /* outline: 1px solid; */
  width: 40%;
  margin-bottom: 3rem;
`;

const Td = styled.td`
  /* text-align: center; */
  padding: 1rem;
  @media screen and (max-width: 830px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;



export { Wrapper, Title, Table, Header, Td };
