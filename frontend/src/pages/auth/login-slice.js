import axios from "../../api/http"

// 로그인
export const login = createAsyncThunk(
  'LOGIN',
  async (userData:any, { rejectWithValue }) => {
    try {
      const res = await http.post('member/login.do', userData)
      const accessToken = res.data.accessToken
      const refreshToken = res.data.refreshToken
      window.localStorage.setItem('access-Token', accessToken);
      window.localStorage.setItem('refresh-Token', refreshToken);
      return res
    } catch (err:any) {
      return rejectWithValue(err.response) //err안에 response로 담겨있음
    }
  },
)
