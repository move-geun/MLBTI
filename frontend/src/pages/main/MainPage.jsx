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

import { getNotice } from "./mainpage-slice";

// 시뮬레이션 스켈레톤용
import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

// 너비 지정해놔서 크기 줄 때 바꿔줘야함
// title 안내려오게끔 고정

const MainPage = () => {
  const dispatch = useDispatch();
  const [notices, setNotice] = useState([]);

  function floatingNotice() {
    dispatch(getNotice())
      .unwrap()
      .then((res) => {
        let step = 0;
        for (step = 0; step < res.data.length; step++) {
          // let obj = {
          //   uid: res.data[step].uid,
          //   title: res.data[step].title,
          // };
          // console.log(obj);
          setNotice([...notices, res.data[step]]);
          console.log("난 지나감");
        }
        console.log(notices);
      })
      .catch((err) => {
        alert("공지 불러오기 실패");
      });
  }

  useEffect(() => {
    floatingNotice();
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
          <div>[공지] 이동근 하기 싫은 중</div>
          <div>[공지] 사장님 도박은 재미로만 하셔야합니다</div>
          <div>[공지] 박찬호의 시선집중 사설 토토로 이용 금지</div>
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
          <div>[공지] 이동근 하기 싫은 중</div>
          <div>[공지] 사장님 도박은 재미로만 하셔야합니다</div>
          <div>[공지] 박찬호의 시선집중 사설 토토로 이용 금지</div>
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
          <div>[공지] 이동근 하기 싫은 중</div>
          <div>[공지] 사장님 도박은 재미로만 하셔야합니다</div>
          <div>[공지] 박찬호의 시선집중 사설 토토로 이용 금지</div>
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
