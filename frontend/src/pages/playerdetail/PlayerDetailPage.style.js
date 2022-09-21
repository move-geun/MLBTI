import styled from "styled-components";

const Background = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`

const Header = styled.div`

`
const SearchDiv = styled.div`
  display: flex ;
  justify-content: space-between;
  width: 90%;
  margin: 2rem 1rem 0 0 ;
  
  .title {
    text-align: left;
    padding-bottom: 4px;
    border-bottom: 2px solid #2565d0;
    font-size: 30px;
  }

  .search {
    display: flex;
    align-items: center;
  }
`

export {
  Background,
  Header,
  SearchDiv,
}