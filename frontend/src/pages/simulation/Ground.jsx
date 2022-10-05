import { letterSpacing } from "@mui/system";
import { useEffect, useState } from "react";

import {
    GroundWrap,
    Img,
    BallWrap,
    BaseBall,
    BatterWrap,
    BatterEvent,
    BatterName,
    Base,
    FirstB,
    SecondB,
    ThirdB,
  } from "./SimulationPage.style";

const Ground = (prop) => { 

    const [inningList, setInningList] = useState([]);
    const [batterList, setBatterList] = useState([]);
    const [firstBase, setFirstBase] = useState(false);
    const [secondBase, setSecondBase]= useState(false);
    const [thirdBase, setThirdBase] = useState(false);

    useEffect(()=>{
        if(prop.data !== null){
            setInningList(prop.data);
        }      
    }, [prop])

    useEffect(()=> {
        if(inningList.length >0 ){
            
            async function processArray(inningList) {
            for (let inning of inningList) {
            // console.log("현재 이닝!", inning.inning)
                for(let data of inning.datas){
                    await makeBatterList(data)
                }                    
                }
                console.log('Done!');
              }
                
              processArray(inningList);
       
        }
    }, [inningList]);
    
     async function makeBatterList(batter) {
        baseSetting(batter)
        await new Promise(resolve => setTimeout(resolve, 3000));
        // await delay(2000)

    }
  
    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));

    }

    const [batterEvent, setBatterEvent] = useState('');
    const [hitterName, sethitterName ] = useState('');

    const baseSetting = (batter) => {
        // console.log("2초 뒤에 간ㄷ", batter);
        setFirstBase(batter.firstBase);
        setSecondBase(batter.secondBase);
        setThirdBase(batter.thirdBase);
        setBatterEvent(batter.event);
        sethitterName(batter.batterName);

    }

    useEffect(()=> {
        // console.log("event 알려줘", batterEvent);
    }, [batterEvent, hitterName]);

    return (
        <GroundWrap>

        <Img className="ground" src={"/assets/Ground.png"}/>
        <BallWrap>
            <BaseBall src={"/assets/baseball.png"}/>
        </BallWrap>
        <BatterWrap>
            <BatterEvent> {hitterName}  <BatterName> {batterEvent}</BatterName></BatterEvent>
        </BatterWrap>
       
        {firstBase && <FirstB className="base1" src={"/assets/base.png"}/>}
        {secondBase &&  <SecondB className="base2" src={"/assets/base.png"}/>}
        {thirdBase &&  <ThirdB className="base3" src={"/assets/base.png"}/>}
       
        </GroundWrap>
            
    );
};

export default Ground;
