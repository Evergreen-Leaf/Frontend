import { ProdutosService } from "@/services";
import { defineStore } from "pinia";
import { reactive } from "vue";

export const useProdutosStore = defineStore("produtos", () => {
    const state = reactive({
        produtos: [],
        selectedProduto: null,
        loading: false,
        error: null,
    })

    const getProdutos = async () => {
        state.loading = true;
        try {
            const response = await ProdutosService.getProdutos();
            state.produtos = response.data;
        } catch (error) {
            state.error = error;
        } finally {
            state.loading = false;
        }
    }

    const getProduto = async (id) => {
        state.loading = true;
        try{
            const response  = await ProdutosService.getProduto(id);
            state.selectedProduto = response.data;
            return response;
        }
        catch (error) {
            state.error = error;
            console.error(error);
        } finally {
            state.loading = false;
        }
    }

    const createProduto = async (data) => {
        state.loading = true;
        try {
            const response = await ProdutosService.createProduto(data);
            state.produtos.push(response.data);
            return response;
        } catch (error) {
            state.error = error;
            console.error(error);
        } finally {
            state.loading = false;
        }
    }

    const deleteProduto = async (id) => {
        state.loading = true;
        try {
            const response = await ProdutosService.deleteProduto(id);
            state.produtos = state.produtos.filter(produto => produto.id !== id);
            return response;
        } catch (error) {
            state.error = error;
            console.error(error);
        } finally {
            state.loading = false;
        }
    }

    return {
        state,
        getProdutos,
        getProduto,
        createProduto,
        deleteProduto,
    }

});