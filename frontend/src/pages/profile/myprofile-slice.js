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

// 나의 팀 불러오기
export const myteam = createAsyncThunk(
  "MYTEAM",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.get("/user_team/list", {
        params: {
          email: data.email,
        },
      });
      return res;
    } catch (err) {
      alert("팀 정보 조회 실패");
      return rejectWithValue(err.response);
    }
  }
);

// 닉네임 변경하기
// export const changeName = createAsyncThunk(
//     'CHANGENAME',
//     async (data, { rejectWithValue }) => {
//         try {
//             const res = await axios
//         }
//     }
// )

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
