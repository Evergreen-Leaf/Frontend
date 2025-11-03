<script setup>
import carrinholeft from './carrinholeft.vue';
import carrinhoright from './carrinhoright.vue';

</script>

<template>
<div class="container">
  <div class="container-content">
    <div class="container-carrinho">
        <carrinholeft />
        <carrinhoright />
    </div>
  </div>
</div>

</template>
<style scoped>
.container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: end;
}
.container-content {
    width: 100%;
    height: 85%;
    background-color: rgba(238, 238, 238, 1);
    display: flex;
    justify-content: center;
    align-items: center;
}

.container-carrinho {
    width: 90%;
    height: 90%;
    background-color: white;
    border-radius: 15px;
    display: flex;
    border: 1.5px solid rgba(0, 0, 0, 0.2);
}
</style>