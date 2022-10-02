import { useEffect, useState } from "react";
import SimulationResult from "../../components/simulation/SimulationResult";

import {  simulationData } from "./simulation-slice";
import { useDispatch } from "react-redux";
import Ground from "./Ground";


const SimulationPage = () => {

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

  const baseInfo= [];




  return (
    <>
      <div className="title">시뮬레이션</div>
      
          <Ground data= {innginglist}/>
       
          <SimulationResult data = {simulData}/>
    </>
        
  );
};

export default SimulationPage;
