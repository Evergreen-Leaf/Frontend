<script setup>
import { useProdutoStore } from '@/stores/produto'
const {state} = useProdutoStore()
</script>
<template>
    <div class="container-imgs">
        <div class="main-container">
            <img class="main-img" :src="state.selectedProduto?.photo[0]?.file">
        </div>
        <div class="secundary-container">
            <div class="secundary-img-container"> 
                <img class="secundary-imgs" :src="state.selectedProduto?.photo[1]?.file">
            </div>
            <div class="secundary-img-container"> 
                <img class="secundary-imgs" :src="state.selectedProduto?.photo[2]?.file">
            </div>
            <div class="secundary-img-container"> 
                <img class="secundary-imgs" :src="state.selectedProduto?.photo[3]?.file">
            </div>
            <div class="secundary-img-container"> 
                <img class="secundary-imgs" :src="state.selectedProduto?.photo[4]?.file">
            </div>
        </div>
    </div>
</template>
<style scoped>
.container-imgs {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
}

.main-container {
    width: 78%;
    height: 100%;
    background-color: rgb(255, 255, 255);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.secundary-container {
    width: 18%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 10px;
}

.secundary-img-container {
    width: 100%;
    height: 90%;
    background-color: rgb(255, 255, 255);
    border-radius: 15px;
}

.main-img {
    width: 90%;
    height: 90%;
    border-radius: 15px;
    object-fit: cover;
}

.secundary-imgs {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    object-fit: cover;
}
</style>