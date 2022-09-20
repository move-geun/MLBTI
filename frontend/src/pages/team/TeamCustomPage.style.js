import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { FiEdit } from "react-icons/fi";

const Background = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  
`
const Header = styled.div`
  font-size: 20px;
  margin-top: 1rem;
  width: 100%;
`
const CenterWrapper = styled.div`
  display: flex;
  width: 95%;
  /* height: 65%; */
  @media screen and (max-width: 830px) {
    flex-direction: column;
    align-items: center;
    width:100%;
  }
`
const MyteamWrapper = styled.div`
  width: 50%;
  /* height: 100%; */
  @media screen and (max-width: 830px) {
    width: 90%;
    height: 500px;
  }  
`

const Nickname = styled.div`
  margin: 1rem;
  
`

const CustomTeamName = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
  color: #2565d0;
  @media screen and (max-width: 830px) {
    font-size: 20px;
  }
` 

const EditBtn = styled(FiEdit)`
  color: #433c3c;
  margin-left: 1rem;
  cursor: pointer;
`;

const SearchDiv = styled.div`
  display: flex;
  align-items: center;  
`

const SearchInput = styled(TextField)`
  margin: 1rem;
`;

const Img = styled.img`

  &.magnifying{
    width:20px;
    cursor: pointer;
  }

  &.ground{
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
`


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
}