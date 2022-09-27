import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/http";

// 비밀번호 변경
export const changePwd = createAsyncThunk(
  "CHANGEPWD",
  async (pwdData, { rejectWithValue }) => {
    try {
      const res = await axios.put("/user/id-info", null, {
        params: {
          email: pwdData.email,
          newNickname: pwdData.newNickname,
          newPassword: pwdData.newPassword,
        },
      });
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

const changePWDSlice = createSlice({
  name: "changePwd",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default changePWDSlice.reducer;
