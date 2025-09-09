<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useProdutoStore } from '@/stores/produto'

import productlist from '../produto/productlist.vue';

const route = useRoute()
const produtoStore = useProdutoStore()

onMounted(() => {
  produtoStore.fetchProduto(route.params.id)
})
</script>
<template>
    <div class="container">
        <productlist :quantidade="16" />
    </div>
</template>
<style scoped>
.container {
    width: 100%;
    height: 150vh;
    background-color: #FFFFFF;
}
</style>