import { useEffect, useState } from "react";
import SimulationResult from "../../components/simulation/SimulationResult";

import { simulationData } from "./simulation-slice";
import { useDispatch } from "react-redux";
import Ground from "./Ground";
import BallCount from "./BallCount";
import TeamScore from "../../components/game/TeamScore";
import { useLocation } from "react-router-dom";

import { SimulContainer, Center} from "./SimulationPage.style";

const SimulationPage = () => {
  const location = useLocation();
  const home = location.state.home;
  const away = location.state.away;


  const dispatch = useDispatch();
  const data = location.state;

  console.log("여기는 시뮬레이션 페이지, 팀매칭에서 어떤 값 가져왔어  ", data);
  const teamId = {team1: data.home.id, team2: data.away.id};


  // const [teamData, setTeamData] = useState({});
  const [simulData, setSimulData] = useState({});

  // const [logoUrl, setLogoUrl] = useState([]);

  // const [teamId, setTeamId] = useState({});

  const logoUrl = [data.home.logo, data.away.logo];

  useEffect(() => {

    
    takeSimulData(teamId)
  }, []);


  const takeSimulData= (teamId)=> {
    dispatch(simulationData(teamId))
    .unwrap()
    .then((res) => {
      console.log("ressss ", res);
      setSimulData(res.data);
      

    });
  }

  // useEffect(()=>{
   
  // }, [teamId])


  useEffect(()=> {
    if(simulData.gamePk){
      makeInningsInfo();
    }
  }, [simulData]);

  let innginglist = [];
  let batterlist = [];

  const makeInningsInfo = () => {
    simulData.inngings.map((inning) => {
      inning.datas.map((batter) => {
        batterlist.push(batter);
      });
      innginglist.push(inning);
    });
  };

  return (
    <SimulContainer>
      <TeamScore data={simulData} logo={logoUrl} />
      <Center>
        <Ground data={innginglist} />
        <BallCount data = {innginglist} />
      </Center>
      <SimulationResult data={simulData} />
    </SimulContainer>
  );
};

export default SimulationPage;
