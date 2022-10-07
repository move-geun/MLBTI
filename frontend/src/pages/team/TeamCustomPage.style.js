import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { FiEdit } from "react-icons/fi";

const Background = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 88%;
  height: 100vh;
  margin: 0 auto;

  .header {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin: 1rem 0 0 5rem;
  }

  img {
    width: 35px;
    height: 35px;
    padding-left: 1rem;
  }
`;

const Header = styled.div`
  text-align: left;
  padding-bottom: 4px;
  border-bottom: 2px solid #2565d0;
  font-size: 1.5rem;
`;

const CenterWrapper = styled.div`
  display: flex;
  width: 95%;
  /* height: 65%; */
  @media screen and (max-width: 830px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;
const MyteamWrapper = styled.div`
  width: 50%;
  padding-top: 2rem;
  .candi {
    background-color: rgba(45, 68, 150, 0.07);
  }
  /* height: 100%; */
  @media screen and (max-width: 830px) {
    width: 90%;
    height: 500px;
  }
`;

const Nickname = styled.div`
  margin: 1rem;
`;

const CustomTeamName = styled.div`
  width: 100%;
  text-align: start;
  margin-left: 10px;
  /* display: flex;
  justify-content: center; */
  font-size: 30px;
  color: #2565d0;
  @media screen and (max-width: 830px) {
    font-size: 20px;
  }
`;

const EditBtn = styled(FiEdit)`
  color: #433c3c;
  margin-left: 1rem;
  cursor: pointer;
`;

const SearchDiv = styled.div`
  display: flex;
  align-items: center;

  &.playerSearch {
    margin-right: 0.5rem;
  }
`;

const SearchInput = styled(TextField)`
  margin: 1rem;
`;

const Img = styled.img`
  &.magnifying {
    width: 1.6rem;
    height: 1.6rem;
    cursor: pointer;
  }

  &.ground {
    width: 400px;
    height: 400px;
    /* padding-top: 5.5rem; */
    @media screen and (max-width: 830px) {
      width: 350px;
      height: 350px;
      padding-top: 0;
    }
    @media screen and (max-width: 480px) {
      width: 250px;
      height: 250px;
    }
  }
`;

const SimulationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`;

export {
  Background,
  Header,
  CenterWrapper,
  MyteamWrapper,
  SimulationWrapper,
  Nickname,
  CustomTeamName,
  SearchDiv,
  Img,
  EditBtn,
  SearchInput,
};
