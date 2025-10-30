import  UsuariosService  from "@/services/usuarios";
import { defineStore } from "pinia";
import { reactive } from "vue";
import { useUsuarioStore } from "@/stores/usuario";


export const useUsuariosStore = defineStore("usuarios", () => {
    const state = reactive({
        usuarios: [],
        selectedUsuario: null,
        loading: false,
        error: null,
    })

    const getUsuarios = async () => {
        state.loading = true;
        try {
            const response = await UsuariosService.getUsuarios();
            state.usuarios = response.data.results;
        } catch (error) {
            state.error = error;
        } finally {
            state.loading = false;
        }
    }

    const getUsuario = async (id) => {
        state.loading = true;
        try{
            const response  = await UsuariosService.getUsuario(id);
            state.selectedUsuario= response.data;
            return response;
        }
        catch (error) {
            state.error = error;
            console.error(error);
        } finally {
            state.loading = false;
        }
    }

    const createUsuario = async (data) => {
        state.loading = true;
        try {
            const UsuarioStore = useUsuarioStore();
            const response = await UsuariosService.createUsuario(data);
            state.usuarios.push(response.data);
            UsuarioStore.login(data.email, data.password);
            return response;
        } catch (error) {
            state.error = error;
            throw error;
        } finally {
            state.loading = false;
        }
    }

    const deleteUsuario = async (id) => {
        state.loading = true;
        try {
            const response = await UsuariosService.deleteUsuario(id);
            state.usuarios = state.usuarios.filter(usuario => usuario.id !== id);
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
        getUsuarios,
        getUsuario,
        createUsuario,
        deleteUsuario,
    }

});