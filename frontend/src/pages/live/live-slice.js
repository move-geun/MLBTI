import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../api/http";



export const playData = createAsyncThunk(
  "PLAYDATA",
  async (ar, { rejectWithValue }) => {
    try {
      const res = await http.auth_axios.post("/simul");
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);
