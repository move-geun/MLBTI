import React, {useState} from "react"
import { FormInputsBlock, Header, SingupWrapper, InputDiv, Text, StyledInput, InBtn } from "./SignupPage.style"

const SignupPage = () => {
  const [userEmail, setUserEmail] = useState('')
  const [emailCert, setEmailCert] = useState('')
  const [userNick, setUserNick] = useState('')
  const [userPwd, setUserPwd] = useState('')
  const [userPwdCheck, setUserPwdCheck] = useState('')

  return (
    <FormInputsBlock>
      <Header>회원가입</Header>
      <SingupWrapper>
        <InputDiv>
          <Text>이메일</Text>
          <StyledInput
              type="email"
              placeholder="example@exam.com"
              onChange={(e) => {
                setUserEmail(e.target.value)
              }}
              value={userEmail}
              className="email"/>
        </InputDiv>
        <InputDiv>
          <Text>인증번호 확인</Text>
          <StyledInput
              type="text"
              placeholder="인증번호를 입력해주세요"
              onChange={(e) => {
                setEmailCert(e.target.value)
              }}
              value={emailCert}
              className="cert"/>
        </InputDiv>
        <InputDiv>
          <Text>닉네임</Text>
          <StyledInput
              type="text"
              placeholder="닉네임을 입력해주세요"
              onChange={(e) => {
                setUserNick(e.target.value)
              }}
              value={userNick}
              className="nickname"/>
        </InputDiv>
        <InputDiv>
          <Text>비밀번호</Text>
          <StyledInput
              type="text"
              placeholder="대,소문자 포함 8자리"
              onChange={(e) => {
                setUserPwd(e.target.value)
              }}
              value={userPwd}
              className="password"/>
        </InputDiv>
        <InputDiv>
          <Text>비밀번호 확인</Text>
          <StyledInput
              type="text"
              placeholder="비밀번호를 다시 입력해주세요"
              onChange={(e) => {
                setUserPwdCheck(e.target.value)
              }}
              value={userPwdCheck}
              className="passwordcheck"/>
        </InputDiv>
      </SingupWrapper>
      <InBtn >계정 생성하기</InBtn> 
    </FormInputsBlock>
    )
  } 
  
  export default SignupPage