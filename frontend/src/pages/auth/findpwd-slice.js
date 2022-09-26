import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/http";

export const changePwd = createAsyncThunk(
  "CHANGEPWD",
  async (pwdData, { rejectWithValue }) => {
    try {
      const res = await axios.post("/user/find-password", pwdData);
      console.log("으아아");
      return res;
    } catch (err) {
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
