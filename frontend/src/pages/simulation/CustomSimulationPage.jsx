import { Link } from "react-router-dom";
import * as React from "react";
import Modal from "@mui/material/Modal";
import {
  CustomConatiner,
  TeamContainer,
  TeamCase,
  ModalBox,
  Header,
  ListWrap,
} from "./CustomSimulationPage.style";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNational, getAmerican } from "./customsimulation-slice";
// 모달 연결
// 승률 높은 곳에 색 변경
// 수정필요

const CustomSimulationPage = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [opensec, setOpenSec] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpensec = () => setOpenSec(true);
  const handleClosesec = () => setOpenSec(false);
  // const chat = () => console.log("눌러짐");

  // 리그 선택 필터링
  const [legueName, setLegueName] = React.useState("nationalMLB");

  const [nationalList, setNationalList] = useState([]);
  const [americanList, setAmericanList] = useState([]);

  const handleChange = (event) => {
    setLegueName(event.target.value);
  };

  useEffect(() => {
    dispatch(getNational())
      .unwrap()
      .then((res) => {
        setNationalList(res);
      });
    dispatch(getAmerican())
      .unwrap()
      .then((res) => {
        setAmericanList(res);
      });
  }, []);

  console.log(nationalList)
  return (
    <CustomConatiner>
      <Header>매치업 설정하기</Header>
      <TeamContainer>
        <TeamCase>
          <img
            onClick={handleOpen}
            src="/assets/teamlogo1.png"
            alt="1팀이었던것.."
          />
          <div>팀 설정하기</div>
          <div>56%</div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <ModalBox>
              <div className="title">1팀 선택하기</div>
              <br />
              {/* <div className="content">
                날씨
                <div className="weather">
                  <input type="checkbox" />
                  <span>맑음</span>
                </div>
                <div className="weather">
                  <input type="checkbox" />
                  <span>흐림</span>
                </div>
                <div className="weather">
                  <input type="checkbox" />
                  <span>태풍</span>
                </div>
                <div className="weather">
                  <input type="checkbox" />
                  <span>흘김</span>
                </div>
              </div> */}
              <br />
              <div className="team">
                팀
                <div>
                  <input type="text" />
                  <button>검색하기</button>
                </div>
                <div className="filter">
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      리그 선택
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={legueName}
                      onChange={handleChange}
                      label="Age"
                    >
                      <MenuItem value={"nationalMLB"}>National League</MenuItem>
                      <MenuItem value={"americanMLB"}>American League</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="candidates">
                  {nationalList.map((item) => (
                    <ListWrap>
                      <div className="candi">{item.name}</div>
                    </ListWrap>
                  ))}
                </div>
              </div>
              <button className="change" onClick={handleClose}>
                매치업
              </button>
            </ModalBox>
          </Modal>
        </TeamCase>
        <span> VS </span>
        <TeamCase>
          <img
            onClick={handleOpensec}
            src="/assets/teamlogo2.png"
            alt="2팀이었던것.."
          />
          <div>팀 설정하기</div>
          <div>44%</div>
          <Modal
            open={opensec}
            onClose={handleClosesec}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <ModalBox>
              <div className="title">2팀 선택하기</div>
              <br />
              <div className="content">
                날씨
                <div className="weather">
                  <input type="checkbox" />
                  <span>맑음</span>
                </div>
                <div className="weather">
                  <input type="checkbox" />
                  <span>흐림</span>
                </div>
                <div className="weather">
                  <input type="checkbox" />
                  <span>태풍</span>
                </div>
                <div className="weather">
                  <input type="checkbox" />
                  <span>흘김</span>
                </div>
              </div>
              <br />
              <div className="team">
                팀
                <div>
                  <input type="text" />
                  <button>검색하기</button>
                </div>
                <div className="filter">
                  <input type="drop" placeholder="연도" />
                  <input type="drop" placeholder="리그" />
                  <input type="drop" placeholder="팀명" />
                </div>
                <div className="candidates">
                  <div className="candi">초코맛팀</div>
                  <div className="candi">딸기맛팀</div>
                  <div className="candi">바나나맛팀</div>
                </div>
              </div>
              <button className="change" onClick={handleClose}>
                매치업
              </button>
            </ModalBox>
          </Modal>
        </TeamCase>
      </TeamContainer>
      <Link to="/simulation" style={{ textDecoration: "none", color: "black" }}>
        <div className="start">
          <img src="/assets/simulationStart.png" alt="시작아이콘..이었던것" />
          <span>시뮬레이션 시작</span>
        </div>
      </Link>
    </CustomConatiner>
  );
};

export default CustomSimulationPage;
