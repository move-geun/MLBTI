import styled from "styled-components";

const LoginBox = styled.div`
  min-width: 350px;
  max-width: 500px;
  height: 100vh;
  margin: 50px auto 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .imgbox {
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      width: 120px;
      height: 120px;
      margin-right: 15px;
    }
  }

  h1 {
    color: #2565d0;
  }
  form {
    width: 100%;
    font-size: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  button {
    margin-top: 2rem;
  }
  @media screen and (max-width: 830px) {
    button {
      margin-top: 1.5rem;
    }
    form {
      font-size: 1.5rem;
    }
    .imgbox {
      img {
        width: 80px;
        height: 80px;
      }
    }
  }

  @media screen and (max-width: 480px) {
    button {
      margin-top: 1rem;
    }
    form {
      font-size: 1rem;
    }
    .imgbox {
      img {
        width: 60px;
        height: 60px;
      }
    }
  }
`;

const FlexRow = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  div {
    width: 10%;
  }
`;

const InputBox = styled.input`
  width: 60%;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0);
  font-size: 25px;
  @media screen and (max-width: 830px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

const FlexSpan = styled.div`
  width: 100%;
  margin: 1% 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  color: rgba(0, 0, 0, 0.3);
  a {
    color: rgba(0, 0, 0, 0.3);
  }
  @media screen and (max-width: 830px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.5rem;
  }
`;

export { LoginBox, FlexRow, InputBox, FlexSpan };
