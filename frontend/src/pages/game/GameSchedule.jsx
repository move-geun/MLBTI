import React from "react";
import { CompareContainer, ScheduleBox, Schedule } from "./GameSchedule.style";

const GameSchedule = () => {
  const date = new Date();
  let y = date.getFullYear();
  const [year, setYear] = React.useState(y);

  const getYear = (e) => {
    setYear(e.target.value);
    console.log(year);
  };

  return (
    <CompareContainer>
      <div className="title">경기 일정</div>
      <div className="year">
        <div className="third">{year}년도 경기 일정</div>
        <input
          className="third"
          type="number"
          defaultValue={y}
          onChange={getYear}
          max={y}
        />
        <div className="third"></div>
      </div>
      <ScheduleBox>
        <div className="month">
          <div>4월</div>
          <div>5월</div>
          <div>6월</div>
          <div>7월</div>
          <div>8월</div>
          <div>9월</div>
          <div>10월</div>
        </div>
        <div className="info">
          <div>날짜</div>
          <div>시간</div>
          <div>장소</div>
          <div></div>
          <div></div>
          <div>경기</div>
          <div></div>
          <div></div>
          <div>중계</div>
          <div>경기내용</div>
        </div>
      </ScheduleBox>
      <Schedule>
        <div>9.1</div>
        <div>03:05</div>
        <div>글로브 라이프 필드</div>
        <div>휴스턴</div>
        <div>로고</div>
        <div>5:3</div>
        <div>로고</div>
        <div>텍사스</div>
        <div>경기기록</div>
        <div></div>
      </Schedule>
      <Schedule>
        <div>9.1</div>
        <div>03:05</div>
        <div>글로브 라이프 필드</div>
        <div>휴스턴</div>
        <div>로고</div>
        <div>5:3</div>
        <div>로고</div>
        <div>텍사스</div>
        <div>경기기록</div>
        <div></div>
      </Schedule>
      <Schedule>
        <div>9.1</div>
        <div>03:05</div>
        <div>글로브 라이프 필드</div>
        <div>휴스턴</div>
        <div>로고</div>
        <div>5:3</div>
        <div>로고</div>
        <div>텍사스</div>
        <div>경기기록</div>
        <div></div>
      </Schedule>
      <Schedule>
        <div>9.1</div>
        <div>03:05</div>
        <div>글로브 라이프 필드</div>
        <div>휴스턴</div>
        <div>로고</div>
        <div>5:3</div>
        <div>로고</div>
        <div>텍사스</div>
        <div>경기기록</div>
        <div></div>
      </Schedule>
      <Schedule>
        <div>9.1</div>
        <div>03:05</div>
        <div>글로브 라이프 필드</div>
        <div>휴스턴</div>
        <div>로고</div>
        <div>5:3</div>
        <div>로고</div>
        <div>텍사스</div>
        <div>경기기록</div>
        <div></div>
      </Schedule>
    </CompareContainer>
  );
};

export default GameSchedule;
