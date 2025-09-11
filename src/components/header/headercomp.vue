<script setup>
import headerlogo from './headerlogo.vue';
import headernav from './headersearch.vue';
import headernavside from './headernavside.vue';
</script>
<template>
    <header>
        <div class="header-s1">
            <div class="logo">
                <headerlogo />
            </div>
            <div class="nav">
                <headernav />
            </div>
            <div class="nav-side">
                <headernavside />
            </div>
        </div>
        <div class="header-s2">
            <a href="/">HOME</a>

            <div>
                <a href="/pagina-produto/">PRODUTOS</a>
            </div>

            <a href="https://www.nutren.com.br/mulher/artigos/ciencia-da-nutricao/bem-estar-saude">DICAS DE BEM-ESTAR</a>
        </div>
    </header>
</template>
<style scoped>
header {
    position: fixed;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff00;
    padding: 0.5em;
    z-index: 2;
}

.header-s1 {
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-s2 {
    width: 35%;
    height: 5vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

a {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 15px;
    color: #FFFFFF;
    text-decoration: none;}

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