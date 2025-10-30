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
</template>
<style scoped>
.container {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
}
</style>