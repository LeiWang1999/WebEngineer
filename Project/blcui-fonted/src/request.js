import axios from 'axios'

const BASE_URL = "https://www.tianqiapi.com/api"
const request = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
})

export default request