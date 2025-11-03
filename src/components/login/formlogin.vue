<script setup> 


import { computed } from 'vue';
import { useUsuarioStore } from '@/stores/usuario';
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
        <form @submit.prevent="submitForm">
            <input  v-model="form.email" type="email" name="email" placeholder="Email" />
            <input  v-model="form.password" type="password" name="senha" placeholder="Senha" />
        </form>
    </div>
</template>
<style scoped>
.container {
    width: 100%;
}   

input {
    width: 65%;
    height: 5rem;
    background-color: #E3E3E3;
    border: none;
    border-radius: 10px;
    font-size: 15px;    
    padding-left: 1rem;
}

input[name="email"] {
    margin-bottom: 1.5rem;
}

label {
    font-size: 20px;
    color: #9E9E9E;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;

}
</style>