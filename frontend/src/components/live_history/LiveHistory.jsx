import React from 'react';
import { useEffect, useState } from 'react';
import TabLiveHistory from './TabLiveHistory';


const defaultValue = {};
const LiveHistory = (prop = defaultValue) => {
    const [ liveHistory, setLiveHistory] = useState([]);
    // let inningsList = [];

    useEffect(()=> {
      if(prop.livedata.gamePk){
        const keys = Object.keys(prop.livedata.inngings);
        const value = [];

        for(let i = 0; i < keys.length; i++){
          const key = keys[i];
          // inningsList[i] = prop.livedata.inngings[key];
          setLiveHistory(prevList => [...prevList, prop.livedata.inngings[key]]);
        }
      }     
    }, [prop]);

    useEffect(()=>{
    
     }, [liveHistory])

  return (
    <div>
      <TabLiveHistory livedata={liveHistory}/>
    </div>
  )
} 

export default LiveHistory;