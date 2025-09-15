import axios from 'axios'

const api = axios.create({
  baseURL: 'https://backend-i15u.onrender.com/api',
})

export default api