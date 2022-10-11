import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  ListWrapper,
  List,
  PlyaerName,
  PlyaerDetailWrapper,
  PlyaerDetail,
} from "./PlayerList.style";
import { getPlayer, searchPlayer } from "./teamCustom-slice";
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
import { PacmanLoader  } from "react-spinners";

const PlayerList = ({ email, myTeam, isModified, setIsModified }) => {
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

  // 선수 검색 인풋
  const [userInput, setUserInput] = useState("");
  // 선수 검색 유무
  const [isSearch, setIsSearch] = useState(false);
  // 검색 결과
  const [searchRes, setSearchRes] = useState([]);

  // 스피너
  const [spinner, setSpinner] = useState(true);

  // 조건 갱신 함수 | 검색창 입력값 초기화
  const handleChangeYear = (event) => {
    setYear(event.target.value);
    setUserInput("");
  };
  const handleChangeLeague = (event) => {
    setLeague(event.target.value);
    setUserInput("");
  };
  const handleChangeTeam = (event) => {
    setTeam(event.target.value);
    setUserInput("");
  };
  const handleChangePostion = (event) => {
    setPosition(event.target.value);
    setUserInput("");
  };

  useEffect(() => {
    setTimeout(() => setSpinner(false), 3000);
    // MLB 선수 목록 받아오고 저장
    dispatch(getPlayer())
      .unwrap()
      .then((res) => {
        setPlayerList(res.data.data);

        // Dropdown에 표시 할 조건 리스트 전처리
        const yearData = [];
        const leagueData = [];
        const teamData = [];
        const positionData = [];

        // 선수마다 가지고 있는, 조건이 될 정보 뽑아오기
        res.data.data.map((item) => {
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

  // 내 팀에 선수 추가
  const saveTeam = ({ player }) => {
    const data = {
      email: email,
      player_uid: player.playerUid,
      position: player.position,
      season: player.season,
      team: player.teamName,
    };

    // 내 팀에 같은 포지션의 선수가 있는지 확인할 변수
    const findSamePosition = myTeam.find(function (n) {
      return n.baseballPlayer.primaryPositionAbbreviation === data.position;
    });

    if (findSamePosition) {
      alert(
        "해당 포지션의 선수가 이미 있습니다. 기존 선수를 방출 후 영입 해주십시오"
      );
    } else {
      dispatch(registTeam(data));
      setIsModified(!isModified);
    }
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

  // 선수 검색 버튼 클릭 | 드롭박스 필터 초기화
  const handleSearch = (e) => {
    const data = {
      name: userInput,
    };
    dispatch(searchPlayer(data))
      .unwrap()
      .then((res) => {
        setSearchRes(res.data);
        setIsSearch(true);
        setYear("");
        setLeague("");
        setTeam("");
        setPosition("");
      });
  };

  return (
    <>
      <Wrapper>
        <SearchDiv className="playerSearch">
          <TextField
            style={{ textAlign: "center" }}
            label="선수명 검색"
            variant="outlined"
            size="small"
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
          />
        </SearchDiv>
        <Img
          className="magnifying"
          src={"/assets/MagnifyingGlass.png"}
          onClick={handleSearch}
        />

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
            {leagueFilter.map((league, idx) => (
              <MenuItem key={idx} value={league}>{league}</MenuItem>
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
            {teamFilter.map((team, idx) => (
              <MenuItem key={idx} value={team}>{team}</MenuItem>
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
            {positionFilter.map((position, idx) => (
              <MenuItem key={idx} value={position}>{position}</MenuItem>
            ))}
            ;
          </Select>
        </FormControl>
      </Wrapper>

      <ListWrapper>
        {spinner ? (
          <PacmanLoader  color="#13a083"></PacmanLoader>
        ) : year || team || league || position ? (
          filterdList.length !== 0 ? (
            filterdList.map((player, idx) => (
              <List key={idx + 1000}>
                <PlyaerName>{player.name}</PlyaerName>
                <PlyaerDetailWrapper>
                  <PlyaerDetail>{player.season}</PlyaerDetail>
                  <PlyaerDetail>{player.league}</PlyaerDetail>
                  <PlyaerDetail>{player.teamName}</PlyaerDetail>
                  <PlyaerDetail>{player.position}</PlyaerDetail>
                  {player.type === "P" ? (
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
            <div className="noCondition"> 조건에 맞는 선수가 없습니다.</div>
          )
        ) : isSearch ? (
          searchRes.map((player, idx) => (
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
