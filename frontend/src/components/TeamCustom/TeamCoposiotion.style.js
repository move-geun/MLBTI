import styled from "styled-components";

const CompositionWrapper = styled.div`
  width: 95%;
  .deletePlayer {
    padding-top: 1rem;
    
    font-size : 1.5rem;

  }
`

const Header = styled.div`
  display: flex;
  align-items: center;
  font-size: 40px;
  p {
    @media screen and (max-width: 830px) {
    font-size: 25px;
  }
}
`

const MyNickname = styled.div`
  color: #2565d0;
  @media screen and (max-width: 830px) {
    font-size: 25px;
  }
  
`

const ListWrapper = styled.div`
`
const ListTable = styled.table`
  width: 100%;
  tr {
    border-right: 2px solid;
  }

`
const ListBody = styled.tbody`
 
`

const ListHeader = styled.thead`
    tr{
outline: 2px solid;
  }
  `

const HeaderDetail = styled.th`
  font-size: 20px;
`

const PlyaerList = styled.div`

`

const PlayerDetail = styled.td`

`

export {
  CompositionWrapper,
  Header,
  ListWrapper,
  MyNickname,
  ListHeader,
  ListTable,
  ListBody,
  HeaderDetail,
  PlyaerList,
  PlayerDetail,

}