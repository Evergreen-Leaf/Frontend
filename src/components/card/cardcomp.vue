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
}

.card-container {
    width: 23%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 20px 20px rgba(107, 107, 107, 0.25);
    border-radius: 12px;
    margin: 0.8rem;
}
</style>