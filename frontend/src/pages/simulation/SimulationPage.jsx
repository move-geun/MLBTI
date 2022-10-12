import { useEffect, useState } from "react";
import SimulationResult from "../../components/simulation/SimulationResult";

import { simulationData, customsimulationData } from "./simulation-slice";
import { useDispatch } from "react-redux";
import Ground from "./Ground";
import BallCount from "./BallCount";
import TeamScore from "../../components/game/TeamScore";
import { useLocation, useNavigate } from "react-router-dom";
import { PacmanLoader, PropagateLoader } from "react-spinners";
import { SimulContainer, Center, SpinnerDiv } from "./SimulationPage.style";


const SimulationPage = () => {
  const location = useLocation();
  // const home = location.state.home;
  // const away = location.state.away;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = location.state;

  const [matchData, setMatchData] = useState({});
  const [simulData, setSimulData] = useState({});
  // 커스텀 데이터 넘어왔는지 확인
  const [customStatus, setCustomStatus] = useState();
  const [ scoreData, setScoreData] = useState();
  // 스피너
  const [spinner, setSpinner] = useState(true);
  // const [logoUrl, setlogoUrl] = useState([]);

 // 커스텀팀로고 일 때, url 설정해주기
 let logoUrl =[data.home.logo,  data.away.logo];
  if(!data.home.logo){
    // setlogoUrl(["/assets/defaultTeam.png", data.away.logo]);
    logoUrl = [data.away.logo, "/assets/defaultTeam.png"];
  } 


  useEffect(() => {
    setTimeout(() => setSpinner(false), 5000);
    // 커스텀팀이 넘어왔을 때, status true로 변환
    if (!data.home["logo"]) {
      // setCustomStatus(true);
      takeCustomSimulData(matchInfo);
    } else {
      takeSimulData(teamId);
    }
    setMatchData(data);
  }, []);

  const teamId = { team1: data.home.id, team2: data.away.id };
  const matchInfo = { email: data.home, uid: data.away.id };
  
  const takeSimulData = (teamId) => {
    dispatch(simulationData(teamId))
      .unwrap()
      .then((res) => {
        if (res.data === "") {
          alert("선수 정보가 부족합니다.");
          navigate("/customsimultaion");
        }
        setSimulData(res.data);
        setScoreData(res.data.scoreBoard);
      })
      .catch((err) => {
        alert("선수 정보가 부족합니다.");
        navigate("/customsimultaion");
      }
      
    );
  }


  const takeCustomSimulData = (matchInfo) => {
    dispatch(customsimulationData(matchInfo))
      .unwrap()
      .then((res) => {
        // if (res.data === "") {
        //   alert("선수 정보가 부족합니다.");
        //   navigate("/customsimultaion");
        // }
        setSimulData(res.data);
        setCustomStatus();
      })
      .catch((err) => {
        alert("선수 정보가 부족합니다.");
        navigate("/customsimultaion");
      });
  };


  useEffect(() => {
    if (simulData.gamePk) {
      makeInningsInfo();
    }
  }, [simulData]);

  const [ sendinningList, setSendInningList] = useState([]);

  useEffect(()=> {

  }, [sendinningList, scoreData]);

  let innginglist = [];
  let batterlist = [];

  const makeInningsInfo = () => {
    simulData.inngings.map((inning) => {
      inning.datas.map((batter) => {
        batterlist.push(batter);
      });
      innginglist.push(inning);
      
    });
    setSendInningList(innginglist);
  };

  return (
    <SimulContainer>
      {spinner ? (
        <SpinnerDiv>
          <PacmanLoader></PacmanLoader>
        </SpinnerDiv>
      ) : (
        <>
          <TeamScore data={simulData}  logo={logoUrl} score = {scoreData} />
          <Center>
            <Ground data={sendinningList} score = {scoreData}/>
            <BallCount data={sendinningList} />
          </Center>
          <SimulationResult data={simulData} />
        </>
      )}
    </SimulContainer>
  );
};

export default SimulationPage;
