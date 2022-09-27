import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Wrapper } from "./Dropdown.style";

const Dropdown = () => {
  const [year, setYear] = React.useState("");
  const [league, setLeague] = React.useState("");
  const [team, setTeam] = React.useState("");
  const [position, setPosition] = React.useState("");

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

  return (
    <Wrapper>
      {/* 연도 */}
      <FormControl sx={{ m: 1, minWidth: '15%' }} size="small">
        <InputLabel id="demo-select-small">연도</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={year}
          label="연도"
          onChange={handleChangeYear}
        >
          <MenuItem value={10}>2011</MenuItem>
          <MenuItem value={20}>2022</MenuItem>
          <MenuItem value={30}>2023</MenuItem>
        </Select>
      </FormControl>

      {/* 리그 */}
      <FormControl sx={{ m: 1, minWidth: '15%' }} size="small">
        <InputLabel id="demo-select-small">리그</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={league}
          label="리그"
          onChange={handleChangeLeague}
        >
          <MenuItem value={10}>동부</MenuItem>
          <MenuItem value={20}>서부</MenuItem>
          <MenuItem value={30}>중부</MenuItem>
        </Select>
      </FormControl>
      
      {/* 팀 */}
      <FormControl sx={{ m: 1, minWidth: '15%' }} size="small">
        <InputLabel id="demo-select-small">팀명</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={team}
          label="팀명"
          onChange={handleChangeTeam}
        >
          <MenuItem value={10}>다저스</MenuItem>
          <MenuItem value={20}>양키스</MenuItem>
          <MenuItem value={30}>자이언츠</MenuItem>
        </Select>
      </FormControl>

      {/* 포지션 */}
      <FormControl sx={{ m: 1, minWidth: '15%' }} size="small">
        <InputLabel id="demo-select-small">포지션</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={position}
          label="포지션"
          onChange={handleChangePostion}
        >
          <MenuItem value={10}>투수</MenuItem>
          <MenuItem value={20}>포수</MenuItem>
          <MenuItem value={30}>타자</MenuItem>
        </Select>
      </FormControl>


    </Wrapper>
  );
};

export default Dropdown;
