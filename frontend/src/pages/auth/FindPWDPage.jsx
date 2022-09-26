import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changePwd } from "./findpwd-slice";
import { checkEmail, changwan } from "./signup-slice";
import {
  FindPWDBox,
  InputBox,
  ContentCase,
  StyledInput,
} from "./FindPWDPage.style";

const FindPWDPage = () => {
  const dispatch = useDispatch();

  // form에 입력한 정보
  const [userEmail, setUserEmail] = useState("");
  const [emailCert, setEmailCert] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const [userPwdCheck, setUserPwdCheck] = useState("");

  // 유효성 검사 변수
  const [emailValid, setEmailValid] = useState(true);
  const [pwdValid, setPwdValid] = useState(true);

  // 이메일 인증 성공 여부
  const [successCert, setSuccssCert] = useState(false);

  // 비밀번호 재확인 여부 판별
  const [checkedPwd, setCheckedPwd] = useState(false);

  // 에러 메시지 방지 (입력이 들어오면 값 변경)
  const [defaultEmail, setDefaultEmail] = useState(false);
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
  async function checkCertNumber() {
    console.log("이것도 되나");
    const data = {
      email: userEmail,
      randomNumber: emailCert,
    };
    await dispatch(changwan(data))
      .unwrap()
      .then((res) => {
        setSuccssCert(res);
      });
  }

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
