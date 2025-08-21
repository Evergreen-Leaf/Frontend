<script setup>
</script>
<template>
<div class="container-info">
    <p class="title">Chips de Arroz e Milho</p>
    <p class="description">Descriçaõ do produtoDescriçaõ do produtoDescriçaõ do produto</p>
    <p class="discount">R$ 24,90</p>
    <p class="price">R$ 20,90</p>
</div>
</template>
<style scoped>
.container-info {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 0.5fr 0.6fr;
    width: 90%;
    height: 40%;
}

.title {
    margin-top: 1rem;
    font-size: 18px;
    font-weight: bold;
}
.description {
    font-size: 15px;
    color: rgba(0, 0, 0, 0.56);   
}
.discount {
    font-size: 14px;
    text-decoration: line-through;
    color: rgba(0, 0, 0, 0.29);
     grid-row: 4/5;
}
.price {
    font-size: 18px;
    font-weight: bold;
    grid-row: 5/5;
}
</style>