import styled from "styled-components";


const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  height: 500px;
  width: 90%;
  margin: auto;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    height: 15%;
    background-color: #92ded5;
    border-radius: 2rem;
  }

  &::-webkit-scrollbar-track {
    background-color: #d7dcff;
    border-radius: 2rem;
  }

  @media screen and (max-width: 830px) {
    height: 300px;
    font-size: 15px;
  }

  .noCondition {
    font-size: 2rem;
  }
`

const List = styled.div`
  margin-bottom: 1rem;
  width: 90%;
  border-bottom: 2px solid #2565d0;

`

const PlyaerName = styled.div`
  font-weight: 300;
  font-size: 20px;
  margin-bottom: 1rem;
`

const PlyaerDetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  
  .save {
    position: relative;
    bottom: 1rem;
    font-size: 2rem;
    color: green;
    cursor: pointer;
  }
`
const PlyaerDetail = styled.div`
  color: #333333;
  margin-bottom: 1rem;
`


export {
  ListWrapper,
  List,
  PlyaerName,
  PlyaerDetailWrapper,
  PlyaerDetail,
}