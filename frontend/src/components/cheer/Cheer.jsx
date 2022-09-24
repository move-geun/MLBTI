import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import {
    LogoFirstTeam,
    LogoSecondTeam,
    CheerContainer,
    ProgressBar,
    Progress,
    BarContainer,
} from "./Cheer.style"

/**

* @FileName : Cheer.jsx, 
* @Date : 2022. 9. 22
* @작성자 : 정민지
* @변경이력 : x
* @프로그램 설명 : 팀 응원 컴포넌트
*/


const Cheer = () => {

    const [cheerScore, setCheerScore] = useState(
        {team1: 25, team2: 31, total: 56}
    );

    const [totalScore, setTotalScore] = useState(); 
    const [firstTeam, setFirstTeam] = useState();
    const [secondTeam, setSecondTeam] = useState();

    let rate = (secondTeam/totalScore)* 100;
    const scoreHandler = () => {
        let rate = (secondTeam/totalScore)* 100;
        console.log("비율", rate);
    }
    
    const onCheer1TeamHandler = () => {
        setTotalScore(totalScore + 1);
        setFirstTeam(firstTeam + 1);
        scoreHandler();
        console.log("로고1 누름");
        
    }

    const onCheer2TeamHandler = () => {
        setTotalScore(totalScore + 1);
        setSecondTeam(secondTeam + 1);
        scoreHandler();
        console.log("로고2 누름");
        console.log("두번째 팀 값", secondTeam);
       
    }


    useEffect(() => {
        
        setFirstTeam(cheerScore.team1);
        setSecondTeam(cheerScore.team2);
        setTotalScore(cheerScore.total);

    }, []);

    useEffect(() => {
        console.log("전체 응원 수", totalScore);
        // axios.put()
        // .then(function(result){
        //     setCheerScore(result.data);
        //   }).catch(function(err){
        //     console.log(err);
        //   });
    }, [totalScore]);

    
    return (

        <CheerContainer >
            <LogoFirstTeam onClick={onCheer1TeamHandler} src={"/assets/teamlogo1.png"} />
            <div>{Math.round(100 -rate)}</div>
            <LogoSecondTeam onClick={onCheer2TeamHandler} src={"/assets/teamlogo2.png"} />
            <div>{Math.round(rate)}</div>
            
            <BarContainer>
                <ProgressBar>
                    <Progress data = {rate} />
                </ProgressBar>
            </BarContainer>



        </CheerContainer>
    )
} 

export default Cheer;