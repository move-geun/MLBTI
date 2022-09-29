import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  ListWrapper,
  List,
  PlyaerName,
  PlyaerDetailWrapper,
  PlyaerDetail,
} from "./PlayerList.style";
import { getPlayer } from "./teamCustom-slice";
import { registTeam } from "./teamCustom-slice";
import { MdOutlineDataSaverOn } from "react-icons/md";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Wrapper } from "./Dropdown.style";

const PlayerList = ({ email }) => {
  const dispatch = useDispatch();

  // MLB 선수 리스트
  const [playerList, setPlayerList] = useState([]);

  // 필터링 변수 (렌더링 조건)
  const [year, setYear] = React.useState("");
  const [league, setLeague] = React.useState("");
  const [team, setTeam] = React.useState("");
  const [position, setPosition] = React.useState("");

  // 필터(드롭다운)에 표시할 리스트
  const [yearFilter, setYearFilter] = useState([]);
  const [leagueFilter, setLeagueFilter] = useState([]);
  const [positionFilter, setPositionFilter] = useState([]);
  const [teamFilter, setTeamFilter] = useState([]);

  // 조건 갱신 함수
  const handleChangeYear = (event) => {
    setYear(event.target.value);
  };
  const handleChangeLeague = (event) => {
    setLeague(event.target.value);
  };
  const handleChangeTeam = (event) => {
    setTeam(event.target.value);
  };
  const handleChangePostion = (event) => {
    setPosition(event.target.value);
  };

  useEffect(() => {
    // MLB 선수 목록 받아오고 저장
    dispatch(getPlayer())
      .unwrap()
      .then((res) => {
        console.log("선수정보", res.data);
        setPlayerList(res.data);

        const yearData = [];
        const leagueData = [];
        const teamData = [];
        const positionData = [];
        res.data.map((item) => {
          if (!yearData.includes(item.season)) {
            yearData.push(parseInt(item.season));
          }
          if (!leagueData.includes(item.league)) {
            leagueData.push(item.league);
          }
          if (!teamData.includes(item.teamName)) {
            teamData.push(item.teamName);
          }
          if (!positionData.includes(item.position)) {
            positionData.push(item.position);
          }
        });

        setYearFilter(yearData);
        setLeagueFilter(leagueData);
        setTeamFilter(teamData);
        setPositionFilter(positionData);
      });
  }, []);

  useEffect(() => {});

  const saveTeam = ({ player }) => {
    const data = {
      email: email,
      player_uid: player.playerUid,
      position: player.position,
    };
    dispatch(registTeam(data));
  };

  // 연도 오름차순 필터
  yearFilter.sort(function (a, b) {
    if (a > b) return -1;
    else if (b > a) return 1;
    else return 0;
  });

  let filterdList = playerList;

  if (year !== "") {
    filterdList = filterdList.filter((person) => person.season);
  }
  if (team !== "") {
    filterdList = filterdList.filter((person) => person.teamName);
  }
  if (league !== "") {
    filterdList = filterdList.filter((person) => person.league);
  }
  if (position !== "") {
    filterdList = filterdList.filter((person) => person.position);
  }

  console.log('year',year)
  return (
    <>
      {/* 드롭다운 필터 */}
      <Wrapper>
        {/* 연도 */}
        <FormControl sx={{ m: 1, minWidth: "15%" }} size="small">
          <InputLabel id="demo-select-small">연도</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={year}
            label="연도"
            onChange={handleChangeYear}
          >
            <MenuItem key={""} value={""}>
              "없음"
            </MenuItem>
            {yearFilter.map((season) => (
              <MenuItem key={season} value={season}>
                {season}
              </MenuItem>
            ))}
            ;
          </Select>
        </FormControl>

        {/* 리그 */}
        <FormControl sx={{ m: 1, minWidth: "15%" }} size="small">
          <InputLabel id="demo-select-small">리그</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={league}
            label="리그"
            onChange={handleChangeLeague}
          >
            {leagueFilter.map((league) => (
              <MenuItem value={league}>{league}</MenuItem>
            ))}
            ;
          </Select>
        </FormControl>

        {/* 팀 */}
        <FormControl sx={{ m: 1, minWidth: "15%" }} size="small">
          <InputLabel id="demo-select-small">팀명</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={team}
            label="팀명"
            onChange={handleChangeTeam}
          >
            {teamFilter.map((team) => (
              <MenuItem value={team}>{team}</MenuItem>
            ))}
            ;
          </Select>
        </FormControl>

        {/* 포지션 */}
        <FormControl sx={{ m: 1, minWidth: "15%" }} size="small">
          <InputLabel id="demo-select-small">포지션</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={position}
            label="포지션"
            onChange={handleChangePostion}
          >
            {positionFilter.map((position) => (
              <MenuItem value={position}>{position}</MenuItem>
            ))}
            ;
          </Select>
        </FormControl>

        {/* 플레이어 리스트 */}
      </Wrapper>
      <ListWrapper>
        {/*  */}
        {filterdList.map((player, idx) => (
          <List key={idx+1000}>
            <PlyaerName>{player.name}</PlyaerName>
            <PlyaerDetailWrapper>
              <PlyaerDetail>{player.season}</PlyaerDetail>
              <PlyaerDetail>{player.league}</PlyaerDetail>
              <PlyaerDetail>{player.teamName}</PlyaerDetail>
              <PlyaerDetail>{player.position}</PlyaerDetail>
              {player.position === "P" ? (
                <PlyaerDetail>방어율: {player.indicator}</PlyaerDetail>
              ) : (
                <PlyaerDetail>타율: {player.indicator}</PlyaerDetail>
              )}
              <MdOutlineDataSaverOn
                onClick={() => saveTeam({ player })}
                className="save"
                type="button"
              >
                담기
              </MdOutlineDataSaverOn>
            </PlyaerDetailWrapper>
          </List>
        ))}
      </ListWrapper>
    </>
  );
};

export default PlayerList;
