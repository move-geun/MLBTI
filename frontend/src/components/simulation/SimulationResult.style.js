import styled from "styled-components";

const TabMenu = styled.ul`


  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  list-style: none;
  margin-bottom: 2rem;

  .submenu {
    width:100% auto;
    padding: 15px 10px;
    cursor: pointer;
  }
`;

const TabName = styled.span`
  margin-left: 2rem;
  border: 1px solid;
  border-color: inherit;
  font-size: 1rem;
  border-radius: 30%;
`



const StatusBtn = styled.span`
  /* background-color: darkgray;
  color: white;
  margin-bottom: 1rem;
  margin-left: 2rem;
  padding: 0.5rem; */

  float: left;
  padding: 5px 10px;
  border-radius: 15px;
  /* font-family: "paybooc-Light", sans-serif; */
  margin: 3px;
  text-decoration: none;
  transition: 0.25s;

  /* border: 3px solid #6aafe6; */
  color: #6e6e6e;

`


const BatterContatiner = styled.div`

padding: 2rem;
/* display: flex; */
  /* justify-content:center;  */
  align-items : center;
  /* background-color: green; */
`
const BatterResult = styled.div`
  
  margin: 1em;
  margin-left: 2%;
  width: 20rem;
  border-radius: 0.7em;
  border-style: none;
  box-shadow: 5px 5px 10px 0.1px gray;
  padding: 1em;
  background-color: #f2dd8a;

`
export {TabMenu, TabName, StatusBtn, BatterContatiner, BatterResult };



