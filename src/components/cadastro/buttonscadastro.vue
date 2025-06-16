<script setup>
defineProps(['etapa'])
</script>

<template>
    <div class="container">
        <div class="container-btn">
            <button class="back" v-if="etapa === 2" @click="$emit('voltar')">VOLTAR</button>
            <button class="next" v-if="etapa === 1" @click="$emit('avancar')">PRÓXIMO</button>
            <button class="finish" v-if="etapa === 2">FINALIZAR</button>
        </div>
        <div class="container-link">
            <router-link to="/" class="login-link">Já possui uma conta?</router-link>
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
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

.next {
    width: 60%;
    height: 3.5rem;
    background-color: #68A239;
    color: white;
    border: none;
    border-radius: 30px;
    font-size: 25px;
    cursor: pointer;    
}

.back, .finish {
    width: 45%;
    height: 3.5rem;
    background-color: #68A239;
    color: white;
    border: none;
    border-radius: 30px;
    font-size: 25px;
    cursor: pointer;
}

.login-link {
    font-size: 15px;
    color: #9E9E9E;
}
</style>