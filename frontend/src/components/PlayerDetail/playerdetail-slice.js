import http from "../../api/http";
import { createAsyncThunk } from "@reduxjs/toolkit";

// GET - 선수 상세 조회
export const getPlayerDetail = createAsyncThunk (
  "GET_PLAYER_DETAIL",
  async (uid, {rejectWithValue}) => {
    try {
      const res = await http.axios.get(`/baseball_player/${uid}`, uid)
      
      return res.data
    } catch (err) {
      return rejectWithValue(err.response)
    }
  }
)