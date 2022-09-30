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

const initialState = {
  notices: [],
};

const mainpageSlice = createSlice({
  name: "myprofile",
  initialState,
  reducers: {
    setNotice: (state) => {
      state.notices = [];
    },
  },
  extraReducers: {
    [getNotice.fulfilled]: (state, action) => {
      state.notices = action.payload;
    },
  },
});

export default mainpageSlice.reducer;
