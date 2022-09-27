import axios from "../../api/http";
import { createAsyncThunk } from "@reduxjs/toolkit";

// GET - 회원정보 (닉네임, 구단이름) 

// GET - MLB 선수 목록 
export const getData = createAsyncThunk (
    "GET_DATA",
    async (uid, {rejectWithValue}) => {
      let player = []
      
      for ( let idx =110001 ; idx < 110010; idx++ ) {
        const res = await axios.get(`/baseball_player/${idx}`);
        player.push(res.data)  
      }
      
      return player
    }
  )


// GET - 유저 전력
export const getUserTeam = createAsyncThunk (
  "GET_USER_TEAM",
  async (email, {rejectWithValue}) => {
    try {
      const res =  await axios.get('/user_team/list', {params :  {email},});
      return res.data
    } catch (err) {
      return rejectWithValue(err.response)
    }
  } 
)

// POST - 유저팀 등록 (선수 한명 추가할 때 마다 post해야 할 듯)

// DELETE - 유저팀 삭제 (uid: 구단 id 를 delete하면 될 듯) 