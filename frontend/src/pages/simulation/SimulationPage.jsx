import { useEffect, useState } from "react";
import SimulationResult from "../../components/simulation/SimulationResult";

import {  simulationData } from "./simulation-slice";
import { useDispatch } from "react-redux";
import Ground from "./Ground";
import TeamScore from "../../components/game/TeamScore";
import { useLocation } from "react-router-dom";

import {
  TopLayout, BottomLayout, GroundContainer,SimulResultContainer,
} from "./SimulationPage.style";


const SimulationPage = () => {

  const dispatch = useDispatch();
  const location = useLocation();
  const data = location.state;

  console.log("여기는 시뮬레이션 페이지, 팀매칭에서 어떤 값 가져왔어  ", data);

  const [teamData, setTeamData] = useState({});
  const [simulData, setSimulData] = useState({});
  const teamId = {team1: data.home.id, team2: data.away.id};


  useEffect(() => {
    dispatch(simulationData(teamId))
      .unwrap()
      .then((res) => {
        setSimulData(res.data);
        console.log("ressss ", res);
  
      });
  }, []);




  useEffect(()=> {
    if(simulData.gamePk){
      makeInningsInfo();
    }
  }, [simulData]);

  let innginglist = [];
  let batterlist = [];

  const makeInningsInfo = () => {
    simulData.inngings.map(inning => {
      inning.datas.map(batter => {
        batterlist.push(batter);
      })
      innginglist.push(inning);
    })
  }


  return (
    <>
      <div className="title"></div>
          <TopLayout>
            <TeamScore data = {simulData}/>
          
          </TopLayout>
          <BottomLayout>
              <GroundContainer><Ground data= {innginglist}/></GroundContainer>
              <SimulResultContainer><SimulationResult data = {simulData}/></SimulResultContainer>
          </BottomLayout>        
    </>
        
  );
};

export default SimulationPage;
