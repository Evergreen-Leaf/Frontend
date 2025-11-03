<script setup>
import { useRoute } from 'vue-router';

defineProps({
    scrolled: Boolean
})
</script>

<template>
    <div class="container">
        <router-link to="/carrinho">
            <img v-if="!scrolled" src="/public/cart-icon.png" />
            <img v-else src="/public/cart-icon-black.png" />
        </router-link>
        <router-link to="/login">
            <img v-if="!scrolled" src="/public/profile-icon.png" />
            <img v-else src="/public/profile-icon-black.png" />
        </router-link>

    </div>
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
