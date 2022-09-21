import React from "react";
import TeamInfo from "../../components/TeamDetail/TeamInfo";
import DetailInfo from "../../components/TeamDetail/DetailInfo";

import { Background } from "./TeamDetailPage.style";

const TeamDetailPage = () => {
  return (
    <Background>
      <TeamInfo></TeamInfo>
      <DetailInfo></DetailInfo>
    </Background>
  );
};

export default TeamDetailPage;
