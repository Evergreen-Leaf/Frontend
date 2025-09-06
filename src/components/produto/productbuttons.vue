<script setup>

</script>
<template>
    <div>
        <button class="btn-buy">COMPRAR</button>
        <button class="btn-add">ADICIONAR AO CARRINHO</button>
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,700;1,700&family=Inter:opsz,wght@14..32,600&family=Lexend+Deca:wght@100..900&display=swap');
div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;
}

button {
    font-family: "Inter Tight", sans-serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
}

.btn-buy {
    border: none;
    background-color: #699E5F;
    color: white;
    width: 80%;
    height: 30%;
}

.btn-add {
    background-color: #ffffff;
    border: 2px solid #699E5F;
    color: #699E5F;
    width: 80%;
    height: 30%;
}

</style>