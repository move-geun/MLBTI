import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../api/http";
import qs from "qs";
http.axios.defaults.paramsSerializer = (params) => {
  return qs.stringify(params);
};

// 공지 받아오기
export const getNotice = createAsyncThunk(
  "GETNOTICE",
  async (ar, { rejectWithValue }) => {
    try {
      const res = await http.axios.get("/notice");
      return res.data;
    } catch (err) {
      alert("공지사항 불러오기 실패!");
      return rejectWithValue(err.response);
    }
  }
);

// 오늘 경기 일정 불러오기
export const getToday = createAsyncThunk(
  "GETTODAY",
  async (data, { rejectWithValue }) => {
    try {
      const params = { date: data.day };
      const res = await http.axios.get("/schedule", {
        params,
      });
      return res.data.data;
    } catch (err) {
      alert("스케줄 불러오기 실패");
      return rejectWithValue(err.response);
    }
  }
);

// 어제 경기 일정 불러오기
export const getYesterday = createAsyncThunk(
  "GETYESTERDAY",
  async (data, { rejectWithValue }) => {
    try {
      const params = { date: data.day };
      const res = await http.axios.get("/schedule", {
        params,
      });
      return res.data.data;
    } catch (err) {
      alert("어제 스케줄 불러오기 실패");
      return rejectWithValue(err.response);
    }
  }
);

export const getrank = createAsyncThunk(
  "GETRANK",
  async (data, { rejectWithValue }) => {
    try {
      const params = {
        date: data.day,
        leagueCode: 200,
      };
      const res = await http.axios.get("/rank", {
        params,
      });
      console.log(res.data.data);
      return res.data.data;
    } catch (err) {
      alert("랭크 불러오기 실패");
      return rejectWithValue(err.response);
    }
  }
);

const initialState = {
  notices: [],
  todays: [],
  yesterdays: [],
};

const mainpageSlice = createSlice({
  name: "myprofile",
  initialState,
  reducers: {
    setNotice: (state) => {
      state.notices = [];
    },
    setToday: (state) => {
      state.todays = [];
    },
    setYesterday: (state) => {
      state.yesterdays = [];
    },
  },
  extraReducers: {
    [getNotice.fulfilled]: (state, action) => {
      state.notices = action.payload;
    },
    [getToday.fulfilled]: (state, action) => {
      state.todays = action.payload;
    },
    [getYesterday.fulfilled]: (state, action) => {
      state.yesterdays = action.payload;
    },
  },
});

export default mainpageSlice.reducer;
