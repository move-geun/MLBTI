import React from 'react';
import { useEffect, useState } from 'react';

import {
 TabMenu,
 StatusBtn
} from './SimulationResult.style';

const defaultValue = {};
const SimulationResult = (prop = defaultValue) => {
  
  

  const menuArr = [
  { name: '1회', content: 'Tab menu TWO'},
    { name: '2회', content: 'Tab menu TWO' },
    { name: '3회', content: 'Tab menu TWO'},
    { name: '4회', content: 'Tab menu TWO' },
    { name: '5회', content: 'Tab menu TWO' },
    { name: '6회', content: 'Tab menu TWO' },
    { name: '7회', content: 'Tab menu TWO' },
    { name: '8회', content: 'Tab menu TWO' },
    { name: '9회', content: 'Tab menu TWO' },
    { name: '10회', content: 'Tab menu TWO' },
    { name: '11회', content: 'Tab menu TWO' },
    { name: '12회', content: 'Tab menu TWO' },
  ];

  const [currentTab, setCurrentTab] = useState(0);
  const [inningList, setInningList] = useState([]);
  const [inningInfo, setInningInfo] = useState([]);
  const [inningStatus, setInningStatus] = useState(true);
 
  const [batterInfo, setBatterInfo] = useState();

  useEffect(()=> {
    if(prop.data.gamePk){
        setInningList(prop.data.inngings);
    }
  }, [prop]);

  useEffect(()=>{  
    if(inningList.length > 0){
      InfoHandler();
    }
  }, [inningList])

  useEffect(()=> {
    InfoHandler();
  }, [currentTab]);

  useEffect(()=> {
    InfoHandler();
  }, [inningStatus])


  useEffect(()=> {
    if (inningInfo.length !== 0 ){
      ResultContent();
    }
    else {
      console.log("현재 이닝에는 값이 없습니다.")
    }
  }, [inningInfo])


  // 한 이닝 값 전체를 핸들링
  const InfoHandler = () => { 
    if(inningList.length >0 ){
      // 초기화해주기
      setInningInfo([]);
      let info = [];
      inningList.map(inning => {        
        if(inning.inning == currentTab+1){
          info.push(inning);
            // setInningInfo(prev => [...prev, inning]);
        }
      })
      StatusHandler(info);
      
    }  
  }

  // 초, 말에 따라 값 핸들링
  const StatusHandler = (info) => {
    if(inningStatus){
      setInningInfo(info[0]);
    }
    else {
      setInningInfo(info[1]);
    }
  }

  const [batterList, setBatterList] = useState([]);

  // 회 -> 초,말까지 선택한 후의 inning의 datas 가져오기
  const ResultContent = () => {
    setBatterList([]);
    inningInfo.datas.map( batter =>{
      
      let batInfo = {
        batterName: batter.batterName,
        batterEvent : batter.event
      }
      setBatterList(prev => [...prev, batInfo]);
     
    })
  
    
   
  }



  const onClickHandler = (index) => {
    setCurrentTab(index);
  }

  const onClickTopPlay = (e) =>{
    setInningStatus(true);
  };
  const onClickBottomPlay = (e) => {
    setInningStatus(false);
  };


  return (
    <>
      <div>
        <TabMenu>
        {
           menuArr.map((v, idx) => {
            return <li onClick={()=> onClickHandler(idx)}>{v.name}</li>
          })
        } 
        </TabMenu>
        <div>
        <StatusBtn onClick={onClickTopPlay}>{currentTab+1}회 초</StatusBtn>
        <StatusBtn onClick={onClickBottomPlay}>{currentTab+1}회 말</StatusBtn>
        {
          batterList.batterName !== null ?
          (batterList.map(b =>{
            return(<div>투수 {b.batterName}  {b.batterEvent}</div>)
          }))
          :
          (<div>데이터를 가져오는 중입니다.</div>)
        }
{/*         
         <h1>{menuArr[currentTab].content}</h1> */}
        </div>
      </div>
    </>
  )
} 

export default SimulationResult;