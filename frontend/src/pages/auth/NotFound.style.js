import styled from "styled-components";

const NotFoundcontainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 550px;
    height: 400px;
    object-fit: cover;
    margin: 0 auto;

    @media screen and (max-width: 830px) {
      img {
        width: 400px;
        height: 350px;
      }
    }
    @media screen and (max-width: 480px) {
      img {
        width: 200px;
        height: 150px;
      }
      div {
        position: fixed;
        width: 800px;
        height: 600px;
        background-color: tomato;
      }
    }
  }
`;

export { NotFoundcontainer };
