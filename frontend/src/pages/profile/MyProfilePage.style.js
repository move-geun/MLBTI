import styled from "styled-components";

const PageContainer = styled.div`
  width: 88%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  font-size: 1.5rem;

  .divide {
    margin-top: 2rem ;
    width: 100%;
  }

  img {
    margin: 0 0.3rem;
  }

  @media screen and (max-width: 830px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1rem;
    img {
      margin: 0 0.1rem;
    }
  }
`;

const NameBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
    flex-direction: column;
    margin-bottom: 0.5rem;
  }
`;

const Name = styled.div`
  color: #2565d0;
  display: flex;
  flex-direction: row;

  span {
    color: black;
  }

  img {
    color: gray;
    width: 1.5rem;
    height: 1.5rem;
    @media screen and (max-width: 830px) {
      width: 1.3rem;
      height: 1.3rem;
    }
    @media screen and (max-width: 480px) {
      width: 1rem;
      height: 1rem;
    }
  }
`;

const Id = styled.div`
  color: rgba(0, 0, 0, 0.2);
  margin-left: 1rem;
  @media screen and (max-width: 480px) {
    margin-left: 0;
    margin-top: 0.3rem;
  }
`;

const ChangePwd = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;

  img {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 0;
    @media screen and (max-width: 830px) {
      width: 1.3rem;
      height: 1.3rem;
    }
    @media screen and (max-width: 480px) {
      width: 1rem;
      height: 1rem;
    }
  }
`;

const GraphBox = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .myprofileLogo {
    width: 30px;
    height: 30px;
  }
  img {
    @media screen and (max-width: 830px) {
      width: 80%;
      height: 80%;
    }
    @media screen and (max-width: 480px) {
      width: 60%;
      height: 60%;
    }
  }

  .GraphDraw {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .nameDraw {
      font-size: 1.7rem;
      width: 100%;
      border-bottom: 2px solid #2565d0;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      span {
        margin: 0.8rem;
      }
      @media screen and (max-width: 830px) {
        font-size: 1.3rem;
        span {
          margin: 0.5rem;
        }
      }
      @media screen and (max-width: 480px) {
        font-size: 1rem;
        span {
          margin: 0.2rem;
        }
      }
    }
  }
`;
const ModalBox = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 330px;
  height: 200px;
  border: 2px solid rgba(0, 0, 0, 0.2);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 5px;

  .title {
    width: 90%;
    text-align: center;
    font-size: 1.5rem;
  }

  .content {
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    form {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }
    input {
      width: 50%;
      border-bottom: 1px solid black;
      margin: 0 10px;
    }
    button {
      font-size: 1rem;
      padding: 0.2rem 0.2rem;
    }
  }

  .change {
    font-size: 1rem;
    padding: 0.3rem 0.5rem;
  }
`;

export { PageContainer, NameBox, Name, Id, ChangePwd, GraphBox, ModalBox };
