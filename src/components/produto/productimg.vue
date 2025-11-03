<script setup>
import { useProdutoStore } from '@/stores/produto'
const { state } = useProdutoStore()
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
    width: 75%;
    height: 100%;
    background-color: rgb(255, 255, 255);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.secundary-container {
    width: 20%;
    height: 100%;
    display: grid;
    grid-template-rows: 0.5fr 0.5fr 0.5fr 0.5fr;
}

.secundary-img-container {
    width: 100%;
    height: 90%;
    background-color: rgb(255, 255, 255);
    border-radius: 15px;
}

.main-img {
    width: 60%;
    height: 80%;
    border-radius: 15px;
    object-fit: contain;
}

.secundary-imgs {
    width: 100%;
    height: 150px;
    border-radius: 15px;
    object-fit: cover;

}

@media (max-width: 768px) {
    .secundary-container {
        display: none;
    }

    .main-container {
        width: 100%;
        height: 60%;
    }

    .container-imgs {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }

    .main-img {
        width: 50%;
        height: 50%;
    }
}
</style>