import {
  SimulationContainer,
  Score,
  ScoreTitle,
  ScoreInfo,
  ScoreHistory,
  TabMenu,
  Desc,
} from "./SimulationPage.style";

const SimulationPage = () => {
  return (
    <SimulationContainer>
      <div className="title">경기 시뮬레이션</div>
      <Score>
        <ScoreTitle>
          <div className="title">
            <div>휴스턴</div>
            <div>승-하비에르</div>
          </div>
          <img src="/assets/cap.png" alt="" />
          <div className="score">5</div>
          <div className="status">
            <div className="now">경기종료</div>
            <div className="date">09.01 03:50</div>
            <div className="stadium">글로벌라이프필드</div>
          </div>
          <div className="score">3</div>
          <img src="/assets/cap.png" alt="" />
          <div className="title">
            <div>텍사스</div>
            <div>패-페레즈</div>
          </div>
        </ScoreTitle>
        <ScoreInfo>
          <div className="each">
            <div className="info">팀명</div>
            <div>휴스턴</div>
            <div>텍사스</div>
          </div>
          <div className="each">
            <div className="info">1</div>
            <div>1</div>
            <div>2</div>
          </div>
          <div className="each">
            <div className="info">2</div>
            <div>1</div>
            <div>2</div>
          </div>
          <div className="each">
            <div className="info">3</div>
            <div>1</div>
            <div>2</div>
          </div>
          <div className="each">
            <div className="info">4</div>
            <div>1</div>
            <div>2</div>
          </div>
          <div className="each">
            <div className="info">5</div>
            <div>1</div>
            <div>2</div>
          </div>
          <div className="each">
            <div className="info">6</div>
            <div>1</div>
            <div>2</div>
          </div>
          <div className="each">
            <div className="info">7</div>
            <div>1</div>
            <div>2</div>
          </div>
          <div className="each">
            <div className="info">8</div>
            <div>1</div>
            <div>2</div>
          </div>
          <div className="each">
            <div className="info">9</div>
            <div>1</div>
            <div>2</div>
          </div>
          <div className="each">
            <div className="info">R</div>
            <div>5</div>
            <div>3</div>
          </div>
          <div className="each">
            <div className="info">H</div>
            <div>11</div>
            <div>6</div>
          </div>
          <div className="each">
            <div className="info">E</div>
            <div>0</div>
            <div>0</div>
          </div>
          <div className="each">
            <div className="info">B</div>
            <div>7</div>
            <div>3</div>
          </div>
        </ScoreInfo>
      </Score>
      <ScoreHistory>
        <div className="tab">
          <div className="result">B</div>
        </div>
      </ScoreHistory>
    </SimulationContainer>
  );
};

export default SimulationPage;
