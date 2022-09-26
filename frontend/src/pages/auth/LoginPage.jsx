import { LoginBox, FlexRow, InputBox, FlexSpan } from "./LoginPage.style";
import { useState } from "react";
import { useDispatch } from "react-redux";
import login from "./login-slice";

// 로그인 기능 구현
// api 연결
// 토큰 저장

const LoginPage = () => {
  const dispatch = useDispatch();
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");

  function loginSubmit(e) {
    e.preventDefault();
    const data = {
      email: userEmail,
      password: userPassword,
    };
    console.log(data);
    dispatch(login(data))
      .unwrap()
      .then((res) => {
        console.log("디스패치 됐?");
        console.log("1번 성공");
        // save token
      })
      .catch((err) => {
        if (err.status === 401) {
          alert("비밀번호를 확인해주세요");
        } else if (err.status === 404) {
          alert("해당 정보로 가입된 유저 정보가 없습니다");
        } else if (err.status === 500) {
          alert("서버 오류입니다. 1분 뒤 재시도해주세요");
        }
      });
  }

  return (
    <LoginBox>
      <div class="imgbox">
        <img src="/assets/cap.png" alt="로고" />
        <h1>로그인</h1>
      </div>
      <form onSubmit={loginSubmit}>
        <FlexRow>
          <div>이메일</div>
          <InputBox
            placeholder="이메일을 입력해주세요"
            value={userEmail}
            onChange={(e) => setEmail(e.target.value)}
          ></InputBox>
        </FlexRow>
        <FlexRow>
          <div>비밀번호</div>
          <InputBox
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={userPassword}
            onChange={(e) => setPassword(e.target.value)}
          ></InputBox>
        </FlexRow>
      </form>
      <FlexSpan>
        <div>비밀번호를 잊으셨나요?</div>
        <a href="/findPwd">비밀번호 찾기</a>
      </FlexSpan>
      <FlexSpan>
        <div>아직 회원이 아니신가요?</div>
        <a href="/signup">회원가입하기</a>
      </FlexSpan>
      <button onClick={loginSubmit}>로그인</button>
    </LoginBox>
  );
};

export default LoginPage;
