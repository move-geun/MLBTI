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

const Ground = (prop, ) => {
  const [inningList, setInningList] = useState([]);
  const [firstBase, setFirstBase] = useState(false);
  const [secondBase, setSecondBase] = useState(false);
  const [thirdBase, setThirdBase] = useState(false);
  const [batterEvent, setBatterEvent] = useState("");
  const [hitterName, sethitterName] = useState("");

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
    setFirstBase(batter.firstBase);
    setSecondBase(batter.secondBase);
    setThirdBase(batter.thirdBase);
    setBatterEvent(batter.event);
    sethitterName(batter.batterName);
  };

  useEffect(() => {
  }, [batterEvent, hitterName]);

  return (
    <div>
      <Groundmap>
        <BaseBall src={"/assets/baseball.png"} />
        {firstBase && <FirstB className="base1" src={"/assets/base.png"} />}
        {secondBase && <SecondB className="base2" src={"/assets/base.png"} />}
        {thirdBase && <ThirdB className="base3" src={"/assets/base.png"} />}
        <BatterEvent>
          {hitterName} <BatterName> {batterEvent}</BatterName>
        </BatterEvent>
      </Groundmap>
    </div>
  );
};

export default Ground;
