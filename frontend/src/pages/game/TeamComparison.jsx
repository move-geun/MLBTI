import {
  CompareContainer,
  LogoContainer,
  Logo,
  ResultTable,
} from "./TeamComparison.style";

import TeamTable from "../../components/game/TeamTable";

const TeamComparison = () => {
  return (
    <CompareContainer>
      <div className="title">전력비교</div>
      <LogoContainer>
        <Logo>
          <img src="/assets/cap.png" alt="팀사진..이었던것" />
          <div>
            <span>10전</span>
            <span className="victory">7승</span>
            <span className="lose">3패</span>
          </div>
        </Logo>
        <div className="vs">VS</div>
        <Logo>
          <img src="/assets/cap.png" alt="팀사진..이었던것" />
          <div>
            <span>10전</span>
            <span className="victory">3승</span>
            <span className="lose">7패</span>
          </div>
        </Logo>
      </LogoContainer>
      <ResultTable>
        <div>
          <div></div>
          <img src="/assets/cap.png" alt="" />
          <img src="/assets/cap.png" alt="" />
        </div>
        <div>
          <div>22.01.01</div>
          <div>W</div>
          <div>L</div>
        </div>
        <div>
          <div>22.01.01</div>
          <div>W</div>
          <div>L</div>
        </div>
        <div>
          <div>22.01.01</div>
          <div>W</div>
          <div>L</div>
        </div>
        <div>
          <div>22.01.01</div>
          <div>W</div>
          <div>L</div>
        </div>
        <div>
          <div>22.01.01</div>
          <div>W</div>
          <div>L</div>
        </div>
      </ResultTable>
      <div className="center">선수명단</div>
      <TeamTable></TeamTable>
    </CompareContainer>
  );
};

export default TeamComparison;
