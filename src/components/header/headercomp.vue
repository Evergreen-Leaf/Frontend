<script setup>
import headerlogo from './headerlogo.vue';
import headernav from './headernav.vue';
import headernavside from './headernavside.vue';
</script>
<template>
<header>
    <div class="logo">
        <headerlogo />
    </div>
    <div class="nav">
        <headernav />
    </div>
    <div class="nav-side">
        <headernavside />
    </div>
</header>
</template>
<style scoped>
header {
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #d1d2d3;
}
.logo {
    width: 20%;
}
.nav {
    width: 40%;
}
.nav-side {
    width: 40%;
    display: flex;
}
</style>