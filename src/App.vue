<script setup>

import { onMounted } from 'vue'
import { useProdutoStore } from '@/stores'

const produtosStore= useProdutoStore()

onMounted(async () => {
  await produtosStore.getProdutos();
});

</script>

<template>
  <main>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </main>
</template>


<style scoped></style>