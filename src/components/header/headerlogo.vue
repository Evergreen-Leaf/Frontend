<script setup>
defineProps({
    scrolled: Boolean
})
</script>
<template>
    <div @click="$router.push('/')">
        <img v-if="!scrolled" src="/public/logo.png" />
        <img v-else id="colorida" src="/public/logo-colorida.png" />
    </div>
</template>
<style scoped>
div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 0 8%;
    cursor: pointer;
}

#colorida {
    transform: scale(0.89);
}

@media (max-width: 1024px) {
    div{
        margin: 0;
    }
}
</style>