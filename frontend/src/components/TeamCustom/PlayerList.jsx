import React, { useState, useEffect } from "react";
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
  const [season, setSeason] = useState();
  const [teamName, setTeamName] = useState();
  const [position, setPosition] = useState();
  const [league, setLeague] = useState();
  const [playerList, setPlayerList] = useState([])

  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(getPitchers())
      .unwrap()
      .then((res) => {
        console.log("투수", res.data);
        setPlayerList(res.data)
        
      });
    dispatch(getBatters())
      .unwrap()
      .then((res) => {
        console.log("타자", res.data);
        // setPlayerList([res.data, ...playerList])
      });
  }, []);
  
  return (
    <ListWrapper>
      {playerList.map((player)=> (
        <List key={player.name}>
        <PlyaerName>{player.name}</PlyaerName>
        <PlyaerDetailWrapper>
          <PlyaerDetail>{player.season}</PlyaerDetail>
          <PlyaerDetail>league</PlyaerDetail>
          <PlyaerDetail>{player.teamName}</PlyaerDetail>
          <PlyaerDetail>position</PlyaerDetail>
          <PlyaerDetail>{player.era}</PlyaerDetail>
        </PlyaerDetailWrapper>
      </List>
      ))}

    </ListWrapper>
  );
};

export default PlayerList;
