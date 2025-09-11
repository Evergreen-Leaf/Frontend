<script setup>

import { onMounted } from 'vue'
import { useProdutosStore } from '@/stores'

const produtosStore= useProdutosStore()

onMounted(async () => {
  await produtosStore.getProdutos();
});

</script>

<template>

    {{ produtosStore.state.produtos }}

</template>

<style scoped></style>