<script setup>
import ImageComp from '@/components/register/ImageComp.vue';
import FormMain from '@/components/register/FormMain.vue';
</script>

<template>
    <main>
        <ImageComp />
        <FormMain />
    </main>
</template>

<style scoped>
main {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 3fr 1.5fr;
}
@media (max-width: 1024px) {
  main {
    display: flex;
    justify-content: center;
}}  
</style>