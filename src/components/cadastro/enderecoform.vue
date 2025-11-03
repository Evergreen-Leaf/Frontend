<script setup>
import { computed } from 'vue';
import buttonscadastro from '@/components/cadastro/buttonscadastro.vue';
import { useEnderecoStore } from '@/stores/endereco';
import { useUsuarioStore } from '@/stores/usuario';

const EnderecoStore = useEnderecoStore();

const UsuarioStore = useUsuarioStore();

const submitForm = async () => {
    try {
        form.value.user = UsuarioStore.state.user.id;
        await EnderecoStore.createEndereco(form.value);
        avancar();
    } catch (error) {
        alert('Erro ao cadastrar usuário:', error);
    }
};

const form = computed(() => {
    return {
        cidade: '',
        estado: '',
        bairro: '',
        rua: '',
        numero: '',
        cep: '',
        complemento: '',
    };
});



const emit = defineEmits(['avancar']);

const etapa = 2;

function avancar() {
    emit('avancar');
}

</script>

<template>
    <div class="container">
        <form  @submit.prevent="submitForm">
            <input v-model="form.cidade" type="text" placeholder="Cidade" />
            <input v-model="form.estado" type="text" placeholder="Estado" />
            <input v-model="form.bairro" type="text" placeholder="Bairro" />
            <input v-model="form.rua" type="text" placeholder="Rua" />
            <input v-model="form.numero" type="number" name="numero" placeholder="Número" />
            <input v-model="form.cep" type="number" name="cep" placeholder="CEP" />
            <input v-model="form.complemento" type="text" placeholder="Complemento" />
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