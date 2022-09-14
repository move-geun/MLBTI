import {
  CustomConatiner,
  TeamContainer,
  TeamCase,
} from "./CustomSimulationPage.style";

// 모달 연결
// 전체 width 조절
// 시뮬레이션 시작 버튼 연결
// 승률 높은 곳에 색 변경
// 수정필요

const CustomSimulationPage = () => {
  return (
    <CustomConatiner>
      <TeamContainer>
        <TeamCase>
          <img src="/assets/cap.png" alt="1팀이었던것.." />
          <div>팀 설정하기</div>
          <div>56%</div>
        </TeamCase>
        <span> VS </span>
        <TeamCase>
          <img src="/assets/cap.png" alt="2팀이었던것.." />
          <div>팀 설정하기</div>
          <div>44%</div>
        </TeamCase>
      </TeamContainer>

      <div className="start">
        <img src="/assets/cap.png" alt="시작아이콘..이었던것" />
        <span>시뮬레이션 시작</span>
      </div>
    </CustomConatiner>
  );
};

export default CustomSimulationPage;
