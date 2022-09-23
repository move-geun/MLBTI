import baseAxios from 'axios'

const axios = baseAxios.create({
  baseURL: 'http://j7e202.p.ssafy.io:8081/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axios