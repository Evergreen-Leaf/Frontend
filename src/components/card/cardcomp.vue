<script setup>
import cardimage from './cardimage.vue';
import cardinfo from './cardinfo.vue';
</script>
<template>
    <div class="container">
        <div class="card-container">
                <cardimage />
                <cardinfo />
        </div>
        <div class="card-container">
                <cardimage />
                <cardinfo />
        </div>
        <div class="card-container">
                <cardimage />
                <cardinfo />
        </div>
        <div class="card-container">
                <cardimage />
                <cardinfo />
        </div>
    </div>
</template>
<style scoped>
.container {
    display: flex;
    background-color: #EEEEEE;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 50vh;
}

.card-container {
    width: 20%;
    height: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
}
</style>