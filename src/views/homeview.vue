<script setup>
import { useCarrinhoStore } from '@/stores/teste';
import headercomp from '@/components/header/headercomp.vue';
import cardcomp from '@/components/card/cardcomp.vue';
// const teste = useCarrinhoStore()
// const lista = teste.getCarrinho()
</script>
<template>
<headercomp />
<cardcomp />
<!-- <p>{{ lista }}</p> -->
</template>