<script setup>

</script>
<template>
    <div class="container-imgs">
        <div class="main-img">
            <img src="">
        </div>
        <div class="secundary-imgs">
            <div class="secundary-img"> 
                <img src="">
            </div>
            <div class="secundary-img"> 
                <img src="">
            </div>
            <div class="secundary-img"> 
                <img src="">
            </div>
            <div class="secundary-img"> 
                <img src="">
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

.main-img {
    width: 78%;
    height: 100%;
    background-color: rgb(255, 255, 255);
    border-radius: 15px;
}

.secundary-imgs {
    width: 18%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 10px;
}

.secundary-img {
    width: 100%;
    height: 90%;
    background-color: rgb(255, 255, 255);
    border-radius: 15px;
}

</style>