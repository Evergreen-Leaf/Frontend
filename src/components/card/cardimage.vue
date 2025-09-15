<script setup>
import { useProdutoStore } from '@/stores/produto'
const {state} = useProdutoStore()
</script>
<template>
<div class="container-img">
    <img :src="state.selectedProduto?.photo[0]?.file">
</div>
</template>
<style scoped>
.container-img {
    background-color: #F7F7F7;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60%;
    border-radius: 12px;
}

img {
    width: 80%;
    height: 80%;
    object-fit: cover;
}
</style>