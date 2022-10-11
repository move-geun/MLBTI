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
import { getMyteam, myprofile } from "../profile/myprofile-slice";

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

  // 내 정보 | 내 팀
  const [myInfo, setMyInfo] = useState("");
  const [myTeam, setMyTeam] = useState();

  // 내 팀 선택 시
  const [isClickMyTeam, setIsClickMyTeam] = useState(false);

  // 검색 인풋 변수
  const [userInput, setUserInput] = useState("");

  // 검색 결과를 담을 리스트
  const [nationalSearchList, setNationalSearchList] = useState([]);
  const [americanSearchList, setAmericanSearchList] = useState([]);

  // 마우스 오버 변수 (이미지 변환)
  const [isImgHover, setIsImgHover] = useState(false);
  const startImg1 = "/assets/hit2.png";
  const startImg2 = "/assets/hit1.png";

  // 검색 입력값 변경 이벤트
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

  //  내 팀 선택 시
  const clickMyTeam = () => {
    setIsClickMyTeam(true);
  };

  useEffect(() => {
    dispatch(myprofile())
      .unwrap()
      .then((res) => {
        setMyInfo(res.data.userId);
      });

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

  useEffect(() => {
    if (myInfo.length !== 0) {
      const data = {
        email: myInfo,
      };
      dispatch(getMyteam(data))
        .unwrap()
        .then((res) => {
          setMyTeam(res[0]);
        });
    }
  }, [myInfo]);

  // 팀 설정 안했을 시 페이지 이동 막기
  const isSelectedTeams = (event) => {
    if (
      (selectHome.length === 0 && !isClickMyTeam) ||
      selectAway.length === 0
    ) {
      event.preventDefault();
      alert("두 팀 모두 선택해 주세요");
    }
  };

  return myTeam ? (
    <CustomConatiner>
      <Header>매치업 설정하기</Header>
      <TeamContainer>
        <TeamCase>
          {isClickMyTeam ? (
            <div>
              <img
                alt="mylogo"
                onClick={handleOpen}
                className="myteamlogo"
                src={"/assets/customTeamLogo.png"}
              ></img>
              <div>팀명: {myTeam.user.myTeamName}</div>
              <div>구단주: {myTeam.user.nickname}</div>
            </div>
          ) : selectHome.length !== 0 ? (
            <div className="teamInfo">
              <img onClick={handleOpen} src={selectHome.logo} alt="선택한 팀" />
              <div>팀명: {selectHome.clubName}</div>
              <div>리그: {selectHome.divisionName}</div>
              <div>연고지: {selectHome.locationName}</div>
            </div>
          ) : (
            <div className="teamInfo">
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
              <div className="index">
                <div className="filter">
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    {/* <InputLabel id="demo-simple-select-standard-label">
                      리그 선택
                    </InputLabel> */}
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
                <div>
                  <input
                    type="text"
                    value={userInput}
                    placeholder="팀명을 입력해주세요"
                    onChange={(e) => handleInput(e)}
                    onKeyPress={onKeyPress}
                  />
                  <button onClick={onClick}>검색하기</button>
                </div>
              </div>
              <div className="candidates">
                <div onClick={clickMyTeam} className="myteam">
                  <img
                    className="myteamlogo"
                    src={"/assets/customTeamLogo.png"}
                    alt="이미지"
                  ></img>
                  {myTeam.user.myTeamName} (내 구단)
                </div>
                {leagueName === "nationalMLB"
                  ? nationalSearchList.map((item, idx) => (
                      <ListWrap
                        key={idx}
                        value={idx}
                        onClick={(e) => {
                          setIsClickMyTeam(false);
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
                        key={idx}
                        onClick={() => {
                          setIsClickMyTeam(false);
                          setSelectHome(item);
                        }}
                      >
                        <img alt="logo" src={item.logo}></img>
                        <div className="candi">{item.name}</div>
                      </ListWrap>
                    ))}
              </div>

              <button className="change" onClick={handleClose}>
                매치업
              </button>
            </ModalBox>
          </Modal>
        </TeamCase>
        <img className="vs" src="../assets/vs.png" alt="" />
        <TeamCase>
          {selectAway.length !== 0 ? (
            <div className="teamInfo">
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
            <div className="teamInfo">
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
              <div>
                <div className="title">어웨이팀 선택하기</div>
                <div className="index">
                  <div className="filter">
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: 120 }}
                    >
                      {/* <InputLabel id="demo-simple-select-standard-label">
                      리그 선택
                    </InputLabel> */}
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={leagueName}
                        onChange={handleChange}
                      >
                        <MenuItem value={"nationalMLB"}>
                          National League
                        </MenuItem>
                        <MenuItem value={"americanMLB"}>
                          American League
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div>
                    <input
                      type="text"
                      value={userInput}
                      placeholder="팀명을 입력해주세요"
                      onChange={(e) => handleInput(e)}
                      onKeyPress={onKeyPress}
                    />
                    <button onClick={onClick}>검색하기</button>
                  </div>
                </div>
                <div className="candidates">
                  {leagueName === "nationalMLB"
                    ? nationalSearchList.map((item, idx) => (
                        <ListWrap
                          key={idx}
                          onClick={() => {
                            setSelectAway(item);
                          }}
                        >
                          <img alt="logo" src={item.logo}></img>
                          <div className="candi">{item.name}</div>
                        </ListWrap>
                      ))
                    : americanSearchList.map((item, idx) => (
                        <ListWrap
                          key={idx}
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
        state={
          isClickMyTeam
            ? { home: myTeam.user.email, away: selectAway }
            : { home: selectHome, away: selectAway }
        }
        style={{ textDecoration: "none", color: "black" }}
        onClick={isSelectedTeams}
      >
        <div
          className="start"
          onMouseOver={() => setIsImgHover(true)}
          onMouseOut={() => setIsImgHover(false)}
        >
          <img src={isImgHover ? startImg1 : startImg2} alt="시뮬레이션 시작" />
          <div>시뮬레이션 시작</div>
        </div>
      </Link>
    </CustomConatiner>
  ) : null;
};

export default CustomSimulationPage;
