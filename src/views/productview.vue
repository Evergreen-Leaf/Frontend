<script setup>
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useProdutoStore } from '@/stores/produto'

import productcomp from '@/components/produto/productcomp.vue';
import headercomp from '@/components/header/headercomp.vue';
import footercomp from '@/components/footer/footercomp.vue';

const route = useRoute()
const produtoStore = useProdutoStore()

// quando a view monta pela primeira vez
onMounted(() => {
  produtoStore.fetchProduto(route.params?.id)
})

// quando muda o id da rota, busca de novo
watch(
  () => route.params.id,
  (newId) => {
    if (newId) {
      produtoStore.fetchProduto(newId)
    }
  }
)
</script>

<template>
  <headercomp />
  <productcomp />
  <footercomp />
</template>