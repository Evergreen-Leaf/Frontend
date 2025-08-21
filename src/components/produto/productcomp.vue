<script setup>
import productimg from './productimg.vue';
import producttitle from './producttitle.vue';
import productdescription from './productdescription.vue';
import productprice from './productprice.vue';
import productbuttons from './productbuttons.vue';
</script>
<template>
    <div class="container-product-screen">
        <div class="container-product">
            <div class="right">
                <productimg />
            </div>
            <div class="left">
                <producttitle />
                <productdescription />
                <productprice />
                <productbuttons />
            </div>
        </div>
    </div>
</template>
<style scoped>
.container-product-screen {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #EEEEEE;
}

.container-product {
    width: 80%;
    height: 80%;
    display: flex;
}

.right {
    width: 45%;
    height: 100%;
    background-color: rgb(255, 255, 255);
}

.left {
    width: 55%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
}

</style>