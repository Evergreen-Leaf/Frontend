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
}

.btn-buy {
    border: none;
    background-color: #333333;
    color: white;
    cursor: pointer;
    width: 80%;
    height: 30%;
    font-size: 24px;
}

.btn-add {
    background-color: #ffffff00;
    border: 2px solid #333333;
    color: #333333;
    cursor: pointer;
    width: 80%;
    height: 30%;
    font-size: 24px;
}

</style>