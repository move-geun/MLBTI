import styled from "styled-components";

const FormInputsBlock = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-width: 320px;
  max-width: 600px;
  margin: auto;

  @media screen and (max-width: 830px) {
    h1 {
      font-size: 50px;
    }
    span {
      font-size: 17px;
    }
    input {
      font-size: 17px;
    }
  }

  @media screen and (max-width: 480px) {
    h1 {
      font-size: 30px;
    }
    span {
      font-size: 13px;
    }
    input {
      font-size: 13px;
    }
  }
`;

const Header = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  font-size: 5rem;
  color: #2565d0;
  margin-top: 3rem;
`;

const SingupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (max-width: 480px) {
    margin-top: 2rem;
  }
`;

const InputDiv = styled.div`
  display: flex;
  /* grid-template-columns: 0.5fr 1fr 30%; */
  flex-direction: row;
  width: 90%;
  margin: 0 0 2rem 2rem;
  align-items: center;
`;

const CertBtn = styled.button`
  background-color: rgba(0, 0, 0, 0.1);
  color: black;
  padding: 3px 3px;
  margin-left: 15px;
  font-size: 20px;
  @media screen and (max-width: 830px) {
    font-size: 15px;
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`;

const Text = styled.div`
  font-size: 20px;
  width: 150px;
  @media screen and (max-width: 830px) {
    font-size: 20px;
    width: 130px;
  }
  @media screen and (max-width: 480px) {
    font-size: 15px;
    width: 100px;
  }
`;

const StyledInput = styled.input`
  font-size: 20px;
  padding: 1rem 0.5rem;
  width: 100%;
  height: 1rem;
  border-bottom: 1px solid black;
`;

const ContentCase = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    flex-direction: column;
  }
`;

const InputBtnDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const InBtn = styled.button`
  border: 0;
  padding: 1rem;
  margin: 1rem 0;
  font-size: 25px;
  &:hover {
    background-color: #2565d0;
    font-size: 27px;
  }
  @media screen and (max-width: 830px) {
    font-size: 20px;
    &:hover {
      font-size: 23px;
    }
  }
  @media screen and (max-width: 480px) {
    font-size: 13px;
    &:hover {
      font-size: 15px;
    }
  }
`;

const ErrorText = styled.span`
  color: #ff0000;
  font-size: 17px;
  left: 110px;
  
  &.correct {
    color: #02C302;
  }
`;

export {
  FormInputsBlock,
  Header,
  SingupWrapper,
  InputDiv,
  Text,
  StyledInput,
  InBtn,
  ErrorText,
  ContentCase,
  InputBtnDiv,
  CertBtn,
};
