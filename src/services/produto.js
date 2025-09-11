import api from "@/plugins/axios";

class ProdutosService {
    async getProdutos() {
        try {
            const response = await api.get(`/produtos/`);
            return response.results;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async getProduto(id) {
        try {
            const response = await api.get(`/produtos/${id}/`);
            return response.results;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async createProduto(data) {
        try {
            const response = await api.post(`/produtos/, data`);
            return response;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async deleteProduto(id) {
        try {
            const response = await api.delete(`/produtos/${id}/`);
            return response;
        } catch (error) {
            console.error(error);
            return error;
        }
    }
}

export default new ProdutosService();