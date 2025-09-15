<script setup>
const props = defineProps({
  forceScrolled: {
    type: Boolean,
    default: false
  }
})

// agora você acessa com props.forceScrolled
import { ref, onMounted, onUnmounted } from 'vue'
import headerlogo from './headerlogo.vue'
import headernav from './headersearch.vue'
import headernavside from './headernavside.vue'

const isScrolled = ref(false)

const handleScroll = () => {
  if (!props.forceScrolled) { // aqui usamos props.forceScrolled
    isScrolled.value = window.scrollY > 50
  }
}

onMounted(() => {
  if (props.forceScrolled) {
    isScrolled.value = true
  }
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="{ scrolled: isScrolled }">
    <div class="header-s1">
      <div class="logo">
        <headerlogo :scrolled="isScrolled" />
      </div>
      <div class="nav">
        <headernav :scrolled="isScrolled" />
      </div>
      <div class="nav-side">
        <headernavside :scrolled="isScrolled" />
      </div>
    </div>
    <div class="header-s2-container">
      <div class="header-s2">
        <a href="/">HOME</a>
        <div>
          <a href="/pagina-produto/ervas">PRODUTOS</a>
        </div>
        <a href="https://www.nutren.com.br/mulher/artigos/ciencia-da-nutricao/bem-estar-saude">
          DICAS DE BEM-ESTAR
        </a>
      </div>
    </div>
  </header>
</template>
<style scoped>
header {
    padding: 0;
    position: fixed;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    z-index: 2;
    transition: background 0.3s, color 0.3s;
}

.header-s1 {
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-s2-container {
    width: 100%;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00000000;
    border-radius: 0px 0px 15px 15px;
    transition: background 0.3s;
}

.header-s2 {
    width: 35%;
    height: 5vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    transition: background 0.3s;
}

a {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 15px;
    color: #FFFFFF;
    text-decoration: none;
    transition: color 0.3s;
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

header.scrolled {
    background-color: white;
}

header.scrolled a {
    color: black;
}



</style>