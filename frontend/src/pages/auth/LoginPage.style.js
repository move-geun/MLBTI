import styled from "styled-components";

const LoginBox = styled.div`
  min-width: 320px;
  max-width: 500px;
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
  }
  button {
    margin-top: 2rem;

    @media screen and (max-width: 830px) {
      margin-top: 1.5rem;
    }

    @media screen and (max-width: 480px) {
      margin-top: 1rem;
    }
  }
`;

const FlexRow = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 25px;
  justify-content: space-evenly;
  div {
    min-width: 130px;
    width: 40%;
  }
`;

const InputBox = styled.input`
  min-width: 290px;
  width: 90%;
  font-size: 25px;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0);
`;

const FlexSpan = styled.div`
  width: 100%;
  margin: 1% 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  color: rgba(0, 0, 0, 0.3);
  a {
    margin-left: 3%;
    color: rgba(0, 0, 0);
  }
`;

export { LoginBox, FlexRow, InputBox, FlexSpan };
