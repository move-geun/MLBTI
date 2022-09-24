import { useState } from "react";
import {
  LiveContainer,
  Score,
  ScoreTitle,
  ScoreInfo,
  ScoreHistory,
  TabMenu,
  Desc,
} from "./LivePage.style";

import Cheer from "../../components/cheer/Cheer";
import LiveComment from "../../components/livecomment/LiveComment";

const LivePage = () => {

  const [currentTab, setCurrentTab] = useState(0);

  const tabList = [
    {tabName: '1회', id: 'game1', content:'타자 1 : 스트라이크2'},
    {tabName: '2회', id: 'game2', content:'타자 2 : 스트라이크2'},
    {tabName: '3회', id: 'game3'},
    {tabName: '4회', id: 'game4'},
    {tabName: '5회', id: 'game5'},
    {tabName: '6회', id: 'game6'},
    {tabName: '7회', id: 'game7'},
    {tabName: '8회', id: 'game8'},
    {tabName: '9회', id: 'game9'},
];

const selectTabHandler = (index) => {
  setCurrentTab(index);
}



  return (
    <LiveContainer>
     
      <div className="title">문자 중계</div>
      
      <Cheer />
      <LiveComment />
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
      <TabMenu>
          {tabList.map((ele, index)=>{
            return (
              <li
              key={index}
              className={currentTab === index ? "submenu focused" : "submenu"}
              onClick={()=> selectTabHandler(index)}
            >
              {ele.tabName}
            </li>
              )
          })}

        </TabMenu>
        <Desc>
          <h5>{tabList[currentTab].content}</h5>
         
        </Desc>
      </ScoreHistory>
      
    </LiveContainer>
    
  );
};

export default LivePage;
