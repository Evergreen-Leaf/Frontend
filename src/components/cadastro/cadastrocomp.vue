<script setup>
import titlecadastro from '@/components/cadastro/titlecadastro.vue';
</script>
<template>
    <div class="background">
        <div class="container">
            <titlecadastro />
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

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85%;
  width: 40%;
  background-color: white;
  border-radius: 10px;
}
</style>