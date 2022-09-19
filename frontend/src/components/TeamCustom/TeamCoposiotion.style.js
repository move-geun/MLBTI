import styled from "styled-components";

const CompositionWrapper = styled.div`
  width: 95%;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  font-size: 40px;
  height: 50%;
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

const ListHeader = styled.div`
  display: flex;
  justify-content: space-around;
  &.Header{
    border-bottom: 1px solid;
    border-top: 1px solid;
  }

  `

const HeaderDetail = styled.div`
  font-size: 20px;
`

const PlyaerList = styled.div`
  display: flex;
  justify-content: space-around;
`

const PlayerDetail = styled.div`

`

export {
  CompositionWrapper,
  Header,
  ListWrapper,
  MyNickname,
  ListHeader,
  HeaderDetail,
  PlyaerList,
  PlayerDetail,
}