import http from "../../api/http";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";
http.axios.defaults.paramsSerializer = (params) => {
  return qs.stringify(params);
};

// GET - MLB 선수 목록
export const getPlayer = createAsyncThunk(
  "GET_Player",
  async (uid, { rejectWithValue }) => {
    try {
      const res = await http.axios.get("/allPlayers/list");
      return res
    } catch (err) {
      return rejectWithValue(err.resposne);
    }
  }
);

// GET - 커스텀 팀 전력
export const getUserTeam = createAsyncThunk(
  "GET_USER_TEAM",
  async (email, { rejectWithValue }) => {
    try {
      const res = await http.auth_axios.get("/user_team/list", {
        params: { email },
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

// POST - 선수 추가
export const registTeam = createAsyncThunk(
  "REGITS_TEAM",
  async (data, { rejectWithValue }) => {
    try {
      alert("선수가 추가 되었습니다.");
      console.log(data)
      const res = await http.auth_axios.post("/user_team", data);
      return res
    } catch (err) {
      return rejectWithValue(err.resposne);
    }
  }
);

// DELETE - 유저팀 선수 삭제 (uid: 구단 id 를 delete하면 될 듯)
export const deletePlayer = createAsyncThunk(
  "DELETE_PLAYER",
  async (uid, {rejectWithValue}) => {
    try {
      alert("선수가 삭제 되었습니다.");
      const res = await http.auth_axios.delete(`/user_team/${uid}`, uid);
      return res
    } catch (err) {
      alert("선수 삭제를 실패 했습니다.")
      return rejectWithValue(err.response)
    }
  }
)

// GET - 선수 검색 
export const searchPlayer = createAsyncThunk(
  "SEARCH_PLAYER",
  async (data, {rejectWithValue}) => {
    try {
      const res = await http.auth_axios.get('allPlayers', {params : {searchName: data.name}})
      return res.data

    } catch (err) {
      return rejectWithValue(err.response)
    }
  }
)

// DELETE - 유저팀 전체 삭제
export const deleteUserTeam = createAsyncThunk(
  "DELETE_USER_TEAM",
  async (data, {rejectWithValue}) => {
    try {
      const params = {email: data}
      const res = await http.auth_axios.delete("user_team/list", {params})
      return res
    } catch (err) {
      return rejectWithValue(err.response)
    }
  }
)


// PUT - 팀 이름 변경
export const modifiedTeamName = createAsyncThunk(
  "MODIFIED_TEAM_NAME",
  async (data, { rejectWithValue }) => {
    try {
      const res = await http.auth_axios.put("/user/teamName",null, {params: {email: data.email, newTeamName: data.newTeamName}});
      return res
    } catch (err) {
      return rejectWithValue(err.response)
    }
  }
);

// PUT - 타순 변경
export const modifiedOrder = createAsyncThunk(
  "MODIFIED_ORDER",
  async (data, {rejectWithValue}) => {
    try {
      const res = await http.auth_axios.put("user_team/update", null, {params: {email: data.email, order: data.order, player_uid: data.player_uid} })
      return res
    } catch (err) {
      return rejectWithValue(err.resposne)
    }
  }
)


const initialState = {
  isLoading: false,
};

const teamCusomSlice = createSlice({
  name: "teamCustom",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default teamCusomSlice.reducer;
