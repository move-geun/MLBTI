import { useEffect, useState } from "react";

import {
  BallCountContainer,
} from "./SimulationPage.style";


const BallCount = (prop) => {
  const [inningList, setInningList] = useState([]);
  const[ballCnt, setBallCnt] = useState('');
  const[strikeCnt, setStrikeCnt] = useState('');
  const[outCnt, setOutCnt] = useState('');
  const[inningindex, setInningIndex] = useState('');
  const [batterEvent, setBatterEvent]= useState('');


  useEffect(() => {
    if (prop.data !== null) {
        setInningList(prop.data);
      }
  }, [prop]);

  useEffect(()=>{

  },[ballCnt, strikeCnt, outCnt, inningindex]);

  useEffect(() => {
    if (inningList.length > 0) {
      async function processArray(inningList) {
        for (let inning of inningList) {
        //   console.log("현재 이닝!", inning.inning)
          for (let data of inning.datas) {
            await makeBatterList(data);
          }
        }
        console.log("Done!");
      }

      processArray(inningList);
    }
  }, [inningList]);

  async function makeBatterList(batter) {
    BSOcountSetting(batter);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    // await delay(2000)
  }

  const BSOcountSetting = (batter) => {
    setBatterEvent(batter.event);
    setBallCnt(batter.ballCount);
    setStrikeCnt(batter.strikeCount);
    setOutCnt(batter.outCount);
    setInningIndex(batter.inning);
  };


  const RenderBallCnt = () => {
    const result = [];
    if(ballCnt){
        if(ballCnt > 0){
            for (let i = 0; i < ballCnt; i++ ){
                result.push(<div className="circle ball"></div>);
            }
            if(ballCnt < 3){
                for(let i = 0; i < 3 - ballCnt; i++){
                    result.push(<div className="circle"></div>)
                }
            } 
        }
    }
    else{
        for(let i = 0; i < 3; i++){
            result.push(<div className="circle"></div>)
        }}
        return result;
    }
   

const RenderStrikeCnt = () => {
    const result = [];
    if(strikeCnt){
        if(strikeCnt > 0){
            for (let i = 0; i < strikeCnt; i++ ){
                result.push(<div className="circle strike"></div>);
            }
            if(strikeCnt < 3){
                for(let i = 0; i < 3 - strikeCnt; i++){
                    result.push(<div className="circle"></div>)
                }
            } 
        }
    }else{
        for(let i = 0; i < 2; i++){
            result.push(<div className="circle"></div>)
        }}
        return result;
}

const RenderOutCnt = () => {
    const result = [];
    if(outCnt){
        if(outCnt > 0){
            for (let i = 0; i < outCnt; i++ ){
                result.push(<div className="circle out"></div>);
            }
            if(outCnt < 3){
                for(let i = 0; i < 3 - outCnt; i++){
                    result.push(<div className="circle"></div>)
                }
            } 
        }
    }
    else{
        for(let i = 0; i < 2; i++){
            result.push(<div className="circle"></div>)
        }}
        return result;
}

  return (
    <div>
      <BallCountContainer>
        <div>{inningindex}회차</div>
        <div>{batterEvent}</div>
          <div className="count">
            <div className="title">B</div>
            <div className="circle_case">
             {RenderBallCnt()}
            </div>
          </div>
          <div className="count">
            <div className="title">S</div>
            <div className="circle_case">
              {RenderStrikeCnt()}
            </div>
          </div>
          <div className="count">
            <div className="title">O</div>
            <div className="circle_case">
             {RenderOutCnt()}
            </div>
          </div>
        </BallCountContainer>
    </div>
  );
};

export default BallCount;


