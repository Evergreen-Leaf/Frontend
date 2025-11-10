<script setup>
import ImageComp from './ImageComp.vue'
import FormLogin from './FormLogin.vue';
</script>

<template>
    <main>
        <ImageComp />
        <FormLogin />
    </main>
</template>

<style scoped>
main {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 3fr 1.5fr;
}
</style>