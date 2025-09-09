<script setup>
import productlist from '@/components/produto/productlist.vue';
</script>
<template>
    <div class="container-s4">
        <div class="container-title">
            <h1>
                MAIS VENDIDOS
            </h1>
        </div>
        <div class="container-products">
            <ProductList :quantidade="8" /> 
        </div>
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,800;1,800&family=Inter:opsz,wght@14..32,500&family=Lexend+Deca:wght@100..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');

.container-s4 {
    width: 100%;
    height: 170vh;
    background-color: #EEEEEE;
}

.container-title {
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container-products {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
}

h1 {
    font-family: "Inter Tight", sans-serif;
    font-optical-sizing: auto;
    font-weight: 800;
    font-style: normal;
    font-size: 40px;
    color: #28434C;
}
</style>