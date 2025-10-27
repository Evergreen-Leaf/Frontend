<script setup>
defineProps({
  scrolled: Boolean
})
</script>
<template>
    <div @click="$router.push('/')">
        <img v-if="!scrolled" src="/public/logo.png" />
        <img v-else src="/public/logo-colorida.png" />
    </div>
</template>
<style scoped>
div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>