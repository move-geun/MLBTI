import { letterSpacing } from "@mui/system";
import { useEffect, useState } from "react";

import {
    Img,
    BaseBall,
    Base,
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
            let list = [];
                inningList.map(inning => {        
                console.log("innningggin", inning);   
                // setInterval(()=> makeBatterList(inning), 3000); 
                // setTimeout( ()=> makeBatterList(inning), 3000);
                
                
                list.push(inning);
                makeBatterList(list);
                
                
                // inning.datas.map(batter => {
                //     // console.log("batttterrr  ", batter);

                    
                    
                // })
            })
        }
    }, [inningList]);

    const fooor = () => {
        
        inningList.map()


    }

    const makeBatterList = (list) => {
        console.log("3초마다 메이커 들어오니   ", list);
            // inning.dats.map(batter => {
            //     baseSetting(batter);
            // })
       
    }



    const baseSetting = (batter) => {
        console.log("10초마다 실행되고 있니");
        setFirstBase(batter.firstBase);
        setSecondBase(batter.secondBase);
        setThirdBase(batter.thirdBase);

    }

    const showSimul = () => {



       return(
        <>
            {firstBase && <Base className="base1" src={"/assets/base.png"}/>}
            {secondBase && <Base className="base2" src={"/assets/base.png"}/>}
            {thirdBase && <Base className="base3" src={"/assets/base.png"}/>}
        </>
       )


    }





    return (
        <>
            <Img className="ground" src={"/assets/Ground.png"} />
            <BaseBall src={"/assets/baseball.png"}/>
            {showSimul}
        </>
            
    );
};

export default Ground;
