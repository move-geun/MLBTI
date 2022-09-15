import styled from "styled-components";

const CustomConatiner = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;

  .start {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      height: 100px;
      width: 100px;
      margin-bottom: 1rem;
      cursor: pointer;
    }
  }
`;

const TeamContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TeamCase = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  div {
    margin-top: 1rem;
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

    input {
      width: 50%;
      border-bottom: 1px solid black;
    }
    button {
      padding: 0.2rem 0.4rem;
    }
  }

  .change {
    font-size: 1rem;
    padding: 0.3rem 0.5rem;
  }
`;
export { CustomConatiner, TeamContainer, TeamCase, ModalBox };
