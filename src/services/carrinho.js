import api from "@/plugins/axios";

class CarrinhosService {
    async getCarrinhos() {
        try {
            const response = await api.get(`/carrinhos/`);
            return response;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async getCarrinho(id) {
        try {
            const response = await api.get(`/carrinhos/${id}/`);
            return response;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async createCarrinho(data) {
        try {
            const response = await api.post(`/carrinhos/`, data);
            return response;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async deleteCarrinho(id) {
        try {
            const response = await api.delete(`/carrinhos/${id}/`);
            return response;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

}

export default new CarrinhosService();