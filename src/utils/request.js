import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api/'
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDg2Y2U1ZjQ4NDVjMzJiZDg2Y2ZmZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTMwMjIwNiwiZXhwIjoxNjUxODk0MjA2fQ.9uB9NcCwBH4szZ1Sld-MaFuCTDn0sQX8xC_uYQnhTes'

export const publicRequest = axios.create({
  baseURL: BASE_URL
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: TOKEN }
})
