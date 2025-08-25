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
        <div class="card-container">
                <cardimage />
                <cardinfo />
        </div>
    </div>
</template>
<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 90%;
    height: 50vh;
}

.card-container {
    width: 18%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
}
</style>