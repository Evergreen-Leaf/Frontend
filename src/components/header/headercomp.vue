<script setup>
import headerlogo from './headerlogo.vue';
import headernav from './headersearch.vue';
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
    position: fixed;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #ffffff00;
    padding: 0.5em;
    z-index: 2;
}
.logo {
    width: 30%;
}
.nav {
    width: 60%;
}
.nav-side {
    width: 20%;
    display: flex;
    justify-content: flex-end;
}
</style>