import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:19003/api', // URL base da sua API
})

export default api