import styled from "styled-components";

const TabMenu = styled.ul`
  background-color: #dcdcdc;

  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  list-style: none;
  margin-bottom: 1rem;

  .submenu {
    width:100% auto;
    padding: 15px 10px;
    cursor: pointer;
  }
`;

const TabName = styled.span`
  margin-left: 2rem;
`



const StatusBtn = styled.span`
  background-color: darkgray;
  color: white;
  margin-bottom: 1rem;
  margin-right: 1rem;
`


const BatterContatiner = styled.div`
  background-color: green;
`
const BatterResult = styled.div`
  
  margin-top: 1rem;
`


export {TabMenu, TabName, StatusBtn, BatterContatiner, BatterResult };