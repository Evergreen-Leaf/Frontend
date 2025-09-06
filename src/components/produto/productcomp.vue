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
    border-radius: 12px;
}

.left {
    width: 92%;
    height: 90%;
}


.right-container {
    width: 32%;
    height: 100%;
    background-color: white;
    border-radius: 0px 12px 12px 0px;
}

.right {
    width: 100%;
    height: 100%;
       display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
}
</style>