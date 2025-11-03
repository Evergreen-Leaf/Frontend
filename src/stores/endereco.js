import  EnderecosService  from "@/services/endereco";
import { defineStore } from "pinia";
import { reactive } from "vue";



export const useEnderecoStore = defineStore("enderecos", () => {
    const state = reactive({
        enderecos: [],
        selectedEndereco: null,
        loading: false,
        error: null,
    })

    const getEndereco = async (id) => {
        state.loading = true;
        try{
            const response  = await EnderecosService.getEndereco(id);
            state.selectedEndereco = response.data;
            return response;
        }
        catch (error) {
            state.error = error;
            console.error(error);
        } finally {
            state.loading = false;
        }
    }

    const createEndereco = async (data) => {
        state.loading = true;
        try {
            const response = await EnderecosService.createEndereco(data);
            state.enderecos.push(response.data);
            return response;
        } catch (error) {
            state.error = error;
            throw error;
        } finally {
            state.loading = false;
        }
    }

    const deleteEndereco = async (id) => {
        state.loading = true;
        try {
            const response = await EnderecosService.deleteEndereco(id);
            state.enderecos = state.enderecos.filter(endereco => endereco.id !== id);
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
        getEndereco,
        createEndereco,
        deleteEndereco,
    }

});