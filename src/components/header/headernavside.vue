<script setup>
defineProps({
    scrolled: Boolean
})
</script>
<template>
    <div class="container">
        <img v-if="!scrolled" src="/public/cart-icon.png" />
        <img v-else src="/public/cart-icon-black.png" />

        <img v-if="!scrolled" src="/public/profile-icon.png" />
        <img v-else src="/public/profile-icon-black.png" />
    </div>
</template>
<style scoped>
.container {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
}
</style>