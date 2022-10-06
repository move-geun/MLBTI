// import React from 'react';
// import { useEffect, useState } from 'react';
// import TabLiveHistory from './TabLiveHistory';


// import {
//   TabMenu,
//   TabName,
//   StatusBtn,
//   BatterContatiner,
//   BatterResult
//  } from './SimulationResult.style';
 
 
//  import PropTypes from 'prop-types';
//  import Tabs from '@mui/material/Tabs';
//  import Tab from '@mui/material/Tab';
//  import Typography from '@mui/material/Typography';
 
//  import { current } from '@reduxjs/toolkit';


// const defaultValue = {};
// const LiveHistory = (prop = defaultValue) => {
//     const [ liveHistory, setLiveHistory] = useState([]);
//     // let inningsList = [];

//     useEffect(()=> {
//       if(prop.livedata.gamePk){
//         const keys = Object.keys(prop.livedata.inngings);
//         const value = [];

//         for(let i = 0; i < keys.length; i++){
//           const key = keys[i];
//           // inningsList[i] = prop.livedata.inngings[key];
//           setLiveHistory(prevList => [...prevList, prop.livedata.inngings[key]]);
//         }
//       }     
//     }, [prop]);

//     useEffect(()=>{
    
//      }, [liveHistory])

//   return (
//     <>
//     <div>
//         <Tabs                                                               
//             indicatorColor="primary"                                          
//             onChange={handleChange}                                       
//             scrollButtons="auto"                                              
//             sx={{ px: 1, fontWeight:'bold' }}                                                    
//             textColor="primary"                                               
//             value={currentTab}                                                
//             variant="scrollable">                                                                   
//           {tabs.map((tab) => (                          
//         <Tab                                        
//           key={tab.value}                           
//           label={
//             // 여기가 수정 됨
//             <Typography                             
//               sx={{                                 
//                 border: '2px solid',                
//                 borderColor: 'inherit',             
//                 borderRadius: 3,                    
//                 px: 3,                              
//                 fontSize: '1rem',                
//                 fontWeight: 'bold',                 
//               }}                                    
//             >                                       
//               {tab.label}                           
//             </Typography>                           
//           }                                         
//           value={tab.value}                         
//         />                                          
//       ))}                  
                                                   
//       </Tabs>

//       <div>
//       <StatusBtn onClick={onClickTopPlay}>{currentTab+1}회 초</StatusBtn>
//       <StatusBtn onClick={onClickBottomPlay}>{currentTab+1}회 말</StatusBtn>
//       <BatterContatiner>
//       {
//         batterList.batterName !== null ?
//         (batterList.map(b =>{
//           return(<BatterResult>타자 {b.batterName}  {b.batterEvent}</BatterResult>)
//         }))
//         :
//         (<div>데이터를 가져오는 중입니다.</div>)
//       }
//       </BatterContatiner>
// {/*         
//        <h1>{menuArr[currentTab].content}</h1> */}
//       </div>
//     </div>
//   </>
//   )
// } 

// export default LiveHistory;