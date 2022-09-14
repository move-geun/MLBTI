import {
  PageContainer,
  NameBox,
  Name,
  Id,
  ChangePwd,
  GraphBox,
} from "./MyProfilePage.style";

const MyProfilePage = () => {
  return (
    <PageContainer>
      <NameBox>
        <Name>
          <div>배송윤 아님</div>
          <span>님</span>
          <img src="/assets/cap.png" alt="편집이미지였던것.." />
        </Name>
        <Id>example@naver.com</Id>
      </NameBox>
      <ChangePwd>
        <img src="/assets/cap.png" alt="자물쇠였던것.." />
        비밀번호 변경하기
      </ChangePwd>
      <div className="divide">배송윤아님 님의 선구안</div>
      <GraphBox>
        {/* 실경기 박스 */}
        <div className="GraphDraw">
          <div className="nameDraw">
            <span>실경기 : </span>
            <span> 34회 (68%)</span>
          </div>
          <div>
            <img src="/assets/cap.png" alt="" />
          </div>
        </div>
        {/* 커스텀 경기 */}
        <div className="GraphDraw">
          <div className="nameDraw">
            <span>커스텀 경기:</span>
            <span>34회(68%)</span>
          </div>
          <div>
            <img src="/assets/cap.png" alt="" />
          </div>
        </div>
      </GraphBox>
    </PageContainer>
  );
};

export default MyProfilePage;
