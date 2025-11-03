<script setup>
import { ref } from 'vue';
import { useUsuarioStore } from '@/stores/usuario';
import { useRouter } from 'vue-router';

const email = ref('');
const senha = ref('');
const UsuarioStore = useUsuarioStore();
const router = useRouter();

const submitLogin = async () => {
    try {
        await UsuarioStore.login(email.value, senha.value);
        router.push('/');
        alert('Login realizado com sucesso!');
    } catch (error) {
        alert('Erro ao logar: ' + error);
    }
};
</script>

<template>
    <section class="login">
        <div class="container">
            <div class="logo">
                <img src="/public/Logo.png" alt="Evergreen Logo">
                <p>BEM VINDO DE VOLTA!</p>
            </div>

            <div class="form">
                <div class="input-area">
                    <div class="input-wrapper">
                        <svg class="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M3.33334 5.83333L10 10.8333L16.6667 5.83333M3.33334 14.1667H16.6667C17.5871 14.1667 18.3333 13.4205 18.3333 12.5V5.83333C18.3333 4.91286 17.5871 4.16667 16.6667 4.16667H3.33334C2.41286 4.16667 1.66667 4.91286 1.66667 5.83333V12.5C1.66667 13.4205 2.41286 14.1667 3.33334 14.1667Z" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <input 
                            v-model="email"
                            type="email" 
                            placeholder="Email"
                        >
                    </div>

                    <div class="input-wrapper">
                        <svg class="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M5.83333 9.16667V6.66667C5.83333 4.36548 7.69881 2.5 10 2.5C12.3012 2.5 14.1667 4.36548 14.1667 6.66667V9.16667M10 12.0833V13.75M6.66667 17.5H13.3333C14.2538 17.5 15 16.7538 15 15.8333V10.8333C15 9.91286 14.2538 9.16667 13.3333 9.16667H6.66667C5.74619 9.16667 5 9.91286 5 10.8333V15.8333C5 16.7538 5.74619 17.5 6.66667 17.5Z" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <input 
                            v-model="senha"
                            type="password" 
                            placeholder="Senha"
                        >
                    </div>
                </div>

                <button class="btn-entrar" @click="submitLogin">
                    ENTRAR
                </button>

                    <div class="no-account">
                        <router-link  to="/register">Não possui conta?</router-link>
                    </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300;400;500;600;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.login {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    font-family: 'Lexend Deca', sans-serif;
}

.container {
    width: 100%;
    max-width: 420px;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    
}

.logo {
    text-align: center;
    margin-bottom: 60px;
}

.logo img {
    width: 336px;
    height: auto;
    margin-bottom: 12px;
}

.logo p {
    font-size: 20px;
    font-weight: 800;
    color: #6B9F3E;
    letter-spacing: 1px;
}

.form {
    width: 100%;}

.input-area {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 24px;
}

.input-wrapper {
    position: relative;
    width: 100%;
}

.input-icon {

    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
}

.input-wrapper input {
    width: 100%;
    padding: 16px 16px 16px 48px;
    border: 2px solid #E5E7EB;
    border-radius: 12px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 15px;
    color: #374151;
    background-color: #ffffff;
    transition: all 0.3s ease;
}

.input-wrapper input::placeholder {
    color: #9CA3AF;
    font-weight: 400;
}

.input-wrapper input:focus {
    outline: none;
    border-color: #6B9F3E;
    box-shadow: 0 0 0 3px rgba(107, 159, 62, 0.1);
}

.btn-entrar {
    width: 100%;
    padding: 10px;
    background: linear-gradient(135deg, #6B9F3E 0%, #82BC4A 100%);
    border: none;
    border-radius: 12px;
    color: #ffffff;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(107, 159, 62, 0.25);
}

.btn-entrar:hover {
    background: linear-gradient(135deg, #5D8735 0%, #6B9F3E 100%);
    box-shadow: 0 6px 16px rgba(107, 159, 62, 0.35);
    transform: translateY(-2px);
}

.btn-entrar:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(107, 159, 62, 0.25);
}

.no-account {
    text-align: center;
    margin-top: 20px;
    font-size: 15px;
    color: #9CA3AF;
    font-weight: 800;
    cursor: pointer;
    width: 100%;
    text-decoration: none;
}

a{
    color: #9CA3AF;
    font-weight: 800;
    text-decoration: none;
}
</style>