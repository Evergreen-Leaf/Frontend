<script setup>
import { useCarrinhoStore } from '@/stores/teste';
import headercomp from '@/components/header/headercomp.vue';
import cardcomp from '@/components/card/cardcomp.vue';
import homecomp from '@/components/home/homecomp.vue';
// const teste = useCarrinhoStore()
// const lista = teste.getCarrinho()
</script>
<template>
<headercomp />
<homecomp />
<!-- <p>{{ lista }}</p> -->
</template>