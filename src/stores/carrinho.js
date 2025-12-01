import CarrinhosService from "@/services/carrinho";
import { defineStore } from "pinia";
import { reactive } from "vue";



export const useCarrinhosStore = defineStore("carrinhos", () => {
    const state = reactive({
        carrinhos: [],
        selectedCarrinho: null,
        itensCarrinho: [],
        loading: false,
        error: null,
    })

    const getCarrinho = async (id) => {
        state.loading = true;
        try{
            const response  = await CarrinhosService.getCarrinho(id);
            console.log(response)
            state.selectedCarrinho = response.data;
            // Extrai os produtos do carrinho (que vêm como array de objetos)
            state.itensCarrinho = response.data?.carrinho?.produto || [];
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
            // Recarrega o carrinho para sincronizar com o backend
            await getCarrinho(UserId);
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
            state.carrinhos = state.carrinhos.filter(carrinho => carrinho.id !== id);
            return response;
        } catch (error) {
            state.error = error;
            console.error(error);
        } finally {
            state.loading = false;
        }
    }

    const deleteItem = async (produtoId, userId) => {
        state.loading = true;
        try {
            const response = await CarrinhosService.deleteItem(userId, produtoId);
            state.itensCarrinho = state.itensCarrinho.filter(item => item.id !== produtoId);
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
        deleteItem,
    }

});