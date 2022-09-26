import { useState } from "react";
import {
  FindPWDBox,
  InputBox,
  ContentCase,
  StyledInput,
} from "./FindPWDPage.style";

const FindPWDPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [emailCert, setEmailCert] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const [userPwdCheck, setUserPwdCheck] = useState("");

  return (
    <FindPWDBox>
      <h1> 비밀번호 변경하기</h1>
      <form action="">
        {/* 이메일 입력박스 */}
        <InputBox>
          <div>E-Mail</div>
          <ContentCase>
            <StyledInput>
              <input
                type="email"
                placeholder="example@exam.com"
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
                value={userEmail}
              />
              <button>인증하기</button>
            </StyledInput>
            <span>메일 형식이 아닙니다.</span>
          </ContentCase>
        </InputBox>
        {/* 메일 인증확인 */}
        <InputBox>
          <div>메일 인증 확인</div>
          <ContentCase>
            <StyledInput>
              <input
                type="text"
                placeholder="인증번호를 입력해주세요"
                onChange={(e) => {
                  setEmailCert(e.target.value);
                }}
                value={emailCert}
              />
              <button>인증하기</button>
            </StyledInput>
            <span>인증번호가 일치하지 않습니다.</span>
          </ContentCase>
        </InputBox>
        {/* 변경할 비밀번호 입력 */}
        <InputBox>
          <div>비밀번호 변경</div>
          <ContentCase>
            <StyledInput>
              <input
                type="text"
                placeholder="대,소문자 포함 8자리"
                onChange={(e) => {
                  setUserPwd(e.target.value);
                }}
                value={userPwd}
              />
            </StyledInput>
            <span>비밀번호를 확인해주세요.</span>
          </ContentCase>
        </InputBox>
        {/* 비밀번호 재확인 */}
        <InputBox>
          <div>비밀번호 확인</div>
          <ContentCase>
            <StyledInput>
              <input
                type="text"
                placeholder="비밀번호를 다시 입력해주세요"
                onChange={(e) => {
                  setUserPwdCheck(e.target.value);
                }}
                value={userPwdCheck}
              />
            </StyledInput>
            <span>비밀번호가 일치하지 않습니다.</span>
          </ContentCase>
        </InputBox>
      </form>
    </FindPWDBox>
  );
};

export default FindPWDPage;
