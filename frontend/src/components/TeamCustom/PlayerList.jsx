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
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Wrapper } from "./Dropdown.style";
import { SearchDiv, Img } from "../../pages/team/TeamCustomPage.style";
import { TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonCirclePlus } from "@fortawesome/free-solid-svg-icons";
const PlayerList = ({
  email,
  isModifiedPlayer,
  setIsModifiedPlayer,
  myTeam,
}) => {
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
        // console.log("선수정보", res.data);
        setPlayerList(res.data);

        // Dropdown에 표시 할 조건 리스트 전처리
        const yearData = [];
        const leagueData = [];
        const teamData = [];
        const positionData = [];

        // 선수마다 가지고 있는, 조건이 될 정보 뽑아오기
        res.data.map((item, idx) => {
          if (!yearData.includes(item.season) && item.season !== null) {
            yearData.push(parseInt(item.season));
          }
          if (!leagueData.includes(item.league) && item.league !== null) {
            leagueData.push(item.league);
          }
          if (!teamData.includes(item.teamName) && item.teamName !== null) {
            teamData.push(item.teamName);
          }
          if (!positionData.includes(item.position) && item.position !== null) {
            positionData.push(item.position);
          }
        });

        // 조건 리스트 filter 목록에 담기
        setYearFilter(yearData);
        setLeagueFilter(leagueData);
        setTeamFilter(teamData);
        setPositionFilter(positionData);
      });
  }, []);

  // 선수 내 팀에 등록
  const saveTeam = ({ player }) => {
    const data = {
      email: email,
      player_uid: player.playerUid,
      position: player.position,
    };

    // 기존 선수와 추가 하려는 선수 포지션 비교
    myTeam.map((player) => {
      // 중복 된다면 안내 띄우기
      if (player.baseballPlayer.primaryPositionName === data.position) {
        alert(
          "포지션이 겹치는 선수가 있습니다. 해당 선수를 삭제 후 추가 해주십시오"
        );
      } else {
        dispatch(registTeam(data))
          .unwrap()
          .then(setIsModifiedPlayer(!isModifiedPlayer));
      }
    });
  };

  // 연도 오름차순 필터
  yearFilter.sort(function (a, b) {
    if (a > b) return -1;
    else if (b > a) return 1;
    else return 0;
  });

  // 필터링
  let filterdList = playerList;
  if (year !== "") {
    filterdList = filterdList.filter((person) => person.season === year);
  }
  if (team !== "") {
    filterdList = filterdList.filter((person) => person.teamName === team);
  }
  if (league !== "") {
    filterdList = filterdList.filter((person) => person.league === league);
  }
  if (position !== "") {
    filterdList = filterdList.filter((person) => person.position === position);
  }

  return (
    <>
      {/* Dropdown */}
      <Wrapper>
        <SearchDiv className="playerSearch">
          <TextField
            style={{ textAlign: "center" }}
            id="outlined-basic"
            label="선수명 검색"
            variant="outlined"
            size="small"
          />
        </SearchDiv>
        <Img className="magnifying" src={"/assets/MagnifyingGlass.png"} />

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
              전체
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
            <MenuItem key={""} value={""}>
              전체
            </MenuItem>
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
            <MenuItem key={""} value={""}>
              전체
            </MenuItem>
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
            <MenuItem key={""} value={""}>
              전체
            </MenuItem>
            {positionFilter.map((position) => (
              <MenuItem value={position}>{position}</MenuItem>
            ))}
            ;
          </Select>
        </FormControl>

        {/* PlayerList */}
      </Wrapper>
      <ListWrapper>
        {year || team || league || position ? (
          filterdList.map((player, idx) => (
            <List key={idx + 1000}>
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
                <FontAwesomeIcon
                  onClick={() => saveTeam({ player })}
                  className="save"
                  type="button"
                  color="#139e3d"
                  icon={faPersonCirclePlus}
                />
              </PlyaerDetailWrapper>
            </List>
          ))
        ) : (
          <div className="noCondition">조건을 선택해 주세요</div>
        )}
      </ListWrapper>
    </>
  );
};

export default PlayerList;
