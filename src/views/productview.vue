<script setup>
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useProdutoStore } from '@/stores/produto.js'

import productcomp from '@/components/produto/productcomp.vue';
import headercomp from '@/components/header/headercomp.vue';
import footercomp from '@/components/footer/footercomp.vue';

const route = useRoute()
const produtoStore = useProdutoStore()


onMounted(() => {
  produtoStore.getProduto(route.params?.id)
})


watch(
  () => route.params.id,
  (newId) => {
    if (newId) {
      produtoStore.getProduto(newId)
    }
  }
)
</script>

<template>
  <headercomp />
  <productcomp />
  <footercomp />
</template>