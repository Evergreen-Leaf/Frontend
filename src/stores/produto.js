// stores/produto.js
import { defineStore } from 'pinia'
import api from '../plugins/axios'

export const useProdutoStore = defineStore('produto', {
  state: () => ({
    produtos: [], 
    produto: null,  
    loading: false,
    error: null,
  }),

  actions: {
    async fetchProdutos() {
      this.loading = true
      try {
        const res = await api.get("/produtos/")
        this.produtos = res.data.results
      } catch (err) {
        this.error = err
      } finally {
        this.loading = false
      }
    },

    async fetchProduto(id) {
      this.loading = true
      try {
        const res = await api.get(`/produtos/${id}/`)
        this.produto = res.data
      } catch (err) {
        this.error = err
      } finally {
        this.loading = false
      }
    }
  }
})
