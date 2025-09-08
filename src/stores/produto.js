// stores/produto.js
import { defineStore } from 'pinia'
import axios from '../plugins/axios'

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
        const res = await axios.get("/produtos/")
        this.produtos = res.data
      } catch (err) {
        this.error = err
      } finally {
        this.loading = false
      }
    },

    async fetchProduto(id) {
      this.loading = true
      try {
        const res = await axios.get(`/produtos/${id}/`)
        this.produto = res.data
      } catch (err) {
        this.error = err
      } finally {
        this.loading = false
      }
    }
  }
})
