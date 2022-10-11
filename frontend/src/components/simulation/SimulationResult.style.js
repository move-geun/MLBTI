import styled from "styled-components";

const SimulDiv = styled.div`
  width: 960px;
  .simul_tab {
    width: 960px;
  }
`;

const TabMenu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  list-style: none;
  margin-bottom: 2rem;

  .submenu {
    width: 100% auto;
    padding: 15px 10px;
    cursor: pointer;
  }
`;

const TabName = styled.span`
  border-color: inherit;
  font-size: 1rem;
  border-radius: 30%;
`;
const StatusContainer = styled.div`
  .title {
    margin-top: 1.1rem;
    cursor: pointer;
    .select {
      background-color: black;
      color: white;
    }
  }
  /* padding-left: 4rem; */
`;

const StatusBtn = styled.span`
  background-color: darkgray;
  color: white;
  padding-top: 30px;
  margin-bottom: 1rem;
  margin-left: 2rem;
  padding: 0.5rem;

  border-radius: 15px;
  /* font-family: "paybooc-Light", sans-serif; */
  text-decoration: none;
  transition: 0.25s;

  /* border: 3px solid #6aafe6; */
  color: #6e6e6e;
`;

const BatterContatiner = styled.div`
  /* display: flex; */
  /* justify-content:center;  */
  align-items: center;
  /* background-color: green; */
`;
const BatterResult = styled.div`
  margin: 2em auto;
  width: 20rem;
  border-radius: 0.7em;
  border-style: none;
  box-shadow: 5px 5px 10px 0.1px gray;
  padding: 1em;
  background-color: black;
  color: white;
  text-align: center;

  :nth-child(even) {
    background-color: gray;
    color: black;
  }
`;
export {
  SimulDiv,
  TabMenu,
  TabName,
  StatusContainer,
  StatusBtn,
  BatterContatiner,
  BatterResult,
};
