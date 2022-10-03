import { Link } from "react-router-dom";
import * as React from "react";
import Modal from "@mui/material/Modal";
import {
  CustomConatiner,
  TeamContainer,
  TeamCase,
  ModalBox,
  Header,
  ListWrap,
} from "./CustomSimulationPage.style";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNational, getAmerican } from "./customsimulation-slice";
// 모달 연결
// 승률 높은 곳에 색 변경
// 수정필요

const CustomSimulationPage = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [opensec, setOpenSec] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    setUserInput("");
  };
  const handleClose = () => setOpen(false);
  const handleOpensec = () => {
    setOpenSec(true);
    setUserInput("");
  };
  const handleClosesec = () => setOpenSec(false);

  // MLB 팀 목록
  const [mlbTeam, setMLBTeam] = useState([]);

  // 리그 선택 필터링
  const [leagueName, setLeagueName] = React.useState("nationalMLB");
  const [nationalList, setNationalList] = useState([]);
  const [americanList, setAmericanList] = useState([]);

  // 선택한 팀 정보
  const [selectHome, setSelectHome] = useState([]);
  const [selectAway, setSelectAway] = useState([]);

  // 검색기능
  const [userInput, setUserInput] = useState("");
  const [searchRes, setSearchRes] = useState([]);

  const handleInput = (e) => {
    setUserInput(e.target.value);
  };


  
  const handleChange = (event) => {
    setLeagueName(event.target.value);
  };
  
  useEffect(() => {

    dispatch(getNational())
    .unwrap()
    .then((res) => {
      setNationalList(res);
    });
    dispatch(getAmerican())
    .unwrap()
    .then((res) => {
      setAmericanList(res);
    });
  }, [getNational]);

  console.log(selectHome)
  return (
    <CustomConatiner>
      <Header>매치업 설정하기</Header>
      <TeamContainer>
        <TeamCase>
          {selectHome.length !== 0 ? (
            <div>
              <img onClick={handleOpen} src={selectHome.logo} alt="선택한 팀" />
              <div>팀명: {selectHome.clubName}</div>
              <div>리그: {selectHome.divisionName}</div>
              <div>연고지: {selectHome.locationName}</div>
            </div>
          ) : (
            <div>
              <img
                onClick={handleOpen}
                src="/assets/defaultTeam.png"
                alt="기본 이미지"
              />
              <div>팀 설정하기</div>
            </div>
          )}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <ModalBox>
              <div className="title">홈팀 선택하기</div>
              <br />
              <br />
              <div className="team">
                팀
                <div>
                  <input type="text" />
                  <button>검색하기</button>
                </div>
                <div className="filter">
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      리그 선택
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={leagueName}
                      onChange={handleChange}
                      label="Age"
                    >
                      <MenuItem value={"nationalMLB"}>National League</MenuItem>
                      <MenuItem value={"americanMLB"}>American League</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="candidates">
                  {leagueName === "nationalMLB"
                    ? nationalList.map((item, idx) => (
                        <ListWrap
                          value={idx}
                          onClick={(e) => {
                            setSelectHome(item);
                          }}
                        >
                          <img alt="logo" src={item.logo}></img>
                          <div value={idx} className="candi">
                            {item.name}
                          </div>
                        </ListWrap>
                      ))
                    : americanList.map((item, idx) => (
                        <ListWrap
                          onClick={() => {
                            setSelectHome(item);
                          }}
                        >
                          <img alt="logo" src={item.logo}></img>
                          <div className="candi">{item.name}</div>
                        </ListWrap>
                      ))}
                </div>
              </div>
              <button className="change" onClick={handleClose}>
                매치업
              </button>
            </ModalBox>
          </Modal>
        </TeamCase>
        <span> VS </span>
        <TeamCase>
          {selectAway.length !== 0 ? (
            <div>
              <img
                onClick={handleOpensec}
                src={selectAway.logo}
                alt="선택한 팀"
              />
              <div>팀명: {selectAway.clubName}</div>
              <div>리그: {selectAway.divisionName}</div>
              <div>연고지: {selectAway.locationName}</div>
            </div>
          ) : (
            <div>
              <img
                onClick={handleOpensec}
                src="/assets/defaultTeam.png"
                alt="기본 이미지"
              />
              <div>팀 설정하기</div>
            </div>
          )}
          <Modal
            open={opensec}
            onClose={handleClosesec}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <ModalBox>
              <div className="title">어웨이팀 선택하기</div>
              <br />
              <br />
              <div className="team">
                팀
                <div>
                  <input
                    value={userInput}
                    type="text"
                    onChange={(e) => handleInput(e)}
                  />
                  <button>검색하기</button>
                </div>
                <div className="filter">
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      리그 선택
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={leagueName}
                      onChange={handleChange}
                      label="Age"
                    >
                      <MenuItem value={"nationalMLB"}>National League</MenuItem>
                      <MenuItem value={"americanMLB"}>American League</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="candidates">
                  {leagueName === "nationalMLB"
                    ? nationalList.map((item) => (
                        <ListWrap
                          onClick={() => {
                            setSelectAway(item);
                          }}
                        >
                          <img alt="logo" src={item.logo}></img>
                          <div className="candi">{item.name}</div>
                        </ListWrap>
                      ))
                    : americanList.map((item) => (
                        <ListWrap
                          onClick={() => {
                            setSelectAway(item);
                          }}
                        >
                          <img alt="logo" src={item.logo}></img>
                          <div className="candi">{item.name}</div>
                        </ListWrap>
                      ))}
                </div>
              </div>
              <button
                className="change"
                onClick={() => {
                  handleClosesec();
                }}
              >
                매치업
              </button>
            </ModalBox>
          </Modal>
        </TeamCase>
      </TeamContainer>
      <Link to={"/simulation"} state={{ home: selectHome, away: selectAway }} style={{ textDecoration: "none", color: "black" }}>
        <div className="start">
          <img src="/assets/simulationStart.png" alt="시작아이콘..이었던것" />
          <span>시뮬레이션 시작</span>
        </div>
      </Link>
    </CustomConatiner>
  );
};

export default CustomSimulationPage;
