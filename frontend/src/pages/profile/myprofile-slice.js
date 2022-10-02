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
      alert("에러입니다");
      return rejectWithValue(err.response);
    }
  }
);

// 나의 팀 불러오기
export const myteam = createAsyncThunk(
  "MYTEAM",
  async (data, { rejectWithValue }) => {
    try {
      const res = await http.auth_axios.get("/user_team/list", {
        params: {
          email: data.email,
        },
      });
      return res;
    } catch (err) {
      alert("팀 정보 조회 실패");
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
      console.log(res);
      return res;
    } catch (err) {
      alert("팀 이름 변경 실패");
      return rejectWithValue(err.response);
    }
  }
);

const initialState = {
  isLoading: false,
};

const myprofileSlice = createSlice({
  name: "myprofile",
  initialState,
  reducers: {
    
  },
  extraReducers: {},
});

export default myprofileSlice.reducer;
