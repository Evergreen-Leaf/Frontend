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
    /* box-shadow: 0px 20px 20px rgba(107, 107, 107, 0.25); */
    border-radius: 12px;
    border: 1px solid #0000000e;
    margin: 0.8rem;
    cursor: pointer;
}


a {
    text-decoration: none;
    color: black;
}
</style>