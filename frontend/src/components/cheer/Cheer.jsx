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

    // API에서 가져온 전체 정보 저장
    const [cheerScore, setCheerScore] = useState({
        homeName: '',
        awayName: '',
        homeCount: 0,
        awayCount: 0,
    });
    const [totalScore, setTotalScore] = useState(); 
    const [homeTeam, setHomeTeam] = useState();
    const [awayTeam, setAwayTeam] = useState();
    const [cheerRate, setCheerRate] = useState();
    const [isHome, setisHome] = useState(true);
 
    useEffect(() => {
   
        axios({
            method: "get", // [요청 타입]
            url: process.env.REACT_APP_DB_HOST+`/cheering/info`, // [요청 주소]
            params: {gamePk: 100}, // [요청 데이터]
            headers: {
                "Content-Type" : "application/x-www-form-urlencoded;"
            }, // [요청 헤더]
            timeout: 5000 // [타임 아웃 시간]

            //responseType: "json" // [응답 데이터 : stream , json]
        })
        .then(function(response) {
           const resData = response.data.data;
           setCheerScore({
                homeName: resData.homeName,
                awayName: resData.awayName,
                homeCount: resData.homeCount,
                awayCount: resData.awayCount,
           });
           
           
           setHomeTeam(cheerScore.homeCount);
           setAwayTeam(cheerScore.awayCount);
           setTotalScore(resData.homeCount + resData.awayCount);
           
           
     
        })
        .catch();
    
    }, []);


    useEffect(()=> {
        const rate = ((cheerScore.awayCount/totalScore) * 100);
        setCheerRate(rate);

        axios({
            method: "put", // [요청 타입]
            url: process.env.REACT_APP_DB_HOST+`/cheering`, // [요청 주소]
            params: {gamePk: 100, isHome: isHome}, // [요청 데이터]
            headers: {
                "Content-Type" : "application/x-www-form-urlencoded;"
            }, // [요청 헤더]
            timeout: 5000 // [타임 아웃 시간]

            //responseType: "json" // [응답 데이터 : stream , json]
        })
        .then(function(response) {



        })
         .catch(function(error) {
             console.log("ERROR : " + JSON.stringify(error));
         });


    }, [totalScore])

        
    const scoreHandler = () => {
        const rate = (awayTeam/totalScore)* 100;
        setCheerRate(rate);
    }
    
    const onCheerHomeTeamHandler = () => {
        setisHome(true);
        setTotalScore(totalScore + 1);
        setCheerScore(prev => ({
            ...prev,
            homeCount : prev.homeCount+1
        }))
        setHomeTeam(homeTeam + 1);
        scoreHandler();   
    }

    const onCheerAwayTeamHandler = () => {
        setisHome(false);
        setTotalScore(totalScore + 1);
        setAwayTeam(awayTeam + 1);
        setCheerScore(prev => ({
            ...prev,
            awayCount : prev.awayCount+1
        }))
        scoreHandler();   
    }
    
    return (


        cheerRate !== null ? 
            (
            <CheerContainer >
            <LogoFirstTeam onClick={onCheerHomeTeamHandler} src={"/assets/teamlogo1.png"}  />
            <span>{cheerScore.homeName} </span>
            <span>{Math.round(100 - cheerRate)} %</span>
                <LogoSecondTeam onClick={onCheerAwayTeamHandler} src={"/assets/teamlogo2.png"} />
            <span>{cheerScore.awayName} </span>
            <span>{Math.round(cheerRate)} %</span>
            
            <BarContainer>
                <ProgressBar>
                    <Progress data = {cheerRate} />
                </ProgressBar>
            </BarContainer>
        </CheerContainer>
        )
        :
        <div> 값을 불러오는 중입니다.</div>
        
        
       
    )
} 

export default Cheer;