import axios from "../../api/http";
import { createAsyncThunk } from "@reduxjs/toolkit";

// GET - MLB 투수
export const getPitchers = createAsyncThunk(
  "GET_PITCHERS",
  async (uid, { rejectWithValue }) => {
    try{
      const res = await axios.get("/pitcher/list")
      return res.data
    } catch (err) {
      return rejectWithValue(err.resposne);
    }
  }
);

// GET - MLB 타자
export const getBatters = createAsyncThunk(
  "GET_BATTERS",
  async (uid, { rejectWithValue }) => {
    try{
      const res = await axios.get("/batter/list")
      return res.data
    } catch (err) {
      return rejectWithValue(err.resposne);
    }
  }
);

// GET - 유저 전력
export const getUserTeam = createAsyncThunk(
  "GET_USER_TEAM",
  async (email, { rejectWithValue }) => {
    try {
      const res = await axios.get("/user_team/list",{ params: { email } });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

// POST - 유저팀 등록 (저장 버튼 누르면 post 되게)
export const registTeam = createAsyncThunk(
  "REGITS_TEAM",
  async (data, {rejectWithValue}) => {
    try {
      console.log(data)
      const res = await axios.post("/user_team", data)
      console.log('성공했나?',res)
    } catch (err) {
      return rejectWithValue(err.resposne)
    }
  }
)


// DELETE - 유저팀 삭제 (uid: 구단 id 를 delete하면 될 듯)
