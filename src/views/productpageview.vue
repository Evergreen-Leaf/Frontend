<script setup>
import productPage from '@/components/pagina-produtos/product-page.vue';
import headercomp from '@/components/header/headercomp.vue';
import footercomp from '@/components/footer/footercomp.vue';
</script>
<template>
    <headercomp :forceScrolled="true"/>
    <productPage />
    <footercomp />
</template>