import axios from 'axios'
import { useUsuarioStore } from '@/stores/usuario'

const api = axios.create({
  baseURL: 'http://localhost:19003/api',
})

api.interceptors.request.use((config => {
  const UsuarioStore = useUsuarioStore();
  const token = UsuarioStore.state.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}));

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const UsuarioStore = useUsuarioStore()
    const originalRequest = error.config

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        const refresh = UsuarioStore.state.refreshToken
        if (!refresh) {
          UsuarioStore.logout()
          return Promise.reject(error)
        }

        const res = await api.post('/token/refresh/', {
          refresh: refresh,
        })

        const newAccess = res.data.access
        UsuarioStore.state.token = newAccess

        originalRequest.headers.Authorization = `Bearer ${newAccess}`
        return api(originalRequest)
      } catch (refreshError) {
        UsuarioStore.logout()
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  }
)
export default api
