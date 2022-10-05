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
  const location = useLocation();
  const home = location.state.home
  const away = location.state.away

  console.log(home, away)
  const dispatch = useDispatch();
  const [simulData, setSimulData] = useState({});


  useEffect(() => {
    dispatch(simulationData())
      .unwrap()
      .then((res) => {
        setSimulData(res);
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
      // console.log("iiiinnnning", inning);
      inning.datas.map(batter => {
          //  console.log("bbbaaattterrr   ", batter);
        batterlist.push(batter);
      })
      innginglist.push(inning);
    })
  }

  // const baseInfo= [];




  return (
    <>
      <div className="title">시뮬레이션</div>
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
