import { LoginBox, FlexRow, InputBox, FlexSpan } from "./LoginPage.style";

// 로그인
// export const login = createAsyncThunk(
//   'LOGIN',
//   async (userData:any, { rejectWithValue }) => {
//     try {
//       const res = await http.post('member/login.do', userData)
//       const accessToken = res.data.accessToken
//       const refreshToken = res.data.refreshToken
//       window.localStorage.setItem('access-Token', accessToken);
//       window.localStorage.setItem('refresh-Token', refreshToken);
//       return res
//     } catch (err:any) {
//       return rejectWithValue(err.response) //err안에 response로 담겨있음
//     }
//   },
// )

const LoginPage = () => {
  return (
    <LoginBox>
      <div class="imgbox">
        <img src="/assets/cap.png" alt="로고" />
        <h1>로그인</h1>
      </div>
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
        <a href="/findPwd">비밀번호 찾기</a>
      </FlexSpan>
      <FlexSpan>
        <div>아직 회원이 아니신가요?</div>
        <a href="/signup">회원가입하기</a>
      </FlexSpan>
      <button>로그인</button>
    </LoginBox>
  );
};

export default LoginPage;
