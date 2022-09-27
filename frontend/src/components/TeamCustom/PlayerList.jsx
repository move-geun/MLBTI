import React from "react";
import {
  ListWrapper,
  List,
  PlyaerName,
  PlyaerDetailWrapper,
  PlyaerDetail,
} from "./PlayerList.style";
import { getData, getUserTeam } from "./teamCustom-slice";
import { useDispatch } from "react-redux";




const PlayerList = () => {

  const dispatch = useDispatch()
  
  // 선수 목록 가져오기
  const getPlayer = () =>{
    dispatch(getData(100))
      .unwrap()
      .then((res) => {
      })
  }



  return (
    <ListWrapper>
      <List>
        <div type='button' onClick={getPlayer}>이거 누르면 나옴</div>
        <PlyaerName>박찬호</PlyaerName>
        <PlyaerDetailWrapper>
          <PlyaerDetail>18년도</PlyaerDetail>
          <PlyaerDetail>동부리그</PlyaerDetail>
          <PlyaerDetail>양키스</PlyaerDetail>
          <PlyaerDetail>유격수</PlyaerDetail>
          <PlyaerDetail>0.330</PlyaerDetail>
        </PlyaerDetailWrapper>
      </List>
      <List>
        <PlyaerName>박찬호</PlyaerName>
        <PlyaerDetailWrapper>
          <PlyaerDetail>18년도</PlyaerDetail>
          <PlyaerDetail>18년도</PlyaerDetail>
          <PlyaerDetail>18년도</PlyaerDetail>
          <PlyaerDetail>18년도</PlyaerDetail>
          <PlyaerDetail>18년도</PlyaerDetail>
        </PlyaerDetailWrapper>
      </List>
      <List>
        <PlyaerName>박찬호</PlyaerName>
        <PlyaerDetailWrapper>
          <PlyaerDetail>18년도</PlyaerDetail>
          <PlyaerDetail>18년도</PlyaerDetail>
          <PlyaerDetail>18년도</PlyaerDetail>
          <PlyaerDetail>18년도</PlyaerDetail>
          <PlyaerDetail>18년도</PlyaerDetail>
        </PlyaerDetailWrapper>
      </List>
      <List>
        <PlyaerName>박찬호</PlyaerName>
        <PlyaerDetailWrapper>
          <PlyaerDetail>18년도</PlyaerDetail>
          <PlyaerDetail>18년도</PlyaerDetail>
          <PlyaerDetail>18년도</PlyaerDetail>
          <PlyaerDetail>18년도</PlyaerDetail>
          <PlyaerDetail>18년도</PlyaerDetail>
        </PlyaerDetailWrapper>
      </List>
      <List>
        <PlyaerName>박찬호</PlyaerName>
        <PlyaerDetailWrapper>
          <PlyaerDetail>18년도</PlyaerDetail>
          <PlyaerDetail>18년도</PlyaerDetail>
          <PlyaerDetail>18년도</PlyaerDetail>
          <PlyaerDetail>18년도</PlyaerDetail>
          <PlyaerDetail>18년도</PlyaerDetail>
        </PlyaerDetailWrapper>
      </List>
      <List>
        <PlyaerName>박찬호</PlyaerName>
        <PlyaerDetailWrapper>
          <PlyaerDetail>18년도</PlyaerDetail>
          <PlyaerDetail>18년도</PlyaerDetail>
          <PlyaerDetail>18년도</PlyaerDetail>
          <PlyaerDetail>18년도</PlyaerDetail>
          <PlyaerDetail>18년도</PlyaerDetail>
        </PlyaerDetailWrapper>
      </List>
      <List>
        <PlyaerName>박찬호</PlyaerName>
        <PlyaerDetailWrapper>
          <PlyaerDetail>18년도</PlyaerDetail>
          <PlyaerDetail>18년도</PlyaerDetail>
          <PlyaerDetail>18년도</PlyaerDetail>
          <PlyaerDetail>18년도</PlyaerDetail>
          <PlyaerDetail>18년도</PlyaerDetail>
        </PlyaerDetailWrapper>
      </List>
      <List>
        <PlyaerName>박찬호</PlyaerName>
        <PlyaerDetailWrapper>
          <PlyaerDetail>18년도</PlyaerDetail>
          <PlyaerDetail>18년도</PlyaerDetail>
          <PlyaerDetail>18년도</PlyaerDetail>
          <PlyaerDetail>18년도</PlyaerDetail>
          <PlyaerDetail>18년도</PlyaerDetail>
        </PlyaerDetailWrapper>
      </List>
    </ListWrapper>
  );
};

export default PlayerList;
