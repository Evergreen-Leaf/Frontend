<script setup>
import usuario from '@/services/usuario';
import { useUsuarioStore } from '@/stores/usuario';
import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";

const usuarioStore = useUsuarioStore();

const user = computed(() => usuarioStore.state.user);

const UsuarioStore = useUsuarioStore();

defineProps({
    scrolled: Boolean
})

function handleLogout() {
    UsuarioStore.logout();
}

</script>
<template>
    <div class="container">
        <router-link to="/carrinho">
            <img v-if="!scrolled" src="/public/cart-icon.png" />
            <img v-else src="/public/cart-icon-black.png" />
        </router-link>

        <p v-if="user">{{ user.name || 'Usuario'}}</p>

        <router-link v-if="!UsuarioStore.state.user" to="/login">
            <img v-if="!scrolled" src="/public/profile-icon.png" />
            <img v-else src="/public/profile-icon-black.png" />
        </router-link>
        <button @click="handleLogout" v-else style="cursor: pointer;">
            Sair
        </button>
    </div>
</template>
<style scoped>
.container {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
}
.background-nav-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: transparent;
    border-radius: 50px;
    transition: background-color 0.3s ease;
}

.background-nav-button img {
    transition: filter 0.3s ease;
}

.background-nav-button:hover:not(.scrolled) {
    background-color: rgb(255, 255, 255); 
}

.background-nav-button:hover:not(.scrolled) img {
    filter: invert(63%) sepia(22%) saturate(530%) 
           hue-rotate(65deg) brightness(92%) contrast(90%);
}

.background-nav-button.scrolled:hover {
    background-color: rgb(105, 158, 95); 
}

.background-nav-button.scrolled:hover img {
    filter: brightness(0) invert(1); 
}

button {
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: 40%;
    font-size: 16px;
    color: #ffffff;
    font-weight: 600;
    cursor: pointer;
    border-radius: 20px;
    background-color: #5BB811;
}

p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #374151;
    font-weight: 600;
}

@media screen and (max-width: 768px) {
    #profile-button {
        display: none;
    }
    .container{
        display: flex;
        justify-content: center;
    }
  }
</style>