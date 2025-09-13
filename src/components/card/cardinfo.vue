<script setup>
const props = defineProps({
  nome: String,
  descricaocard: String,
  preco: Number,
  desconto: Number
})
</script>

<template>
  <div class="container-info">
    <p class="title">{{ nome }}</p>
    <p class="description">{{ descricaocard }}</p>
    <p class="price">R$ {{ preco }}</p>
  </div>
</template>
<style scoped>
.container-info {
    display: grid;
    grid-template-rows: 0.6fr 1fr 0.3fr 0.6fr;
    width: 90%;
    height: 40%;
}

.title {
    margin-top: 1rem;
    font-size: 18px;
    font-weight: bold;
}
.description {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.56);   
}
.price {
    font-size: 18px;
    font-weight: bold;
    grid-row: 4/4;
}
</style>