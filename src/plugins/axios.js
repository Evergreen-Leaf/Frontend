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
  (error) => {
    if (error.response?.status == 401) {
     const UsuarioStore = useUsuarioStore();
      UsuarioStore.logout();
    }
    return Promise.reject(error);
  }
);
export default api