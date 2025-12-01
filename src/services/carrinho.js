import api from "@/plugins/axios";

class CarrinhosService {
    async getCarrinho(id) {
        try {
            const response = await api.get(`/usuarios/${id}`);
            return response;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async addItem(userId, produtoId) {
        try {
            // Busca os dados atuais do usuário
            const usuarioResponse = await api.get(`/usuarios/${userId}`);
            console.log('Usuário atual:', usuarioResponse.data);
            
            // Extrai os IDs dos produtos existentes do carrinho
            // O backend retorna carrinho.produto como array de objetos, não de IDs
            const produtosExistentes = usuarioResponse.data?.carrinho?.produto?.map(p => p.id) || [];
            console.log('Produtos existentes (IDs):', produtosExistentes);
            console.log('Novo produto a adicionar:', produtoId);
            
            // Adiciona o novo produto à lista
            const novosProdutos = [...produtosExistentes, produtoId];
            console.log('Lista completa após adicionar:', novosProdutos);

            // Envia para o backend com a lista completa de IDs
            const updateResponse = await api.patch(`/usuarios/${userId}/`, {
                carrinho: {
                    produtos: novosProdutos
                }
            });
            console.log('Resposta do PATCH:', updateResponse.data);
            return updateResponse;
        } catch (error) {
            console.error('Erro ao adicionar item:', error);
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