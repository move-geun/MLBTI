import { Score, ScoreTitle, ScoreInfo } from "./TeamScore.style";
import React from 'react';
import { useEffect, useState } from 'react';
 
const TeamScore = (prop) => {

  const [gameInfo, setGameInfo] = useState({});
  const [scoreBoard, setScoreBoard] = useState([]);
  const [scoreInfo, setScoreInfo] = useState([]);

  let cnt = 0;
  let list = [];

  useEffect(()=> {
    if(prop.data.gamePk){
        setGameInfo(prop.data);
    }
  }, [prop]);


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
  
        { scoreBoard.map(inning => {     
            cnt += 1;
          return(
            <div className="each">
              <div className="info">{cnt}</div>
              <div>{inning.home}</div>
              <div>{inning.away}</div>
            </div>
          
          )
        })
      }
      </ScoreInfo>
    </Score>
  );
};

export default TeamScore;
