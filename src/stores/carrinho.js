import CarrinhosService from "@/services/carrinho";
import { defineStore } from "pinia";
import { reactive } from "vue";

export const useCarrinhosStore = defineStore("carrinhos", () => {
  const state = reactive({
    carrinhos: [], // lista de itens
    selectedCarrinho: null,
    loading: false,
    error: null,
  });

  const getCarrinhos = async () => {
    state.loading = true;
    try {
      const response = await CarrinhosService.getCarrinhos();
      state.carrinhos = response.data.results;
    } catch (error) {
      state.error = error;
    } finally {
      state.loading = false;
    }
  };

  const carregarCarrinho = async () => {
        await getCarrinhos()
    };

  const createCarrinho = async (data) => {
    state.loading = true;
    try {
      const response = await CarrinhosService.createCarrinho(data);
      state.carrinhos.push(response.data);
      return response;
    } catch (error) {
      state.error = error;
      console.error(error);
    } finally {
      state.loading = false;
    }
  };

  const deleteCarrinho = async (id) => {
    state.loading = true;
    try {
      await CarrinhosService.deleteCarrinho(id);
      state.carrinhos = state.carrinhos.filter((c) => c.id !== id);
    } catch (error) {
      state.error = error;
      console.error(error);
    } finally {
      state.loading = false;
    }
  };

  const clearCarrinho = () => {
    state.carrinhos = [];
  };

  const total = () => {
    return state.carrinhos.reduce(
      (acc, item) => acc + item.preco * item.quantidade,
      0
    );
  };

  return {
    state,
    getCarrinhos,
    createCarrinho,
    deleteCarrinho,
    clearCarrinho,
    total,
    carregarCarrinho,
  };
});
