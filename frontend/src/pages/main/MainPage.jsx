import {
  Notice,
  Main,
  SimulationCase,
  CheckBox,
  Predict,
  Rank,
  DownChart,
  Leagues,
  League,
  SubItem,
  MainGameCard,
} from "./MainPage.style";
import { PacmanLoader } from "react-spinners";
import { Link } from "react-router-dom";
import {
  getNotice,
  getToday,
  getYesterday,
  getAWrank,
  getAErank,
  getAMrank,
  getNWrank,
  getNErank,
  getNMrank,
} from "./mainpage-slice";

import { simulationData } from "../simulation/simulation-slice";

// 모달
import Modal from "@mui/material/Modal";
import { ModalBox } from "../simulation/CustomSimulationPage.style";

import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// 시뮬레이션 컴포넌트
import Ground from "../simulation/Ground";
import BallCount from "../simulation/BallCount";

// 너비 지정해놔서 크기 줄 때 바꿔줘야함
// title 안내려오게끔 고정

const MainPage = () => {
  const notices = useSelector((state) => state.main.notices);
  const todays = useSelector((state) => state.main.todays);
  const yesterdays = useSelector((state) => state.main.yesterdays);
  const AWrank = useSelector((state) => state.main.AWrank);
  const AErank = useSelector((state) => state.main.AErank);
  const AMrank = useSelector((state) => state.main.AMrank);
  const NWrank = useSelector((state) => state.main.NWrank);
  const NErank = useSelector((state) => state.main.NErank);
  const NMrank = useSelector((state) => state.main.NMrank);
  const [open, setOpen] = useState(false);
  const [national, setNational] = useState(true);
  const [spinner, setSpinner] = useState(true);
  const handleAm = () => setNational(false);
  const handleNa = () => setNational(true);
  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
  };

  // 오늘 날짜 구하기
  const todayFormal = () => {
    let now = new Date();
    let year = now.getFullYear();
    let month =
      now.getMonth() + 1 > 9 ? now.getMonth() + 1 : "0" + (now.getMonth() + 1);
    let day =
      now.getDate() - 7 > 9 ? now.getDate() - 7 : "0" + (now.getDate() - 7);
    return String(year) + String(month) + String(day);
  };

  // 어제 날짜 구하기
  const yesterdayFormal = () => {
    let now = new Date();
    let year = now.getFullYear();
    let month =
      now.getMonth() + 1 > 9 ? now.getMonth() + 1 : "0" + (now.getMonth() + 1);
    let day =
      now.getDate() - 8 > 9 ? now.getDate() - 8 : "0" + (now.getDate() - 8);
    return String(year) + String(month) + String(day);
  };

  const dispatch = useDispatch();

  function floatingNotice() {
    dispatch(getNotice())
      .unwrap()
      .then((res) => {})
      .catch((err) => {
      });
  }

  // 오늘 경기 스케줄
  function floatingToday() {
    const data = {
      day: todayFormal(),
    };
    dispatch(getToday(data))
      .unwrap()
      .then((res) => {
        takeGameId(res);
      })
      .catch((err) => {
      });
  }

  // 메인시뮬레이션 게임아이디 받아가기
  const takeGameId = (data) => {
    let length = data.length - 1;
    let teamId = { team1: data[length].homeId, team2: data[length].awayId };
    takeSimulResult(teamId);
  };

  //////////////////// 시뮬레이션 /////////////////////////////

  const [inningList, setInningList] = useState([]);

  // 게임 아이디로 시뮬레이션 결과 받아오기
  function takeSimulResult(teamId) {
    dispatch(simulationData(teamId))
      .unwrap()
      .then((res) => {
        setInningList(res.data.inngings);
      })
      .catch((err) => {
      });
  }

  // 메인 시뮬레이션 연결 하기
  // 1. 게임 아이디 받아오기
  // 2. 게임 아이디로 시뮬레이션 결과 받아오기
  // 3. 값 가져와서 ground 컴포넌트에 inningList만 뽑아서 넣어주기

  // 어제 경기 스케줄
  function floatingYesterday() {
    const data = {
      day: yesterdayFormal(),
    };
    dispatch(getYesterday(data))
      .unwrap()
      .then((res) => {})
      .catch((err) => {
      });
  }
  // 랭크 받아오기
  function rank() {
    const data = {
      day: todayFormal(),
    };
    dispatch(getAErank(data))
      .unwrap()
      .then((res) => {})
      .catch((err) => {});
    dispatch(getAWrank(data))
      .unwrap()
      .then((res) => {})
      .catch((err) => {});
    dispatch(getAMrank(data))
      .unwrap()
      .then((res) => {})
      .catch((err) => {});
    dispatch(getNErank(data))
      .unwrap()
      .then((res) => {})
      .catch((err) => {});
    dispatch(getNWrank(data))
      .unwrap()
      .then((res) => {})
      .catch((err) => {});
    dispatch(getNMrank(data))
      .unwrap()
      .then((res) => {})
      .catch((err) => {});
  }
  const [mainSimul, setMainSimul] = useState([]);
  useEffect(() => {
    floatingNotice();
    floatingToday();
    floatingYesterday();
    todayFormal();
    rank();
    setTimeout(() => setSpinner(false), 4500);
    setMainSimul(todays[todays.length - 1]);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  const downsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
  };

  const ranksettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
  };

  // 브라우저 화면 크기 저장
  const [windowSize, setWindowSize] = useState("undefined");
  // 화면 크기 추적
  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  });

  const onESC = () => {
    setOpen(false);
  };
  const onKeyPress = (e) => {
    if (e.key === "ESC") {
      onESC();
    }
  };

  if (windowSize > 980) {
    return (
      <Main className="dd">
        {spinner ? (
          <div className="loading">
            <PacmanLoader color="#b20b0ba8" className="spinner"></PacmanLoader>
            <div>로딩 중</div>
          </div>
        ) : (
          <div>
            <Notice {...settings}>
              {notices ? (
                notices.map((notice, idx) => (
                  // <Link to={`/notice/${notice.uid}`} key={idx}>
                  <div onClick={handleOpen} key={idx}>
                    [공지] {notice.title}
                    <Modal
                      BackdropProps={{
                        style: { backgroundColor: "rgba(0, 0, 0, 0.1)" },
                      }}
                      onClick={onESC}
                      open={open}
                      onClose={() => handleClose()}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                      onKeyPress={onKeyPress}
                    >
                      <ModalBox className="mainmodal">
                        <div className="maintitle">{notice.title}</div>
                        <div className="maincontent">
                          <hr />
                          <div>No : {notice.uid}</div>
                          <hr />
                          <div>작성자 : {notice.user.nickname}</div>
                          <hr />
                          <div>내용 : {notice.content}</div>
                        </div>
                        <button className="change" onClick={handleClose}>
                          닫기
                        </button>
                      </ModalBox>
                    </Modal>
                  </div>
                ))
              ) : (
                <div>공지사항이 없습니다</div>
              )}
            </Notice>
            <SimulationCase>
              <div className="main_con">
                {todays ? (
                  <div className="main_des">
                    <div className="team_des">
                      <img
                        className="logo"
                        src={todays[todays.length - 1].homeLogo}
                        alt="홈팀로고"
                      />
                      <div>{todays[todays.length - 1].homeName}</div>
                    </div>
                    <div class="simul_case">
                      <h5>지금 시뮬레이션 경기 중</h5>
                      <div class="dot-elastic"></div>
                    </div>
                    <div className="team_des">
                      <img
                        className="logo"
                        src={todays[todays.length - 1].awayLogo}
                        alt="어웨이로고"
                      />
                      <div>{todays[todays.length - 1].awayName}</div>
                    </div>
                  </div>
                ) : null}
                <div className="simul_page">
                  <Ground data={inningList} />
                  <BallCount data={inningList} />
                </div>
              </div>
              <div className="sub">
                <MainGameCard>
                  <SubItem>
                    <div className="sub_dot">
                      <img
                        className="sub_simul"
                        src="../assets/sub1.gif"
                        alt=""
                      />
                      {/* <div class="dot-elastic"></div> */}
                    </div>
                    <div className="sub_des">
                      <div className="sub_title">오늘 예정 경기</div>

                      {todays ? (
                        <Link
                          className="sub_container"
                          to={"/simulation"}
                          style={{ textDecoration: "none", color: "black" }}
                          state={{
                            home: {
                              id: todays[todays.length - 4].homeId,
                              logo: todays[todays.length - 4].homeLogo,
                            },
                            away: {
                              id: todays[todays.length - 4].awayId,
                              logo: todays[todays.length - 4].awayLogo,
                            },
                          }}
                        >
                          <div className="sub_home">
                            <img
                              src={todays[todays.length - 4].homeLogo}
                              alt=""
                            />
                            <div>{todays[todays.length - 4].homeName}</div>
                          </div>
                          <h5>VS</h5>
                          <div className="sub_home">
                            <img
                              src={todays[todays.length - 4].awayLogo}
                              alt=""
                            />
                            <div>{todays[todays.length - 4].awayName}</div>
                          </div>
                        </Link>
                      ) : null}

                      <div className="go_simul">지금 시뮬레이션 보러가기⚾</div>
                    </div>
                  </SubItem>
                </MainGameCard>
                <MainGameCard>
                  <SubItem>
                    <div className="sub_dot">
                      <img
                        className="sub_simul"
                        src="../assets/sub2.gif"
                        alt=""
                      />
                      {/* <div class="dot-elastic"></div> */}
                    </div>
                    <div className="sub_des">
                      <div className="sub_title">오늘 예정 경기</div>
                      {todays ? (
                        <Link
                          className="sub_container"
                          to={"/simulation"}
                          style={{ textDecoration: "none", color: "black" }}
                          state={{
                            home: {
                              id: todays[todays.length - 3].homeId,
                              logo: todays[todays.length - 3].homeLogo,
                            },
                            away: {
                              id: todays[todays.length - 3].awayId,
                              logo: todays[todays.length - 3].awayLogo,
                            },
                          }}
                        >
                          <div className="sub_home">
                            <img
                              src={todays[todays.length - 3].homeLogo}
                              alt=""
                            />
                            <div>{todays[todays.length - 3].homeName}</div>
                          </div>
                          <h5>VS</h5>
                          <div className="sub_home">
                            <img
                              src={todays[todays.length - 3].awayLogo}
                              alt=""
                            />
                            <div>{todays[todays.length - 3].awayName}</div>
                          </div>
                        </Link>
                      ) : null}

                      <div className="go_simul">지금 시뮬레이션 보러가기⚾</div>
                    </div>
                  </SubItem>
                </MainGameCard>
                <MainGameCard>
                  <SubItem>
                    <div className="sub_dot">
                      <img
                        className="sub_simul"
                        src="../assets/sub3.gif"
                        alt=""
                      />
                      {/* <div class="dot-elastic"></div> */}
                    </div>
                    <div className="sub_des">
                      <div className="sub_title">오늘 예정 경기</div>
                      {todays ? (
                        <Link
                          className="sub_container"
                          to={"/simulation"}
                          style={{ textDecoration: "none", color: "black" }}
                          state={{
                            home: {
                              id: todays[todays.length - 2].homeId,
                              logo: todays[todays.length - 2].homeLogo,
                            },
                            away: {
                              id: todays[todays.length - 2].awayId,
                              logo: todays[todays.length - 2].awayLogo,
                            },
                          }}
                        >
                          <div className="sub_home">
                            <img
                              src={todays[todays.length - 2].homeLogo}
                              alt=""
                            />
                            <div>{todays[todays.length - 2].homeName}</div>
                          </div>
                          <h5>VS</h5>
                          <div className="sub_home">
                            <img
                              src={todays[todays.length - 2].awayLogo}
                              alt=""
                            />
                            <div>{todays[todays.length - 2].awayName}</div>
                          </div>
                        </Link>
                      ) : null}

                      <div className="go_simul">지금 시뮬레이션 보러가기⚾</div>
                    </div>
                  </SubItem>
                </MainGameCard>
              </div>
            </SimulationCase>
            <CheckBox>
              <Predict>
                <div className="title">[ 어제 경기 결과 ]</div>
                {yesterdays ? (
                  <div>
                    {yesterdays.map((yesterday, idx) => (
                      <Link
                        to={"/simulation"}
                        style={{ textDecoration: "none", color: "black" }}
                        state={{
                          home: {
                            id: yesterday.homeId,
                            logo: yesterday.homeLogo,
                          },
                          away: {
                            id: yesterday.awayId,
                            logo: yesterday.awayLogo,
                          },
                        }}
                      >
                        <div key={idx} className="contentdiv">
                          <div className="home">
                            <div>{yesterday.homeName}</div>
                            <div
                              className={
                                yesterday.homeScore > yesterday.awayScore
                                  ? "win"
                                  : yesterday.homeScore < yesterday.awayScore
                                  ? "lose"
                                  : "gray"
                              }
                            >
                              {yesterday.homeScore}
                            </div>
                          </div>
                          <img
                            className="homeImg"
                            src={yesterday.homeLogo}
                            alt="홈팀 사진"
                          />
                          <div className="status">
                            <div className="vs">vs</div>
                            <div className="status">{yesterday.status}</div>
                          </div>
                          <img
                            className="AwayImg"
                            src={yesterday.awayLogo}
                            alt="어웨이팀 사진"
                          />
                          <div className="away">
                            <div>{yesterday.awayName}</div>
                            <div
                              className={
                                yesterday.awayScore > yesterday.homeScore
                                  ? "win"
                                  : yesterday.awayScore < yesterday.homeScore
                                  ? "lose"
                                  : "gray"
                              }
                            >
                              {yesterday.awayScore}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : null}
              </Predict>
              <Predict>
                <div className="title">[ 오늘 경기 일정 ]</div>
                {todays ? (
                  <div>
                    {todays.map((today, idx) => (
                      <Link
                        to={"/simulation"}
                        style={{ textDecoration: "none", color: "black" }}
                        state={{
                          home: { id: today.homeId, logo: today.homeLogo },
                          away: { id: today.awayId, logo: today.awayLogo },
                        }}
                      >
                        <div key={idx} className="contentdiv">
                          <div className="home">
                            <div>{today.homeName}</div>
                            <div
                              className={
                                today.homeScore > today.awayScore
                                  ? "win"
                                  : today.homeScore < today.awayScore
                                  ? "lose"
                                  : "gray"
                              }
                            >
                              {today.homeScore}
                            </div>
                          </div>
                          <img
                            className="homeImg"
                            src={today.homeLogo}
                            alt="홈팀 사진"
                          />
                          <div className="status">
                            <div className="vs">vs</div>
                            <div className="status">{today.status}</div>
                          </div>
                          <img
                            className="AwayImg"
                            src={today.awayLogo}
                            alt="어웨이팀 사진"
                          />
                          <div className="away">
                            <div>{today.awayName}</div>
                            <div
                              className={
                                today.awayScore > today.homeScore
                                  ? "win"
                                  : today.awayScore < today.homeScore
                                  ? "lose"
                                  : "gray"
                              }
                            >
                              {today.awayScore}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : null}
              </Predict>
              <Rank>
                <div className="title">[팀 순위]</div>
                <div className="divide">
                  <div claasName="leaguebtn" onClick={handleNa}>
                    내셔널 리그
                  </div>
                  <div claasName="leaguebtn" onClick={handleAm}>
                    아메리칸 리그
                  </div>
                </div>
                {national === true ? (
                  <Leagues {...ranksettings}>
                    <League>
                      <div className="leaguetitle">[동부리그]</div>
                      {NErank.map((rank, idx) => (
                        <div key={idx} className="rank_cont">
                          <div className="number">{rank.diveRank}</div>
                          <div className="rank">
                            <img src={rank.logo} alt="" />
                            <div>{rank.teamName}</div>
                          </div>
                        </div>
                      ))}
                    </League>
                    <League>
                      <div className="leaguetitle">[서부리그]</div>
                      {NWrank.map((rank, idx) => (
                        <div key={idx} className="rank_cont">
                          <div className="number">{rank.diveRank}</div>
                          <div className="rank">
                            <img src={rank.logo} alt="" />
                            <div>{rank.teamName}</div>
                          </div>
                        </div>
                      ))}
                    </League>
                    <League>
                      <div className="leaguetitle">[중앙리그]</div>
                      {NMrank.map((rank, idx) => (
                        <div key={idx} className="rank_cont">
                          <div className="number">{rank.diveRank}</div>
                          <div className="rank">
                            <img src={rank.logo} alt="" />
                            <div>{rank.teamName}</div>
                          </div>
                        </div>
                      ))}
                    </League>
                  </Leagues>
                ) : (
                  <Leagues {...ranksettings}>
                    <League>
                      <div className="leaguetitle">[동부리그]</div>
                      {AErank.map((rank, idx) => (
                        <div key={idx} className="rank_cont">
                          <div className="number">{rank.diveRank}</div>
                          <div className="rank">
                            <img src={rank.logo} alt="" />
                            <div>{rank.teamName}</div>
                          </div>
                        </div>
                      ))}
                    </League>
                    <League>
                      <div className="leaguetitle">[서부리그]</div>
                      {AWrank.map((rank, idx) => (
                        <div key={idx} className="rank_cont">
                          <div className="number">{rank.diveRank}</div>
                          <div className="rank">
                            <img src={rank.logo} alt="" />
                            <div>{rank.teamName}</div>
                          </div>
                        </div>
                      ))}
                    </League>
                    <League>
                      <div className="leaguetitle">[중앙리그]</div>
                      {AMrank.map((rank, idx) => (
                        <div key={idx} className="rank_cont">
                          <div className="number">{rank.diveRank}</div>
                          <div className="rank">
                            <img src={rank.logo} alt="" />
                            <div>{rank.teamName}</div>
                          </div>
                        </div>
                      ))}
                    </League>
                  </Leagues>
                )}
              </Rank>
            </CheckBox>
          </div>
        )}
      </Main>
    );
  } else if (windowSize > 480) {
    return (
      <Main>
        <Notice {...settings}>
          {notices ? (
            notices.map((notice, idx) => (
              <Link to={`/notice/${notice.uid}`} key={idx}>
                [공지] {notice.title}
              </Link>
            ))
          ) : (
            <div>공지사항이 없습니다</div>
          )}
        </Notice>
        <SimulationCase>
          <div className="Main">
            {/* <img className="main_simul" src="../assets/Ground.png" alt="" /> */}
            {todays ? (
              <div className="main_des">
                <div className="team_des">
                  <img
                    className="logo"
                    src={mainSimul.homeLogo}
                    alt="홈팀로고"
                  />
                  <div>{mainSimul.homeName}</div>
                </div>
                <div class="simul_case">
                  <h5>지금 시뮬레이션 경기 중</h5>
                  <div class="dot-elastic"></div>
                </div>
                <div className="team_des">
                  <img
                    className="logo"
                    src={mainSimul.awayLogo}
                    alt="어웨이로고"
                  />
                  <div>{mainSimul.awayName}</div>
                </div>
              </div>
            ) : null}
            <Ground data={inningList} />
          </div>
          <div className="sub">
            <MainGameCard>
              <SubItem>
                <div className="sub_dot">
                  <img className="sub_simul" src="../assets/sub1.gif" alt="" />
                  {/* <div class="dot-elastic"></div> */}
                </div>
                <div className="sub_des">
                  <div className="sub_title">
                    <div>오늘 예정 경기</div>
                  </div>

                  {todays ? (
                    <Link
                      className="sub_container"
                      to={"/simulation"}
                      style={{ textDecoration: "none", color: "black" }}
                      state={{
                        home: {
                          id: todays[todays.length - 4].homeId,
                          logo: todays[todays.length - 4].homeLogo,
                        },
                        away: {
                          id: todays[todays.length - 4].awayId,
                          logo: todays[todays.length - 4].awayLogo,
                        },
                      }}
                    >
                      <div className="sub_home">
                        <img src={todays[todays.length - 4].homeLogo} alt="" />
                        <div>{todays[todays.length - 4].homeName}</div>
                      </div>
                      <h5>VS</h5>
                      <div className="sub_home">
                        <img src={todays[todays.length - 4].awayLogo} alt="" />
                        <div>{todays[todays.length - 4].awayName}</div>
                      </div>
                    </Link>
                  ) : null}

                  <Link
                    className="go_simul"
                    to={"/simulation"}
                    style={{ textDecoration: "none", color: "black" }}
                    state={{
                      home: {
                        id: todays[todays.length - 4].homeId,
                        logo: todays[todays.length - 4].homeLogo,
                      },
                      away: {
                        id: todays[todays.length - 4].awayId,
                        logo: todays[todays.length - 4].awayLogo,
                      },
                    }}
                  >
                    지금 시뮬레이션 보러가기⚾
                  </Link>
                </div>
              </SubItem>
            </MainGameCard>
            <MainGameCard>
              <SubItem>
                <div className="sub_dot">
                  <img className="sub_simul" src="../assets/sub2.gif" alt="" />
                  {/* <div class="dot-elastic"></div> */}
                </div>
                <div className="sub_des">
                  <div className="sub_title">오늘 예정 경기</div>
                  {todays ? (
                    <Link
                      className="sub_container"
                      to={"/simulation"}
                      style={{ textDecoration: "none", color: "black" }}
                      state={{
                        home: {
                          id: todays[todays.length - 3].homeId,
                          logo: todays[todays.length - 3].homeLogo,
                        },
                        away: {
                          id: todays[todays.length - 3].awayId,
                          logo: todays[todays.length - 3].awayLogo,
                        },
                      }}
                    >
                      <div className="sub_home">
                        <img src={todays[todays.length - 3].homeLogo} alt="" />
                        <div>{todays[todays.length - 3].homeName}</div>
                      </div>
                      <h5>VS</h5>
                      <div className="sub_home">
                        <img src={todays[todays.length - 3].awayLogo} alt="" />
                        <div>{todays[todays.length - 3].awayName}</div>
                      </div>
                    </Link>
                  ) : null}

                  <Link
                    className="go_simul"
                    to={"/simulation"}
                    style={{ textDecoration: "none", color: "black" }}
                    state={{
                      home: {
                        id: todays[todays.length - 3].homeId,
                        logo: todays[todays.length - 3].homeLogo,
                      },
                      away: {
                        id: todays[todays.length - 3].awayId,
                        logo: todays[todays.length - 3].awayLogo,
                      },
                    }}
                  >
                    지금 시뮬레이션 보러가기⚾
                  </Link>
                </div>
              </SubItem>
            </MainGameCard>
            <MainGameCard>
              <SubItem>
                <div className="sub_dot">
                  <img className="sub_simul" src="../assets/sub3.gif" alt="" />
                  {/* <div class="dot-elastic"></div> */}
                </div>
                <div className="sub_des">
                  <div className="sub_title">오늘 예정 경기</div>
                  {todays ? (
                    <Link
                      className="sub_container"
                      to={"/simulation"}
                      style={{ textDecoration: "none", color: "black" }}
                      state={{
                        home: {
                          id: todays[todays.length - 2].homeId,
                          logo: todays[todays.length - 2].homeLogo,
                        },
                        away: {
                          id: todays[todays.length - 2].awayId,
                          logo: todays[todays.length - 2].awayLogo,
                        },
                      }}
                    >
                      <div className="sub_home">
                        <img src={todays[todays.length - 2].homeLogo} alt="" />
                        <div>{todays[todays.length - 2].homeName}</div>
                      </div>
                      <h5>VS</h5>
                      <div className="sub_home">
                        <img src={todays[todays.length - 2].awayLogo} alt="" />
                        <div>{todays[todays.length - 2].awayName}</div>
                      </div>
                    </Link>
                  ) : null}

                  <Link
                    className="go_simul"
                    to={"/simulation"}
                    style={{ textDecoration: "none", color: "black" }}
                    state={{
                      home: {
                        id: todays[todays.length - 2].homeId,
                        logo: todays[todays.length - 2].homeLogo,
                      },
                      away: {
                        id: todays[todays.length - 2].awayId,
                        logo: todays[todays.length - 2].awayLogo,
                      },
                    }}
                  >
                    지금 시뮬레이션 보러가기⚾
                  </Link>
                </div>
              </SubItem>
            </MainGameCard>
          </div>
        </SimulationCase>
        <DownChart {...downsettings}>
          <Predict>
            <div className="title">[ 어제 경기 결과 ]</div>
            {yesterdays ? (
              <div>
                {yesterdays.map((yesterday, idx) => (
                  <Link
                    to={"/simulation"}
                    style={{ textDecoration: "none", color: "black" }}
                    state={{
                      home: { id: yesterday.homeId, logo: yesterday.homeLogo },
                      away: { id: yesterday.awayId, logo: yesterday.awayLogo },
                    }}
                    // onClick={() => clickHistory(yesterday)}
                  >
                    <div key={idx} className="contentdiv">
                      <div className="home">
                        <div>{yesterday.homeName}</div>
                        <div
                          className={
                            yesterday.homeScore > yesterday.awayScore
                              ? "win"
                              : yesterday.homeScore < yesterday.awayScore
                              ? "lose"
                              : "gray"
                          }
                        >
                          {yesterday.homeScore}
                        </div>
                      </div>
                      <img
                        className="homeImg"
                        src={yesterday.homeLogo}
                        alt="홈팀 사진"
                      />
                      <div className="status">
                        <div className="vs">vs</div>
                        <div className="status">{yesterday.status}</div>
                      </div>
                      <img
                        className="AwayImg"
                        src={yesterday.awayLogo}
                        alt="어웨이팀 사진"
                      />
                      <div className="away">
                        <div>{yesterday.awayName}</div>
                        <div
                          className={
                            yesterday.awayScore > yesterday.homeScore
                              ? "win"
                              : yesterday.awayScore < yesterday.homeScore
                              ? "lose"
                              : "gray"
                          }
                        >
                          {yesterday.awayScore}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : null}
          </Predict>
          <Predict>
            <div className="title">[ 오늘 경기 일정 ]</div>
            {todays ? (
              <div>
                {todays.map((today, idx) => (
                  <Link
                    to={"/simulation"}
                    style={{ textDecoration: "none", color: "black" }}
                    state={{
                      home: { id: today.homeId, logo: today.homeLogo },
                      away: { id: today.awayId, logo: today.awayLogo },
                    }}
                  >
                    <div key={idx} className="contentdiv">
                      <div className="home">
                        <div>{today.homeName}</div>
                        <div
                          className={
                            today.homeScore > today.awayScore
                              ? "win"
                              : today.homeScore < today.awayScore
                              ? "lose"
                              : "gray"
                          }
                        >
                          {today.homeScore}
                        </div>
                      </div>
                      <img
                        className="homeImg"
                        src={today.homeLogo}
                        alt="홈팀 사진"
                      />
                      <div className="status">
                        <div className="vs">vs</div>
                        <div className="status">{today.status}</div>
                      </div>
                      <img
                        className="AwayImg"
                        src={today.awayLogo}
                        alt="어웨이팀 사진"
                      />
                      <div className="away">
                        <div>{today.awayName}</div>
                        <div
                          className={
                            today.awayScore > today.homeScore
                              ? "win"
                              : today.awayScore < today.homeScore
                              ? "lose"
                              : "gray"
                          }
                        >
                          {today.awayScore}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : null}
          </Predict>
          <Rank>
            <div className="title">[팀 순위]</div>
            <div className="divide">
              <div claasName="leaguebtn" onClick={handleNa}>
                내셔널 리그
              </div>
              <div claasName="leaguebtn" onClick={handleAm}>
                아메리칸 리그
              </div>
            </div>
            {national === true ? (
              <Leagues {...ranksettings}>
                <League>
                  <div className="leaguetitle">[동부리그]</div>
                  {NErank.map((rank, idx) => (
                    <div key={idx} className="rank_cont">
                      <div className="number">{rank.diveRank}</div>
                      <div className="rank">
                        <img src={rank.logo} alt="" />
                        <div>{rank.teamName}</div>
                      </div>
                    </div>
                  ))}
                </League>
                <League>
                  <div className="leaguetitle">[서부리그]</div>
                  {NWrank.map((rank, idx) => (
                    <div key={idx} className="rank_cont">
                      <div className="number">{rank.diveRank}</div>
                      <div className="rank">
                        <img src={rank.logo} alt="" />
                        <div>{rank.teamName}</div>
                      </div>
                    </div>
                  ))}
                </League>
                <League>
                  <div className="leaguetitle">[중앙리그]</div>
                  {NMrank.map((rank, idx) => (
                    <div key={idx} className="rank_cont">
                      <div className="number">{rank.diveRank}</div>
                      <div className="rank">
                        <img src={rank.logo} alt="" />
                        <div>{rank.teamName}</div>
                      </div>
                    </div>
                  ))}
                </League>
              </Leagues>
            ) : (
              <Leagues {...ranksettings}>
                <League>
                  <div className="leaguetitle">[동부리그]</div>
                  {AErank.map((rank, idx) => (
                    <div key={idx} className="rank_cont">
                      <div className="number">{rank.diveRank}</div>
                      <div className="rank">
                        <img src={rank.logo} alt="" />
                        <div>{rank.teamName}</div>
                      </div>
                    </div>
                  ))}
                </League>
                <League>
                  <div className="leaguetitle">[서부리그]</div>
                  {AWrank.map((rank, idx) => (
                    <div key={idx} className="rank_cont">
                      <div className="number">{rank.diveRank}</div>
                      <div className="rank">
                        <img src={rank.logo} alt="" />
                        <div>{rank.teamName}</div>
                      </div>
                    </div>
                  ))}
                </League>
                <League>
                  <div className="leaguetitle">[중앙리그]</div>
                  {AMrank.map((rank, idx) => (
                    <div key={idx} className="rank_cont">
                      <div className="number">{rank.diveRank}</div>
                      <div className="rank">
                        <img src={rank.logo} alt="" />
                        <div>{rank.teamName}</div>
                      </div>
                    </div>
                  ))}
                </League>
              </Leagues>
            )}
          </Rank>
        </DownChart>
      </Main>
    );
  } else {
    return (
      <Main>
        <Notice {...settings}>
          {notices ? (
            notices.map((notice, idx) => (
              <Link to={`/notice/${notice.uid}`} key={idx}>
                [공지] {notice.title}
              </Link>
            ))
          ) : (
            <div>공지사항이 없습니다</div>
          )}
        </Notice>
        <SimulationCase>
          <div className="Main">
            {/* <img className="main_simul" src="../assets/Ground.png" alt="" /> */}
            {todays ? (
              <div className="main_des">
                <div className="team_des">
                  <img
                    className="logo"
                    src={mainSimul.homeLogo}
                    alt="홈팀로고"
                  />
                  <div>{mainSimul.homeName}</div>
                </div>
                <div class="simul_case">
                  <h5>지금 시뮬레이션 경기 중</h5>
                  <div class="dot-elastic"></div>
                </div>
                <div className="team_des">
                  <img
                    className="logo"
                    src={mainSimul.awayLogo}
                    alt="어웨이로고"
                  />
                  <div>{mainSimul.awayName}</div>
                </div>
              </div>
            ) : null}{" "}
            <Ground data={inningList} />
          </div>
        </SimulationCase>
        <DownChart {...downsettings}>
          <Predict>
            <div className="title">[ 어제 경기 결과 ]</div>
            {yesterdays ? (
              <div>
                {yesterdays.map((yesterday, idx) => (
                  <Link
                    to={"/simulation"}
                    style={{ textDecoration: "none", color: "black" }}
                    state={{
                      home: {
                        id: yesterday.homeId,
                        logo: yesterday.homeLogo,
                      },
                      away: {
                        id: yesterday.awayId,
                        logo: yesterday.awayLogo,
                      },
                    }}
                    // onClick={() => clickHistory(yesterday)}
                  >
                    <div key={idx} className="contentdiv">
                      <div className="home">
                        <div>{yesterday.homeName}</div>
                        <div
                          className={
                            yesterday.homeScore > yesterday.awayScore
                              ? "win"
                              : yesterday.homeScore < yesterday.awayScore
                              ? "lose"
                              : "gray"
                          }
                        >
                          {yesterday.homeScore}
                        </div>
                      </div>
                      <img
                        className="homeImg"
                        src={yesterday.homeLogo}
                        alt="홈팀 사진"
                      />
                      <div className="status">
                        <div className="vs">vs</div>
                        <div className="status">{yesterday.status}</div>
                      </div>
                      <img
                        className="AwayImg"
                        src={yesterday.awayLogo}
                        alt="어웨이팀 사진"
                      />
                      <div className="away">
                        <div>{yesterday.awayName}</div>
                        <div
                          className={
                            yesterday.awayScore > yesterday.homeScore
                              ? "win"
                              : yesterday.awayScore < yesterday.homeScore
                              ? "lose"
                              : "gray"
                          }
                        >
                          {yesterday.awayScore}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : null}
          </Predict>
          <Predict>
            <div className="title">[ 오늘 경기 일정 ]</div>
            {todays ? (
              <div>
                {todays.map((today, idx) => (
                  <Link
                    to={"/simulation"}
                    style={{ textDecoration: "none", color: "black" }}
                    state={{
                      home: { id: today.homeId, logo: today.homeLogo },
                      away: { id: today.awayId, logo: today.awayLogo },
                    }}
                  >
                    <div key={idx} className="contentdiv">
                      <div className="home">
                        <div>{today.homeName}</div>
                        <div
                          className={
                            today.homeScore > today.awayScore
                              ? "win"
                              : today.homeScore < today.awayScore
                              ? "lose"
                              : "gray"
                          }
                        >
                          {today.homeScore}
                        </div>
                      </div>
                      <img
                        className="homeImg"
                        src={today.homeLogo}
                        alt="홈팀 사진"
                      />
                      <div className="status">
                        <div className="vs">vs</div>
                        <div className="status">{today.status}</div>
                      </div>
                      <img
                        className="AwayImg"
                        src={today.awayLogo}
                        alt="어웨이팀 사진"
                      />
                      <div className="away">
                        <div>{today.awayName}</div>
                        <div
                          className={
                            today.awayScore > today.homeScore
                              ? "win"
                              : today.awayScore < today.homeScore
                              ? "lose"
                              : "gray"
                          }
                        >
                          {today.awayScore}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : null}
          </Predict>
          <Rank>
            <div className="title">[팀 순위]</div>
            <div className="divide">
              <div claasName="leaguebtn" onClick={handleNa}>
                내셔널 리그
              </div>
              <div claasName="leaguebtn" onClick={handleAm}>
                아메리칸 리그
              </div>
            </div>
            {national === true ? (
              <Leagues {...ranksettings}>
                <League>
                  <div className="leaguetitle">[동부리그]</div>
                  {NErank.map((rank, idx) => (
                    <div key={idx} className="rank_cont">
                      <div className="number">{rank.diveRank}</div>
                      <div className="rank">
                        <img src={rank.logo} alt="" />
                        <div>{rank.teamName}</div>
                      </div>
                    </div>
                  ))}
                </League>
                <League>
                  <div className="leaguetitle">[서부리그]</div>
                  {NWrank.map((rank, idx) => (
                    <div key={idx} className="rank_cont">
                      <div className="number">{rank.diveRank}</div>
                      <div className="rank">
                        <img src={rank.logo} alt="" />
                        <div>{rank.teamName}</div>
                      </div>
                    </div>
                  ))}
                </League>
                <League>
                  <div className="leaguetitle">[중앙리그]</div>
                  {NMrank.map((rank, idx) => (
                    <div key={idx} className="rank_cont">
                      <div className="number">{rank.diveRank}</div>
                      <div className="rank">
                        <img src={rank.logo} alt="" />
                        <div>{rank.teamName}</div>
                      </div>
                    </div>
                  ))}
                </League>
              </Leagues>
            ) : (
              <Leagues {...ranksettings}>
                <League>
                  <div className="leaguetitle">[동부리그]</div>
                  {AErank.map((rank, idx) => (
                    <div key={idx} className="rank_cont">
                      <div className="number">{rank.diveRank}</div>
                      <div className="rank">
                        <img src={rank.logo} alt="" />
                        <div>{rank.teamName}</div>
                      </div>
                    </div>
                  ))}
                </League>
                <League>
                  <div className="leaguetitle">[서부리그]</div>
                  {AWrank.map((rank, idx) => (
                    <div key={idx} className="rank_cont">
                      <div className="number">{rank.diveRank}</div>
                      <div className="rank">
                        <img src={rank.logo} alt="" />
                        <div>{rank.teamName}</div>
                      </div>
                    </div>
                  ))}
                </League>
                <League>
                  <div className="leaguetitle">[중앙리그]</div>
                  {AMrank.map((rank, idx) => (
                    <div key={idx} className="rank_cont">
                      <div className="number">{rank.diveRank}</div>
                      <div className="rank">
                        <img src={rank.logo} alt="" />
                        <div>{rank.teamName}</div>
                      </div>
                    </div>
                  ))}
                </League>
              </Leagues>
            )}
          </Rank>
        </DownChart>
      </Main>
    );
  }
};
export default MainPage;
