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
import { checkEmail } from "./signup-slice";
import { useDispatch } from "react-redux";

const SignupPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [emailCert, setEmailCert] = useState("");
  const [userNick, setUserNick] = useState("");
  const [userPwd, setUserPwd] = useState("");

  const [emailValid, setEmailValid] = useState(true);
  const [nicknameValid, setNicknameValid] = useState(true);
  const [pwdValid, setPwdValid] = useState(true);

  // 비밀번호 재확인 value
  const [userPwdCheck, setUserPwdCheck] = useState("");
  // 비밀번호 재확인 됐는지 여부 판별
  const [checkedPwd, setCheckedPwd] = useState(false);

  const [defaultEmail, setDefaultEmail] = useState(false);
  const [defaultNickname, setDefaultNickname] = useState(false);
  const [defaultPwd, setDefaultPwd] = useState(false);

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
      e.target.value.length <= 30 &&
      e.target.value.length >= 2
    )
      return setNicknameValid(true);
    else return setNicknameValid(false);
  };

  // 비밀번호 유효성 검사 | 대소문자, 숫자 포함 9~16자
  const validatePwd = (e) => {
    var patternEngAtListOne = new RegExp(/[a-zA-Z]+/); // + for at least one
    var patternNumAtListOne = new RegExp(/[0-9]+/); // + for at least one

    if (e.target.value) {
      setDefaultPwd(true);
    } else {
      setDefaultPwd(false);
    }

    if (
      patternEngAtListOne.test(e.target.value) &&
      patternNumAtListOne.test(e.target.value) &&
      e.target.value.length >= 9 &&
      e.target.value.length <= 16
    ) {
      return setPwdValid(true);
    } else return setPwdValid(false);
  };

  // 비밀번호 재확인
  const checkPassword = (e) => {
    if (defaultPwd && pwdValid && e.target.value === userPwd) {
      return setCheckedPwd(true);
    } else return setCheckedPwd(false);
  };

  const dispatch = useDispatch();

  function sendNumber() {
    dispatch(checkEmail(userEmail));
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
                  validateEmail(e);
                }}
                value={userEmail}
                className="email"
              ></StyledInput>

              {defaultEmail && !emailValid ? (
                <ErrorText>올바르지 않은 이메일 형식 입니다.</ErrorText>
              ) : null}
              {defaultEmail && emailValid ? (
                <ErrorText className="correct">
                  올바른 이메일 형식 입니다.
                </ErrorText>
              ) : null}
            </div>
          </ContentCase>
          <CertBtn type="button" onClick={sendNumber}>
            인증번호 전송
          </CertBtn>
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
                  validateNickname(e);
                }}
                value={userNick}
                onBlur={(e) => {
                  validateNickname(e);
                }}
                className="nickname"
              />
              {defaultNickname && !nicknameValid ? (
                <ErrorText>올바르지 않은 닉네임 입니다.</ErrorText>
              ) : null}
              {defaultNickname && nicknameValid ? (
                <ErrorText className="correct">올바른 닉네임 입니다.</ErrorText>
              ) : null}
            </div>
          </ContentCase>
        </InputDiv>

        <InputDiv>
          <Text>비밀번호</Text>
          <ContentCase>
            <div>
              <StyledInput
                type="text"
                name="userPassword"
                className="userPassword"
                placeholder="대소문자, 숫자 포함 9~16자"
                onChange={(e) => {
                  setUserPwd(e.target.value);
                  validatePwd(e);
                }}
                value={userPwd}
              />
              {defaultPwd && !pwdValid ? (
                <ErrorText>올바르지 않은 비밀번호 양식 입니다.</ErrorText>
              ) : null}
              {defaultPwd && pwdValid ? (
                <ErrorText className="correct">
                  올바른 비밀번호 양식 입니다.
                </ErrorText>
              ) : null}
            </div>
          </ContentCase>
        </InputDiv>

        <InputDiv>
          <Text>비밀번호 확인</Text>
          <ContentCase>
            <div>
              <StyledInput
                type="text"
                placeholder="비밀번호 입력"
                className="passwordcheck"
                onChange={(e) => {
                  checkPassword(e);
                  setUserPwdCheck(e.target.value);
                }}
              />
              {userPwdCheck ? (
                checkedPwd && userPwdCheck === userPwd ? (
                  <ErrorText className="correct">
                    비밀번호가 일치 합니다.
                  </ErrorText>
                ) : (
                  <ErrorText>비밀번호가 일치하지 않습니다</ErrorText>
                )
              ) : null}
            </div>
          </ContentCase>
        </InputDiv>
      </SingupWrapper>
      <InBtn>계정 생성하기</InBtn>
    </FormInputsBlock>
  );
};

export default SignupPage;
