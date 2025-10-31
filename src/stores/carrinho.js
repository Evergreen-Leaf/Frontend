import CarrinhosService from "@/services/carrinho";
import { defineStore } from "pinia";
import { reactive } from "vue";



export const useCarrinhosStore = defineStore("carrinhos", () => {
    const state = reactive({
        carrinhos: [],
        selectedCarrinho: null,
        loading: false,
        error: null,
    })

    const getCarrinho = async (id) => {
        state.loading = true;
        try{
            const response  = await CarrinhosService.getCarrinho(id);
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

    const addItem = async (UserId, ProductId) => {
        state.loading = true;
        try {
            const response = await CarrinhosService.addItem(UserId, ProductId);
            state.selectedCarrinho.push(response.data);
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
        getCarrinho,
        addItem,
        deleteCarrinho,
    }

});