import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  @media screen and (max-width: 830px) {
    justify-content: space-evenly;
}
  
`

export {
  Wrapper,
}