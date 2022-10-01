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
import { getNotice, getToday } from "./mainpage-slice";

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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    console.log("누르긴했다잉, 근데 안 닫힐거지롱");
    setOpen(false);
  };
  // const [notices, setNotices] = useState();

  const dispatch = useDispatch();
  function floatingNotice() {
    dispatch(getNotice())
      .unwrap()
      .then((res) => {})
      .catch((err) => {
        console.log("공지 불러오기 실패");
      });
  }
  function floatingToday() {
    const data = {
      day: 20220930,
    };
    dispatch(getToday(data))
      .unwrap()
      .then((res) => {})
      .catch((err) => {
        console.log("스케줄 불러오기 실패");
      });
  }

  useEffect(() => {
    floatingNotice();
    floatingToday();
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
            <Skeleton variant="rectangular" height={330} />
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
            <div className="content">애리조나 5 : 0 샌디에고</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
          </Predict>
          <Today>
            <div className="title">[ 오늘 경기 일정 ]</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
          </Today>
          <Rank>
            <div className="title">[팀 순위]</div>
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
            <Skeleton variant="rectangular" height={330} />
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
            <div className="content">애리조나 5 : 0 샌디에고</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
          </Predict>
          <Today>
            <div className="title">[ 오늘 경기 일정 ]</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
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
          <div className="Main">
            <Skeleton variant="rectangular" width={372} height={330} />
          </div>
        </SimulationCase>
        <DownChart {...downsettings}>
          <Predict>
            <div className="title">[ 어제 경기 결과 ]</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
          </Predict>
          <Today>
            <div className="title">[ 오늘 경기 일정 ]</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
            <div className="content">애리조나 5 : 0 샌디에고</div>
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
