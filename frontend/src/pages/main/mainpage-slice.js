import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../api/http";

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
      const res = await http.axios.get("/schedule", {
        parmas: {
          20221001: data.day,
        },
      });
      return res;
    } catch (err) {
      alert("스케줄 불러오기 실패");
      return rejectWithValue(err.response);
    }
  }
);

const initialState = {
  notices: [],
  todaySchedule: [],
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
  },
  extraReducers: {
    [getNotice.fulfilled]: (state, action) => {
      state.notices = action.payload;
    },
    [getToday.fulfilled]: (state, action) => {
      state.todays = action.payload;
    },
  },
});

export default mainpageSlice.reducer;
