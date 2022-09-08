import styled from "styled-components";

const FormInputsBlock = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-width: 320px;
  max-width: 500px;
  margin: auto;
`;
const Header = styled.div`
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
  align-items: center;
  margin-top: 3rem;
  width: 100%;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 2rem;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.div`
  font-size: 20px;
  min-width: 110px;
`;

const StyledInput = styled.input`
  font-size: 20px;
  padding: 1rem 0.5rem;
  width: 60%;
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

export { FormInputsBlock, Header, SingupWrapper, InputDiv, Text, StyledInput, InBtn };
