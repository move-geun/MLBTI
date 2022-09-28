import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/http";

// 공지 받아오기
export const getNotice = createAsyncThunk(
  "GETNOTICE",
  async (ar, { rejectWithValue }) => {
    try {
      const res = await axios.get("/notice");
      return res;
    } catch (err) {
      alert("공지사항 불러오기 실패!");
      return rejectWithValue(err.response);
    }
  }
);

const initialState = {
  isLoading: false,
};

const mainpageSlice = createSlice({
  name: "myprofile",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default mainpageSlice.reducer;
