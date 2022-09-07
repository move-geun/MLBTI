import { LoginBox, FlexRow, InputBox, FlexSpan } from "./LoginPage.style";

const LoginPage = () => {
  return (
    <LoginBox>
      <h1>로그인</h1>
      <form action="submit">
        <FlexRow>
          <div>이메일</div>
          <InputBox></InputBox>
        </FlexRow>
        <FlexRow>
          <div>비밀번호</div>
          <InputBox></InputBox>
        </FlexRow>
      </form>
      <FlexSpan>
        <div>비밀번호를 잊으셨나요?</div>
        <a href="http://localhost:3000/findPwd">비밀번호 찾기</a>
      </FlexSpan>
      <FlexSpan>
        <div>아직 회원이 아니신가요?</div>
        <a href="http://localhost:3000/signup">회원가입하기</a>
      </FlexSpan>
      <button>로그인</button>
    </LoginBox>
  );
};

export default LoginPage;
