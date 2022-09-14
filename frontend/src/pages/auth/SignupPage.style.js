import styled from "styled-components";

const FormInputsBlock = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-width: 320px;
  max-width: 500px;
  margin: auto;

  @media screen and (max-width: 830px) {
    h1 {
      font-size: 50px;
    }
    button {
      font-size: 20px;
    }
    span {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 480px) {
    h1 {
      font-size: 30px;
    }
    button {
      font-size: 15px;
    }
    span {
      font-size: 15px;
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
  flex-direction: column;
  width: 100%;
  margin: 0 0 2rem 2rem;
  justify-content: space-between;

`;

const Text = styled.div`
  font-size: 20px;
  min-width: 110px;
  @media screen and (max-width: 830px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

const StyledInput = styled.input`
  font-size: 20px;
  padding: 1rem 0.5rem;
  width: 80%;
  height: 1rem;
  border-bottom: 1px solid black;
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
`;

const ErrorText = styled.span`
  color: #ff0000;
  font-size: 17px;
  left: 110px;
`

export {
  FormInputsBlock,
  Header,
  SingupWrapper,
  InputDiv,
  Text,
  StyledInput,
  InBtn,
  ErrorText,
};
