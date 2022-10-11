import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../api/http";
import qs from "qs";
http.axios.defaults.paramsSerializer = (params) => {
  return qs.stringify(params);
};

// 공지 받아오기
export const getNotice = createAsyncThunk(
  "GETNOTICE",
  async (ar, { rejectWithValue }) => {
    try {
      const res = await http.axios.get("/notice");
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

// 오늘 경기 일정 불러오기
export const getToday = createAsyncThunk(
  "GETTODAY",
  async (data, { rejectWithValue }) => {
    try {
      const params = { date: data.day };
      const res = await http.axios.get("/schedule", {
        params,
      });
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

// 어제 경기 일정 불러오기
export const getYesterday = createAsyncThunk(
  "GETYESTERDAY",
  async (data, { rejectWithValue }) => {
    try {
      const params = { date: data.day };
      const res = await http.axios.get("/schedule", {
        params,
      });
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

// 아메리카 서부리그
export const getAWrank = createAsyncThunk(
  "GETAWRANK",
  async (data, { rejectWithValue }) => {
    try {
      const params = {
        date: data.day,
        leagueCode: 200,
      };
      const res = await http.axios.get("/rank", {
        params,
      });
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);
// 아메리카 동부리그
export const getAErank = createAsyncThunk(
  "GETAERANK",
  async (data, { rejectWithValue }) => {
    try {
      const params = {
        date: data.day,
        leagueCode: 201,
      };
      const res = await http.axios.get("/rank", {
        params,
      });
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);
// 아메리카 중부리그
export const getAMrank = createAsyncThunk(
  "GETAMRANK",
  async (data, { rejectWithValue }) => {
    try {
      const params = {
        date: data.day,
        leagueCode: 202,
      };
      const res = await http.axios.get("/rank", {
        params,
      });
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

// 네셔널 서부리그
export const getNWrank = createAsyncThunk(
  "GETNWRANK",
  async (data, { rejectWithValue }) => {
    try {
      const params = {
        date: data.day,
        leagueCode: 203,
      };
      const res = await http.axios.get("/rank", {
        params,
      });
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

// 네셔널 동부리그
export const getNErank = createAsyncThunk(
  "GETNERANK",
  async (data, { rejectWithValue }) => {
    try {
      const params = {
        date: data.day,
        leagueCode: 204,
      };
      const res = await http.axios.get("/rank", {
        params,
      });
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);
// 네셔널 서부리그
export const getNMrank = createAsyncThunk(
  "GETNMRANK",
  async (data, { rejectWithValue }) => {
    try {
      const params = {
        date: data.day,
        leagueCode: 205,
      };
      const res = await http.axios.get("/rank", {
        params,
      });
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);
const initialState = {
  notices: [],
  todays: [],
  yesterdays: [],
  AWrank: [],
  AErank: [],
  AMrank: [],
  NWrank: [],
  NErank: [],
  NMrank: [],
};

const mainpageSlice = createSlice({
  name: "myprofile",
  initialState,
  reducers: {
    setNotice: (state) => {
      state.notices = [];
    },
    setToday: (state) => {
      state.todays = [];
    },
    setYesterday: (state) => {
      state.yesterdays = [];
    },
    setAWrank: (state) => {
      state.AWrank = [];
    },
    setAErank: (state) => {
      state.AWrank = [];
    },
    setAMrank: (state) => {
      state.AWrank = [];
    },
    setNWrank: (state) => {
      state.AWrank = [];
    },
    setNErank: (state) => {
      state.AWrank = [];
    },
    setNMrank: (state) => {
      state.AWrank = [];
    },
  },
  extraReducers: {
    [getNotice.fulfilled]: (state, action) => {
      state.notices = action.payload;
    },
    [getToday.fulfilled]: (state, action) => {
      state.todays = action.payload;
    },
    [getYesterday.fulfilled]: (state, action) => {
      state.yesterdays = action.payload;
    },
    [getAWrank.fulfilled]: (state, action) => {
      state.AWrank = action.payload;
    },
    [getAErank.fulfilled]: (state, action) => {
      state.AErank = action.payload;
    },
    [getAMrank.fulfilled]: (state, action) => {
      state.AMrank = action.payload;
    },
    [getNWrank.fulfilled]: (state, action) => {
      state.NWrank = action.payload;
    },
    [getNErank.fulfilled]: (state, action) => {
      state.NErank = action.payload;
    },
    [getNMrank.fulfilled]: (state, action) => {
      state.NMrank = action.payload;
    },
  },
});

export default mainpageSlice.reducer;
