<script setup>
import { onMounted } from 'vue'
import { useProdutoStore } from '@/stores/produto'
import CardComp from '@/components/card/cardcomp.vue'

const produtoStore = useProdutoStore()

const props = defineProps({
  categoria: String,   // opcional, pode filtrar por categoria
  quantidade: Number   // opcional, limite de cards
})

onMounted(() => {
  produtoStore.fetchProdutos(props.categoria)
})
</script>

<template>
  <div class="container">
    <CardComp
      v-for="(p, index) in produtoStore.produtos.slice(0, props.quantidade || produtoStore.produtos.length)"
      :key="p.id"
      :produto="p"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 90%;
}
</style>
