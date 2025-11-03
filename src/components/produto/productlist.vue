<script setup>
import { onMounted, computed } from 'vue'
import { useProdutoStore } from '@/stores/produto'
import CardComp from '@/components/card/cardcomp.vue'
import categoria from '@/services/categoria'

const produtoStore = useProdutoStore()

const props = defineProps({
  categoria: String,
  quantidade: Number 
})

// Computed que filtra os produtos pelo id da categoria
const produtosFiltrados = computed(() => {
  if (!Array.isArray(produtoStore.state.produtos)) {
    console.error("Os produtos não são um array:", produtoStore.state.produtos);
    return [];
  }
  console.log("Produtos disponíveis na store:", produtoStore.state.produtos);
  console.log("Categoria recebida como prop:", props.categoria);
  const filtrados = produtoStore.state.produtos.filter(p => {
    if (props.categoria) {
      return p.categoria.some(cat => {
        const match = cat.nomecategoria.toLowerCase() === props.categoria.toLowerCase();
        console.log(`Comparando ${cat.nomecategoria.toLowerCase()} com ${props.categoria.toLowerCase()}: ${match}`);
        return match;
      });
    }
    return true;
  });
  console.log("Produtos filtrados:", filtrados);
  return filtrados;
})

onMounted(() => {
  produtoStore.getProdutos()
})
</script>

<template>
  <div class="container">
    <CardComp
      v-for="(p, index) in produtosFiltrados.slice(0, props.quantidade || produtosFiltrados.length)"
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
