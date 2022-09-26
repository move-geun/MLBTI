import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/http";

// 로그인
export const login = createAsyncThunk(
  "LOGIN",
  async (userData, { rejectWithValue }) => {
    try {
      console.log("왜 안호대");
      const res = await axios.post("/auth/login", userData);
      // console.log(res);
      console.log("슬라이스~");
      return res;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

const initialState = {
  isLoading: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default loginSlice.reducer;
