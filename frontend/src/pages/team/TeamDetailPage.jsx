import React from "react";
import Navbar from "../../components/navbar/Navbar";
import TeamInfo from "../../components/TeamDetail/TeamInfo";
import DetailInfo from "../../components/TeamDetail/DetailInfo";


import {
  Background,

} from "./TeamDetailPage.style";

const TeamDetailPage = () => {
  return (
    <>
      <Navbar/>
      <Background>
        <TeamInfo>
        </TeamInfo>
        <DetailInfo>
        </DetailInfo>
      </Background>
    </>
  );
};

export default TeamDetailPage;
