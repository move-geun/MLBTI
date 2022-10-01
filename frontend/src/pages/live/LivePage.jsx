import { useEffect, useState } from "react";
import {
  LiveContainer,
  Score,
  ScoreTitle,
  ScoreInfo,
  ScoreHistory,
  TabMenu,
  Desc,
  TopContainer,
  LiveEnjoyContainer,
  MLBPlayer,
  Img,
} from "./LivePage.style";

import Cheer from "../../components/cheer/Cheer";
import LiveComment from "../../components/livecomment/LiveComment";
import http from "../../api/http";
import {  playData } from "./live-slice";
import { useDispatch } from "react-redux";
import LiveHistory from "../../components/live_history/LiveHistory";

const LivePage = () => {

  const [currentTab, setCurrentTab] = useState(0);
  const [liveData, setLiveData] = useState({});
  const [innings, setInnings] = useState([]);
  const [ statusIsTop, setStatusIsTop ] = useState(true);

  const dispatch = useDispatch();



const selectTabHandler = (index) => {
  setCurrentTab(index);
}

  
useEffect(() => {
  dispatch(playData())
    .unwrap()
    .then((res) => {
      setLiveData(res);
      console.log("res!! ", res);
      inningsInfo(res.inngings);

    });
}, []);


 function inningsInfo(data) {

  let inningList = [];
  const count = 0;


  data.forEach((value, index,array ) => {
    // console.log(`${index}`);
    inningList.push(value);
   })
}

function batterInfo(data){
  let batterList = [];
  batterList.push(data);
}


let tabList = [{
  tabName: '',
  content: '',
}];



  return (
    <LiveContainer>
     
      <div className="title">문자 중계</div>
      <TopContainer>
        <MLBPlayer>
          <Img className="ground" src={"/assets/Ground.png"} />
        </MLBPlayer>
      
        <LiveEnjoyContainer>
          <Cheer />
          <LiveComment />
        </LiveEnjoyContainer>
      </TopContainer>
    
      <ScoreHistory>
        <LiveHistory livedata = {liveData}/>
      {/* <TabMenu>
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
         
        </Desc> */}
      </ScoreHistory>
      
    </LiveContainer>
    
  );
};

export default LivePage;
