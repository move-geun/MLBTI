import React, { useState } from "react";
import {
  FormInputsBlock,
  Header,
  SingupWrapper,
  InputDiv,
  Text,
  StyledInput,
  InBtn,
  ErrorText,
  ContentCase,
} from "./SignupPage.style";

const SignupPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [emailCert, setEmailCert] = useState("");
  const [userNick, setUserNick] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const [userPwdCheck, setUserPwdCheck] = useState("");
  const [defaultEmail, setDefaultEmail] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [defaultNickname, setDefaultNickname] = useState(false);
  const [nicknameValid, setNicknameValid] = useState(true);

  // 이메일 유효성 검사
  const validateEmail = (e) => {
    if (e.target.value) {
      setDefaultEmail(true);
    } else {
      setDefaultEmail(false);
    }

    let regexp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (regexp.test(e.target.value)) return setEmailValid(true);
    else return setEmailValid(false);
  };

  // 닉네임 유효성 검사
  const validateNickname = (e) => {
    if (e.target.value) {
      setDefaultNickname(true);
    } else {
      setDefaultNickname(false);
    }

    let regexp = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;
    if (
      regexp.test(e.target.value) &&
      e.target.value.length <= 10 &&
      e.target.value.length >= 2
    )
      return setNicknameValid(true);
    else return setNicknameValid(false);
  };

  return (
    <FormInputsBlock>
      <Header>회원가입</Header>
      <SingupWrapper>
        <InputDiv>
          <Text>이메일</Text>
          <ContentCase>
            <StyledInput
              type="email"
              placeholder="example@exam.com"
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
              value={userEmail}
              className="email"
              onBlur={(e) => {
                validateEmail(e);
              }}
            />
            {defaultEmail && !emailValid ? (
              <ErrorText>올바르지 않은 이메일 형식 입니다.</ErrorText>
            ) : null}
          </ContentCase>
        </InputDiv>

        <InputDiv>
          <Text>인증번호 확인</Text>
          <ContentCase>
            <StyledInput
              type="text"
              placeholder="인증번호를 입력해주세요"
              onChange={(e) => {
                setEmailCert(e.target.value);
              }}
              value={emailCert}
              className="cert"
            />
          </ContentCase>
        </InputDiv>
        <InputDiv>
          <Text>닉네임</Text>
          <ContentCase>
            <StyledInput
              type="text"
              placeholder="닉네임을 입력해주세요"
              onChange={(e) => {
                setUserNick(e.target.value);
              }}
              value={userNick}
              onBlur={(e) => {
                validateNickname(e);
              }}
              className="nickname"
            />
            {defaultNickname && !nicknameValid ? (
              <ErrorText>
                닉네임은 2~10자 이하의 한글,영어,숫자만 입력할 수 있어요
              </ErrorText>
            ) : null}
          </ContentCase>
        </InputDiv>
        <InputDiv>
          <Text>비밀번호</Text>
          <ContentCase>
            <StyledInput
              type="text"
              placeholder="대,소문자 포함 8자리"
              onChange={(e) => {
                setUserPwd(e.target.value);
              }}
              value={userPwd}
              className="password"
            />
          </ContentCase>
        </InputDiv>
        <InputDiv>
          <Text>비밀번호 확인</Text>
          <ContentCase>
            <StyledInput
              type="text"
              placeholder="비밀번호를 다시 입력해주세요"
              onChange={(e) => {
                setUserPwdCheck(e.target.value);
              }}
              value={userPwdCheck}
              className="passwordcheck"
            />
          </ContentCase>
        </InputDiv>
      </SingupWrapper>
      <InBtn>계정 생성하기</InBtn>
    </FormInputsBlock>
  );
};

export default SignupPage;
