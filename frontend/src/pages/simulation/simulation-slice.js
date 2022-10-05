// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../api/http";



export const simulationData = createAsyncThunk(
  "SIMULATIONDATA",
  async (teamId, { rejectWithValue }) => {
    try {
      // console.log("여기는 시뮬레이션 슬라이스, 팀아이디 뭐야  ", teamId);
      const res = await http.auth_axios.post("/simul/normal", null , {
        params:{homeTeamUid: teamId.team1 , awayTeamUid: teamId.team2 },
      });
      return res;
    } catch (err) {
      alert("에러입니다");
      return rejectWithValue(err.response);
    }
  }
);
