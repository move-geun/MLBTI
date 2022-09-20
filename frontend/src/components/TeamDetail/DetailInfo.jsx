import React, { useState } from "react";
import {
  Wrapper,
  ContentSwitch,
  Switch,
  Content,
  Schedule,
  ScheduleDetail,
  Player,
  PlayerDetail,
} from "./DetailInfo.style";

const DetailInfo = () => {
  const [page, setPage] = useState("경기일정");

  const handlePage = (e) => {
    setPage(e.target.value);
    console.log("이게뭘까", e.target.value);
  };

  // console.log(page)

  return (
    <Wrapper>
      <ContentSwitch>
        <Switch value="경기일정" onClick={handlePage}>
          경기 일정
        </Switch>
        <Switch value="선수보기" onClick={handlePage}>
          선수 보기
        </Switch>
      </ContentSwitch>

      {/* page 값에 따라 보여지는 화면 다름 */}
      {/* ScheduleDetail을 map으로 반복 */}
      {page === "경기일정" ? (
        <Schedule>
          <ScheduleDetail>
            <div className="day">
              <div className="date">8.12(월)</div>
              <div className="state">경기종료</div>
            </div>
            <div className="content">
              <div className="team">롯데프링글스</div>
              <div className="result">3:1</div>
              <div className="team">베스킨라빈스</div>
            </div>
          </ScheduleDetail>
          <ScheduleDetail>
            <div className="day">
              <div className="date">8.12(월)</div>
              <div className="state">경기종료</div>
            </div>
            <div className="content">
              <div className="team">롯데프링글스</div>
              <div className="result">3:1</div>
              <div className="team">베스킨라빈스</div>
            </div>
          </ScheduleDetail>
          <ScheduleDetail>
            <div className="day">
              <div className="date">8.12(월)</div>
              <div className="state">경기종료</div>
            </div>
            <div className="content">
              <div className="team">롯데프링글스</div>
              <div className="result">3:1</div>
              <div className="team">베스킨라빈스</div>
            </div>
          </ScheduleDetail>
        </Schedule>
      ) : null}

      {page === "선수보기" ? (
        <Player>
          <PlayerDetail>
            <div className="name">이동근</div>
            <div className="포지션">투수</div>
            <div className="스탯">99</div>
          </PlayerDetail>
        </Player>
      ) : null}
    </Wrapper>
  );
};

export default DetailInfo;
