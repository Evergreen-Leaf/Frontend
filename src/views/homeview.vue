<script setup>
import { useCarrinhoStore } from '@/stores/teste';
import headercomp from '@/components/header/headercomp.vue';

const teste = useCarrinhoStore()
const lista = teste.getCarrinho()
</script>
<template>
<headercomp />
<p>{{ lista }}</p>
</template>