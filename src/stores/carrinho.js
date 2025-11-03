import { CarrinhosService } from "@/services";
import { defineStore } from "pinia";
import { reactive } from "vue";



export const useCarrinhosStore = defineStore("carrinhos", () => {
    const state = reactive({
        carrinhos: [],
        selectedCarrinho: null,
        loading: false,
        error: null,
    })

    const getCarrinhos = async () => {
        state.loading = true;
        try {
            const response = await CarrinhosService.getCarrinhos();
            state.Carrinhos = response.data.results;
        } catch (error) {
            state.error = error;
        } finally {
            state.loading = false;
        }
    }

    const getCarrinho = async (id) => {
        state.loading = true;
        try{
            const response  = await CarrinhosService.getCarrinhos(id);
            state.selectedCarrinho = response.data;
            return response;
        }
        catch (error) {
            state.error = error;
            console.error(error);
        } finally {
            state.loading = false;
        }
    }

    const createCarrinho = async (data) => {
        state.loading = true;
        try {
            const response = await CarrinhosService.createCarrinho(data);
            state.carrinho.push(response.data);
            return response;
        } catch (error) {
            state.error = error;
            console.error(error);
        } finally {
            state.loading = false;
        }
    }

    const deleteCarrinho = async (id) => {
        state.loading = true;
        try {
            const response = await CarrinhosService.deleteCarrinho(id);
            state.carrinho = state.carrinhos.filter(carrinho => carrinho.id !== id);
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
        getCarrinhos,
        getCarrinho,
        createCarrinho,
        deleteCarrinho,
    }

});