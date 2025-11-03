import api from "@/plugins/axios";

class CarrinhosService {
    async getCarrinho(id) {
        try {
            const response = await api.get(`/usuarios/${id}`);
            return { data: response.data.carrinho  };
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async addItem(userId, produtoId) {
        try {
            const data = await this.getCarrinho(userId);

            const carrinho = {
                produtos: (data.produto)? [...data.produto, produtoId] : [produtoId],
            }

            const response = await api.patch(`/usuarios/${userId}/`, {carrinho});
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

    async deleteItem(userId, produtoId) {
        try {
            const response = await api.delete(`/usuarios/${userId}/carrinho/produtos/${produtoId}/` );
            return response;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

}

export default new CarrinhosService();