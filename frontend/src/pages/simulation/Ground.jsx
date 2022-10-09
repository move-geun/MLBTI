import { useEffect, useState } from "react";

import {
  Groundmap,
  BaseBall,
  FirstB,
  SecondB,
  ThirdB,
  BatterEvent,
  BatterName,
} from "./SimulationPage.style";

const Ground = (prop) => {
  const [inningList, setInningList] = useState([]);
  // const [batterList, setBatterList] = useState([]);
  const [firstBase, setFirstBase] = useState(false);
  const [secondBase, setSecondBase] = useState(false);
  const [thirdBase, setThirdBase] = useState(false);
  const [batterEvent, setBatterEvent] = useState("");
  const [hitterName, sethitterName] = useState("");

  // console.log("ground에 야니정보 들어옴??", prop.data);
  useEffect(() => {
    if (prop.data !== null) {
      setInningList(prop.data);
    }
  }, [prop]);

  useEffect(() => {
    if (inningList) {
      // if (inningList.length > 0) {
      async function processArray(inningList) {
        for (let inning of inningList) {
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
      <Groundmap>
        <BaseBall src={"/assets/baseball.png"} />
        {firstBase && <FirstB className="base1" src={"/assets/base.png"} />}
        {secondBase && <SecondB className="base2" src={"/assets/base.png"} />}
        {thirdBase && <ThirdB className="base3" src={"/assets/base.png"} />}
        {/* <FirstB className="base1" src={"/assets/base.png"} />
        <SecondB className="base2" src={"/assets/base.png"} />
        <ThirdB className="base3" src={"/assets/base.png"} /> */}
        <BatterEvent>
          {hitterName} <BatterName> {batterEvent}</BatterName>
        </BatterEvent>
      </Groundmap>
    </div>
  );
};

export default Ground;
