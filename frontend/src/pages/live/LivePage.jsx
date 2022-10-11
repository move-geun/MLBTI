import { useEffect, useState } from "react";
import {
  LiveContainer,
  ScoreHistory,
  TopContainer,
  LiveEnjoyContainer,
  MLBPlayer,
  Img,
} from "./LivePage.style";

import Cheer from "../../components/cheer/Cheer";
import LiveComment from "../../components/livecomment/LiveComment";
import { playData } from "./live-slice";
import { useDispatch } from "react-redux";

const LivePage = () => {
  const [liveData, setLiveData] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(playData())
      .unwrap()
      .then((res) => {
        setLiveData(res);
        inningsInfo(res.inngings);
      });
  }, []);

  function inningsInfo(data) {
    let inningList = [];

    data.forEach((value, index, array) => {
      inningList.push(value);
    });
  }

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
        {/* <LiveHistory livedata = {liveData}/> */}
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
