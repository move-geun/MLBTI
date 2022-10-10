import React, { useEffect, useState } from "react";
import TeamInfo from "../../components/TeamDetail/TeamInfo";
import DetailInfo from "../../components/TeamDetail/DetailInfo";

import { Background } from "./TeamDetailPage.style";
import axios from "../../api/http";

const TeamDetailPage = () => {

  const[teamData, setTeamData] = useState({});

  useEffect(()=> {
    const teamId = 100;
    axios.get(process.env.REACT_APP_DB_HOST+`/team/${teamId}`)
    .then((res) => {
      setTeamData(res.data);
    })
    .catch();


  }, []);


  useEffect(()=>{
  }, [teamData]);

  return (
    <Background>
      <TeamInfo data = {teamData} ></TeamInfo>
      <DetailInfo></DetailInfo>
    </Background>
  );
};

export default TeamDetailPage;
