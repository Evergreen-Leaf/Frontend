<script setup>
import cardimage from './cardimage.vue'
import cardinfo from './cardinfo.vue'

const props = defineProps({
  produto: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <router-link :to="`/produto/${props.produto.id}`" class="card-container">
    <cardimage :img="produto.photo[0]?.file"/>
    <cardinfo
      :nome="produto.nome"
      :preco="produto.preco"
      :descricaocard="produto.descricaocard"
    />
  </router-link>
</template>
<style scoped>
.card-container {
    width: 300px;
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 12px;
    border: 1px solid #0000000e;
    margin: 0.8rem;
    cursor: pointer;
    transition: transform 0.2s ease;
}
.card-container:hover {
  transform: scale(1.005);
  box-shadow: 10px 10px 10px  rgba(107, 107, 107, 0.11);

}


a {
    text-decoration: none;
    color: black;
}
</style>