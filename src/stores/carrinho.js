import { defineStore } from "pinia";
import { reactive } from "vue";
import CarrinhosService from "@/services/carrinho";

export const useCarrinhosStore = defineStore("carrinho", () => {
  const state = reactive({
    carrinhos: [],
    loading: false,
    error: null,
  });

  const carregarCarrinho = async () => {
    state.loading = true;
    try {
      const response = await CarrinhosService.getCarrinhos();
      state.carrinhos = response.data.results || response.data;
    } catch (error) {
      console.error("Erro ao carregar carrinho:", error);
      state.error = error;
    } finally {
      state.loading = false;
    }
  };

  const createCarrinho = async (data) => {
    try {
      const response = await CarrinhosService.createCarrinho(data);
      state.carrinhos.push(response.data);
    } catch (error) {
      console.error("Erro ao adicionar item:", error);
      state.error = error;
    }
  };

  const deleteCarrinho = async (id) => {
    try {
      await CarrinhosService.deleteCarrinho(id);
      state.carrinhos = state.carrinhos.filter((item) => item.id !== id);
    } catch (error) {
      console.error("Erro ao deletar item:", error);
      state.error = error;
    }
  };

  const total = () => {
    return state.carrinhos.reduce(
      (acc, item) => acc + item.preco * item.quantidade,
      0
    );
  };

  const clearCarrinho = async () => {
    try {
      for (const item of state.carrinhos) {
        await CarrinhosService.deleteCarrinho(item.id);
      }
      state.carrinhos = [];
    } catch (error) {
      console.error("Erro ao limpar carrinho:", error);
      state.error = error;
    }
  };

  return {
    state,
    carregarCarrinho,
    createCarrinho,
    deleteCarrinho,
    total,
    clearCarrinho,
  };
});
