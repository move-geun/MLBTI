import React, { useEffect, useState } from 'react';


// 탭 디자인
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
            cccc(value);
        }
    },[value])

    useEffect(()=> {    
        if(prop.livedata[0]){
          console.log("이닝길이", prop.livedata.length);
          setInningsLength(prop.livedata.length/2);
            prop.livedata.map(inning => {
                // setInnings([...innings, inning]);
                setInnings(previnnings => [...previnnings, inning]);
            })           
        }
    }, [prop]);

    useEffect(()=> {
        cccc(value);
    }, [innings]);

    useEffect(()=> {
      cccc(value);
    }, [playStatus])

    useEffect(()=> {
      BatterInfoHandler(batterInfo);
  },[batterInfo]);

    useEffect(()=> {
      // TabContent();
    }, [setInningsLength]);



    const cccc = (value) => {
        console.log("Ccccccc", value);
        let batterList = []; 
        innings.map(batter => {
            if(batter.inning == value +1){
                batterList.push(batter);
                // console.log("batter   ", batter);    
            }      
        }) 
       
        if(batterList.length !== 0){
            console.log("liiiiiiiiiii ", batterList)
            ContentTabValue(batterList);
        }
        
    }



  
const ContentTabValue = (batterList) => {
    console.log("content 도는 중 ", batterList);
    if(playStatus){
        console.log(batterList[0]);
        setBatterInfo(batterList[0]);

    }
    else {
        console.log(batterList[1]);
        setBatterInfo(batterList[1]);
    }

}



const BatterInfoHandler = (batterInfo) => {
    if(batterInfo.length !== 0){
        batterInfo.datas.map(info => {
            // console.log("batterrrrrInfooo,  ", info);
            
            console.log("타자 ", info.batterName, "은  ", info.event , "  입니다.")
        })
    }
    
}



 
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
        <button onClick={(()=> onClickTopPlay)}>초</button>
        <button onClick={(()=> onClickBottomPlay)}>말</button>
          {batterInfo.length !== 0 ? 
              (batterInfo.datas.map(info => {
                  return(
                      <div>타자 {info.batterName}은 {info.event}입니다. </div>
                  )
              })) :
              (<div>값을 불러오는 중입니다.</div>)
          }
      </TabPanel>
      <TabPanel value={value} index={1}>
        <button onClick={(()=> onClickTopPlay)}>초</button>
        <button onClick={(()=> onClickBottomPlay)}>말</button>
            {batterInfo.length !== 0 ? 
                (batterInfo.datas.map(info => {
                    return(
                        <div>타자 {info.batterName}은 {info.event}입니다. </div>
                    )
                })) :
                (<div>값을 불러오는 중입니다.</div>)
            }
      </TabPanel>
      <TabPanel value={value} index={2}>
        <button onClick={(()=> onClickTopPlay)}>초</button>
        <button onClick={(()=> onClickBottomPlay)}>말</button>
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
        <button onClick={(()=> onClickTopPlay)}>초</button>
        <button onClick={(()=> onClickBottomPlay)}>말</button>
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
        <button onClick={(()=> onClickTopPlay)}>초</button>
        <button onClick={(()=> onClickBottomPlay)}>말</button>
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
        <button onClick={(()=> onClickTopPlay)}>초</button>
        <button onClick={(()=> onClickBottomPlay)}>말</button>
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
        <button onClick={(()=> onClickTopPlay)}>초</button>
        <button onClick={(()=> onClickBottomPlay)}>말</button>
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
        <button onClick={(()=> onClickTopPlay)}>초</button>
        <button onClick={(()=> onClickBottomPlay)}>말</button>
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
        <button onClick={(()=> onClickTopPlay)}>초</button>
        <button onClick={(()=> onClickBottomPlay)}>말</button>
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

//       console.log("얍얍얍", inningsLength);

//       const TabContentList = '';
//       for(let i = 0; i< inningsLength < 0; i++){
//         const string = 
//         setTabContentList(<TabPanel value={value} index={i}>
//           만들어져라 얍!
//         </TabPanel>)

        
//       }
    

  
// }