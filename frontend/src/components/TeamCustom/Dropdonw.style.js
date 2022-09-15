import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;
  @media screen and (max-width: 830px) {
    justify-content: space-evenly;
}
  
`

export {
  Wrapper,
}