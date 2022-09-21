import { HistoryContainer, EventBox } from "./GameHistory.style";

import TeamScore from "../../components/game/TeamScore";
import TeamTable from "../../components/game/TeamTable";

const GameHistory = () => {
  return (
    <HistoryContainer>
      <div className="title">경기 기록</div>
      <TeamScore></TeamScore>
      <EventBox>[임시] 전광판</EventBox>
      <TeamTable></TeamTable>
    </HistoryContainer>
  );
};

export default GameHistory;
