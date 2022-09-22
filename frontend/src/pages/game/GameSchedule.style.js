import styled from "styled-components";

const CompareContainer = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 1rem auto 0 auto;
  font-size: 1.5rem;

  .title {
    text-align: left;
    padding-bottom: 4px;
    border-bottom: 2px solid #2565d0;
  }
  @media screen and (max-width: 830px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.625rem;
  }
`;

export { CompareContainer };
