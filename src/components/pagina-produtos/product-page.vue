<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useProdutoStore } from '@/stores/produto'
import benefit from "@/components/home/section-2/s2-home-info.vue"
import productlist from '../produto/productlist.vue';

const route = useRoute()
const produtoStore = useProdutoStore()

onMounted(() => {
    produtoStore.fetchProduto(route.params.id)
})
</script>
<template>
    <div class="container-product-page">
        <div class="container-benefit">
            <benefit />
        </div>
        <div class="container-products-title">
            <h1>PRODUTOS</h1>
        </div>
        <div class="container-products">
            <productlist :quantidade="4" />
        </div>
    </div>

</template>
<style scoped>
.container-product-page {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #F5F5F5;
}

.container-benefit {
    width: 100%;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container-products-title {
    width: 85%;
    height: 10vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.container-products {
    width: 100%;
    height: 130vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}
</style>