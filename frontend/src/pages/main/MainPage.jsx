import {
  Notice,
  Main,
  SimulationCase,
  CheckBox,
  Predict,
  Today,
  Rank,
} from "./MainPage.style";

// 시뮬레이션 스켈레톤용
import * as React from "react";
import Skeleton from "@mui/material/Skeleton";

// 너비 지정해놔서 크기 줄 때 바꿔줘야함
// title 안내려오게끔 고정

const MainPage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

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
};

export default MainPage;
