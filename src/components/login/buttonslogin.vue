<script setup>

import { computed } from 'vue';
import { useRouter } from 'vue-router';

const UsuarioStore = useUsuarioStore();

const router = useRouter();

const submitForm = async () => {
    try {
        await UsuarioStore.login(form.value.email, form.value.password);
        router.push('/');
        alert('Login realizado com sucesso!');
    } catch (error) {
        alert('Erro ao logar:', error);
    }
};

const form = computed(() => {
    return {
        email: '',
        password: '',
    };
});

</script>
<template>
    <div class="container">
        <div class="container-btn">
            <button @click="submitForm" >ENTRAR</button>
        </div>
        <div class="container-link">
            <router-link to="/cadastro" class="cadastro-link">Não possui uma conta?</router-link>
        </div>
    </div>
</template>
<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}
.container-btn {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

button {
    width: 40%;
    height: 3.5rem;
    background-color: #68A239;
    color: white;
    border: none;
    border-radius: 30px;
    font-size: 25px;
    cursor: pointer;
}

.cadastro-link {
    font-size: 15px;
    color: #9E9E9E;
}
</style>