
import styled from "styled-components";

const CheerContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  margin: 2rem 0 1rem 2rem;
`;

const LogoFirstTeam = styled.img`
  width: 50px;
`;

const LogoSecondTeam = styled.img`
  width: 50px;
`;


const BarContainer = styled.div`
   width: 50%;
`;



const ProgressBar = styled.div`
    width: 100%;
    height: 20px;
    background-color: #dedede;
    font-weight: 600;
    font-size: .8rem;
`;


const Progress = styled.div`

    /* width: 72%;  // 나타내고자 하는 퍼센트 값을 넣으면 됩니다. */
    width: ${props => `${props.data}%`};
    height: 20px;
    padding: 0;
    text-align: center;
    background-color: #4F98FF;
    color: #111;

  

`;


export {LogoFirstTeam, LogoSecondTeam, CheerContainer,BarContainer, ProgressBar, Progress};