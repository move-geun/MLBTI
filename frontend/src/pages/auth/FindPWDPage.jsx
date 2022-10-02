import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changePwd } from "./findpwd-slice";
import { checkEmail, checkCertNumber, getUserList } from "./signup-slice";
import { AlertText } from "./SignupPage.style";
import {
  FindPWDBox,
  InputBox,
  ContentCase,
  StyledInput,
} from "./FindPWDPage.style";

// 유저 닉네임 바로 가져오기

const FindPWDPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // form에 입력한 정보
  const [userEmail, setUserEmail] = useState("");
  const [emailCert, setEmailCert] = useState("");
  const [nickName, setnickName] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const [userPwdCheck, setUserPwdCheck] = useState("");

  // 유효성 검사 변수
  const [emailValid, setEmailValid] = useState(true);
  const [nicknameValid, setNicknameValid] = useState(true);
  const [pwdValid, setPwdValid] = useState(true);

  // 이메일 인증 성공 여부
  const [successCert, setSuccssCert] = useState(false);

  // 비밀번호 재확인 여부 판별
  const [checkedPwd, setCheckedPwd] = useState(false);

  // 에러 메시지 방지 (입력이 들어오면 값 변경)
  const [defaultEmail, setDefaultEmail] = useState(false);
  const [defaultNickname, setDefaultNickname] = useState(false);
  const [defaultPwd, setDefaultPwd] = useState(false);

  // 닉네임 중복 여부 판별 (중복 = false, 사용가능 = true)
  const [isDuplicateNickname, setisDuplicateNickname] = useState(false);
  // 중복 확인 여부 판별
  const [confirmNickname, setConfirmNickname] = useState(false);

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
      e.target.value.length >= 8 &&
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
  function sendNumber(e) {
    e.preventDefault();
    dispatch(checkEmail(userEmail));
  }

  // 인증 하기
  async function checkMailNumber(e) {
    e.preventDefault();
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
  const availableNickname = (e) => {
    e.preventDefault();
    dispatch(getUserList(nickName))
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
      newNickname: nickName,
      newPassword: userPwd,
    };
    dispatch(changePwd(data))
      .unwrap()
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {
        if (err.status === 401) {
          alert("입력하신 정보를 한번 더 확인해주세요");
        } else if (err.status === 500) {
          alert("서버 오류입니다.");
        }
      });
  };

  let btnDisabled = true;
  if (
    successCert && // 이메일 인증
    checkedPwd && // 비밀번호 재확인
    isDuplicateNickname && // 닉네임 중복
    pwdValid // 비밀번호 유효성
  ) {
    btnDisabled = false;
  }

  return (
    <FindPWDBox>
      <h1> 개인정보 변경하기</h1>
      <form
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
                  validateEmail(e);
                }}
                value={userEmail}
              />
              <button onClick={sendNumber}>인증하기</button>
            </StyledInput>
            {/* 오류메시지 */}
            {defaultEmail && !emailValid ? (
              <AlertText>올바르지 않은 이메일 형식 입니다</AlertText>
            ) : null}
            {defaultEmail && emailValid ? (
              <AlertText className="correct">
                올바른 이메일 형식 입니다
              </AlertText>
            ) : null}
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
              <button onClick={checkMailNumber}>인증하기</button>
            </StyledInput>
            {/* 오류메세지 */}
            {successCert ? (
              <AlertText className="correct">인증에 성공 했습니다.</AlertText>
            ) : null}
            {emailCert && !successCert ? (
              <AlertText>인증이 필요 합니다.</AlertText>
            ) : null}
          </ContentCase>
        </InputBox>

        {/* 메일 인증확인 */}
        <InputBox>
          <div>닉네임 변경하기</div>
          <ContentCase>
            <StyledInput>
              <input
                type="text"
                placeholder="변경할 닉네임을 입력해주세요"
                onChange={(e) => {
                  setnickName(e.target.value);
                  if (isDuplicateNickname) {
                    setisDuplicateNickname(false);
                  }
                  if (confirmNickname) {
                    setConfirmNickname(false);
                  }
                  validateNickname(e);
                }}
                value={nickName}
              />
              <button
                onClick={(e) => {
                  if (nicknameValid && defaultNickname) {
                    availableNickname(e);
                  }
                  setConfirmNickname(true);
                }}
              >
                중복확인하기
              </button>
            </StyledInput>
            {/* 오류메세지 */}
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
          </ContentCase>
        </InputBox>

        {/* 변경할 비밀번호 입력 */}
        <InputBox>
          <div>비밀번호 변경</div>
          <ContentCase>
            <StyledInput>
              <input
                type="password"
                placeholder="대,소문자,숫자 포함 8자리 이상"
                onChange={(e) => {
                  setUserPwd(e.target.value);
                  validatePwd(e);
                }}
                value={userPwd}
              />
            </StyledInput>
            {/* 오류메세지 */}
            {defaultPwd && !pwdValid ? (
              <AlertText>올바르지 않은 비밀번호 양식 입니다.</AlertText>
            ) : null}
            {defaultPwd && pwdValid ? (
              <AlertText className="correct">
                올바른 비밀번호 양식 입니다.
              </AlertText>
            ) : null}
          </ContentCase>
        </InputBox>

        {/* 비밀번호 재확인 */}
        <InputBox>
          <div>비밀번호 확인</div>
          <ContentCase>
            <StyledInput>
              <input
                type="password"
                placeholder="비밀번호를 다시 입력해주세요"
                onChange={(e) => {
                  checkPassword(e);
                  setUserPwdCheck(e.target.value);
                }}
                value={userPwdCheck}
              />
            </StyledInput>
            {userPwdCheck ? (
              checkedPwd && userPwdCheck === userPwd ? (
                <AlertText className="correct">
                  비밀번호가 일치 합니다.
                </AlertText>
              ) : (
                <AlertText>비밀번호가 일치하지 않습니다</AlertText>
              )
            ) : null}
          </ContentCase>
        </InputBox>
      </form>

      <button
        onClick={(e) => {
          if (checkEmail && checkedPwd) {
            handleSubmit(e);
          }
        }}
        disabled={btnDisabled}
      >
        정보 변경하기
      </button>
    </FindPWDBox>
  );
};

export default FindPWDPage;
