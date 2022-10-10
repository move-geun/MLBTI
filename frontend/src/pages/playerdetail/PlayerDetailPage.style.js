import styled from "styled-components";

const Background = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const SearchDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 2rem 1rem 0 0;

  .title {
    text-align: left;
    border-bottom: 2px solid #2565d0;
    font-size: 30px;
    @media screen and (max-width: 830px) {
      font-size: 15px;
      height: 40%;
    }
    @media screen and (max-width: 480px) {
      font-size: 15px;
      height: 40%;
    }
  }

  .search {
    width: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
    @media screen and (max-width: 830px) {
      font-size: 15px;
    }
    @media screen and (max-width: 480px) {
      font-size: 10px;
    }
  }
`;

export { Background, SearchDiv };
