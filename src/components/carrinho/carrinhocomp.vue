<script setup>
import carrinholeft from './carrinholeft.vue';
import carrinhoright from './carrinhoright.vue';
import { useUsuarioStore } from '@/stores/usuario';
import { useRouter } from 'vue-router';

const router = useRouter();
const usuarioStore = useUsuarioStore();

if(!usuarioStore.state.user) {
    router.push({ 'path': '/login' });
}
</script>

<template>
<div class="container">
  <div class="container-content">
    <div class="container-carrinho">
        <carrinholeft />
        <carrinhoright />
    </div>
  </div>
</div>

</template>
<style scoped>
.container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: end;
}
.container-content {
    width: 100%;
    height: 85%;
    background-color: rgba(238, 238, 238, 1);
    display: flex;
    justify-content: center;
    align-items: center;
}

.container-carrinho {
    width: 90%;
    height: 90%;
    background-color: white;
    border-radius: 15px;
    display: flex;
    border: 1.5px solid rgba(0, 0, 0, 0.2);
}
@media (max-width: 1024px) {
    .container-carrinho {
        flex-direction: column;
        width: 100%;
        height: 100%;
        border-radius: 0;
    }
}
</style>