import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../api/http";

// 내 정보 불러오기
export const myprofile = createAsyncThunk(
  "MYPROFILE",
  async (ar, { rejectWithValue }) => {
    try {
      const res = await http.auth_axios.get("/user/me");
      return res;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

// 나의 팀 불러오기
export const getMyteam = createAsyncThunk(
  "GETMYTEAM",
  async (data, { rejectWithValue }) => {
    try {
      const res = await http.auth_axios.get("/user_team/list", {
        params: {
          email: data.email,
        },
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

// 팀 이름 변경하기
export const changeTeamName = createAsyncThunk(
  "CHANGETEAMNAME",
  async (data, { rejectWithValue }) => {
    try {
      const res = await http.auth_axios.put("/user/teamName", null, {
        params: {
          email: data.email,
          newTeamName: data.newTeamName,
        },
      });
      return res;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

const initialState = {
  myteam: [],
};

const myprofileSlice = createSlice({
  name: "myprofile",
  initialState,
  reducers: {
    setMyteam: (state) => {
      state.myteam = [];
    },
  },
  extraReducers: {
    [getMyteam.fulfiiled]: (state, action) => {
      state.myteam = action.payload;
    },
  },
});

export default myprofileSlice.reducer;
