import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../api/http';

// 이메일 인증번호 전송
export const checkEmail = createAsyncThunk(
  'CHECK_EMAIL',
  async (userEmail, { rejectWithValue }) => {
    try {
      
      const res = await axios.post('/user/mail/send/certify/', {email: userEmail})
      return res
    } catch (err) {
      return rejectWithValue(err.response)
    }
  }
)

export const getTeam = createAsyncThunk(
  'GET_TEAM',
  async (teamNo, {rejectWithValue}) => {
    try {
      console.log(teamNo)
      const res = await axios.get('/user/list')
      console.log(res);
    } catch(err) {
      return rejectWithValue(err.response)
    }
  }
)

const initialState = {
  isLoading: false,
}

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {},
  extraReducers: {
  },
})

export default signupSlice.reducer