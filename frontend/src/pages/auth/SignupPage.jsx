import React, { useState } from "react";
import {
  FormInputsBlock,
  Header,
  SingupWrapper,
  InputDiv,
  Text,
  StyledInput,
  InBtn,
  AlertText,
  ContentCase,
  CertBtn,
} from "./SignupPage.style";
import {
  checkEmail,
  getUserList,
  checkCertNumber,
  signup,
} from "./signup-slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // form에 입력한 정보
  const [userEmail, setUserEmail] = useState("");
  const [emailCert, setEmailCert] = useState("");
  const [userNick, setUserNick] = useState("");
  const [userPwd, setUserPwd] = useState("");

  // 유효성 검사 변수
  const [emailValid, setEmailValid] = useState(true);
  const [nicknameValid, setNicknameValid] = useState(true);
  const [pwdValid, setPwdValid] = useState(true);

  // 이메일 인증 성공 여부
  const [successCert, setSuccssCert] = useState(false);

  // 비밀번호 재확인 변수
  const [userPwdCheck, setUserPwdCheck] = useState("");
  // 비밀번호 재확인 여부 판별
  const [checkedPwd, setCheckedPwd] = useState(false);

  // 닉네임 중복 여부 판별 (중복 = false, 사용가능 = true)
  const [isDuplicateNickname, setisDuplicateNickname] = useState(false);
  // 중복 확인 여부 판별
  const [confirmNickname, setConfirmNickname] = useState(false);

  // 에러 메시지 방지 (입력이 들어오면 값 변경)
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

  // 인증확인 메일 전송
  function sendNumber() {
    dispatch(checkEmail(userEmail));
  }

  // 인증 하기
  async function checkNumber() {
    const data = {
      email: userEmail,
      randomNumber: emailCert,
    };
    await dispatch(checkCertNumber(data))
      .unwrap()
      .then((res) => {
        setSuccssCert(res);
      });
  }

  // 닉네임 중복 검사 함수
  const availableNickname = () => {
    dispatch(getUserList(userNick))
      .unwrap()
      .then((res) => {
        setisDuplicateNickname(res);
      })
      .catch((err) => {
        if (err.status === 500) {
          // 나중에 에러 페이지 추가
        }
      });
  };

  // 폼 제출 함수
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: userEmail,
      nickname: userNick,
      password: userPwd,
      randomNumber: emailCert,
    };
    dispatch(signup(data))
      .unwrap()
      .then(navigate("/login"))
      .catch((err) => {
        if (err.status === 401) {
          alert("입력하신 정보를 한번 더 확인해주세요");
        } else if (err.status === 500) {
        }
      });
  };

  let btnDisabled = true;
  if (
    successCert && // 이메일 인증
    checkedPwd && // 비밀번호 재확인
    pwdValid && // 비밀번호 유효성
    isDuplicateNickname && // 닉네임 중복
    nicknameValid // 닉네임 유효성
  ) {
    btnDisabled = false;
  }

  return (
    <FormInputsBlock
      onSubmit={(e) => {
        if (
          checkEmail &&
          checkedPwd &&
          isDuplicateNickname &&
          confirmNickname
        ) {
          handleSubmit(e);
        }
      }}
    >
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
                <AlertText>올바르지 않은 이메일 형식 입니다</AlertText>
              ) : null}
              {defaultEmail && emailValid ? (
                <AlertText className="correct">
                  올바른 이메일 형식 입니다
                </AlertText>
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
            <div>
              <StyledInput
                type="text"
                placeholder="인증번호 입력"
                onChange={(e) => {
                  setEmailCert(e.target.value);
                }}
                value={emailCert}
                className="cert"
              />

              {successCert ? (
                <AlertText className="correct">인증에 성공 했습니다.</AlertText>
              ) : null}

              {emailCert && !successCert ? (
                <AlertText>인증이 필요 합니다.</AlertText>
              ) : null}
            </div>
          </ContentCase>
          <CertBtn type="button" onClick={checkNumber}>
            인증번호 확인
          </CertBtn>
        </InputDiv>

        {/* 닉네임 */}
        <InputDiv>
          <Text>닉네임</Text>
          <ContentCase>
            <div>
              <StyledInput
                type="text"
                placeholder="2~10자 이하의 한글,영어,숫자"
                onChange={(e) => {
                  setUserNick(e.target.value);
                  if (isDuplicateNickname) {
                    setisDuplicateNickname(false);
                  }
                  if (confirmNickname) {
                    setConfirmNickname(false);
                  }
                  validateNickname(e);
                }}
                value={userNick}
                onBlur={(e) => {
                  validateNickname(e);
                }}
                className="nickname"
              />
              {defaultNickname && !nicknameValid ? (
                <AlertText>올바르지 않은 닉네임 입니다.</AlertText>
              ) : null}

              {defaultNickname &&
              nicknameValid &&
              !isDuplicateNickname &&
              !confirmNickname ? (
                <AlertText>닉네임 중복확인이 필요합니다.</AlertText>
              ) : null}
              {defaultNickname &&
              nicknameValid &&
              !isDuplicateNickname &&
              confirmNickname ? (
                <AlertText>중복된 닉네임입니다</AlertText>
              ) : null}
              {isDuplicateNickname ? (
                <AlertText className="correct">
                  사용 가능한 닉네임입니다
                </AlertText>
              ) : null}
            </div>
          </ContentCase>
          <CertBtn
            type="button"
            onClick={(e) => {
              if (nicknameValid && defaultNickname) {
                availableNickname(e);
              }
              setConfirmNickname(true);
            }}
          >
            중복 확인
          </CertBtn>
        </InputDiv>

        <InputDiv>
          <Text>비밀번호</Text>
          <ContentCase>
            <div>
              <StyledInput
                type="password"
                name="userPassword"
                autoComplete="userPwd"
                className="userPassword"
                placeholder="대소문자, 숫자 포함 9~16자"
                onChange={(e) => {
                  setUserPwd(e.target.value);
                  validatePwd(e);
                }}
                value={userPwd}
              />
              {defaultPwd && !pwdValid ? (
                <AlertText>올바르지 않은 비밀번호 양식 입니다.</AlertText>
              ) : null}
              {defaultPwd && pwdValid ? (
                <AlertText className="correct">
                  올바른 비밀번호 양식 입니다.
                </AlertText>
              ) : null}
            </div>
          </ContentCase>
        </InputDiv>

        <InputDiv>
          <Text>비밀번호 확인</Text>
          <ContentCase>
            <div>
              <StyledInput
                type="password"
                autoComplete="userPwd"
                placeholder="비밀번호 입력"
                className="passwordcheck"
                onChange={(e) => {
                  checkPassword(e);
                  setUserPwdCheck(e.target.value);
                }}
              />
              {userPwdCheck ? (
                checkedPwd && userPwdCheck === userPwd ? (
                  <AlertText className="correct">
                    비밀번호가 일치 합니다.
                  </AlertText>
                ) : (
                  <AlertText>비밀번호가 일치하지 않습니다</AlertText>
                )
              ) : null}
            </div>
          </ContentCase>
        </InputDiv>
      </SingupWrapper>
      <InBtn disabled={btnDisabled}>계정 생성하기</InBtn>
    </FormInputsBlock>
  );
};

export default SignupPage;
