import styled from "styled-components";

const FindPWDBox = styled.div`
  min-width: 350px;
  max-width: 550px;
  height: 100vh;
  margin: 50px auto 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #2565d0;
  }
  form {
    width: 100%;
    font-size: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const InputBox = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  div {
    font-size: 25px;
    @media screen and (max-width: 830px) {
      font-size: 1.5rem;
    }
    @media screen and (max-width: 480px) {
      font-size: 1rem;
    }
  }
`;

const ContentCase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 20px;
  span {
    color: #e61d31;
    margin: 5px 0 0 5px;
    font-size: 1rem;
    font-weight: 400;

    @media screen and (max-width: 480px) {
      font-size: 0.625rem;
    }
  }

  font-size: 25px;
  @media screen and (max-width: 830px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

const StyledInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  input {
    border: none;
    border-bottom: 1px solid black;
    font-size: 25px;
    @media screen and (max-width: 830px) {
      font-size: 1.5rem;
    }
    @media screen and (max-width: 480px) {
      font-size: 1rem;
    }
  }
  button {
    background-color: rgba(0, 0, 0, 0.1);
    color: black;
    padding: 3px 3px;
    margin-left: 5px;
    font-size: 15px;
    @media screen and (max-width: 480px) {
      font-size: 0.625rem;
    }
  }
`;
export { FindPWDBox, InputBox, ContentCase, StyledInput };
