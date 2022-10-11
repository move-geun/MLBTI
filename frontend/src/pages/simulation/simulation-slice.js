// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../api/http";

export const simulationData = createAsyncThunk(
  "SIMULATIONDATA",
  async (teamId, { rejectWithValue }) => {
    try {
      const res = await http.axios.post("/simul/normal", null, {
        params: { awayTeamUid: teamId.team2, homeTeamUid: teamId.team1 },
      });
      return res;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

export const customsimulationData = createAsyncThunk(
  "CUSTOMSIMULATIONDATA",
  async (matchInfo, { rejectWithValue }) => {
    console.log("커스텀 api 부르고 있어??? 정보는 뭐야  ", matchInfo);
    try {
      const res = await http.axios.post("/simul/custom", null, {
        params: { email: matchInfo.email, teamUid: matchInfo.uid },
      });
      return res;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);
