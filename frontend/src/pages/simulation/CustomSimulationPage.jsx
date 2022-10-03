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

  // 모달 개폐 변수
  const [open, setOpen] = React.useState(false);
  const [opensec, setOpenSec] = React.useState(false);

  // 리그 선택 필터링
  const [leagueName, setLeagueName] = React.useState("nationalMLB");

  // 리그 별 팀목록
  const [nationalList, setNationalList] = useState([]);
  const [americanList, setAmericanList] = useState([]);

  // 선택한 팀 정보
  const [selectHome, setSelectHome] = useState([]);
  const [selectAway, setSelectAway] = useState([]);

  // 검색 인풋 변수
  const [userInput, setUserInput] = useState("");

  // 검색 결과를 담을 리스트
  const [nationalSearchList, setNationalSearchList] = useState([]);
  const [americanSearchList, setAmericanSearchList] = useState([]);

  // 입력값 변경 이벤트
  const handleInput = (e) => {
    setUserInput(e.target.value);
  };

  // 리그 변경 이벤트
  const handleChange = (event) => {
    setLeagueName(event.target.value);
    setUserInput("");
    setNationalSearchList(nationalList);
    setAmericanSearchList(americanList);
  };

  // 모달 개폐
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

  // 엔터 시 검색 기능
  const onClick = () => {
    searchClick();
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  // 팀명 검색 기능
  const searchClick = () => {
    const value1 = nationalList.filter((team) =>
      team.name.toLowerCase().includes(userInput.toLowerCase())
    );
    const value2 = nationalList.filter((team) =>
      team.name.toLowerCase().includes(userInput.toLowerCase())
    );
    setNationalSearchList(value1);
    setAmericanSearchList(value2);
  };

  useEffect(() => {
    dispatch(getNational())
      .unwrap()
      .then((res) => {
        setNationalList(res);
        setNationalSearchList(res);
      });
    dispatch(getAmerican())
      .unwrap()
      .then((res) => {
        setAmericanList(res);
        setAmericanSearchList(res);
      });
  }, [getNational]);

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
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => handleInput(e)}
                    onKeyPress={onKeyPress}
                  />
                  <button onClick={onClick}>검색하기</button>
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
                    >
                      <MenuItem value={"nationalMLB"}>National League</MenuItem>
                      <MenuItem value={"americanMLB"}>American League</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="candidates">
                  {leagueName === "nationalMLB"
                    ? nationalSearchList.map((item, idx) => (
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
                    : americanSearchList.map((item, idx) => (
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
                    onKeyPress={onKeyPress}
                  />
                  <button onClick={onClick}>검색하기</button>
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
                    ? nationalSearchList.map((item) => (
                        <ListWrap
                          onClick={() => {
                            setSelectAway(item);
                          }}
                        >
                          <img alt="logo" src={item.logo}></img>
                          <div className="candi">{item.name}</div>
                        </ListWrap>
                      ))
                    : americanSearchList.map((item) => (
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
      <Link
        to={"/simulation"}
        state={{ home: selectHome, away: selectAway }}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="start">
          <img src="/assets/simulationStart.png" alt="시작아이콘..이었던것" />
          <span>시뮬레이션 시작</span>
        </div>
      </Link>
    </CustomConatiner>
  );
};

export default CustomSimulationPage;
