import React from "react";
import Navbar from "../../components/navbar/Navbar";
import TeamInfo from "../../components/TeamDetail/TeamInfo";

import {
  Background,
  TeamWrapper,
  InfoWrapper,
  Schedule,
} from "./TeamDetailPage.style";

const TeamDetailPage = () => {
  return (
    <>
      <Navbar/>
      <Background>
        <TeamInfo>

          
        </TeamInfo>
        <InfoWrapper>
        </InfoWrapper>
      </Background>
    </>
  );
};

export default TeamDetailPage;
