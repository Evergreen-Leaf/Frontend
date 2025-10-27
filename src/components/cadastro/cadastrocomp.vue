<script setup>
import { ref } from 'vue'

import titlecadastro from '@/components/cadastro/titlecadastro.vue'
import formcadastro from '@/components/cadastro/formcadastro.vue'
import enderecoform from '@/components/cadastro/enderecoform.vue'
import buttonscadastro from '@/components/cadastro/buttonscadastro.vue'
const etapa = ref(1)

function avancar() {
  etapa.value++
}

function voltar() {
  etapa.value--
}
</script>

<template>
  <div class="background">
    <div class="card">
      <div class="container">
        <div class="title">
          <titlecadastro />
        </div>

        <transition name="fade" mode="out-in">
          <div class="form" :key="etapa">
            <component :is="etapa === 1 ? formcadastro : enderecoform" />
          </div>
        </transition>

        <div class="buttons">
          <buttonscadastro
            :etapa="etapa"
            @avancar="avancar"
            @voltar="voltar"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  background-image: url('../../../public/background.png');
  background-repeat: no-repeat;
  background-size: cover;
  font-family: Arial, sans-serif;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  display: flex;
  align-items: center;
  height: 90%;
  width: 40%;
  background-color: white;
  border-radius: 15px;
  box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.25);
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
}

.title {
  display: flex;
}

.form {
  display: flex;
  align-items: center;
  justify-content: center;
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
