<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import headerlogo from './headerlogo.vue'
import headernav from './headersearch.vue'
import headernavside from './headernavside.vue'
import hamburguerbutton from './hamburguerbutton.vue'

const props = defineProps({
  forceScrolled: {
    type: Boolean,
    default: false
  }
})

const isScrolled = ref(false)
const menuAberto = ref(false)

const handleScroll = () => {
  // Se o menu estiver aberto, não altera o estado scrolled
  if (menuAberto.value) return

  if (!props.forceScrolled) {
    isScrolled.value = window.scrollY > 50
  }
}

onMounted(() => {
  if (props.forceScrolled) {
    isScrolled.value = true
  } else {
    isScrolled.value = window.scrollY > 50
  }

  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const AbrirMenu = () => {
  menuAberto.value = !menuAberto.value
}

// Quando o menu abre, o header fica scrolled e só volta ao normal se o menu fechar e a rolagem for pequena
watch(menuAberto, (val) => {
  if (val) {
    isScrolled.value = true
  } else {
    // Só volta ao normal se não estiver forçado e a rolagem for pequena
    isScrolled.value = props.forceScrolled ? true : window.scrollY > 50
  }
})
</script>

<template>
  <header :class="{ scrolled: isScrolled }">
    <div class="header-s1">
      <div class="hamburguerbutton">
        <hamburguerbutton :scrolled="isScrolled" @abrirMenu="AbrirMenu" />
      </div>
      <div v-if="menuAberto" class="menu-lateral">
        <a href="/">HOME</a>
        <a href="/pagina-produto/ervas">PRODUTOS</a>
        <a href="https://www.nutren.com.br/mulher/artigos/ciencia-da-nutricao/bem-estar-saude">
          DICAS DE BEM-ESTAR
        </a>

        <div class="perfil-bottom">
          <router-link to="/login">
            <img src="/public/profile-icon-black.png" />
          </router-link>
        </div>
      </div>
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
  z-index: 3;
  transition: background 0.3s, color 0.3s;
}

.header-s1 {
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.header-s2-container {
  width: 100%;
  height: 5vh;
  display: flex;
  position: static;
  justify-content: center;
  align-items: center;
  background-color: #00000000;
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

.header-s2 a {
  margin: 0px 15px;
}

a {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #FFFFFF;
  text-decoration: none;
  transition: color 0.3s;
  white-space: nowrap;
}

a:hover {
  text-decoration: underline;
}

.logo {
  width: 30%;
  margin-left: 20px;
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

.hamburguerbutton {
  display: none;
}

.menu-lateral {
  display: none;
}



@media (max-width: 768px) {

  .nav,
  .header-s2-container {
    display: none !important;
  }

  .hamburguerbutton {
    width: 20%;
    display: block;
  }

  .logo {
    margin: 0;
    transform: scale(0.8);
    width: auto;
  }

  .logo.scrolled {
    transform: scale(0.6);
  }

  .nav {
    display: block;
  }

  .nav-side {
    width: 20%;
    display: flex;
    justify-content: center;
  }

  .menu-lateral {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 60%;
    height: 90vh;
    background: white;
    z-index: 4;
    padding: 180px 25px;
    display: flex;
    align-items: center;
    flex-direction: column;
    animation: slide .2s forwards;
  }

  .menu-lateral a {
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 25px;
  }

  .perfil-bottom {
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    border-radius: 50px;
  }

  @keyframes slide {
    from {
      transform: translateX(-100%);
    }

    to {
      transform: translateX(0);
    }
  }
}
</style>