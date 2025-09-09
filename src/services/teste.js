import api from '@/plugins/axios'

export default {
  listar() {
    return api.get('/enderecos/')
  },


  obter(id) {
    return api.get(`/enderecos/${id}/`)
  },


  criar(dados) {
    return api.post('/enderecos/', dados)
  },


  atualizar(id, dados) {
    return api.put(`/enderecos/${id}/`, dados)
  },

  deletar(id) {
    return api.delete(`/enderecos/${id}/`)
  }
}