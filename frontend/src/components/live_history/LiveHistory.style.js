import styled from 'styled-components';



const TabMenu = styled.ul`
  background-color: #dcdcdc;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  list-style: none;

  .submenu {
    width:100% auto;
    padding: 15px 10px;
    cursor: pointer;
  }
`;

const StatusBtn = styled.span`
  background-color: darkgray;
  color: white;
  margin: 0 1rem 1rem 0;
`
const BatContainer = styled.div`
  border: 0.5px solid black;

`;

const BatterContainer = styled.div`
  padding: 5px;
`;

const Batter =  styled.div`

  background-color: lightpink;
`;

const BatterResult = styled.div`
  background-color: lightskyblue
`;

const BatterResultList = styled.div`
 
`;

const CircleStrike = styled.span`
  border-radius: 100%;
  background-color: gold;
`;

const CircleBall = styled.span`

`;

const CircleSwing = styled.span`

`;

export {TabMenu, StatusBtn, BatContainer, BatterContainer, 
  Batter, BatterResult, BatterResultList, 
  CircleStrike, CircleBall, CircleSwing};