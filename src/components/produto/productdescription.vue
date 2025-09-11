<script setup>
import { useProdutoStore } from '@/stores/produto'
const produtoStore = useProdutoStore()
</script>

<template>
  <div class="descricao-wrapper" >
    <p v-if="produtoStore.produto" >{{ produtoStore.produto.descricao }}</p>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,300;1,300&family=Inter:opsz,wght@14..32,600&family=Lexend+Deca:wght@100..900&display=swap');

p {
  color: #333333;
  font-size: 18px;
  width: 80%;
  font-family: "Inter Tight", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  white-space: normal;
  word-break: break-word;
}

.descricao-wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start; /* melhor que center */
  width: 100%;
}
</style>