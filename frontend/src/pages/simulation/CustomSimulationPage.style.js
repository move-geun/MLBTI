import styled from "styled-components";

const CustomConatiner = styled.div`
  /* background-image : url("/assets/customSimulBackground2.jpg"); */
  background-repeat: no-repeat;
  display: flex;
  height: 100%;
  width: 88%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-size: 1.5rem;
  margin-top: 2rem;
  /* color: white; */
  @media screen and (max-width: 830px) {
    font-size: 1.3rem;
    width: 600px;
  }
  @media screen and (max-width: 480px) {
    font-size: 1rem;
    width: 400px;
  }

  .start {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;

    img {
      height: 100px;
      width: 100px;
      @media screen and (max-width: 830px) {
        width: 80px;
        height: 80px;
      }
    }
  }
`;

const Header = styled.div`
  padding-bottom: 4px;
  border-bottom: 2px solid #2565d0;
  font-size: 1.5rem;
  margin-bottom: 3rem;
`;
const TeamContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .vs {
    width: 200px;
    height: 300px;
    margin: 0 2rem;
    @media screen and (max-width: 830px) {
      width: 130px;
      height: 150px;
    }
    @media screen and (max-width: 480px) {
      width: 60px;
      height: 100px;
    }
  }
  /* outline: 2px solid; */
`;

const TeamCase = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .teamInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div {
      font-size: 20px;
      @media screen and (max-width: 830px) {
        font-size: 1rem;
      }
      @media screen and (max-width: 480px) {
        font-size: 0.8rem;
      }
    }
  }

  cursor: pointer;
  div {
    margin-top: 1rem;
  }

  img {
    width: 200px;
    height: 200px;
    margin-bottom: 1rem;
    cursor: pointer;
    transform: scale(1);
    -webkit-transform: scale(1);
    transition: all 0.3s ease-in-out;

    :hover {
      transform: scale(1.2);
      -webkit-transform: scale(1.2);
    }

    @media screen and (max-width: 830px) {
      width: 150px;
      height: 150px;
    }
    @media screen and (max-width: 480px) {
      width: 100px;
      height: 100px;
    }
  }
`;
const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 600px;
  border: 2px solid rgba(0, 0, 0, 0.2);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 5px;

  &.mainmodal {
    height: 250px;
    .maintitle {
      margin-top: 10px;
      width: 90%;
      text-align: center;
      font-size: 1.5rem;
    }
    &.maincontent {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      width: 90%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      font-size: 1.3rem;
    }

    .change {
      margin-top: 2rem;
      font-size: 1.5rem;
    }
  }
  .title {
    margin-top: 10px;
    width: 90%;
    text-align: center;
    font-size: 1.5rem;
  }
  .index {
    margin: 2rem 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }

  .content {
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 1.3rem;
  }

  .weather {
    display: flex;
    font-size: 1rem;
  }
  .team {
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 1.3rem;
  }
  .filter {
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 50%;
  }
  .candidates {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 300px;
    margin: 5px auto;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
      height: 15%;
      background-color: #92ded5;
      border-radius: 2rem;
    }

    &::-webkit-scrollbar-track {
      background-color: #d7dcff;
      border-radius: 2rem;
    }
    .myteam {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 5px 0;
      cursor: pointer;

      .myteamlogo {
        width: 20px;
        height: 20px;
        margin-right: 0.5rem;
      }
    }
    .candi {
      margin: 5px 0;
    }
  }
  .change {
    margin-top: 1rem;
    font-size: 1rem;
    padding: 0.3rem 0.5rem;
  }

  input {
    width: 50%;
    border-bottom: 1px solid black;
    margin-right: 10px;
  }
  button {
    font-size: 1rem;
    padding: 0.2rem 0.4rem;
  }
`;

const ListWrap = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  .active {
    background-color: green;
  }

  img {
    width: 20px;
    height: 20px;
    margin-right: 0.5rem;
  }
  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    height: 15%;
    background-color: #92ded5;
    border-radius: 2rem;
  }

  &::-webkit-scrollbar-track {
    background-color: #d7dcff;
    border-radius: 2rem;
  }
`;
export { CustomConatiner, TeamContainer, TeamCase, ModalBox, Header, ListWrap };
