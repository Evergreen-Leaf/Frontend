<script setup>
import { computed } from 'vue';
import buttonscadastro from '@/components/cadastro/buttonscadastro.vue';

import { useUsuariosStore } from '@/stores/usuarios';

const UsuariosStore = useUsuariosStore();

const submitForm = async () => {
    try {
        await UsuariosStore.createUsuario(form.value);
        avancar();
    } catch (error) {
        alert('Erro ao cadastrar usuário:', error);
    }
};

const form = computed(() => {
    return {
        username: '',
        datanasc: '',
        cpf: '',
        email: '',
        telefone: '',
        password: '',
    };
});


const emit = defineEmits(['avancar', 'voltar']);

const etapa = 1;

function avancar() {
    emit('avancar');
}


</script>
<template>
    <div class="container">
        <form @submit.prevent="submitForm">
            <input v-model="form.username" type="text" placeholder="Nome de usuario" />
            <label for="date">Data de nascimento</label>
            <input v-model="form.datanasc" type="date" name="date" >
            <input v-model="form.cpf" type="number" name="CPF" placeholder="CPF" />
            <input v-model="form.email" type="email" name="email" placeholder="Email" />
            <input v-model="form.telefone" type="number" name="telefone" placeholder="Telefone" />
            <input v-model="form.password" type="password" name="senha" placeholder="Senha" />
        </form>
    </div>
    <div class="container-2">
        <div class="buttons">
          <buttonscadastro
            :etapa="etapa"
            @avancar="submitForm"
          />
        </div>
    </div>
</template>
<style scoped>
.container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}   

input {
    width: 100%;
    height: 4rem;
    background-color: #E3E3E3;
    border: none;
    border-radius: 10px;
    font-size: 15px;    
    padding-left: 1rem;
    margin-bottom: 1rem;
}


label {
    font-size: 20px;
    margin-bottom: 1rem;
    color: #9E9E9E;
}

form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 65%;
}

.container-2 {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

}

.buttons {
    width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>