import { useEffect, useState } from "react";

import {
  Groundmap,
  BaseBall,
  FirstB,
  SecondB,
  ThirdB,
  BatterEvent,
  BatterName,
  BallCountContainer,
} from "./SimulationPage.style";

const BallCount = (prop) => {
  const [inningList, setInningList] = useState([]);
  // const [batterList, setBatterList] = useState([]);
  const [firstBase, setFirstBase] = useState(false);
  const [secondBase, setSecondBase] = useState(false);
  const [thirdBase, setThirdBase] = useState(false);
  const [batterEvent, setBatterEvent] = useState("");
  const [hitterName, sethitterName] = useState("");

  console.log("볼카운트 컴포넌트 ", prop);
  useEffect(() => {
    if (prop.data !== null) {
      setInningList(prop.data);
      console.log("여기는 ground", prop);
    }
  }, [prop]);

  useEffect(() => {
    if (inningList.length > 0) {
      async function processArray(inningList) {
        for (let inning of inningList) {
          // console.log("현재 이닝!", inning.inning)
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
    baseSetting(batter);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    // await delay(2000)
  }

  function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  const baseSetting = (batter) => {
    // console.log("2초 뒤에 간ㄷ", batter);
    setFirstBase(batter.firstBase);
    setSecondBase(batter.secondBase);
    setThirdBase(batter.thirdBase);
    setBatterEvent(batter.event);
    sethitterName(batter.batterName);
  };

  useEffect(() => {
    // console.log("event 알려줘", batterEvent);
  }, [batterEvent, hitterName]);

  return (
    <div>
      <BallCountContainer>
          <div className="count">
            <div className="title">B</div>
            <div className="circle_case">
              <div className="circle ball"></div>
              <div className="circle ball"></div>
              <div className="circle"></div>
            </div>
          </div>
          <div className="count">
            <div className="title">S</div>
            <div className="circle_case">
              <div className="circle strike"></div>
              <div className="circle"></div>
            </div>
          </div>
          <div className="count">
            <div className="title">O</div>
            <div className="circle_case">
              <div className="circle out"></div>
              <div className="circle"></div>
            </div>
          </div>
        </BallCountContainer>
    </div>
  );
};

export default BallCount;


