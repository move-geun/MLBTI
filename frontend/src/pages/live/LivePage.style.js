// import { style } from "@mui/system";
import styled from "styled-components";

const LiveContainer = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 1rem auto 0 auto;
  font-size: 1.5rem;

  .title {
    text-align: left;
    padding-bottom: 4px;
    border-bottom: 2px solid #2565d0;
  }
  @media screen and (max-width: 830px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.625rem;
  }
`;

const Score = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2565d0;
  color: white;
  border-radius: 10px;
  margin-top: 1rem;
  padding: 1rem 0;
`;

const ScoreTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 45px;
    height: 45px;
    margin: 0 5px;
    @media screen and (max-width: 830px) {
      width: 30px;
      height: 30px;
    }
    @media screen and (max-width: 480px) {
      width: 25px;
      height: 25px;
    }
  }

  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 7px;
  }

  .score {
    font-size: 3rem;
    margin: 0 5px;
    @media screen and (max-width: 830px) {
      font-size: 2rem;
    }
    @media screen and (max-width: 480px) {
      font-size: 1rem;
    }
  }

  .status {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    .now {
      padding: 5px;
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.3);
      margin-bottom: 5px;
      @media screen and (max-width: 830px) {
        margin-bottom: 3px;
      }
      @media screen and (max-width: 480px) {
        margin-bottom: 2px;
      }
    }
    .date {
      font-size: 1rem;
      margin-bottom: 5px;
      @media screen and (max-width: 830px) {
        font-size: 0.8rem;
        margin-bottom: 3px;
      }
      @media screen and (max-width: 480px) {
        font-size: 0.625rem;
        margin-bottom: 2px;
      }
    }
    .stadium {
      font-size: 1rem;
      color: rgba(1, 1, 1, 0.8);
      @media screen and (max-width: 830px) {
        font-size: 0.8rem;
      }
      @media screen and (max-width: 480px) {
        font-size: 0.625rem;
      }
    }
  }
`;

const ScoreInfo = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  @media screen and (max-width: 830px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.625rem;
  }

  .each {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 8px;

    .info {
      color: rgba(1, 1, 1, 0.5);
      margin-bottom: 3px;
    }
  }
`;

const ScoreHistory = styled.div`
    .tab{

    }
 
  
`;

const TabMenu = styled.ul`
  background-color: #dcdcdc;
  color: rgba(73, 73, 73, 0.5);
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  list-style: none;
  margin-bottom: 7rem;
  cursor: pointer;

  .submenu {
    ${"" /* 기본 Tabmenu 에 대한 CSS를 구현합니다. */}
    display: flex;
    justify-content: space-between;
    width: 100px;
    height: 30px;
    padding: 10px;
    font-size: 15px;
  }

  .focused {
    ${"" /* 선택된 Tabmenu 에만 적용되는 CSS를 구현합니다.  */}
    background-color: darkblue;
    color: white;
  }

  & div.desc {
    text-align: center;
  }
`;

const Desc = styled.div`
  padding-left: 180px;
`;


const TopContainer = styled.div`
    display: flex;

`;

const LiveEnjoyContainer = styled.div`


`;


const MLBPlayer = styled.div`

`;



const Img = styled.img`

  &.ground{
    width: 450px;
    height: 450px;
    
    @media screen and (max-width: 830px) {
      width: 350px;
      height: 350px;
      
    }
    @media screen and (max-width: 480px) {
      width: 250px;
      height: 250px;
    }
  }
`

export {
  LiveContainer,
  Score,
  ScoreTitle,
  ScoreInfo,
  ScoreHistory,
  TabMenu,
  Desc,
  TopContainer,
  LiveEnjoyContainer,
  MLBPlayer,
  Img,
};
