<script setup>
import cardimage from './cardimage.vue'
import cardinfo from './cardinfo.vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  produto: {
    type: Object,
    required: true
  }
})

const router = useRouter()
function verDetalhes() {
  router.push(`/produto/${props.produto.id}`)
}
</script>

<template>
  <div class="card-container" @click="verDetalhes">
    <cardimage />
    <cardinfo
      :nome="produto.nome"
      :preco="produto.preco"
      :desconto="produto.desconto"
    />
  </div>
</template>
<style scoped>
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