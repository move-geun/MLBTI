import { useEffect, useState } from "react";
import SimulationResult from "../../components/simulation/SimulationResult";

import { simulationData } from "./simulation-slice";
import { useDispatch } from "react-redux";
import Ground from "./Ground";
import TeamScore from "../../components/game/TeamScore";
import { useLocation } from "react-router-dom";

import { SimulContainer, Center, BallCount } from "./SimulationPage.style";

const SimulationPage = () => {
  const location = useLocation();
  const home = location.state.home;
  const away = location.state.away;

  console.log(home, away);
  const dispatch = useDispatch();
  const data = location.state;

  console.log("여기는 시뮬레이션 페이지, 팀매칭에서 어떤 값 가져왔어  ", data);

  // const [teamData, setTeamData] = useState({});
  const [simulData, setSimulData] = useState({});

  // const [logoUrl, setLogoUrl] = useState([]);
  const teamId = { team1: data.home.id, team2: data.away.id };
  const logoUrl = [data.home.logo, data.away.logo];

  useEffect(() => {
    dispatch(simulationData(teamId))
      .unwrap()
      .then((res) => {
        setSimulData(res.data);
        console.log("ressss ", res);
      });
  }, []);

  useEffect(() => {
    if (simulData.gamePk) {
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
        <BallCount>
          <div className="count">
            <div className="title">B</div>
            <div className="circle_case">
              <div className="circle ball"></div>
              <div className="circle ball"></div>
              <div className="circle"></div>
            </div>
          </div>
          <div className="count">
            <div className="title">S</div>
            <div className="circle_case">
              <div className="circle strike"></div>
              <div className="circle"></div>
            </div>
          </div>
          <div className="count">
            <div className="title">O</div>
            <div className="circle_case">
              <div className="circle out"></div>
              <div className="circle"></div>
            </div>
          </div>
        </BallCount>
      </Center>
      <SimulationResult data={simulData} />
    </SimulContainer>
  );
};

export default SimulationPage;
