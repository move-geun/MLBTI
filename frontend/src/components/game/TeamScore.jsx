import { Score, ScoreTitle, ScoreInfo } from "./TeamScore.style";
import React from 'react';
import { useEffect, useState } from 'react';
 
const TeamScore = (prop) => {

  const [inningList, setInningList] = useState([]);

 
  const [gameInfo, setGameInfo] = useState({});
  const [scoreBoard, setScoreBoard] = useState([]);
  const [scoreInfo, setScoreInfo] = useState([]);

  useEffect(()=> {
    if(prop.data.gamePk){
        setGameInfo(prop.data);
    }
  }, [prop]);


  let list = [];

  useEffect(()=> {
    if(gameInfo.gamePk){
      let homeScore = gameInfo.scoreBoard[0];
      let awayScore = gameInfo.scoreBoard[1];


        for(let i = 0; i < gameInfo.scoreBoard[0].length - 2 ; i ++){
          let data = {
            home: homeScore[i],
            away: awayScore[i],
          }
          list.push(data);
        }

        eachInningScore(list);
        finalBigScore(gameInfo.scoreBoard);
    }  
  }, [gameInfo]);

  // 이닝별 스코어 데이터 파싱
  const eachInningScore = (data) => {
    console.log("파싱한 데이터 확인해볼까`~~" , data);
    setScoreBoard(data);
  }

  useEffect(()=> {
    if(scoreBoard.length > 0 ){
      console.log("scoreBoard 값 들어옴!!!", scoreBoard)
    }
    
  }, [scoreBoard]);

  useEffect(()=> {
    if(scoreInfo.length > 0 ){
      whozWin(scoreInfo);
    }
  }, [scoreInfo]);




  // 경기 종료한 후 최종 점수 저장
  const finalBigScore = (data) => {
    data.map(s => {
      setScoreInfo(prev => [...prev, s[13]]);
    })    
  }



  const [winMark, setWinMark] = useState(0);
  const whozWin = (scoreInfo) => {
    if(scoreInfo[0] > scoreInfo[1]){
      //홈팀이 이긴 거
      setWinMark(0);
    } else {
      setWinMark(1);
    }
  }



  return (
    <Score>
      <ScoreTitle>
        <div className="title">
          <div>{gameInfo.homeName}</div>
          <div>{winMark === 0 ? '승' : '패'}</div>
          {/* <div>승-하비에르</div> */}
        </div>
        <img src="/assets/cap.png" alt="" />
        <div className="score">{scoreInfo[0]}</div>
        <div className="status">
          <div className="now">시뮬레이션</div>
          <div className="date">{gameInfo.weatherTemp} ℉</div>
          <div className="stadium">{gameInfo.weatherWind}</div>
        </div>
        <div className="score">{scoreInfo[1]}</div>
        <img src="/assets/cap.png" alt="" />
        <div className="title">
          <div>{gameInfo.awayName}</div>
          <div>{winMark === 1 ? '승' : '패'}</div>
          {/* <div>패-페레즈</div> */}
        </div>
      </ScoreTitle>
      <ScoreInfo>
        <div className="each">
          <div className="info">회차</div>
          <div>{gameInfo.homeName}</div>
          <div>{gameInfo.awayName}</div>
        </div>
      {
        scoreBoard.map(inning => {     
              
          return(
            <div className="each">
              <div className="info">_</div>
              <div>{inning.home}</div>
              <div>{inning.away}</div>
            </div>
          
          )
        })
      }
    
        {/* <div className="each">
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
        </div> */}
      </ScoreInfo>
    </Score>
  );
};

export default TeamScore;
