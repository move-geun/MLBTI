import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/http";
import { deleteToken, saveToken } from "../../api/JWT";

// 로그인
export const login = createAsyncThunk(
  "LOGIN",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await axios.post("/auth/login", userData);
      const token = res.data.accessToken;
      saveToken(token);
      return res;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

// 로그아웃
export const logout = createAsyncThunk(
  "LOGOUT",
  async (arg, { rejectWithValue }) => {
    deleteToken();
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
