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

// 임시비밀번호 발급
export const tmppwd = createAsyncThunk(
  "TMPPWD",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post("/user/find-password", null, {
        params: {
          email: data.email,
        },
      });
      console.log(res);
      return res;
    } catch (err) {
      alert("실패");
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
