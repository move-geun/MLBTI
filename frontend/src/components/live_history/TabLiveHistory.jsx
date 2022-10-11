import React, { useEffect, useState } from 'react';


// 탭 디자인
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import {
  StatusBtn, BatContainer, BatterContainer, 
  Batter, BatterResult, BatterResultList, 
  // CircleStrike, CircleBall, CircleSwing,
} from "./LiveHistory.style";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const defaultValue = {};
export default function TabLiveHistory(prop = defaultValue) {

  const [value, setValue] = useState();
  // 이닝은 12회까지 미리 선언해둘 것
  // 각 이닝에는 (0,1) (2,3) 순서대로 값이 들어가서
  // 리스트로 둘 것

  const[innings, setInnings] = useState([]);
//   const[batterList, setBatterList] = useState([]);
  const[batterInfo, setBatterInfo] = useState([]);
  const[playStatus, setPlayStatus] = useState(true);
  const[inningsLength, setInningsLength] = useState();
  // const[ setInningsLength] = useState();
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const onClickTopPlay = (e) =>{
    e.preventDefault();
    setPlayStatus(true);
  };
  const onClickBottomPlay = (e) => {
    e.preventDefault();
    setPlayStatus(false);
  };


    useEffect(()=>{
        setValue(0);
    }, []);

    
    useEffect(()=>{
        if(value !== null){
            MakebatterList(value);
        }
    },[value])

    useEffect(()=> {    
        if(prop.livedata[0]){
          setInningsLength(prop.livedata.length/2);
            prop.livedata.map(inning => {
                setInnings(previnnings => [...previnnings, inning]);
            })           
        }
    }, [prop]);

    useEffect(()=> {
        MakebatterList(value);
    }, [innings]);

    useEffect(()=> {
      MakebatterList(value);
    }, [playStatus])

    useEffect(()=> {
      // BatterInfoHandler(batterInfo);
  },[batterInfo]);

    useEffect(()=> {
      // TabContent();
    }, [setInningsLength]);



    const MakebatterList = (value) => {
        let batterList = []; 
        innings.map(batter => {
            if(batter.inning == value +1){
                batterList.push(batter);

            }      
        }) 
       
        if(batterList.length !== 0){
            ContentTabValue(batterList);
        }
        
    }



  
const ContentTabValue = (batterList) => {
    if(playStatus){
        setBatterInfo(batterList[0]);

    }
    else {
        setBatterInfo(batterList[1]);
    }

}


// const [firstBase, setFirstBase] = useState(false);
// const [secondBase, setSecondeBase] = useState(false);
// const [thirdBase, setThirdBase] = useState(false);


const BatterInfoHandler = () => {
    if(batterInfo.length !== 0){
      batterInfo.datas.map(info => {
        return(
            <div>타자 {info.batterName}은 {info.event}입니다. </div>
        )
      })} else {
      return(<div>값을 불러오는 중입니다.</div>)

    }
}
let checkBallList = [];
 
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="1회차" {...a11yProps(0)} />
          <Tab label="2회차" {...a11yProps(1)} />
          <Tab label="3회차" {...a11yProps(2)} />
          <Tab label="4회차" {...a11yProps(3)} />
          <Tab label="5회차" {...a11yProps(4)} />
          <Tab label="6회차" {...a11yProps(5)} />
          <Tab label="7회차" {...a11yProps(6)} />
          <Tab label="8회차" {...a11yProps(7)} />
          <Tab label="9회차" {...a11yProps(8)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <StatusBtn onClick={onClickTopPlay}>{value+1}회 초</StatusBtn>
        <StatusBtn onClick={onClickBottomPlay}>{value+1}회 말</StatusBtn>
        <BatContainer> 
          {batterInfo.length !== 0 ? 
              (batterInfo.datas.map(info => {
              
                
                
                  return(
                      <BatterContainer>
                        <Batter>타자 {info.batterName} </Batter>
                        <BatterResult> {info.batterName} : {info.event}</BatterResult>
                        <BatterResultList>{info.firstBase}</BatterResultList>
                      </BatterContainer>
                  )
              })) :
              (<div>값을 불러오는 중입니다.</div>)
          }
          </BatContainer>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <StatusBtn onClick={onClickTopPlay}>{value+1}회 초</StatusBtn>
        <StatusBtn onClick={onClickBottomPlay}>{value+1}회 말</StatusBtn>
        {BatterInfoHandler}
      </TabPanel>
      <TabPanel value={value} index={2}>
        <StatusBtn onClick={onClickTopPlay}>{value+1}회 초</StatusBtn>
        <StatusBtn onClick={onClickBottomPlay}>{value+1}회 말</StatusBtn>
        
        {/* <div onClick={onClickTopPlay}> {value+1}회 초</div>
        <div onClick={onClickBottomPlay}>{value+1}회 말</div> */}
            {batterInfo.length !== 0 ? 
                (batterInfo.datas.map(info => {
                    return(
                        <div>타자 {info.batterName}은 {info.event}입니다. </div>
                    )
                })) :
                (<div>값을 불러오는 중입니다.</div>)
            }
      </TabPanel>
      <TabPanel value={value} index={3}>
        <StatusBtn onClick={onClickTopPlay}>{value+1}회 초</StatusBtn>
        <StatusBtn onClick={onClickBottomPlay}>{value+1}회 말</StatusBtn>
            {batterInfo.length !== 0 ? 
                (batterInfo.datas.map(info => {
                    return(
                        <div>타자 {info.batterName}은 {info.event}입니다. </div>
                    )
                })) :
                (<div>값을 불러오는 중입니다.</div>)
            }
      </TabPanel>
      <TabPanel value={value} index={4}>
        <StatusBtn onClick={onClickTopPlay}>{value+1}회 초</StatusBtn>
        <StatusBtn onClick={onClickBottomPlay}>{value+1}회 말</StatusBtn>
            {batterInfo.length !== 0 ? 
                (batterInfo.datas.map(info => {
                    return(
                        <div>타자 {info.batterName}은 {info.event}입니다. </div>
                    )
                })) :
                (<div>값을 불러오는 중입니다.</div>)
            }
      </TabPanel>
      
      <TabPanel value={value} index={5}>
        <StatusBtn onClick={onClickTopPlay}>{value+1}회 초</StatusBtn>
        <StatusBtn onClick={onClickBottomPlay}>{value+1}회 말</StatusBtn>
            {batterInfo.length !== 0 ? 
                (batterInfo.datas.map(info => {
                    return(
                        <div>타자 {info.batterName}은 {info.event}입니다. </div>
                    )
                })) :
                (<div>값을 불러오는 중입니다.</div>)
            }
      </TabPanel>

      <TabPanel value={value} index={6}>
        <StatusBtn onClick={onClickTopPlay}>{value+1}회 초</StatusBtn>
        <StatusBtn onClick={onClickBottomPlay}>{value+1}회 말</StatusBtn>
            {batterInfo.length !== 0 ? 
                (batterInfo.datas.map(info => {
                    return(
                        <div>타자 {info.batterName}은 {info.event}입니다. </div>
                    )
                })) :
                (<div>값을 불러오는 중입니다.</div>)
            }
      </TabPanel>

      <TabPanel value={value} index={7}>
        <StatusBtn onClick={onClickTopPlay}>{value+1}회 초</StatusBtn>
        <StatusBtn onClick={onClickBottomPlay}>{value+1}회 말</StatusBtn>
            {batterInfo.length !== 0 ? 
                (batterInfo.datas.map(info => {
                    return(
                        <div>타자 {info.batterName}은 {info.event}입니다. </div>
                    )
                })) :
                (<div>값을 불러오는 중입니다.</div>)
            }
      </TabPanel>

      <TabPanel value={value} index={8}>
        <StatusBtn onClick={onClickTopPlay}>{value+1}회 초</StatusBtn>
        <StatusBtn onClick={onClickBottomPlay}>{value+1}회 말</StatusBtn>
            {batterInfo.length !== 0 ? 
                (batterInfo.datas.map(info => {
                    return(
                        <div>타자 {info.batterName}은 {info.event}입니다. </div>
                    )
                })) :
                (<div>값을 불러오는 중입니다.</div>)
            }
      </TabPanel>
    </Box>
  );
}








// const[inning1, setInning1] = useState([]);
// const[inning2, setInning2] = useState([]);
// const[inning3, setInning3] = useState([]);
// const[inning4, setInning4] = useState([]);
// const[inning5, setInning5] = useState([]);
// const[inning6, setInning6] = useState([]);
// const[inning7, setInning7] = useState([]);
// const[inning8, setInning8] = useState([]);
// const[inning9, setInning9] = useState([]);
// const[inning10, setInning10] = useState([]);
// const[inning11, setInning11] = useState([]);
// const[inning12, setInning12] = useState([]);



// const [tabContentList, setTabContentList] = useState();

// const TabContent = () => {


//       const TabContentList = '';
//       for(let i = 0; i< inningsLength < 0; i++){
//         const string = 
//         setTabContentList(<TabPanel value={value} index={i}>
//           만들어져라 얍!
//         </TabPanel>)

        
//       }
    

  
// }

// 사용 안 함
