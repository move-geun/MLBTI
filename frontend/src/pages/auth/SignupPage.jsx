import React, {useState} from "react"
import styled from "styled-components"


const FormInputsBlock = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

`

const Header = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  font-size: 5rem;
  color: #2565D0;
  margin-top: 3rem;
`

const SingupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  width: 80%;
`


const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin-bottom: 2rem;
  justify-content: space-between;
`

const Text = styled.div`
  font-size: 2rem;
`

const StyledInput = styled.input`
  font-size: 1.5rem;
  padding: 1rem 0.5rem;
  width: 75%;
  height: 1rem;
  border-left-width:0; 
  border-right-width:0;
  border-top-width:0;
  border-bottom-width:1;

`
const InBtn = styled.button`
  background-color: #2565D0;
  color: white;

  width: 10%;
  border-radius: 0.5rem;
  border: 0;
  padding: 1rem;
  margin: 1rem 0;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    background-color: #2565D0;
    color: #e0e0e0;
    font-size: 1.5rem;
  }

`


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