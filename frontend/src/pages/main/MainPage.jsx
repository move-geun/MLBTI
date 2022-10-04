import {
  Notice,
  Main,
  SimulationCase,
  CheckBox,
  Predict,
  Today,
  Rank,
  DownChart,
  Leagues,
  League,
} from "./MainPage.style";

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

// 시뮬레이션 스켈레톤용
import * as React from "react";
import Skeleton from "@mui/material/Skeleton";

// 모달
import Modal from "@mui/material/Modal";
import { ModalBox } from "../simulation/CustomSimulationPage.style";

import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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
  const handleAm = () => setNational(false);
  const handleNa = () => setNational(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    console.log("누르긴했다잉, 근데 안 닫힐거지롱");
    setOpen(false);
  };
  // const [notices, setNotices] = useState();

  // 오늘 날짜 구하기
  const todayFormal = () => {
    let now = new Date();
    let year = now.getFullYear();
    let month =
      now.getMonth() + 1 > 9 ? now.getMonth() + 1 : "0" + (now.getMonth() + 1);
    let day = now.getDate() > 9 ? now.getDate() : "0" + now.getDate();
    return String(year) + String(month) + day;
  };

  // 어제 날짜 구하기
  const yesterdayFormal = () => {
    let now = new Date();
    let year = now.getFullYear();
    let month =
      now.getMonth() + 1 > 9 ? now.getMonth() + 1 : "0" + (now.getMonth() + 1);
    let day =
      now.getDate() - 1 > 9 ? now.getDate() - 1 : "0" + (now.getDate() - 1);
    return String(year) + String(month) + String(day);
  };

  const dispatch = useDispatch();

  function floatingNotice() {
    dispatch(getNotice())
      .unwrap()
      .then((res) => {})
      .catch((err) => {
        console.log("공지 불러오기 실패");
      });
  }

  // 오늘 경기 스케줄
  function floatingToday() {
    const data = {
      day: todayFormal(),
    };
    dispatch(getToday(data))
      .unwrap()
      .then((res) => {})
      .catch((err) => {
        console.log("스케줄 불러오기 실패");
      });
  }

  // 어제 경기 스케줄
  function floatingYesterday() {
    const data = {
      day: yesterdayFormal(),
    };
    dispatch(getYesterday(data))
      .unwrap()
      .then((res) => {})
      .catch((err) => {
        console.log("어제어제 스케줄 불러오기 실패");
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

  useEffect(() => {
    floatingNotice();
    floatingToday();
    floatingYesterday();
    todayFormal();
    rank();
    // let step = 0;
    // for (step = 0; step < res.data.length; step++) {
    //   setNotice([...notices, res.data[step]]);
    // }
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

  if (windowSize > 980) {
    return (
      <Main>
        <Notice {...settings}>
          {notices ? (
            notices.map((notice, idx) => (
              // <Link to={`/notice/${notice.uid}`} key={idx}>
              <div onClick={handleOpen} key={idx}>
                [공지] {notice.title}
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <ModalBox>
                    <div className="title">{notice.title}</div>
                    <div className="content">
                      <hr />
                      <div>No : {notice.uid}</div>
                      <hr />
                      <div>작성자 : {notice.writer}</div>
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
          <div className="Main">
            <img className="main_simul" src="../assets/Ground.png" alt="" />
          </div>
          <div className="Sub">
            <Skeleton className="skel" variant="rectangular" height={100} />
            <Skeleton className="skel" variant="rectangular" height={100} />
            <Skeleton className="skel" variant="rectangular" height={100} />
          </div>
        </SimulationCase>
        <CheckBox>
          <Predict>
            <div className="title">[ 어제 경기 결과 ]</div>
            <div className="result">
              {yesterdays.map((yesterday, idx) => (
                <div key={idx} className="content">
                  {yesterday.awayName} vs {yesterday.homeName}
                </div>
              ))}
            </div>
          </Predict>
          <Today>
            <div className="title">[ 오늘 경기 일정 ]</div>
            <div>
              {todays.map((today, idx) => (
                <div key={idx} className="content">
                  {today.awayName} vs {today.homeName}
                </div>
              ))}
            </div>
          </Today>
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
            <img className="main_simul" src="../assets/Ground.png" alt="" />
          </div>
          <div className="Sub">
            <Skeleton className="skel" variant="rectangular" height={100} />
            <Skeleton className="skel" variant="rectangular" height={100} />
            <Skeleton className="skel" variant="rectangular" height={100} />
          </div>
        </SimulationCase>
        <DownChart {...downsettings}>
          <Predict>
            <div className="title">[ 어제 경기 결과 ]</div>
            {yesterdays.map((yesterday, idx) => (
              <div key={idx} className="content">
                {yesterday.awayName} vs {yesterday.homeName}
              </div>
            ))}
          </Predict>
          <Today>
            <div className="title">[ 오늘 경기 일정 ]</div>
            {todays.map((today, idx) => (
              <div key={idx} className="content">
                {today.awayName} vs {today.homeName}
              </div>
            ))}
          </Today>
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
          <img className="main_simul" src="../assets/Ground.png" alt="" />
        </SimulationCase>
        <DownChart {...downsettings}>
          <Predict>
            <div className="title">[ 어제 경기 결과 ]</div>
            {yesterdays.map((yesterday, idx) => (
              <div key={idx} className="content">
                {yesterday.awayName} vs {yesterday.homeName}
              </div>
            ))}
          </Predict>
          <Today>
            <div className="title">[ 오늘 경기 일정 ]</div>
            {todays.map((today, idx) => (
              <div key={idx} className="content">
                {today.awayName} vs {today.homeName}
              </div>
            ))}
          </Today>
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
