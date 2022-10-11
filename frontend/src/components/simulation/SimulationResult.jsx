import React from "react";
import { useEffect, useState } from "react";

import {
  StatusContainer,
  SimulDiv,
  StatusBtn,
  BatterContatiner,
  BatterResult,
} from "./SimulationResult.style";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

const defaultValue = {};
const SimulationResult = (prop = defaultValue) => {
  const [currentTab, setCurrentTab] = useState(0);
  const [inningList, setInningList] = useState([]);
  const [inningInfo, setInningInfo] = useState([]);
  const [inningStatus, setInningStatus] = useState(true);
  const [batterList, setBatterList] = useState([]);
  // const [batterInfo, setBatterInfo] = useState();

  useEffect(() => {
    if (prop.data.gamePk) {
      setInningList(prop.data.inngings);
    }
  }, [prop]);

  useEffect(() => {
    if (inningList.length > 0) {
      InfoHandler();
    }
  }, [inningList]);

  useEffect(() => {
    InfoHandler();
  }, [currentTab]);

  useEffect(() => {
    InfoHandler();
  }, [inningStatus]);

  useEffect(() => {
    if (inningInfo.length !== 0) {
      ResultContent();
    } else {
    }
  }, [inningInfo]);

  // 한 이닝 값 전체를 핸들링
  const InfoHandler = () => {
    if (inningList.length > 0) {
      // 초기화해주기
      setInningInfo([]);
      let info = [];
      inningList.map((inning) => {
        if (inning.inning == currentTab + 1) {
          info.push(inning);
          // setInningInfo(prev => [...prev, inning]);
        }
      });
      StatusHandler(info);
    }
  };

  // 초, 말에 따라 값 핸들링
  const StatusHandler = (info) => {
    if (inningStatus) {
      setInningInfo(info[0]);
    } else {
      setInningInfo(info[1]);
    }
  };

  // 회 -> 초,말까지 선택한 후의 inning의 datas 가져오기
  const ResultContent = () => {
    setBatterList([]);
    inningInfo.datas.map((batter) => {
      let batInfo = {
        batterName: batter.batterName,
        batterEvent: batter.event,
      };
      setBatterList((prev) => [...prev, batInfo]);
    });
  };

  const onClickTopPlay = (e) => {
    setInningStatus(true);
  };
  const onClickBottomPlay = (e) => {
    setInningStatus(false);
  };
  const handleChange = (event, newValue) => {
    setCurrentTab(newValue);
    setInningStatus(true);
  };

  const tabs = [
    { label: "1회" },
    { label: "2회" },
    { label: "3회" },
    { label: "4회" },
    { label: "5회" },
    { label: "6회" },
    { label: "7회" },
    { label: "8회" },
    { label: "9회" },
    { label: "10회" },
    { label: "11회" },
    { label: "12회" },
  ];

  return (
    <SimulDiv>
      <Tabs
        className="simul_tab"
        indicatorColor="primary"
        onChange={handleChange}
        scrollButtons="auto"
        sx={{ px: 1, fontWeight: "bold" }}
        textColor="primary"
        value={currentTab}
        variant="scrollable"
      >
        {tabs.map((tab) => (
          <Tab
            key={tab.value}
            label={
              // 여기가 수정 됨
              <Typography
                sx={{
                  border: "2px solid",
                  borderColor: "inherit",
                  borderRadius: 3,
                  px: 3,
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                {tab.label}
              </Typography>
            }
            value={tab.value}
          />
        ))}
      </Tabs>

      <div>
        <StatusContainer>
          <div className="title">
            <StatusBtn
              className={inningStatus ? "select" : null}
              onClick={onClickTopPlay}
            >
              {currentTab + 1}회 초
            </StatusBtn>
            <StatusBtn
              className={inningStatus === false ? "select" : null}
              onClick={onClickBottomPlay}
            >
              {currentTab + 1}회 말
            </StatusBtn>
          </div>
        </StatusContainer>
        <BatterContatiner>
          {batterList.batterName !== null ? (
            batterList.map((b, idx) => {
              return (
                <BatterResult key={idx}>
                  타자 {b.batterName} {b.batterEvent}
                </BatterResult>
              );
            })
          ) : (
            <div>데이터를 가져오는 중입니다.</div>
          )}
        </BatterContatiner>
        {/*         
         <h1>{menuArr[currentTab].content}</h1> */}
      </div>
    </SimulDiv>
  );
};

export default SimulationResult;

// const menuArr = [
//   { name: '1회', content: 'Tab menu TWO'},
//     { name: '2회', content: 'Tab menu TWO' },
//     { name: '3회', content: 'Tab menu TWO'},
//     { name: '4회', content: 'Tab menu TWO' },
//     { name: '5회', content: 'Tab menu TWO' },
//     { name: '6회', content: 'Tab menu TWO' },
//     { name: '7회', content: 'Tab menu TWO' },
//     { name: '8회', content: 'Tab menu TWO' },
//     { name: '9회', content: 'Tab menu TWO' },
//     { name: '10회', content: 'Tab menu TWO' },
//     { name: '11회', content: 'Tab menu TWO' },
//     { name: '12회', content: 'Tab menu TWO' },
//   ];

//  {/* <TabMenu>
//       {
//          menuArr.map((v, idx) => {
//           return <TabName onClick={()=> onClickHandler(idx)}>{v.name}</TabName>
//         })
//       }
//       </TabMenu>  */}
