import { defineStore } from 'pinia'
import '@/services/teste'
import teste from '@/services/teste'

export const useCarrinhoStore = defineStore('carrinho', {
  state: () => ({
    itens: [],
    carregando: false,
    erro: null
  }),

  actions: {
    async getCarrinho() {
      this.carregando = true
      this.erro = null
      try {
        const { data } = await teste.listar()
        this.itens = data
      } catch (error) {
        this.erro = 'Erro ao carregar o carrinho'
      } finally {
        this.carregando = false
      }
    }
  }
})
