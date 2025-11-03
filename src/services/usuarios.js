import api from "@/plugins/axios";

class UsuariosService {
    async getUsuarios() {
        try {
            const response = await api.get(`/usuarios/`);
            return response;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async getUsuario(id) {
        try {
            const response = await api.get(`/usuarios/${id}/`);
            return response;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async createUsuario(data) {
            const response = await api.post(`/usuarios/`, data);
            return response;
    }
    
    async deleteUsuario(id) {
        try {
            const response = await api.delete(`/usuarios/${id}/`);
            return response;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

}

export default new UsuariosService();