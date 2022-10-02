// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../api/http";

// GET - 내셔널 팀 받아오기
export const getNational = createAsyncThunk(
  "GET_NATIONAL",
  async (para, { rejectWithValue }) => {
    try {
      const res = await http.axios.get("/team/nationalMLB");
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);


// GET - 아메리칸 팀 받아오기
export const getAmerican = createAsyncThunk(
  "GET_AMERICAN",
  async (para, { rejectWithValue }) => {
    try {
      const res = await http.axios.get("/team/americanMLB");
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);