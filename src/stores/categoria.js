import CategoriasService from "@/services/categoria.js";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useCategoriaStore = defineStore("categorias", () => {
  const state = reactive({
    categorias: [],
    selectedCategoria: ref(null),
    loading: false,
    error: null,
  });

  const getCategorias = async () => {
    state.loading = true;
    try {
      const response = await CategoriasService.getCategorias();
      state.categorias = response.data.results;
    } catch (error) {
      state.error = error;
      console.error(error);
    } finally {
      state.loading = false;
    }
  };


  const createCategoria = async (data) => {
    state.loading = true;
    try {
      const response = await CategoriasService.createCategoria(data);
      state.categorias.push(response.data);
      return response;
    } catch (error) {
      state.error = error;
      console.error(error);
    } finally {
      state.loading = false;
    }
  };

  const deleteCategoria = async (id) => {
    state.loading = true;
    try {
      const response = await CategoriasService.deleteCategoria(id);
      state.categorias = state.categorias.filter(
        (categoria) => categoria.id !== id
      );
      return response;
    } catch (error) {
      state.error = error;
      console.error(error);
    } finally {
      state.loading = false;
    }
  };

  return {
    state,
    getCategorias,
    createCategoria,
    deleteCategoria,
  };
});
