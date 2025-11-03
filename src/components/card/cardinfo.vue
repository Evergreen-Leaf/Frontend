<script setup>
const props = defineProps({
  nome: String,
  descricaocard: String,
  preco: Number,
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
    width: 100%;
    height: 40%;
    background-color: #F7F7F7;
    border-radius: 0 0 12px 12px ;
}
p{
    margin: 0 1.5rem;
}
.title {
    margin-top: 1rem;
    font-size: 18px;
}
.description {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.56);   
}
.price {
    font-size: 18px;
    grid-row: 4/4;
}
</style>