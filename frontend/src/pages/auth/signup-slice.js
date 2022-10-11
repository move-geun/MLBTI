import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../api/http";

// 회원가입
export const signup = createAsyncThunk(
  "SINGUP",
  async (userData, { rejectWithValue }) => {
    try {
      console.log("회원가입 정보", userData);
      const res = await http.axios.post("/user/signin", userData);
      return res;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

// 이메일 인증번호 전송
export const checkEmail = createAsyncThunk(
  "CHECK_EMAIL",
  async (email, { rejectWithValue }) => {
    try {
      // query 로 보내기
      const res = await http.axios.post("/user/mail/send/certify", null, {
        params: { email },
      });
      return res;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

// 인증번호 확인 slice
export const checkCertNumber = createAsyncThunk(
  "CHECK_NUMBER",
  async (data, { rejectWithValue }) => {
    try {
      let result = false;
      const res = await http.axios.post("/user/mail/valid/check", null, {
        params: { email: data.email, randomNumber: data.randomNumber },
      });
      console.log(res.status);
      if (res.status === 200) {
        result = true;
      } else {
        result = false;
      }
      return result;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

// 팀 받아오는 slice (닉네임 중복 체크 할 용도)
export const getUserList = createAsyncThunk(
  "GET_USERLIST",
  async (UserNick, { rejectWithValue }) => {
    try {
      let result = true;
      const res = await http.axios.get("/user/list");
      for (let idx = 0; idx < res.data.length; idx++) {
        if (UserNick === res.data[idx].nickname) {
          result = false;
          break;
        }
      }

      return result;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

const initialState = {
  isLoading: false,
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default signupSlice.reducer;
