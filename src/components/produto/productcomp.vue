<script setup>
import productimg from './productimg.vue';
import producttitle from './producttitle.vue';
import productdescription from './productdescription.vue';
import productprice from './productprice.vue';
import productbuttons from './productbuttons.vue';
import cardcomp from '../card/cardcomp.vue';
</script>
<template>
    <div class="container-product-screen">
        <div class="container-product">
            <div class="left-container">
                <div class="left">
                    <productimg />
                </div>
                
            </div>
            <div class="right-container">
                <div class="right">
                    <producttitle />
                    <productdescription />
                    <productprice />
                    <productbuttons />
                </div>

            </div>
        </div>
    </div>
    <div class="related-products">
        <h2>RELACIONADOS</h2>
        <div class="related-products-list">
            <cardcomp />
        </div>
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,700;1,700&family=Inter:opsz,wght@14..32,600&family=Lexend+Deca:wght@100..900&display=swap');

.container-product-screen {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #EEEEEE;
}

.container-product {
    width: 86%;
    height: 75%;
    display: flex;
    background-color: #F7F7F7;
    border-radius: 8px;
}

.left-container {
    width: 68%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.left {
    width: 92%;
    height: 90%;
}


.right-container {
    width: 32%;
    height: 100%;
    background-color: white;
    border-radius: 0px 8px 8px 0px;
}

.right {
    width: 100%;
    height: 100%;
       display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
}

h2 {    font-family: "Inter Tight", sans-serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
    font-size: 32px ;
}

.related-products {
    width: 100%;
    height: 120vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #EEEEEE;
}

.related-products-list {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
}
</style>