import styled from "styled-components";

const CompositionWrapper = styled.div`
  width: 95%;
  .deletePlayer {
    padding-top: 1rem;
    font-size: 1.5rem;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  font-size: 40px;
  p {
    @media screen and (max-width: 830px) {
      font-size: 25px;
    }
  }
`;

const MyNickname = styled.div`
  color: #2565d0;
  @media screen and (max-width: 830px) {
    font-size: 25px;
  }
`;

export { CompositionWrapper, Header, MyNickname };
