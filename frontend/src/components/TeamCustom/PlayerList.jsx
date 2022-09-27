import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import {
  ListWrapper,
  List,
  PlyaerName,
  PlyaerDetailWrapper,
  PlyaerDetail,
} from "./PlayerList.style";
import { getBatters, getPitchers } from "./teamCustom-slice";


const PlayerList = () => {
  const [season, setSeason] = useState()
  const [teamName, setTeamName] = useState()
  const [position, setPosition] = useState()
  const [league, setLeague] = useState()

 const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPitchers())
      .unwrap()
      .then((res)=> {
        console.log('투수', res.data);
      })
    dispatch(getBatters())
      .unwrap()
      .then((res)=> {
        console.log('타자', res.data);
      })
  }, [])

  return (
    <ListWrapper>
      <List>
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
