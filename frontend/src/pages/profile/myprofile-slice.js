import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/http";

// 내 정보 불러오기
export const myprofile = createAsyncThunk(
  "MYPROFILE",
  async (ar, { rejectWithValue }) => {
    try {
      const res = await axios.get("/user/me");
      return res;
    } catch (err) {
      alert("에러입니다");
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
  reducers: {},
  extraReducers: {},
});

export default myprofileSlice.reducer;
