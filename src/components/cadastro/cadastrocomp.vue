<script setup>
import titlecadastro from '@/components/cadastro/titlecadastro.vue';
import formcadastro from '@/components/cadastro/formcadastro.vue';
import buttonscadastro from '@/components/cadastro/buttonscadastro.vue';
</script>
<template>
    <div class="background">
        <div class="card">
          <div class="title">
              <titlecadastro />
          </div>
          <div class="form">
                <formcadastro />
          </div>
          <div class="buttons">
            <buttonscadastro />
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
  justify-content: center;
  flex-direction: column;
  height: 90%;
  width: 40%;
  background-color: white;
  border-radius: 25px;
}

.title {
  height: 10%;
  width: 100%;
  display: flex;
}

.form {
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.buttons {
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>