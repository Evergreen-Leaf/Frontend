import api from "@/plugins/axios";

class CategoriasService {
    async getCategorias() {
        try {
            const response = await api.get(`/categorias/`);
            return response;
        } catch (error) {
            console.error(error);
            return error;
        }   
    }

    async createCategoria(data) {
        try {
            const response = await api.post(`/categorias/`, data);
            return response;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async deleteCategoria(id) {
        try {
            const response = await api.delete(`/categorias/${id}/`);
            return response;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

}

export default new CategoriasService();