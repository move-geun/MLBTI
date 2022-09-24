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
  CertBtn,
} from "./SignupPage.style";
import { checkEmail, getTeam } from "./signup-slice";
import { useDispatch } from 'react-redux'

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

  console.log("디폴트이메일",defaultEmail);

  const dispatch = useDispatch()

  function sendNumber() {
    dispatch(checkEmail(userEmail))
  }

  return (
    <FormInputsBlock>
      <Header>회원가입</Header>
      <SingupWrapper>
        <InputDiv>
          <Text>이메일</Text>
          <ContentCase>
            <div>
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
              ></StyledInput>
            
            {defaultEmail && !emailValid ? (
              <ErrorText>올바르지 않은 이메일 형식 입니다.</ErrorText>
              ) : null}
              </div>
          </ContentCase>
              <CertBtn type='button' onClick={sendNumber} >인증번호 전송</CertBtn>
        </InputDiv>

        {/* 인정번호 확인 */}
        <InputDiv>
          <Text>인증번호 확인</Text>
          <ContentCase>
            <StyledInput
              type="text"
              placeholder="인증번호 입력"
              onChange={(e) => {
                setEmailCert(e.target.value);
              }}
              value={emailCert}
              className="cert"
            />
          </ContentCase>
            <CertBtn>인증번호 확인</CertBtn>
        </InputDiv>

        {/* 닉네임 */}
        <InputDiv>
          <Text>닉네임</Text>
          <ContentCase>
            <div>
            <StyledInput
              type="text"
              placeholder="닉네임은 2~10자 이하의 한글,영어,숫자"
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
                올바르지 않은 닉네임 입니다.
              </ErrorText>
            ) : null}
            </div>
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
              placeholder="비밀번호 입력"
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
