<script setup>
import { ref } from 'vue';
import FormStep1 from './FormOneRegister.vue';
import FormStep2 from './FormTwoRegister.vue';

const currentStep = ref(1);
const formData = ref({
  // Etapa 1
  nome: '',
  dia: '',
  mes: '',
  ano: '',
  cpf: '',
  email: '',
  senha: '',
  telefone: '',
  // Etapa 2
  estado: '',
  cidade: '',
  rua: '',
  cep: '',
  numero: '',
  complemento: ''
});

const nextStep = () => {
  if (currentStep.value < 2) {
    currentStep.value++;
  }
};

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
};

const handleSubmit = () => {
  console.log('Cadastro completo:', formData.value);
  // Aqui você pode enviar os dados para o backend
};
</script>

<template>
  <section class="cadastro">
    <div class="container">
      <Transition :name="currentStep === 2 ? 'slide-left' : 'slide-right'" mode="out-in">
        <FormStep1 
          v-if="currentStep === 1"
          key="step1"
          v-model:formData="formData"
          @next="nextStep"
        />
        
        <FormStep2 
          v-else-if="currentStep === 2"
          key="step2"
          v-model:formData="formData"
          @prev="prevStep"
          @submit="handleSubmit"
        />
      </Transition>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300;400;500;600;700&display=swap');

.cadastro {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  font-family: 'Lexend Deca', sans-serif;
}

.container {
  width: 100%;
  max-width: 480px;
  padding: 40px 20px;
  position: relative;
  overflow: hidden;
}

/* Animação para ir para a direita (próximo) */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(50px);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}

/* Animação para ir para a esquerda (voltar) */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-50px);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
</style>