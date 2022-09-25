import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../api/http';

// 이메일 인증번호 전송
export const checkEmail = createAsyncThunk(
  'CHECK_EMAIL',
  async (email, { rejectWithValue }) => {
    try {
      console.log('실행되나')
      // query 로 보내기
      const res = await axios.post('/user/mail/send/certify', null, { params: { email } })
      return res
    } catch (err) {
      return rejectWithValue(err.response)
    }
  }
)

// 인증번호 확인 slice
// export const checkNumber = createAsyncThunk(
//   'CHECK_NUMBER',
//   async (number, {rejectWithValue}) => {
//     try {
//       const res = await axios.post('/user/signin')
//     }
//   }
// )

// 팀 받아오는 slice (닉네임 중복 체크 할 용도)
export const getUserList = createAsyncThunk(
  'GET_USERLIST',
  async (UserNick, {rejectWithValue}) => {
    try {
      let result = true
      console.log('유저닉네임',UserNick)
      const res = await axios.get('/user/list')
      for (let idx = 0; idx < res.data.length; idx++){
        if ( UserNick === res.data[idx].nickname ) {
           result = false
           break
        }  
      }
      
      return result
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