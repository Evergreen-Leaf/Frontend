import api from "@/plugins/axios";

class EnderecosService {
    async getEnderecos() {
        try {
            const response = await api.get(`/enderecos/`);
            return response;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async getEndereco(id) {
        try {
            const response = await api.get(`/enderecos/${id}/`);
            return response;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async createEndereco(data) {
        try {
            const response = await api.post(`/enderecos/`, data);
            return response;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async deleteEndereco(id) {
        try {
            const response = await api.delete(`/enderecos/${id}/`);
            return response;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

}

export default new EnderecosService();