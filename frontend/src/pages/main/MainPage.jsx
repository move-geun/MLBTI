import {
  Notice,
  Main,
  SimulationCase,
  CheckBox,
  Predict,
  Today,
  Rank,
  DownChart,
} from "./MainPage.style";

import { Link } from "react-router-dom";
import { getNotice, getToday, getrank } from "./mainpage-slice";

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
  const [open, setOpen] = useState(false);
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
    dispatch(getToday(data))
      .unwrap()
      .then((res) => {})
      .catch((err) => {
        console.log("어제어제 스케줄 불러오기 실패");
      });
  }
  // 서부 랭크 받아오기
  function rank() {
    const data = {
      day: todayFormal(),
    };
    dispatch(getrank(data))
      .unwrap()
      .then((res) => {})
      .catch((err) => {
        console.log("어제어제 스케줄 불러오기 실패");
      });
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
              <div>내셔널 리그</div>
              <div>아메리칸 리그</div>
            </div>
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
          </Rank>
        </DownChart>
      </Main>
    );
  }
};
export default MainPage;
