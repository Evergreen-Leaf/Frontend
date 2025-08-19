import api from '@/components/plugins/axios'

export default {
  // Lista todos os produtos
  listar() {
    return api.get('/enderecos/')
  },

  // Obtém um produto pelo ID
  obter(id) {
    return api.get(`/enderecos/${id}/`)
  },

  // Cria um novo produto
  criar(dados) {
    return api.post('/enderecos/', dados)
  },

  // Atualiza um produto existente
  atualizar(id, dados) {
    return api.put(`/enderecos/${id}/`, dados)
  },

  // Deleta um produto
  deletar(id) {
    return api.delete(`/enderecos/${id}/`)
  }
}